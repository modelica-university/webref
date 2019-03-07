import React from "react";
import { Topic, Reference, Note } from "../../components";

const realAttributes = (
    <div style={{ maxWidth: "85vw" }}>
        <table style={{ width: "100%" }} className="table table-striped">
            <tbody>
                <tr>
                    <th>Attribute</th>
                    <th>
                        <span className="pull-right">Type</span>
                    </th>
                    <th>
                        &nbsp;&nbsp;<span className="pull-right">Default</span>
                    </th>
                </tr>

                <tr>
                    <td>
                        <code>unit:</code>
                    </td>
                    <td>
                        <code>
                            <span className="pull-right typename">String</span>
                        </code>
                    </td>
                    <td>
                        <code>
                            <span className="pull-right">""</span>
                        </code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code>displayUnit:</code>
                    </td>
                    <td>
                        <code>
                            <span className="pull-right typename">String</span>
                        </code>
                    </td>
                    <td>
                        <code>
                            <span className="pull-right">""</span>
                        </code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code>nominal:</code>
                    </td>
                    <td>
                        <code>
                            <span className="pull-right typename">Real</span>
                        </code>
                    </td>
                    <td />
                </tr>
                <tr>
                    <td>
                        <code>stateSelect:&nbsp;&nbsp;</code>
                    </td>
                    <td>
                        <code>
                            <span className="pull-right typename">StateSelect</span>
                        </code>
                    </td>
                    <td>
                        <code>
                            <span className="pull-right">&nbsp;default</span>
                        </code>
                    </td>
                </tr>

                <tr>
                    <td>
                        <code>min:</code>
                    </td>
                    <td>
                        <code>
                            <span className="pull-right typename">Real</span>
                        </code>
                    </td>
                    <td>
                        <span className="pull-right">&nbsp;-infinity</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code>max:</code>
                    </td>
                    <td>
                        <code>
                            <span className="pull-right typename">Real</span>
                        </code>
                    </td>
                    <td>
                        <span className="pull-right">&nbsp;-infinity</span>
                    </td>
                </tr>

                <tr>
                    <td>
                        <code>fixed:</code>
                    </td>
                    <td>
                        <code>
                            <span className="pull-right typename">Boolean</span>
                        </code>
                    </td>
                    <td>
                        <span className="pull-right">
                            &nbsp;<code>false</code>
                            <sup>*</sup>
                        </span>
                    </td>
                </tr>

                <tr>
                    <td>
                        <code>quantity:&nbsp;&nbsp;</code>
                    </td>
                    <td>
                        <code>
                            <span className="pull-right typename">String</span>
                        </code>
                    </td>
                    <td>
                        <code>
                            <span className="pull-right">&nbsp;""</span>
                        </code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code>start:</code>
                    </td>
                    <td>
                        <code>
                            <span className="pull-right typename">Real</span>
                        </code>
                    </td>
                    <td>
                        <code>
                            <span className="pull-right">&nbsp;0.0</span>
                        </code>
                    </td>
                </tr>
            </tbody>
        </table>
        <div style={{ padding: 5 }} className="footnote">
            <b>Units Examples:</b>&nbsp; "<code className="op">N.m</code>" "<code className="op">J/(kg.K)</code>" "
            <code className="op">m/s</code>" "<code className="op">mm2</code>" "<code className="op">m.s-2</code>" (
            <Reference id="units" />)
        </div>
    </div>
);

const booleanAttributes = (
    <table className="table table-striped">
        <tbody>
            <tr>
                <th>Attribute</th>
                <th>
                    <span className="pull-right">Type</span>
                </th>
                <th>
                    &nbsp;&nbsp;<span className="pull-right">Default</span>
                </th>
            </tr>

            <tr>
                <td>
                    <code>fixed:</code>
                </td>
                <td>
                    <code>
                        <span className="pull-right typename">Boolean</span>
                    </code>
                </td>
                <td>
                    <span className="pull-right">
                        &nbsp;<code>false</code>
                        <sup>*</sup>
                    </span>
                </td>
            </tr>

            <tr>
                <td>
                    <code>quantity:&nbsp;&nbsp;</code>
                </td>
                <td>
                    <code>
                        <span className="pull-right typename">String</span>
                    </code>
                </td>
                <td>
                    <code>
                        <span className="pull-right">&nbsp;""</span>
                    </code>
                </td>
            </tr>
            <tr>
                <td>
                    <code>start:</code>
                </td>
                <td>
                    <code>
                        <span className="pull-right typename">Boolean</span>
                    </code>
                </td>
                <td>
                    <code>
                        <span className="pull-right">&nbsp;false</span>
                    </code>
                </td>
            </tr>
        </tbody>
    </table>
);

const externalObject = (
    <Note>
        <div>
            <p>
                External objects are used to refer (opaquely) to data or information outside the scope of the Modelica
                language. That are initialized through{" "}
                <code>
                    <b>external</b>
                </code>
                functions and can be passed back to{" "}
                <code>
                    <b>external</b>
                </code>
                functions.
            </p>
            <p>
                More information about the <code className="typename">ExternalObject</code>
                type can be found in{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=159" target="_blank">
                    &sect;12.9.7
                </a>
                .
            </p>
        </div>
    </Note>
);

const enumerations = (
    <div>
        <table className="table">
            <tbody>
                <tr>
                    <th colSpan={2}>Syntax</th>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <code>
                            <b>type</b> <span className="typename">E</span> = <b>enumeration</b>(e1, ..., en);
                        </code>
                    </td>
                </tr>
                <tr>
                    <th>Attributes</th>
                    <th>Conversions</th>
                </tr>
                <tr>
                    <td>
                        <code>
                            <span className="typename">E</span>.e1
                        </code>
                        , ...,
                        <code>
                            <span className="typename">E</span>.en
                        </code>
                        <br />
                        <code>
                            <span className="typename">E</span>.start=e1
                        </code>
                        <br />
                        <code>
                            <span className="typename">E</span>.min=e1
                        </code>
                        ,
                        <br />
                        <code>
                            <span className="typename">E</span>.max=en
                        </code>
                    </td>
                    <td>
                        <code>
                            Integer(<span className="typename">E</span>.e1)=1
                        </code>
                        <br />
                        <code>
                            Integer(<span className="typename">E</span>.en)=n
                        </code>
                        <br />
                        <code>
                            String(<span className="typename">E</span>.e1)="e1"
                        </code>
                    </td>
                </tr>
                <tr>
                    <th colSpan={2}>Examples</th>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <code>
                            <b>type</b> <span className="typename">AssertionLevel</span> = <b>enumeration</b>(warning,
                            error);
                        </code>
                        <br />
                        <code>
                            <b>type</b> <span className="typename">StateSelect</span> = <b>enumeration</b>(never, avoid,
                            default, prefer, always);
                        </code>
                        <br />
                    </td>
                </tr>
            </tbody>
        </table>
        <div style={{ padding: 5 }} className="footnote">
            Complete details on enumerations can be found in{" "}
            <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=50" target="_blank">
                &sect;4.8.5
            </a>
        </div>
    </div>
);

const stringAttributes = (
    <table className="table table-striped">
        <tbody>
            <tr>
                <th>Attribute</th>
                <th>
                    <span className="pull-right">Type</span>
                </th>
                <th>
                    &nbsp;&nbsp;<span className="pull-right">Default</span>
                </th>
            </tr>

            <tr>
                <td>
                    <code>quantity:&nbsp;&nbsp;</code>
                </td>
                <td>
                    <code>
                        <span className="pull-right typename">String</span>
                    </code>
                </td>
                <td>
                    <code>
                        <span className="pull-right">&nbsp;""</span>
                    </code>
                </td>
            </tr>
            <tr>
                <td>
                    <code>start:</code>
                </td>
                <td>
                    <code>
                        <span className="pull-right typename">String</span>
                    </code>
                </td>
                <td>
                    <code>
                        <span className="pull-right">&nbsp;""</span>
                    </code>
                </td>
            </tr>
        </tbody>
    </table>
);

const integerAttributes = (
    <table className="table table-striped">
        <tbody>
            <tr>
                <th>Attribute</th>
                <th>
                    <span className="pull-right">Type</span>
                </th>
                <th>
                    &nbsp;&nbsp;<span className="pull-right">Default</span>
                </th>
            </tr>

            <tr>
                <td>
                    <code>min:</code>
                </td>
                <td>
                    <code>
                        <span className="pull-right typename">Integer</span>
                    </code>
                </td>
                <td>
                    <span className="pull-right">&nbsp;-infinity</span>
                </td>
            </tr>
            <tr>
                <td>
                    <code>max:</code>
                </td>
                <td>
                    <code>
                        <span className="pull-right typename">Integer</span>
                    </code>
                </td>
                <td>
                    <span className="pull-right">&nbsp;-infinity</span>
                </td>
            </tr>

            <tr>
                <td>
                    <code>fixed:</code>
                </td>
                <td>
                    <code>
                        <span className="pull-right typename">Boolean</span>
                    </code>
                </td>
                <td>
                    <span className="pull-right">
                        &nbsp;<code>false</code>
                        <sup>*</sup>
                    </span>
                </td>
            </tr>

            <tr>
                <td>
                    <code>quantity:&nbsp;&nbsp;</code>
                </td>
                <td>
                    <code>
                        <span className="pull-right typename">String</span>
                    </code>
                </td>
                <td>
                    <code>
                        <span className="pull-right">&nbsp;""</span>
                    </code>
                </td>
            </tr>
            <tr>
                <td>
                    <code>start:</code>
                </td>
                <td>
                    <code>
                        <span className="pull-right typename">Integer</span>
                    </code>
                </td>
                <td>
                    <code>
                        <span className="pull-right">&nbsp;0</span>
                    </code>
                </td>
            </tr>
        </tbody>
    </table>
);
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
            num={0}
            of={6}
            title={
                <b>
                    <code>Real</code>
                </b>
            }
            comment={realAttributes}
        />
        <Topic.Item
            num={1}
            of={6}
            title={
                <b>
                    <code>Integer</code>
                </b>
            }
            comment={integerAttributes}
        />
        <Topic.Item
            num={2}
            of={6}
            title={
                <b>
                    <code>Boolean</code>
                </b>
            }
            comment={booleanAttributes}
        />
        <Topic.Item
            num={3}
            of={6}
            title={
                <b>
                    <code>String</code>
                </b>
            }
            comment={stringAttributes}
        />
        <Topic.Item
            num={4}
            of={6}
            title={
                <b>
                    <code>enumeration</code>
                </b>
            }
            comment={enumerations}
        />
        <Topic.Item
            num={5}
            of={6}
            title={
                <b>
                    <code>ExternalObject</code>
                </b>
            }
            comment={externalObject}
        />
    </Topic>
);
