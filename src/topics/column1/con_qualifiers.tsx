import React from "react";
import { Topic, TopicProps, Reference, SimpleCard, Note } from "../../components";

const inputDescription = (
    <SimpleCard title="Input Variables">
        <p>
            The{" "}
            <code>
                <b>input</b>
            </code>{" "}
            qualifier in a connector indicates that exactly one of that elements counterparts in a resulting connection
            set (
            <Reference id="conset" />) must have the
            <code>
                <b>output</b>
            </code>{" "}
            qualifier. More discussion of
            <code>
                <b>input</b>
            </code>{" "}
            and{" "}
            <code>
                <b>output</b>
            </code>{" "}
            qualifiers can be found in <Reference id="io" />.
        </p>
    </SimpleCard>
);

const outputDescription = (
    <SimpleCard title="Output Variables">
        <p>
            The{" "}
            <code>
                <b>output</b>
            </code>{" "}
            qualifier in a connector indicates that all other matching elements in a connection set must have the{" "}
            <code>
                <b>input</b>
            </code>{" "}
            qualifier. More discussion of
            <code>
                <b>input</b>
            </code>{" "}
            and{" "}
            <code>
                <b>output</b>
            </code>{" "}
            qualifiers can be found in <Reference id="io" />.
        </p>
    </SimpleCard>
);

const flowDescription = (
    <SimpleCard title="Flow Variables">
        <p>
            The{" "}
            <code>
                <b>flow</b>
            </code>{" "}
            qualifier in a connector indicates that all other matching elements in a connection set must also have the{" "}
            <code>
                <b>flow</b>
            </code>{" "}
            qualifier. When the connection set is resolved, an equation is generated that sums these matching elements
            to zero. More details on how equations are generated for{" "}
            <code>
                <b>flow</b>
            </code>{" "}
            elements can be found in <Reference id="flow" />.
        </p>
    </SimpleCard>
);

const streamDescription = (
    <SimpleCard title="Stream Variables">
        <p>
            The{" "}
            <code>
                <b>stream</b>
            </code>{" "}
            qualifier is used to indicate when a given element in a connector is an intensive property of flowing
            through the connector. <Reference id="stream" />
        </p>
    </SimpleCard>
);

const data: TopicProps = {
    title: "Connector Qualifiers",
    warning: (
        <Note>
            <p>
                If a variable in a connector lacks any qualifier, the default connection behavior is to{" "}
                <b>generate an equality equation</b>
                with its counterpart on all other connectors in the connection set (<Reference id="connectors" />)
            </p>
        </Note>
    ),
    items: [
        { title: <code>input</code>, comment: inputDescription },
        { title: <code>output</code>, comment: outputDescription },
        { title: <code>flow</code>, comment: flowDescription },
        { title: <code>stream</code>, comment: streamDescription },
    ],
};

export const connectorQualifiers = <Topic {...data} />;
