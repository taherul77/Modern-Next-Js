import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    type?:"button" | "submit"
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}