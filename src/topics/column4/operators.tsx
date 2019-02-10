import React from "react";
import { Topic } from "../../components/topic";

const operators = ["operator record", "operator function", "operator"];

export const operatorOperator = (
    <Topic title="Operators">
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
