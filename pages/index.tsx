import React from "react";

import Layout from "../src/components/layout";
import { searchContext } from "../src/components/context";

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
} from "../src/topics";

interface Column {
    grow: number;
    min: number;
    elements: JSX.Element[];
}

const ordering: Column[] = [
    {
        grow: 1,
        min: 10,
        elements: [lexicalRules, specializedClasses, classDefinitions, connectorQualifiers, variabilityQualifiers],
    },
    {
        grow: 3,
        min: 20,
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
    { grow: 1, min: 10, elements: [lexicalRules] },
    { grow: 1, min: 10, elements: [specializedClasses, lexicalRules] },
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
                <div style={{ background: "#f8f8fc" }}>
                    <h1 style={headerStyle}>Modelica Web Reference</h1>
                    <div style={{ display: "flex" }}>
                        {ordering.map((column, ci) => {
                            return (
                                <div
                                    style={{ flexGrow: column.grow, minWidth: `${column.min} em` }}
                                    key={ci}
                                    className="topicColumn"
                                >
                                    {column.elements.map((elem, ei) => (
                                        <div style={{ margin: 10 }} key={ei}>
                                            {elem}
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </searchContext.Provider>
        );
    }
}

export default Main;
