import React from 'react';
import cn from "classnames";

import {ICardProps} from "@/components/Card/Card.props";

import style from './Card.module.css'

function Card({color, children, className, ...props}: ICardProps) {
    return (
        <div className={cn(style.card, className, {
            [style.yellow]: color === 'yellow',
            [style.purple]: color === 'purple',
        })} {...props}>
            {children}
        </div>
    );
}

export default Card;
