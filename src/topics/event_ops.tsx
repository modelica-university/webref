import React from "react";
import { Topic } from "../components/topic";

const operators = [
    "pre",
    "noEvent",
    "change",
    "edge",
    "initial",
    "terminal",
    "reinit",
    "sample",
    "smooth",
    "terminate",
];

export const eventOperators = (
    <Topic title="Event Operators">
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
