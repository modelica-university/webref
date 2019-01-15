import React from "react";
import { Topic, TopicProps } from "../components/topic";

const data: TopicProps = {
    title: "Special Operators",
    items: [
        { title: <code>connect</code>, example: <span /> },
        { title: <code>der</code>, example: <span /> },
        { title: <code>inStream</code>, example: <span /> },
        { title: <code>actualStream</code>, example: <span /> },
        { title: <code>semiLinear</code>, example: <span /> },
        { title: <code>spatialDistribution</code>, example: <span /> },
        { title: <code>getInstanceName</code>, example: <span /> },
        { title: <code>homotopy</code>, example: <span /> },
        { title: <code>delay</code>, example: <span /> },
        { title: <code>assert</code>, example: <span /> },
        { title: <code>ndims</code>, example: <span /> },
        { title: <code>size</code>, example: <span /> },
        { title: <code>cardinality</code>, example: <span /> },
        { title: <code>isPresent</code>, example: <span /> },
    ],
};

export const specialOperators = <Topic {...data} />;
