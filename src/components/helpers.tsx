import React from "react";
import { Card } from "@blueprintjs/core";

export const Code = (props: { src: string | JSX.Element; right?: boolean }) => {
    let classes = props.right ? "comment pull-right" : "comment";
    return (
        <code>
            <span className={classes}>{props.src}</span>
        </code>
    );
};

export interface SimpleCardProps {
    title: string | JSX.Element;
    children: string | JSX.Element;
    note?: string | JSX.Element;
}

export const SimpleCard = (props: SimpleCardProps) => {
    return (
        <table className="table">
            <tr>
                <th>{props.title}</th>
            </tr>
            <tr>
                <td>{props.children}</td>
            </tr>
            {props.note && (
                <tr>
                    <td className="note">
                        <p style={{ maxWidth: "50vw" }}>
                            <em>Note:</em> {props.note}
                        </p>
                    </td>
                </tr>
            )}
        </table>
    );
};
