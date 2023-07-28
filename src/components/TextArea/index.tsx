import React from 'react';

import cn from "classnames";

import {ITextAreaProps} from "@/components/TextArea/TextArea.props";

import style from './TextArea.module.css'

function TextArea({className, ...props}: ITextAreaProps) {
    return (
        <textarea className={cn(style.textArea, {})} {...props}></textarea>
    );
}

export default TextArea;
