import React from 'react';

import {IHeadingProps} from "@/components/Heading/Heading.props";

import style from './Heading.module.css'


function Heading({tag, children}: IHeadingProps) {
    switch (tag) {
        case "h1": return <h1 className={style.h1}>{children}</h1>
        case "h2": return <h2 className={''}>{children}</h2>
        case "h3": return <h3 className={''}>{children}</h3>
        default: return <>{children}</>
    }
}

export default Heading;
