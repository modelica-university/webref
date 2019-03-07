import React from "react";
import { Topic } from "../../components/topic";

const comment = (
    <div>
        <table className="table">
            <tbody>
                <tr>
                    <th>Function</th>
                    <th>Details</th>
                </tr>
                <tr>
                    <td>
                        <code>asin(x)</code>
                    </td>
                    <td>
                        -1 &lt;= <code>x</code> &lt;= 1
                    </td>
                </tr>
                <tr>
                    <td>
                        <code>acos(x)</code>
                    </td>
                    <td>
                        -1 &lt;= <code>x</code> &lt;= 1
                    </td>
                </tr>
                <tr>
                    <td>
                        <code>atan2(y, x)</code>
                    </td>
                    <td>
                        tangent of <code>y/x</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code>log(x)</code>
                    </td>
                    <td>
                        <code>x</code>&gt;0
                    </td>
                </tr>
                <tr>
                    <td>
                        <code>log10(x)</code>
                    </td>
                    <td>
                        <code>x</code>&gt;0
                    </td>
                </tr>
                <tr>
                    <td>
                        <code>tan(x)</code>
                    </td>
                    <td>
                        "<code>x</code> shall not be ..., -&pi;/2, &pi;/2, 3&pi;/2, ..."
                    </td>
                </tr>
            </tbody>
        </table>
        <div style={{ padding: 5 }} className="footnote">
            See
            <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=21" target="_blank">
                &sect;3.7.1.2
            </a>
            for further details about these functions.
        </div>
    </div>
);
export const mathematicalFunctions = (
    <Topic title="Mathematical Functions">
        <Topic.Item
            num={0}
            of={1}
            title={
                <b>
                    <code>acos asin atan atan2 cos cosh exp log log10 sin sinh tan tanh</code>
                </b>
            }
            comment={comment}
        />
    </Topic>
);
