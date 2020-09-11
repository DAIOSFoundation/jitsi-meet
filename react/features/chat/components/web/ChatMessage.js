// @flow

import React from 'react';
import {toArray} from 'react-emoji-render';

import {translate} from '../../../base/i18n';
import {Linkify} from '../../../base/react';
import {MESSAGE_TYPE_LOCAL} from '../../constants';
import AbstractChatMessage, {
    type Props
} from '../AbstractChatMessage';
import PrivateMessageButton from '../PrivateMessageButton';

import Axios from "axios";
import fileDownload from 'js-file-download';

/**
 * Renders a single chat message.
 */
class ChatMessage extends AbstractChatMessage<Props> {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const {message} = this.props;

        // type -> string(메세지) 인지 object(파일 전송)인지 구분
        function typeCheck(str) {
            return typeof JSON.parse(str)
        }

        // Byte 단위 변환
        function formatBytes(bytes, decimals = 2) {
            if (bytes === 0) return '0 Bytes';

            const k = 1024;
            const dm = decimals < 0 ? 0 : decimals;
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

            const i = Math.floor(Math.log(bytes) / Math.log(k));

            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        }

        // file 다운로드 기능
        function download(url: string, filename: string) {
            Axios.get(url, {
                responseType: 'blob'
            }).then(res => {
                fileDownload(res.data, filename);
            });
        }

        // 바로열기 기능
        const directLinkOpen = (arg) => {
            return window.open(arg)
        }

        const processedMessage = [];

        // content is an array of text and emoji components

        if (typeof JSON.parse(this._getMessageText()) === 'string') {
            const content = toArray(JSON.parse(this._getMessageText()), {className: 'smiley'});
            console.log("CONTENT 111", content)
            content.forEach(i => {
                if (typeof i === 'string') {
                    processedMessage.push(<Linkify
                        key={(i)}>{(i)}</Linkify>);
                } else {
                    processedMessage.push(i);
                }
            });
        } else {
            const content = toArray(this._getMessageText(), {className: 'smiley'});
            console.log("CONTENT 222", content)
            content.forEach(i => {
                processedMessage.push(i);
            });
        }

        return (
            <div className='chatmessage-wrapper'>
                <div
                    className={`chatmessage ${message.privateMessage ? 'privatemessage' : ''}`}>
                    <div className='replywrapper'>
                        <div className='messagecontent'>
                            {
                                typeCheck(message.message) === 'string' ?
                                    <div>
                                        {this.props.showDisplayName && this._renderDisplayName()}
                                        <div className='usermessage'>
                                            {processedMessage}
                                        </div>
                                        {message.privateMessage && this._renderPrivateNotice()}
                                    </div>
                                    :
                                    <div>
                                        {this.props.showDisplayName && this._renderDisplayName()}
                                        <div className='usermessage'
                                             style={{padding: 10}}>
                                            <div style={{display: 'flex'}}>
                                                <img
                                                    src={'images/download_icon_50.png'}
                                                    style={{
                                                        marginRight: 15,
                                                        width: 50,
                                                        height: 50
                                                    }}/>
                                                <div>
                                                    <div style={{fontSize: 17}}>
                                                        {JSON.parse(message.message).originalName}
                                                    </div>
                                                    <div>
                                                        {formatBytes(JSON.parse(message.message).size)}
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{
                                                marginTop: 10,
                                                display: 'flex',
                                                justifyContent: 'flex-end'
                                            }}>
                                                <span
                                                    className='chat-hover'
                                                    onClick={() => directLinkOpen(JSON.parse(message.message).path)}>바로열기</span>
                                                <span
                                                    style={{margin: '0 5px 0 5px'}}>|</span>
                                                <span
                                                    className='chat-hover'
                                                    onClick={() => download(JSON.parse(message.message).path, JSON.parse(message.message).originalName)}>다운로드</span>
                                            </div>
                                        </div>
                                        {message.privateMessage && this._renderPrivateNotice()}
                                    </div>
                            }
                        </div>
                        {message.privateMessage && message.messageType !== MESSAGE_TYPE_LOCAL
                        && (
                            <div className='messageactions'>
                                <PrivateMessageButton
                                    participantID={message.id}
                                    reply={true}
                                    showLabel={false}/>
                            </div>
                        )}
                    </div>
                </div>
                {this.props.showTimestamp && this._renderTimestamp()}
            </div>
        );
    }

    _getFormattedTimestamp: () => string;

    _getMessageText: () => string;

    _getPrivateNoticeMessage: () => string;

    /**
     * Renders the display name of the sender.
     *
     * @returns {React$Element<*>}
     */
    _renderDisplayName() {
        return (
            <div className='display-name'>
                {this.props.message.displayName}
            </div>
        );
    }

    /**
     * Renders the message privacy notice.
     *
     * @returns {React$Element<*>}
     */
    _renderPrivateNotice() {
        return (
            <div className='privatemessagenotice'>
                {this._getPrivateNoticeMessage()}
            </div>
        );
    }

    /**
     * Renders the time at which the message was sent.
     *
     * @returns {React$Element<*>}
     */
    _renderTimestamp() {
        return (
            <div className='timestamp'>
                {this._getFormattedTimestamp()}
            </div>
        );
    }
}

export default translate(ChatMessage);
