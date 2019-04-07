import React from "react";

import { searchContext } from "../src/components/context";
import { warningIcon, exampleIcon, commentIcon } from "../src/components/icons";

import {
    lexicalRules,
    specializedClasses,
    classDefinitions,
    connectorQualifiers,
    variabilityQualifiers,
    builtinTypes,
    standardEnumerations,
    arithmeticOperators,
    logicalOperators,
    mathematicalFunctions,
    arrayFunctions,
    eventFunctions,
    conversionFunctions,
    specialOperators,
    eventOperators,
    reductionOperators,
    statements,
    complexExpressions,
    operatorOperator,
    standardAnnotations,
} from "../src/topics";
import { Position, Popover } from "@blueprintjs/core";

interface Column {
    grow: number;
    min: number;
    max: number;
    elements: JSX.Element[];
}

const ordering: Column[] = [
    {
        grow: 1,
        min: 16,
        max: 25,
        elements: [lexicalRules, specializedClasses, classDefinitions, connectorQualifiers, variabilityQualifiers],
    },
    {
        grow: 2,
        min: 30,
        max: 35,
        elements: [
            builtinTypes,
            standardEnumerations,
            arithmeticOperators,
            logicalOperators,
            mathematicalFunctions,
            arrayFunctions,
            eventFunctions,
            conversionFunctions,
        ],
    },
    { grow: 1, min: 10, max: 25, elements: [specialOperators, reductionOperators, eventOperators] },
    { grow: 1, min: 10, max: 25, elements: [statements, complexExpressions, operatorOperator, standardAnnotations] },
];

export interface MainState {
    search: string;
}

const headerStyle: React.CSSProperties = {
    textAlign: "center",
    margin: 0,
    backgroundColor: "#eef",
    borderBottom: "1px solid #ccd",
    paddingBottom: 3,
    paddingTop: 5,
};

const legendStyle: React.CSSProperties = {
    paddingLeft: 5,
    paddingRight: 10,
};

const RenderColumn = (props: { column: Column }) => (
    <div
        style={{
            flexGrow: props.column.grow,
            minWidth: `${props.column.min}em`,
        }}
        className="topicColumn"
    >
        {props.column.elements.map((elem, ei) => (
            <div style={{ margin: 10 }} key={ei}>
                {elem}
            </div>
        ))}
    </div>
);

export class Main extends React.Component<{}, MainState> {
    state = {
        search: "",
    };
    setSearch = (term: string) => {
        this.setState({ search: term });
    };
    render() {
        return (
            <searchContext.Provider value={{ search: this.state.search, setTerm: this.setSearch }}>
                <div id="columns" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", margin: 5 }}>
                            <span style={legendStyle}>
                                <b>Legend:</b>
                            </span>
                            {commentIcon} <span style={legendStyle}>Comment</span> {warningIcon}{" "}
                            <span style={legendStyle}>Warning</span> {exampleIcon}
                            <span style={legendStyle}>Example</span>
                        </div>
                        <div
                            style={{ flexGrow: 1, textAlign: "center", fontSize: "125%", margin: 5, marginTop: "auto" }}
                        >
                            <span>
                                <b>Modelica Web Reference</b>
                            </span>
                        </div>
                        <div style={{ margin: 5, marginTop: "auto" }}>
                            <b>Copyright 2019 - Michael Tiller</b>
                            <a
                                style={{ fontSize: "150%", marginLeft: 10 }}
                                href="https://github.com/modelica-university/webref/issues"
                            >
                                <span>🐞</span>
                                <Popover
                                    position={Position.BOTTOM_LEFT}
                                    content={
                                        <div>
                                            <p>
                                                This cheatsheet is implemented in <a href="react.js.org">React</a> and
                                                leverages <a href="nextjs.org">Next.js</a> to take are of server side
                                                rendering. The code itself is all written in{" "}
                                                <a href="http://typescript-lang.org">TypeScript</a>
                                            </p>
                                        </div>
                                    }
                                    target={<span>❔</span>}
                                />
                            </a>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <div style={{ display: "flex", flexGrow: 1 }}>
                            <RenderColumn column={ordering[0]} />
                            <RenderColumn column={ordering[1]} />
                        </div>
                        <div style={{ display: "flex", flexGrow: 1 }}>
                            <RenderColumn column={ordering[2]} />
                            <RenderColumn column={ordering[3]} />
                        </div>
                    </div>
                </div>
            </searchContext.Provider>
        );
    }
}

export default Main;
