import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>  {
    appearance: "white" | "blue" | "red",
    arrow?: "none" | "down" | "right",
    children: ReactNode
}
