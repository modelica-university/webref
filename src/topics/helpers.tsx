import React from "react";

export const Code = (props: { src: string | JSX.Element; right?: boolean }) => {
    let classes = props.right ? "comment pull-right" : "comment";
    return (
        <code>
            <span className={classes}>{props.src}</span>
        </code>
    );
};
