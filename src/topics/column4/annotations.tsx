import React from "react";
import { Topic } from "../../components/topic";

const operators = [
    "choices",
    "defaultComponentName",
    "defaultComponentPrefixes",
    "derivative",
    "Dialog",
    "Documentation",
    "DynamicSelect",
    "Evaluate",
    "experiment",
    "GenerateEvents",
    "HideResult",
    "Inline",
    "inverse",
    "LateInline",
    "missingInnerMessage",
    "preferredView",
    "smoothOrder",
    "unassignedMessage",
    "version",
];

export const standardAnnotations = (
    <Topic title="Standard Annotations">
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
