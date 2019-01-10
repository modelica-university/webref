import React from "react";
import { Topic } from "../components/topic";

export const lexicalRules = (
    <Topic title="Lexical Rules" comment={<span>Look here</span>}>
        <Topic.Item title="Comments" warning={<div>Hello</div>} />
        <Topic.Item title="Identifiers" />
        <Topic.Item title="Numbers" />
    </Topic>
);
