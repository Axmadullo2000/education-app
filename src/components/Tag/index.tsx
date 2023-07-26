import React from 'react';
import cn from "classnames";

import {ITagProps} from "@/components/Tag/Tag.props";

import style from './Tag.module.css'

function Tag({children, size='m', color='white', ...props}: ITagProps) {

    return (
        <button className={cn(style.tag, {
            [style.m]: size === 'm',
            [style.s]: size === 's',
            [style.white]: color === 'white',
            [style.blue]: color === 'blue',
            [style.yellow]: color === 'yellow',
        })}
        {...props}
        >
            {children}
        </button>
    );
}

export default Tag;
