import React from "react";

export type ReferenceTemplate = (link: JSX.Element, title: string) => JSX.Element;
export interface ReferenceProps {
    id: Keys<typeof references>;
    children?: ReferenceTemplate;
}

const defaultChild = (link: JSX.Element, title: string) => {
    return (
        <span>
            For more information about {title}, see {link}.
        </span>
    );
};

export const Reference = (props: ReferenceProps) => {
    const ref = references[props.id];
    return (props.children || defaultChild)(
        <a href={ref.href} target="_blank">
            §{ref.section}
        </a>,
        ref.title,
    );
};

type Keys<T> = keyof T;

interface ReferenceDetails {
    title: string;
    section: string;
    href: string;
}

const references: { [id: string]: ReferenceDetails } = {
    lexical: {
        title: "lexical rules",
        section: "2",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=11",
    },
    condcomp: {
        title: "conditional components",
        section: "4.4.5",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=38",
    },
    unary: {
        title: "unary operators",
        section: "3.2",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=15",
    },
    recrest: {
        title: "record restrictions",
        section: "4.6",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=41",
    },
    pkgs: {
        title: "packages",
        section: "13",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=161",
    },
    funcs: {
        title: "functions",
        section: "12.2",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=134",
    },
    mods: {
        title: "modifications",
        section: "7.2",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=70",
    },
    redecl: {
        title: "redeclarations",
        section: "7.3",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=73",
    },
    encapsulated: {
        title: "encapsulation",
        section: "5.3.1",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=54",
    },
    final: {
        title: "final",
        section: "7.2.6",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=73",
    },
    partial: {
        title: "partial",
        section: "4.7",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=43",
    },
    expandable: {
        title: "expandable connectors",
        section: "9.1.3",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=94",
    },
    connectors: {
        title: "connectors",
        section: "9.1",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=93",
    },
    conset: {
        title: "connection sets",
        section: "9.1.1",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=94",
    },
    io: {
        title: "inputs and outputs",
        section: "9.3",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=101",
    },
    flow: {
        title: "conservation quantities",
        section: "9.2",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=98",
    },
    stream: {
        title: "stream connectors",
        section: "15",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=175",
    },
    variability: {
        title: "variability",
        section: "3.8",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=30",
    },
    constvar: {
        title: "constant variability",
        section: "3.8.1",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=31",
    },
    paramvar: {
        title: "parameter variability",
        section: "3.8.2",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=31",
    },
    discvar: {
        title: "discrete variability",
        section: "3.8.3",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=31",
    },
    builtinTypes: {
        title: "builtin types",
        section: "4.8",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=48",
    },
    units: {
        title: "units",
        section: "19.1",
        href: "https://www.modelica.org/documents/ModelicaSpec33.pdf#page=235",
    },
};
