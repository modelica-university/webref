import React from "react";
import { Topic } from "../components/topic";

const operators = [
    "connect",
    "der",
    "inStream",
    "actualStream",
    "semiLinear",
    "spatialDistribution",
    "getInstanceName",
    "homotopy",
    "delay",
    "assert",
    "ndims",
    "size",
    "cardinality",
    "isPresent",
];

export const specialOperators = (
    <Topic title="Special Operators">
        {operators.map((op, i) => (
            <Topic.Item
                key={i}
                title={
                    <b>
                        <code>{op}</code>
                    </b>
                }
            />
        ))}
    </Topic>
);
