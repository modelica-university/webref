import React from "react";
import { Topic } from "../../components/topic";

const operators = ["if", "when", "while", "for"];

export const statements = (
    <Topic title="Statements">
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
