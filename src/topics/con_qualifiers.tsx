import React from "react";
import { Topic } from "../components/topic";

export const connectorQualifiers = (
    <Topic title="Connector Qualifiers" warning={<span>Warning</span>}>
        <Topic.Item
            title={
                <b>
                    <code>input</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>output</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>flow</code>
                </b>
            }
        />
        <Topic.Item
            title={
                <b>
                    <code>stream</code>
                </b>
            }
        />
    </Topic>
);
