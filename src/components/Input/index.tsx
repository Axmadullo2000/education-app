import React from 'react';
import cn from 'classnames'

import {IInputProps} from "@/components/Input/Input.props";

import styles from './Input.module.css'


function Input({className, ...props}: IInputProps) {
    return (
        <input className={cn(styles.input, className)} {...props} />
    );
}

export default Input;
