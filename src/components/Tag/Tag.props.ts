import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ITagProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode,
    size: "s" | "m",
    color: "white" | "yellow" | "blue"
}
