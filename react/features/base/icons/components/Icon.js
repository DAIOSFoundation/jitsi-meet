// @flow

import React from 'react';

import {Container} from '../../react/base';
import {styleTypeToObject} from '../../styles';

type Props = {

    /**
     * Class name for the web platform, if any.
     */
    className: string,

    /**
     * Color of the icon (if not provided by the style object).
     */
    color?: string,

    /**
     * Id prop (mainly for autotests).
     */
    id?: string,

    /**
     * Function to invoke on click.
     */
    onClick?: Function,

    /**
     * The size of the icon (if not provided by the style object).
     */
    size?: number | string,

    /**
     * The preloaded icon component to render.
     */
    src: Function,

    /**
     * Style object to be applied.
     */
    style?: Object
};

export const DEFAULT_COLOR = navigator.product === 'ReactNative' ? 'white' : undefined;
export const DEFAULT_SIZE = navigator.product === 'ReactNative' ? 36 : 22;

/**
 * Implements an Icon component that takes a loaded SVG file as prop and renders it as an icon.
 *
 * @param {Props} props - The props of the component.
 * @returns {Reactelement}
 */
export default function Icon(props: Props) {
    const {
        className,
        color,
        id,
        onClick,
        size,
        src: IconComponent,
        style
    } = props;

    const {
        color: styleColor,
        fontSize: styleSize,
        ...restStyle
    } = styleTypeToObject(style ?? {});
    const calculatedColor = color ?? styleColor ?? DEFAULT_COLOR;
    const calculatedSize = size ?? styleSize ?? DEFAULT_SIZE;
    // Setting 버튼 분기처리 ( 버튼 이름이 Setting 버튼일 시 테마색 지정 )
    // console.log("props.src.name =>", props.src.name);
    return (
        <div>
            {
                (props.src.name === 'SvgSettings' || props.src.name === 'sr') ?
                    <Container
                        onClick={onClick}
                        style={restStyle}>
                        <IconComponent
                            fill={'#3f83ff'}
                            height={calculatedSize}
                            id={id}
                            width={calculatedSize}/>
                    </Container>
                    :
                    <Container
                        className={`jitsi-icon ${className}`}
                        onClick={onClick}
                        style={restStyle}>
                        <IconComponent
                            fill={calculatedColor}
                            height={calculatedSize}
                            id={id}
                            width={calculatedSize}/>
                    </Container>
            }
        </div>
    );
}

Icon.defaultProps = {
    className: ''
};
