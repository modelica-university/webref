import React from "react";

export interface TwoColumnProps {
    leftHeading: string;
    rightHeading: string;
    leftColumn: JSX.Element[];
    rightColumn: JSX.Element[];
}

export const TwoColumn = (props: TwoColumnProps) => (
    <table className="table">
        <tbody>
            <tr>
                <th>{props.leftHeading}</th>
                <th>{props.rightHeading}</th>
            </tr>
            {props.leftColumn.map((left, i) => (
                <tr>
                    <td>{left}</td>
                    <td>{props.rightColumn[i]}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
