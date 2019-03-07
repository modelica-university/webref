import React from "react";
import { Topic, TopicProps, SimpleCard, Reference, Note } from "../../components";
import { Position } from "@blueprintjs/core";

const constantDescription = (
    <SimpleCard title="Constant Variability">
        <p>
            The{" "}
            <b>
                <code>constant</code>
            </b>{" "}
            qualifier is used for variables whose value will be the same across all potential simulations. (
            <Reference id="constvar" />)
        </p>
    </SimpleCard>
);

const parameterDescription = (
    <SimpleCard title="Parameter Variability">
        <p>
            The{" "}
            <b>
                <code>parameter</code>
            </b>{" "}
            qualifier is used for variables whose value may change from one simulation to another but won't change
            during a given simulation. (<Reference id="paramvar" />)
        </p>
    </SimpleCard>
);

const discreteDescription = (
    <SimpleCard title="Discrete Variability">
        <p>
            The
            <b>
                <code>discrete</code>
            </b>
            qualifier is used for variables whose value changes during a simulation but only in response to discrete
            events. (<Reference id="discvar" />)
        </p>
    </SimpleCard>
);

const data: TopicProps = {
    title: "Variability",
    position: Position.RIGHT,
    warning: (
        <Note>
            <p>
                Default variability is <b>continuous</b>. So if a variable
                <br />
                doesn't have a variability qualifier, it is assumed to be
                <br />
                continuous (<Reference id="variability" />
                ).
            </p>
        </Note>
    ),
    items: [
        { title: <code>constant</code>, comment: constantDescription },
        { title: <code>parameter</code>, comment: parameterDescription },
        { title: <code>discrete</code>, comment: discreteDescription },
    ],
};

export const variabilityQualifiers = <Topic {...data} />;
