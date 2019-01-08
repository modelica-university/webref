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

import { Card, Elevation, Icon, Popover } from "@blueprintjs/core";

const ordering = [
    [lexicalRules, specializedClasses, classDefinitions, connectorQualifiers, variabilityQualifiers],
    [
        builtinTypes,
        standardEnumerations,
        arithmeticOperators,
        logicalOperators,
        mathematicalFunctions,
        arrayFunctions,
        eventFunctions,
        conversionFunctions,
    ],
    [lexicalRules],
    [specializedClasses, lexicalRules],
];

export interface MainState {
    search: string;
}

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
                <div style={{ display: "flex" }}>
                    {ordering.map((column, ci) => {
                        return (
                            <div key={ci} className="topicColumn">
                                {column.map((elem, ei) => (
                                    <div key={ei}>{elem}</div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </searchContext.Provider>
        );
    }
}

export default Main;
