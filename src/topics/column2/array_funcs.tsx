import React from "react";
import { Topic } from "../../components/topic";

const words = [
    "scalar",
    "vector",
    "matrix",
    "identity",
    "diagonal",
    "zeros",
    "ones",
    "fill",
    "linspace",
    "transpose",
    "outerProduct",
    "symmetric",
    "cross",
    "skew",
];

const tensor = (
    <table className="table">
        <tr>
            <th>Functions</th>
            <th>Documentation</th>
        </tr>
        <tr>
            <td>
                <code>scalar(A)</code>
                <br />
                <code>vector(A)</code>
                <br />
                <code>matrix(A)</code>
            </td>
            <td>
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=112" target="_blank">
                    &sect;10.3.2
                </a>
            </td>
        </tr>
    </table>
);

const construction = (
    <table className="table">
        <tr>
            <th>Functions</th>
            <th>Documentation</th>
        </tr>
        <tr>
            <td>
                <code>identity(n)</code>
                <br />
                <code>diagonal(v)</code>
                <br />
                <code>zeros(n1,n2,n3,...)</code>
                <br />
                <code>ones(n1,n2,n3,...)</code>
                <br />
                <code>fill(s,n1,n2,n3,...)</code>
                <br />
                <code>linspace(x1,x2,n)</code>
            </td>
            <td>
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=112" target="_blank">
                    &sect;10.3.3
                </a>
            </td>
        </tr>
    </table>
);

const other = (
    <table className="table">
        <tr>
            <th>Functions</th>
            <th>Documentation</th>
        </tr>
        <tr>
            <td>
                <code>transpose(A)</code>
                <br />
                <code>outerProduct(v1,v2)</code>
                <br />
                <code>symmetric(A)</code>
                <br />
                <code>cross(x,y)</code>
                <br />
                <code>skew(x)</code>
            </td>
            <td>
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=114" target="_blank">
                    &sect;10.3.5
                </a>
            </td>
        </tr>
    </table>
);

export const arrayFunctions = (
    <Topic title="Array Functions">
        <Topic.Item
            num={0}
            of={3}
            title={
                <b>
                    <code>scalar vector matrix</code>
                </b>
            }
            comment={tensor}
        />
        <Topic.Item
            num={1}
            of={3}
            title={
                <b>
                    <code>identity diagonal zeros ones fill linspace</code>
                </b>
            }
            comment={construction}
        />
        <Topic.Item
            num={2}
            of={3}
            title={
                <b>
                    <code>transpose outerProduct symmetric cross skew</code>
                </b>
            }
            comment={other}
        />
    </Topic>
);
