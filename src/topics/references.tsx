import React from "react";

export const Reference = (props: { id: Keys<typeof references> }) => {
    const ref = references[props.id];
    return (
        <span>
            see {ref.title} in{" "}
            <a href={ref.href} target="_blank">
                §{ref.section}
            </a>{" "}
            for more details
        </span>
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
};
