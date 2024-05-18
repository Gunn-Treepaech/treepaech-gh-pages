import { forwardRef } from "react";

function HeadLine({ text }){
    return <h3>{text}</h3>;
}

export default forwardRef(HeadLine);