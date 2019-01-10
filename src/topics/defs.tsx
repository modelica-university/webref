import React from "react";
import { Topic } from "../components/topic";

export const classDefinitions = (
    <Topic title="Class Definitions" comment={<span>Comment</span>}>
        <Topic.Item
            title={
                <span>
                    <b>
                        <code>extends</code>
                    </b>{" "}
                    (inheritance)
                </span>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>replaceable</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>redeclare</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>constrainedby</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>import</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>encapsulated</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>final</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>partial</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>expandable</code>
                </b>
            }
        />
    </Topic>
);
