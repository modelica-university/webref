import React from "react";
import { Topic, TopicProps } from "../../components/topic";

const connect = (
    <div style={{ padding: 5 }}>
        <code>connect(a, b);</code> (see{" "}
        <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=93" target="_blank">
            &sect;9.1
        </a>
        )
    </div>
);

const der = (
    <div style={{ padding: 5 }}>
        <code>der(x)</code> - Take the derivative of a variable or <b>expression</b> (see{" "}
        <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=22" target="_blank">
            &sect;3.7.2
        </a>
        )
    </div>
);

const inStream = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>

        <tr>
            <td>
                <code>inStream(v)</code>
            </td>
            <td>
                <code>v</code> must be a stream variable (<i>i.e.,</i> be preceded by the{" "}
                <code>
                    <b>stream</b>
                </code>{" "}
                qualifier on a connector). This operator provides the value of the stream variable close to the
                connection point assuming inward flow. For more details, see{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=176" target="_blank">
                    &sect;15.2
                </a>
                .
            </td>
        </tr>
    </table>
);

const actualStream = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>

        <tr>
            <td>
                <code>actualStream(v)</code>
            </td>
            <td>
                Returns the actual value of the stream variable <code>v</code> for any flow direction. For more details,
                see{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=179" target="_blank">
                    &sect;15.3
                </a>
                .
            </td>
        </tr>
    </table>
);

export const semiLinear = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>

        <tr>
            <td>
                <code>semiLinear(x, pSlope, nSlope)</code>
            </td>
            <td>
                Equivalent to:
                <br />
                <br />
                <code className="nobreak">
                    <b>if</b> x&gt;=0 <b>then</b> pSlope*x <b>else</b> nSlope*x;
                </code>
                <br />
                <br />
                See{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=23" target="_blank">
                    &sect;3.7.2
                </a>{" "}
                for more details.
            </td>
        </tr>
    </table>
);

export const spatialDistribution = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>

        <tr>
            <td>
                <code>spatialDistribution(...)</code>
            </td>
            <td>
                See{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=23" target="_blank">
                    &sect;3.7.2.2
                </a>
            </td>
        </tr>
    </table>
);

export const getInstanceName = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>

        <tr>
            <td>
                <code>getInstanceName()</code>
            </td>
            <td>
                Returns a string with model/block and instance names from which it is called. See{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=28" target="_blank">
                    &sect;3.7.2.6
                </a>
                for further details.
            </td>
        </tr>
    </table>
);

export const homotopy = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>

        <tr>
            <td>
                <code>homotopy(actual=...,simplified=...)</code>
            </td>
            <td>
                The <code>homotopy</code> operator can be used to ease the solving of non-linear systems. Further
                discussion of its use can be found in{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=22" target="_blank">
                    &sect;3.7.2
                </a>
                .
            </td>
        </tr>
    </table>
);

export const delay = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>
                <code>delay(expr, delayTime)</code>
                <br />
                <code className="nobreak">delay(expr, delayTime, delayMax)&nbsp;</code>
            </td>
            <td>
                Give the value of <code>expr</code> delayed by (the potentially variable) <code>delayTime</code>. See{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=22" target="_blank">
                    &sect;3.7.2
                </a>{" "}
                and{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=23" target="_blank">
                    &sect;3.7.2.1
                </a>{" "}
                for more details.
            </td>
        </tr>
    </table>
);

export const assert = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>

        <tr>
            <td>
                <span className="nobreak">
                    <code>assert(cond, message, level=</code>
                    <code className="typename">AssertionLevel</code>.error)
                </span>
            </td>
            <td>
                Assertions are used to enforce limitations in a model through the conditional expression,{" "}
                <code>cond</code>. Normally, the <code>level</code> argument defaults to{" "}
                <code>
                    <code className="typename">AssertionLevel</code>.error
                </code>
                . However, if a{" "}
                <code>
                    <b>false</b>
                </code>{" "}
                value for <code>cond</code> need not be considered an error, the <code>level</code> argument can be set
                to{" "}
                <code>
                    <code className="typename">AssertionLevel</code>.warning
                </code>
                .
                <br />
                <br />
                See{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=87" target="_blank">
                    &sect;8.3.7
                </a>{" "}
                for more details about <code>assert</code>.
            </td>
        </tr>
    </table>
);

export const ndims = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>

        <tr>
            <td>
                <span className="nobreak">
                    <code>ndims(A)</code>
                </span>
            </td>
            <td>
                Returns the number of dimensions of <code>A</code>. See{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=112" target="_blank">
                    &sect;10.3.1
                </a>{" "}
                for more details.
            </td>
        </tr>
    </table>
);

export const size = (
    <table className="table">
        <tr>
            <th>Usage</th>
            <th>Description</th>
        </tr>

        <tr>
            <td>
                <span className="nobreak">
                    <code>size(A,i)</code>
                </span>
            </td>
            <td>
                Returns the size of dimension <code>i</code> in <code>A</code> where 0 &lt; <code>i</code> &lt;={" "}
                <code>ndims(A)</code>.
            </td>
        </tr>

        <tr>
            <td>
                <span className="nobreak">
                    <code>size(A)</code>
                </span>
            </td>
            <td>
                Returns a vector containing the size of each dimension of <code>A</code>.
            </td>
        </tr>
    </table>
);

export const cardinality = (
    <div style={{ padding: 5 }}>
        This operator is <b>deprecated</b>. It should no longer be used (see{" "}
        <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=22" target="_blank">
            &sect;3.7.2
        </a>
        ).
    </div>
);

export const isPresent = (
    <div style={{ padding: 5 }}>
        This operator was <b>removed</b> from the language as of version 3.0.
    </div>
);

const data: TopicProps = {
    title: "Special Operators",
    items: [
        {
            title: <code>connect</code>,
            example: connect,
        },
        { title: <code>der</code>, example: der },
        { title: <code>inStream</code>, example: inStream },
        { title: <code>actualStream</code>, example: actualStream },
        { title: <code>semiLinear</code>, example: semiLinear },
        { title: <code>spatialDistribution</code>, example: spatialDistribution },
        { title: <code>getInstanceName</code>, example: getInstanceName },
        { title: <code>homotopy</code>, example: homotopy },
        { title: <code>delay</code>, example: delay },
        { title: <code>assert</code>, example: assert },
        { title: <code>ndims</code>, example: ndims },
        { title: <code>size</code>, example: size },
        { title: <code>cardinality</code>, warning: cardinality },
        { title: <code>isPresent</code>, warning: isPresent },
    ],
};

export const specialOperators = <Topic {...data} />;
