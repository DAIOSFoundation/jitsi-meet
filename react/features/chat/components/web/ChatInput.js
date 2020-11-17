// @flow

import React, {Component, useEffect} from 'react';
import Emoji from 'react-emoji-render';
import TextareaAutosize from 'react-textarea-autosize';
import type {Dispatch} from 'redux';

import {translate} from '../../../base/i18n';
import {connect} from '../../../base/redux';

import SmileysPanel from './SmileysPanel';

import * as modalActions from '../../../../modules/modal/actions';
import * as uploadActions from '../../../../modules/upload/actions';

/**
 * The type of the React {@code Component} props of {@link ChatInput}.
 */
type Props = {

    /**
     * Invoked to send chat messages.
     */
    dispatch: Dispatch<any>,

    /**
     * Optional callback to invoke when the chat textarea has auto-resized to
     * fit overflowing text.
     */
    onResize: ?Function,

    /**
     * Callback to invoke on message send.
     */
    onSend: Function,

    /**
     * Invoked to obtain translated strings.
     */
    t: Function
};

/**
 * The type of the React {@code Component} state of {@link ChatInput}.
 */
type State = {

    /**
     * User provided nickname when the input text is provided in the view.
     */
    message: string,

    /**
     * Whether or not the smiley selector is visible.
     */
    showSmileysPanel: boolean
};

/**
 * Implements a React Component for drafting and submitting a chat message.
 *
 * @extends Component
 */
class ChatInput extends Component<Props, State> {
    _textArea: ?HTMLTextAreaElement;

    state = {
        message: '',
        showSmileysPanel: false
    };

    /**
     * Initializes a new {@code ChatInput} instance.
     *
     * @param {Object} props - The read-only properties with which the new
     * instance is to be initialized.
     */
    constructor(props: Props) {
        super(props);

        this._textArea = null;

        // Bind event handlers so they are only bound once for every instance.
        this._onDetectSubmit = this._onDetectSubmit.bind(this);
        this._onMessageChange = this._onMessageChange.bind(this);
        this._onSmileySelect = this._onSmileySelect.bind(this);
        this._onToggleSmileysPanel = this._onToggleSmileysPanel.bind(this);
        this._setTextAreaRef = this._setTextAreaRef.bind(this);
    }

    /**
     * Implements React's {@link Component#componentDidMount()}.
     *
     * @inheritdoc
     */
    componentDidMount() {
        /**
         * HTML Textareas do not support autofocus. Simulate autofocus by
         * manually focusing.
         */
        this._focus();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userFile !== this.props.userFile) {
            this.props.onSend((this.props.userFile))
        }

        if(this.props.uploadErrorMsg){
            if(prevProps.uploadErrorMsg !== this.props.uploadErrorMsg){
                this.props.dispatch(modalActions.change_modal_message(this.props.uploadErrorMsg))
                this.props.dispatch(uploadActions.upload_message_clear())
            }
        }
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const smileysPanelClassName = `${this.state.showSmileysPanel
            ? 'show-smileys' : 'hide-smileys'} smileys-panel`;

        // 파일 버튼 클릭 시
        const onClickFile = () => {
            document.getElementById("file").click();
        }

        // 파일 선택 시
        const onChangeFileUpload = (e) => {

            let param = {
                userFile: e.target.files[0]
            }

            if (e.target.files[0].size < 577000000) {
                this.props.dispatch(uploadActions.post_file_upload(param))
            } else {
                this.props.dispatch(modalActions.change_modal_message('파일 용량 제한은 500MB 이하입니다.'))
            }

            // input type = 'file' 값 초기화
            document.getElementById("file").value = '';
        }

        return (
            <div id='chat-input'>
                <div className='smiley-input'>
                    <div id='smileysarea'>
                        <div id='smileys'>
                            <Emoji
                                onClick={this._onToggleSmileysPanel}
                                text=':)'/>
                        </div>
                    </div>
                    <div className={smileysPanelClassName}>
                        <SmileysPanel
                            onSmileySelect={this._onSmileySelect}/>
                    </div>
                </div>
                {
                    navigator.userAgent.search(/Mobile/i) === -1 ?
                        <div style={{
                            backgroundColor: 'rgba(42,58,75,.9)',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <input type="file" id="file" name="userFile"
                                   onChange={onChangeFileUpload}
                                   style={{display: 'none'}}/>
                            <button style={{
                                border: 'none',
                                outline: 'none'
                            }} onClick={onClickFile}>
                                <img style={{width: 40, height: 40}}
                                     src={"images/file_icon_50.png"} alt=""/>
                            </button>
                        </div>
                        :
                        null
                }
                <div className='usrmsg-form'>
                    <TextareaAutosize
                        id='usermsg'
                        inputRef={this._setTextAreaRef}
                        maxRows={5}
                        onChange={this._onMessageChange}
                        onHeightChange={this.props.onResize}
                        onKeyDown={this._onDetectSubmit}
                        placeholder={this.props.t('chat.messagebox')}
                        value={this.state.message}/>
                </div>

            </div>
        );
    }

    /**
     * Place cursor focus on this component's text area.
     *
     * @private
     * @returns {void}
     */
    _focus() {
        this._textArea && this._textArea.focus();
    }

    _onDetectSubmit: (Object) => void;

    /**
     * Detects if enter has been pressed. If so, submit the message in the chat
     * window.
     *
     * @param {string} event - Keyboard event.
     * @private
     * @returns {void}
     */
    _onDetectSubmit(event) {
        if (event.keyCode === 13
            && event.shiftKey === false) {
            event.preventDefault();

            const trimmed = this.state.message.trim();

            if (trimmed) {
                this.props.onSend(trimmed);

                this.setState({message: ''});
            }
        }
    }

    _onMessageChange: (Object) => void;

    /**
     * Updates the known message the user is drafting.
     *
     * @param {string} event - Keyboard event.
     * @private
     * @returns {void}
     */
    _onMessageChange(event) {
        this.setState({message: event.target.value});
    }

    _onSmileySelect: (string) => void;

    /**
     * Appends a selected smileys to the chat message draft.
     *
     * @param {string} smileyText - The value of the smiley to append to the
     * chat message.
     * @private
     * @returns {void}
     */
    _onSmileySelect(smileyText) {
        this.setState({
            message: `${this.state.message} ${smileyText}`,
            showSmileysPanel: false
        });

        this._focus();
    }

    _onToggleSmileysPanel: () => void;

    /**
     * Callback invoked to hide or show the smileys selector.
     *
     * @private
     * @returns {void}
     */
    _onToggleSmileysPanel() {
        this.setState({showSmileysPanel: !this.state.showSmileysPanel});

        this._focus();
    }

    _setTextAreaRef: (?HTMLTextAreaElement) => void;

    /**
     * Sets the reference to the HTML TextArea.
     *
     * @param {HTMLAudioElement} textAreaElement - The HTML text area element.
     * @private
     * @returns {void}
     */
    _setTextAreaRef(textAreaElement: ?HTMLTextAreaElement) {
        this._textArea = textAreaElement;
    }
}

function _mapStateToProps(state) {
    return {
        userFile: state.upload.userFileInfo,
        uploadErrorMsg: state.upload.uploadErrorMsg,
    }
}

export default translate(connect(_mapStateToProps)(ChatInput));
