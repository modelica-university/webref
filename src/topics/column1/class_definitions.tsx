import React from "react";
import { Topic, TopicProps, SimpleCard, Reference, TwoColumn, Note } from "../../components";
import { Position } from "@blueprintjs/core";

const extendsDescription = (
    <SimpleCard title="Inheritance">
        <code>
            <b>extends</b> <span className="typename">BaseClass</span>(
            <span className="comment">/* modifications */</span>);
        </code>
    </SimpleCard>
);

const replaceableDescription = (
    <TwoColumn
        leftHeading="Usage"
        rightHeading="Syntax"
        leftColumn={[<span>Replaceable Components</span>, <span>Replaceable Class</span>]}
        rightColumn={[
            <code className="pull-right nobreak">
                <b>replaceable</b> <span className="typename">D</span> comp;
            </code>,
            <code className="pull-right nobreak">
                <b>replaceable</b> <b>model</b> <span className="typename">M</span>
                {" = "}
                <span className="typename">D</span>
            </code>,
        ]}
    />
);

const redeclareDescription = (
    <SimpleCard
        title="Redeclarations"
        note={
            <span>
                For more information, see <Reference id="mods">{link => link}</Reference> and
                <Reference id="redecl">{link => link}</Reference>
            </span>
        }
    >
        <table className="table">
            <tbody>
                <tr>
                    <td>
                        <p>
                            The{" "}
                            <code>
                                <b>redeclare</b>
                            </code>{" "}
                            keyword is used to override the value of a{" "}
                            <code>
                                <b>replaceable</b>
                            </code>{" "}
                            component. This is typically done either through inheritance or through modifications
                            applied to components. To demonstrate, consider the following model:
                            <br />
                            <div className="indented">
                                <code>
                                    <b>model</b> <code className="typename">Circuit</code>
                                    <br />
                                    &nbsp;&nbsp;...
                                    <br />
                                    &nbsp;&nbsp;<b>replaceable</b> <code className="typename">Resistor</code>{" "}
                                    R(R=100.0);
                                    <br />
                                    &nbsp;&nbsp;...
                                    <br />
                                    <b>end</b> <code className="typename">Circuit</code>;<br />
                                </code>
                            </div>
                        </p>
                    </td>
                </tr>
                <tr>
                    <th className="separator">
                        Redeclaration in{" "}
                        <code>
                            <b>extends</b>
                        </code>{" "}
                        clauses
                    </th>
                </tr>
                <tr>
                    <td>
                        When inheriting from a definition, it is possible to redeclare{" "}
                        <code>
                            <b>replaceable</b>
                        </code>{" "}
                        components as follows:
                        <br />
                        <br />
                        <div className="indented">
                            <code>
                                <b>model</b> <code className="typename">ThermalCircuit</code>
                                <br />
                                &nbsp;&nbsp;<b>extends</b> <code className="typename">Circuit</code>(<b>redeclare</b>
                                <code className="typename">ThermalResistor</code> R(R=100.0));
                                <br />
                                <b>end</b> <code className="typename">ThermalCircuit</code>;<br />
                            </code>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th className="separator">Redeclaration in component modifications</th>
                </tr>
                <tr>
                    <td>
                        When instantiating a component, it is possible to redeclare{" "}
                        <code>
                            <b>replaceable</b>
                        </code>{" "}
                        sub-components as follows:
                        <br />
                        <br />
                        <div className="indented">
                            <code>
                                <b>model</b> <code className="typename">UsesCircuit</code>
                                <br />
                                &nbsp;&nbsp;<code className="typename">Circuit</code> circuit(<b>redeclare</b>{" "}
                                <code className="typename">ThermalResistor</code> R(R=100.0));
                                <br />
                                <b>end</b> <code className="typename">UsesCircuit</code>;<br />
                            </code>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </SimpleCard>
);

const constrainedbyDescription = (
    <TwoColumn
        leftHeading="Usage"
        rightHeading="Syntax"
        leftColumn={[<span>Replaceable component</span>, <span>Replaceable class</span>]}
        rightColumn={[
            <code className="pull-right nobreak">
                <b>replaceable</b> <span className="typename">D</span> comp <b>constrainedby</b> <span className="typename">C</span>;
            </code>,
            <code className="pull-right nobreak">
                <b>replaceable</b> <b>model</b> <span className="typename">M</span>
                {" = "}
                <span className="typename">D</span> <b>constrainedby</b> <span className="typename">C</span>;
            </code>,
        ]}
    />
);

const importDescription = (
    <SimpleCard
        title="Import Syntax"
        note={
            <p>
                Imports always uses fully qualified names. This means the name used must start from the top-level
                namespace.
            </p>
        }
    >
        <table className="table">
            <tbody>
                <tr>
                    <th className="separator" colSpan={2}>
                        Import a named definition
                    </th>
                </tr>
                <tr>
                    <td className="nobreak">
                        <code>
                            <b>import</b> <code className="typename">Modelica.SIunits.Velocity</code>;
                        </code>
                    </td>
                    <td>
                        <p>
                            Adds the definition
                            <code className="typename">Modelica.SIunits.Velocity</code> to the local scope under the
                            name <code className="typename">Velocity</code>.
                        </p>
                    </td>
                </tr>
                <tr>
                    <th className="separator" colSpan={2}>
                        Import definition under an alias
                    </th>
                </tr>
                <tr>
                    <td>
                        <code>
                            <b>import</b>
                            <code className="typename">SI</code>=<code className="typename">Modelica.SIunits</code>;
                        </code>
                    </td>
                    <td>
                        <p>
                            Adds a given definition to the local scope under an alias name (e.g.,{" "}
                            <code className="typename">Modelica.SIunits.Velocity</code>
                            could be referenced as <code className="typename">SI.Velocity</code> in this case).
                        </p>
                    </td>
                </tr>
                <tr>
                    <th className="separator" colSpan={2}>
                        Import contents of a{" "}
                        <code>
                            <b>package</b>
                        </code>
                    </th>
                </tr>
                <tr>
                    <td>
                        <code>
                            <b>import</b> <code className="typename">Modelica.SIunits.*</code>;
                        </code>
                    </td>
                    <td>
                        <p>
                            Adds all the definitions defined in
                            <code className="typename">Modelica.SIunits</code> to the local scope (under their normal
                            names).
                        </p>
                        <div className="alert alert-error">
                            <p>
                                Use of the so-called "wildcard import" feature is strongly discouraged. It makes it
                                unclear which definitions are actually used and can easily result in duplicate
                                conflicting local names.
                            </p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </SimpleCard>
);

const encapsulatedDescription = (
    <SimpleCard title="Encapsulated Definitions">
        <p>
            The{" "}
            <code>
                <b>encapsulated</b>
            </code>{" "}
            keyword forces all types not belonging to a definition to be imported. <Reference id="encapsulated" />
        </p>
    </SimpleCard>
);

const finalDescription = (
    <SimpleCard title="Finalizing Modifications">
        <p>
            The{" "}
            <code>
                <b>final</b>
            </code>{" "}
            keyword is used to indicate that no more modifications will be permitted to a variable.{" "}
            <Reference id="final" />
        </p>
    </SimpleCard>
);

const partialDescription = (
    <SimpleCard title="Partial Definitions">
        <p>
            The{" "}
            <code>
                <b>partial</b>
            </code>{" "}
            keyword is used to indicate that a given definition is incomplete. This makes it clear to both users and the
            tools that the definition, as it stands, cannot be instantiated. Normally, a{" "}
            <code>
                <b>partial</b>
            </code>{" "}
            definition is extended from to create a complete (instantiable) definition. <Reference id="partial" />
        </p>
    </SimpleCard>
);

const expandabaleDescription = (
    <SimpleCard title="Expandable Connectors">
        <p>
            The{" "}
            <code>
                <b>expandable</b>
            </code>{" "}
            keyword can be applied to a{" "}
            <code>
                <b>connector</b>
            </code>{" "}
            to indicate that additional signals can be added (through connections) beyond those declared explicitly in
            the{" "}
            <code>
                <b>connector</b>
            </code>{" "}
            definition. <Reference id="expandable" />
        </p>
    </SimpleCard>
);

const data: TopicProps = {
    title: "Class Definitions",
    comment: (
        <Note>
            <span>
                For complete details on all the predefined types, see{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=48" target="_blank">
                    &sect;4.8
                </a>
                .
            </span>
        </Note>
    ),
    position: Position.RIGHT,
    items: [
        {
            title: (
                <span>
                    <code>extends</code> (inheritance)
                </span>
            ),
            example: extendsDescription,
        },
        { title: <code>replaceable</code>, example: replaceableDescription },
        { title: <code>redeclare</code>, example: redeclareDescription },
        { title: <code>constrainedby</code>, example: constrainedbyDescription },
        { title: <code>import</code>, example: importDescription },
        { title: <code>encapsulated</code>, comment: encapsulatedDescription },
        { title: <code>final</code>, comment: finalDescription },
        { title: <code>partial</code>, comment: partialDescription },
        { title: <code>expandable</code>, comment: expandabaleDescription },
    ],
};

export const classDefinitions = <Topic {...data} />;
