import React from "react";
import { Topic, TopicProps, Note } from "../../components";

const max = (
    <table className="table">
        <tbody>
            <tr>
                <th>Usage</th>
                <th>Description</th>
            </tr>

            <tr>
                <td>
                    <code className="nobreak">max(A)</code>
                </td>
                <td>
                    When applied to an array, the <code>max</code> function returns the element of the array with the
                    greatest value. For example,
                    <br />
                    <div className="indented">
                        <code>max({`[1, 5; 7, 3]`})</code> returns <code>7</code>
                        <br />
                        <code>max({`{3, 8, 1}`})</code> returns <code>8</code>
                    </div>
                </td>
            </tr>

            <tr>
                <td>
                    <code className="nobreak">max(x, y)</code>
                </td>
                <td>
                    When used with two scalar arguments, <code>max</code>
                    returns the greater of the two arguments.
                </td>
            </tr>

            <tr>
                <td>
                    <code className="nobreak">max(e, for i in u, j in v, ...)&nbsp;&nbsp;</code>
                </td>
                <td>
                    Returns the greatest value among all possible values of <code>e</code> over the range of all
                    possible index combinations.
                </td>
            </tr>
        </tbody>
    </table>
);

const min = (
    <table className="table">
        <tbody>
            <tr>
                <th>Usage</th>
                <th>Description</th>
            </tr>

            <tr>
                <td>
                    <code className="nobreak">min(A)</code>
                </td>
                <td>
                    When applied to an array, the <code>min</code> function returns the element of the array with the
                    least value. For example,
                    <br />
                    <div className="indented">
                        <code>min({`[1, 5; 7, 3]`})</code> returns <code>1</code>
                        <br />
                        <code>min({`{3, 8, 1}`})</code> returns <code>1</code>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <code className="nobreak">min(x, y)</code>
                </td>
                <td>
                    When used with two scalar arguments, <code>min</code>
                    returns the lesser of the two arguments.
                </td>
            </tr>
            <tr>
                <td>
                    <code className="nobreak">min(e, for i in u, j in v, ...)&nbsp;&nbsp;</code>
                </td>
                <td>
                    Returns the least value among all possible values of <code>e</code> over the range of all possible
                    index combinations.
                </td>
            </tr>
        </tbody>
    </table>
);

const product = (
    <table className="table">
        <tbody>
            <tr>
                <th>Usage</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>
                    <code className="nobreak">product(A)</code>
                </td>
                <td>
                    When applied to an array, the <code>product</code>
                    function returns the product of all elements in the array. For example,
                    <br />
                    <div className="indented">
                        <code>product({`[1, 5; 7, 3]`})</code> returns <code>105</code>
                        <br />
                        <code>product({`{3, 8, 1}`})</code> returns <code>24</code>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <code className="nobreak">product(e, for i in u, j in v, ...)&nbsp;&nbsp;</code>
                </td>
                <td>
                    Returns the product of all values of <code>e</code> over all possible index combinations.
                </td>
            </tr>
        </tbody>
    </table>
);
const sum = (
    <table className="table">
        <tbody>
            <tr>
                <th>Usage</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>
                    <code className="nobreak">sum(A)</code>
                </td>
                <td>
                    When applied to an array, the <code>sum</code>
                    function returns the sum of all elements in the array. For example,
                    <br />
                    <div className="indented">
                        <code>sum({`[1, 5; 7, 3]`})</code> returns <code>16</code>
                        <br />
                        <code>sum({`{3, 8, 1}`})</code> returns <code>12</code>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <code className="nobreak">sum(e, for i in u, j in v, ...)</code>
                </td>
                <td>
                    Returns the sum of all values of <code>e</code> over all possible index combinations.
                </td>
            </tr>
        </tbody>
    </table>
);

const data: TopicProps = {
    title: "Reduction Operators",
    comment: (
        <Note>
            <span>
                Reduction operators are discussed in{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=113" target="_blank">
                    &sect;10.3.4
                </a>
                .
            </span>
        </Note>
    ),
    items: [
        {
            title: <code>max</code>,
            example: max,
        },
        { title: <code>min</code>, example: min },
        { title: <code>product</code>, example: product },
        { title: <code>sum</code>, example: sum },
    ],
};

export const reductionOperators = <Topic {...data} />;

// export const reductionOperators = (
//     <Topic title="Reduction Operators">
//         {operators.map((op, i) => (
//             <Topic.Item
//                 key={i}
//                 title={
//                     <b>
//                         <code>{op}</code>
//                     </b>
//                 }
//             />
//         ))}
//     </Topic>
// );
