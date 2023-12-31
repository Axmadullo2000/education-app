import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ICardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    color: 'red' | 'yellow' | 'purple'
}
