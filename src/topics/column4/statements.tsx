import React from "react";
import { Topic, TopicProps } from "../../components/topic";

const if_elem = (
    <table className="table">
        <tr>
            <th>
                If Statement (
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=129" target="_blank">
                    &sect;11.2.6
                </a>
                )
            </th>
        </tr>
        <tr>
            <td>
                <code>
                    <b>if</b> cond <b>then</b>
                    <br />
                    &nbsp;&nbsp;...
                    <br />
                    <b>elseif</b> cond <b>then</b>
                    <br />
                    &nbsp;&nbsp;...
                    <br />
                    <b>else</b>
                    <br />
                    &nbsp;&nbsp;...
                    <br />
                    <b>end</b> <b>if;</b>
                </code>
            </td>
        </tr>
        <tr>
            <th>
                If Expression (
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=18" target="_blank">
                    &sect;3.6.5
                </a>
                )
            </th>
        </tr>
        <tr>
            <td>
                <code>
                    <b>if</b> cond1 <b>then</b> expr1 <b>elseif</b> cond2 <b>then</b> expr2 <b>else</b> expr3;
                </code>
            </td>
        </tr>
    </table>
);
const when_elem = (
    <table className="table">
        <tr>
            <th>
                When Statement (
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=130" target="_blank">
                    &sect;11.2.7
                </a>
                )
            </th>
        </tr>
        <tr>
            <td>
                <code>
                    <b>when</b> cond <b>then</b>
                    <br />
                    &nbsp;&nbsp;...
                    <br />
                    <b>elsewhen</b> cond <b>then</b>
                    <br />
                    &nbsp;&nbsp;...
                    <br />
                    <b>end</b> <b>when</b>;
                </code>
            </td>
        </tr>
    </table>
);
const when_warning = (
    <div>
        <p>
            <b>Tip:</b> It is easy to get into trouble with algebraic loops when using{" "}
            <code>
                <b>when</b>
            </code>{" "}
            clauses. To avoid problems, assign your conditional expression, <code>cond</code>, to a variable,{" "}
            <code>v</code>, and then state your when condition as{" "}
            <code>
                <b>when</b> pre(v) <b>then</b>
            </code>
            . This is a fancy way of saying "when I know that this condition has happened for sure (and can't be undone
            by the equations in this when clause), do this...".
        </p>
        <br />
        <p>
            <b>Restrictions</b>:
            <ul>
                <li>Cannot be used in a function</li>
                <li>Cannot be nested</li>
                <li>
                    Cannot occur inside{" "}
                    <code>
                        <b>while</b>
                    </code>
                    ,{" "}
                    <code>
                        <b>if</b>
                    </code>{" "}
                    or{" "}
                    <code>
                        <b>for</b>
                    </code>{" "}
                    clauses.
                </li>
            </ul>
        </p>
        <p>
            If the conditional expression for the{" "}
            <code>
                <b>when</b>
            </code>{" "}
            clause is a vector, the contents of the{" "}
            <code>
                <b>when</b>
            </code>{" "}
            clause become active when{" "}
            <b>
                <i>any</i>
            </b>{" "}
            of the elements in the vector become true.
        </p>
    </div>
);
const while_elem = (
    <table className="table">
        <tr>
            <th>
                While Statement (
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=128" target="_blank">
                    &sect;11.2.3
                </a>
                )
            </th>
        </tr>
        <tr>
            <td>
                <code>
                    <b>while</b> cond <b>loop</b>
                    <br />
                    &nbsp;&nbsp;...
                    <br />
                    <b>end</b> <b>while</b>;
                </code>
            </td>
        </tr>
    </table>
);
const for_elem = (
    <table className="table">
        <tr>
            <th colSpan={2}>
                For Statement (
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=127" target="_blank">
                    &sect;11.2.2
                </a>
                )
            </th>
        </tr>
        <tr>
            <td>Syntax</td>
            <td>
                <code>
                    <b>for</b> indices <b>loop</b>
                    <br />
                    &nbsp;&nbsp;...
                    <br />
                    <b>end</b> <b>for</b>;
                </code>
            </td>
        </tr>
        <tr>
            <th colSpan={2}>Indices</th>
        </tr>
        <tr>
            <td>
                <code>
                    <b>for</b> i <b>in</b> 1:10 <b>loop</b>
                </code>
            </td>
            <td>
                Looping over a range of integers
                <br />
                <code>1,2,3,...,10</code>
            </td>
        </tr>

        <tr>
            <td>
                <code>
                    <b>for</b> i <b>in</b> 1.0 : 1.5 : 5.5 <b>loop</b>
                </code>
            </td>
            <td>
                Looping over reals
                <br />
                <code>1.0, 2.5, 4.0, 5.5</code>
            </td>
        </tr>

        <tr>
            <td>
                <code>
                    <b>for</b> i <b>in</b> {"{1,3,6,7}"} <b>loop</b>
                </code>
            </td>
            <td>
                Looping over a collection of values
                <br />
                <code>1, 3, 6, 7</code>
            </td>
        </tr>

        <tr>
            <td>
                <code>
                    <b>for</b> i <b>in</b> TwoEnums <b>loop</b>
                </code>
            </td>
            <td>
                Looping over enum values
                <br />
                <code>TwoEnums.one, TwoEnums.two</code>
                <br />
                where{" "}
                <code>
                    <b>type</b> TwoEnums = <b>enumeration</b>(one, two)
                </code>
            </td>
        </tr>
    </table>
);

const data: TopicProps = {
    title: "Statements",
    items: [
        {
            title: <code>if</code>,
            example: if_elem,
        },
        {
            title: <code>when</code>,
            example: when_elem,
            warning: when_warning,
        },
        {
            title: <code>while</code>,
            example: while_elem,
        },
        {
            title: <code>for</code>,
            example: for_elem,
        },
    ],
};

export const statements = <Topic {...data} />;
