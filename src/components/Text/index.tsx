import React from 'react';
import cn from 'classnames'


import style from './Text.module.css'
import {ITextProps} from "@/components/Text/Text.props";


function Text({size = 'm', children, ...props}: ITextProps) {
    return (
        <p className={cn(style.p, {
            [style.m]: size === 'm',
            [style.l]: size === 'l',
            [style.s]: size === 's'
        })}
       {...props}
        >{children}</p>
    );
}

export default Text;
