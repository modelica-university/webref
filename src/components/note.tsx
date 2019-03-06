import React from "react";

export interface NoteProps {
    children: JSX.Element;
}
export const Note = (props: NoteProps) => <div style={{ padding: 5, maxWidth: "65vw" }}>{props.children}</div>;
