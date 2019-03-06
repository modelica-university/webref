import React from "react";
import { Topic, TopicProps, Note } from "../../components";

const vliterals = (
    <Note>
        <code>{"{..., ....}"}</code>
    </Note>
);

const aliterals = (
    <Note>
        <code>{"[..., ...; ..., ...]"}</code>
    </Note>
);

const acomps = (
    <table className="table">
        <tr>
            <th>Case</th>
            <th>Syntax</th>
        </tr>
        <tr>
            <td>One index</td>
            <td>
                <span className="nobreak">
                    <code className="pull-right">
                        f(i) <b>for</b> i <b>in</b> 1:ni
                    </code>
                </span>
            </td>
        </tr>
        <tr>
            <td>Two indices</td>
            <td>
                <span className="nobreak">
                    <code className="pull-right">
                        f(i,j) <b>for</b> i <b>in</b> 1:ni, j <b>in</b> 1:nj
                    </code>
                </span>
                <br />
                <b>Note:</b> The resulting array will have dimensions <code>{"[nj,ni]"}</code>.
            </td>
        </tr>
    </table>
);

const data: TopicProps = {
    title: "Complex Expressions",
    items: [
        {
            title: "Vector Literals",
            example: vliterals,
        },
        {
            title: "Array Literals",
            example: aliterals,
        },
        {
            title: "Array Comprehensions",
            example: acomps,
        },
    ],
};

export const complexExpressions = <Topic {...data} />;
