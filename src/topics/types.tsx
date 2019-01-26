import React from "react";
import { Topic } from "../components/topic";
import { Reference } from "./references";

export const builtinTypes = (
    <Topic
        title="Builtin Types"
        comment={
            <div style={{ padding: 5 }}>
                <Reference id="builtinTypes" />
            </div>
        }
    >
        <Topic.Item
            title={
                <b>
                    <code>Real</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>Integer</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>Boolean</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>String</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>enumeration</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>ExternalObject</code>
                </b>
            }
        />
    </Topic>
);
