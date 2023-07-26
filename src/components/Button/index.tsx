import React, {useState} from 'react';
import cn from "classnames";
import {AiOutlineDown, AiOutlineRight} from "react-icons/ai";

import {IButtonProps} from "@/components/Button/Button.props";

import style from './Button.module.css'

function Button({appearance='red', arrow='none', children, ...props}: IButtonProps) {

    return <button className={cn(style.button, {
        [style.white]: appearance === 'white',
        [style.red]: appearance === 'red',
        [style.blue]: appearance === 'blue',
    })}
    {...props}
    >
        {children}
        {arrow !== 'none' && (
            <span className={cn(style.arrow, {
                [style.down]: arrow === 'down',
                [style.right]: arrow === 'right',
            })}>
                <AiOutlineDown />
            </span>
        )}
    </button>
}

export default Button;
