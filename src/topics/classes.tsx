import React from "react";
import { Topic } from "../components/topic";

export const specializedClasses = (
    <Topic title="Specialized Classes" comment={<span>Comment</span>}>
        <Topic.Item
            title={
                <b>
                    <code>model</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>record</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>connector</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>block</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>type</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>package</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>function</code>
                </b>
            }
        />
    </Topic>
);
