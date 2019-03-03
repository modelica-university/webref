import React from "react";
import { Topic, TopicProps } from "../../components/topic";

const pre = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>
                <code>pre(y)</code>
            </td>
            <td className="seminarrow">
                At an event, the <code>pre</code> operator is used to refer to the value of a variable prior to that
                event. There are several caveats related to the use of <code>pre</code>. These can be found in{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=29" target="_blank">
                    &sect;3.7.3
                </a>
                .
            </td>
        </tr>
    </table>
);

const noEvent = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>
                <code>noEvent(expr)</code>
            </td>
            <td className="seminarrow">
                The <code>noEvent</code> operator suppresses the generation of events by any event generating operators
                or functions in the expression <code>expr</code>. Further information about the <code>noEvent</code>{" "}
                operator can be found in{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=29" target="_blank">
                    &sect;3.7.3.2
                </a>{" "}
                and{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=88" target="_blank">
                    &sect;8.5
                </a>
                .
            </td>
        </tr>
    </table>
);

const change = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>
                <code>change(v)</code>
            </td>
            <td className="seminarrow">
                The expression <code>change(v)</code>
                becomes{" "}
                <code>
                    <b>true</b>
                </code>{" "}
                only for the instant that the value of the variable <code>v</code> changes (<i>i.e.,</i>{" "}
                <code>{`v<>pre(v)`}</code>). See the <code>pre</code>
                operator and/or{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=30" target="_blank">
                    &sect;3.7.3.1
                </a>{" "}
                for more details and restrictions.
            </td>
        </tr>
    </table>
);

const edge = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>
                <code>edge(b)</code>
            </td>
            <td className="seminarrow">
                The <code>edge</code> operator becomes{" "}
                <code>
                    <b>true</b>
                </code>{" "}
                only at the instant when the expression <code>b</code> goes from{" "}
                <code>
                    <b>false</b>
                </code>
                to{" "}
                <code>
                    <b>true</b>
                </code>{" "}
                (<i>i.e.,</i> <code>b and not pre(b)</code>). See the <code>pre</code> operator and/or{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=30" target="_blank">
                    &sect;3.7.3.1
                </a>{" "}
                for more details and restrictions.
            </td>
        </tr>
    </table>
);
const initial = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>
                <code>initial()</code>
            </td>
            <td className="seminarrow">
                The <code>initial</code> operator is{" "}
                <code>
                    <b>true</b>
                </code>
                during the initialization phase of the simulation.
            </td>
        </tr>
    </table>
);

const terminal = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>
                <code>terminal()</code>
            </td>
            <td className="seminarrow">
                The <code>terminal</code> operator becomes{" "}
                <code>
                    <b>true</b>
                </code>{" "}
                at the end of a <b>successful</b> simulation.
            </td>
        </tr>
    </table>
);

const reinit = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>
                <code>reinit(x, expr)</code>
            </td>
            <td className="seminarrow">
                The <code>reinit</code> operator sets the value of the variable <code>x</code> to be equal to the of{" "}
                <code>expr</code>. Note, <code>reinit</code> can only be used within a
                <code>
                    <b>when</b>
                </code>{" "}
                clause. For more details on the usage and restrictions of <code>reinit</code>, see{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=86" target="_blank">
                    &sect;8.3.6
                </a>
                .
            </td>
        </tr>
    </table>
);

const sample = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>
                <code>sample(start, interval)</code>
            </td>
            <td className="seminarrow">
                The <code>sample</code> operator because true when <code>time>=start</code> and again every{" "}
                <code>interval</code> seconds after that. Further details can be found in{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=29" target="_blank">
                    &sect;3.7.3
                </a>
                .
            </td>
        </tr>
    </table>
);

const smooth = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>
                <code>smooth(p, expr)</code>
            </td>
            <td className="seminarrow">
                When evaluated, the <code>smooth</code> operator simply returns the value of the expression{" "}
                <code>expr</code>. But it also acts as a guarantee that <code>expr</code> is
                <code>p</code> times continuously differentiable. For further details, see{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=30" target="_blank">
                    &sect;3.7.3.2
                </a>
                .
            </td>
        </tr>
    </table>
);

const terminate = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>
                <code>terminate()</code>
            </td>
            <td className="seminarrow">
                The <code>terminate</code> operator instructs the underlying simulation environment to terminate the
                simulation after the completion of the next integration step or event iteration. See{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=87" target="_blank">
                    &sect;8.3.8
                </a>{" "}
                for more details.
            </td>
        </tr>
    </table>
);

const data: TopicProps = {
    title: "Event Operators",
    comment: (
        <span>
            {" "}
            These event related operators are discussed in{" "}
            <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=29" target="_blank">
                &sect;3.7.3
            </a>
            .
        </span>
    ),
    items: [
        {
            title: <code>pre</code>,
            example: pre,
        },
        {
            title: <code>noEvent</code>,
            example: noEvent,
        },
        {
            title: <code>change</code>,
            example: change,
        },
        {
            title: <code>edge</code>,
            example: edge,
        },
        {
            title: <code>initial</code>,
            example: initial,
        },
        {
            title: <code>terminal</code>,
            example: terminal,
        },
        {
            title: <code>reinit</code>,
            example: reinit,
        },
        {
            title: <code>sample</code>,
            example: sample,
        },
        {
            title: <code>smooth</code>,
            example: smooth,
        },
        {
            title: <code>terminate</code>,
            example: terminate,
        },
    ],
};

export const eventOperators = <Topic {...data} />;
