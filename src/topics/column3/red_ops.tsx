import React from "react";
import { Topic } from "../../components/topic";

const operators = ["max", "min", "product", "sum"];

export const reductionOperators = (
    <Topic title="Reduction Operators">
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
