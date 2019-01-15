import React from "react";
import { Topic, TopicProps } from "../components/topic";

const data: TopicProps = {
    title: "Class Definitions",
    items: [
        {
            title: (
                <span>
                    <code>extends</code> (inheritance)
                </span>
            ),
            example: <span />,
        },
        { title: <code>replaceable</code>, example: <span /> },
        { title: <code>redeclare</code>, example: <span /> },
        { title: <code>constrainedby</code>, example: <span /> },
        { title: <code>import</code>, example: <span /> },
        { title: <code>encapsulated</code>, example: <span /> },
        { title: <code>final</code>, example: <span /> },
        { title: <code>partial</code>, example: <span /> },
        { title: <code>expandable</code>, example: <span /> },
    ],
};

export const classDefinitions = <Topic {...data} />;
