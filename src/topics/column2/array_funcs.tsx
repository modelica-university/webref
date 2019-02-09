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

export const arrayFunctions = (
    <Topic title="Array Functions">
        <Topic.Item
            title={
                <b>
                    <code>scalar vector matrix</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>identity diagonal zeros ones fill linspace</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>transpose outerProduct symmetric cross skew</code>
                </b>
            }
        />
    </Topic>
);
