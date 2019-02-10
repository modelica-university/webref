import React from "react";
import { Topic } from "../../components/topic";

export const complexExpressions = (
    <Topic title="Complex Expressions" comment={<span>Comment</span>}>
        <Topic.Item title="Vector Literal" warning={<div>Hello</div>} />
        <Topic.Item title="Array Literals" />
        <Topic.Item title="Array Comprehensions" />
    </Topic>
);
