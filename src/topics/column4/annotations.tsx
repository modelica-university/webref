import React from "react";
import { Topic, TopicProps, Note, SimpleCard } from "../../components";

export const choices = (
    <table className="table">
        <tr>
            <th>Explicit values for a variable</th>
        </tr>
        <tr>
            <td>
                <code>
                    <b>parameter</b> <code className="typename">Integer</code> x<br />
                    &nbsp;&nbsp;<b>annotation</b>(choices(choice=3 "Desc", choice=5 "Desc"));
                </code>
                <br />
            </td>
        </tr>
        <tr>
            <th>Explicit redeclarations</th>
        </tr>
        <tr>
            <td>
                <code>
                    <b>replaceable</b> model <code className="typename">Resistor</code> Load(R=2) <b>constrainedby</b>{" "}
                    <code className="typename">TwoPin</code>
                    <br />
                    &nbsp;&nbsp;<b>annotation</b>(choices(
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;choice(
                    <b>redeclare</b> <code className="typename">ThermalResistor</code> Load(R=2,T0=273)),
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;choice(
                    <b>redeclare</b> <code className="typename">Capacitor</code> Load(C=2e-3))));
                    <br />
                </code>
            </td>
        </tr>
    </table>
);
export const defaultComponentName = (
    <Note>
        <p>
            The <code>defaultComponentName</code> annotation allows a default name to be associated with a given
            definition. When dragging new instances of a given definition into a diagram, the string associated with the{" "}
            <code>defaultComponentName</code> should be used as the basis for the initial instance name.
        </p>
    </Note>
);
export const defaultComponentPrefixes = (
    <Note>
        <p>
            The <code>defaultComponentPrefixes</code> annotation allows a default set of prefixes to be associated with
            a given definition. When dragging new instances of a given definition into a diagram, these prefixes should
            automatically be applied to the new instance.
        </p>
    </Note>
);
export const derivative = (
    <table className="table">
        <tr>
            <th>A normal single argument function</th>
        </tr>
        <tr>
            <td>
                <code>
                    <b>function</b> <code className="typename">f0</code>
                    <br />
                    &nbsp;&nbsp;<b>input</b> <code className="typename">Real</code> x;
                    <br />
                    &nbsp;&nbsp;<b>output</b> <code className="typename">Real</code> y;
                    <br />
                    <b>algorithm</b>
                    <br />
                    &nbsp;&nbsp;...
                    <br />
                    &nbsp;&nbsp;<b>annotation</b>(derivative=f1);
                    <br />
                    <b>end</b> <code className="typename">f0</code>;
                </code>
            </td>
        </tr>
        <tr>
            <th>
                Definition of the first derivative of <code className="typename">f0</code>
            </th>
        </tr>
        <tr>
            <td>
                <code>
                    <b>function</b> <code className="typename">f1</code>
                    <br />
                    &nbsp;&nbsp;<b>input</b> <code className="typename">Real</code> x;
                    <br />
                    &nbsp;&nbsp;<b>input</b> <code className="typename">Real</code> der_x;
                    <br />
                    &nbsp;&nbsp;<b>output</b> <code className="typename">Real</code> der_y;
                    <br />
                    <b>algorithm</b>
                    <br />
                    &nbsp;&nbsp;...
                    <br />
                    <b>end</b> <code className="typename">f1</code>;
                </code>
            </td>
        </tr>
    </table>
);
export const dialog = (
    <div>
        <table className="table">
            <tr>
                <th>Definition</th>
            </tr>
            <tr>
                <td>
                    <code>
                        <b>record</b> <code className="typename">Dialog</code>
                        <br />
                        &nbsp;&nbsp;<b>parameter</b> <code className="typename">String</code> &nbsp;tab = "General";
                        <br />
                        &nbsp;&nbsp;<b>parameter</b> <code className="typename">String</code> &nbsp;group =
                        "Parameters";
                        <br />
                        &nbsp;&nbsp;<b>parameter</b> <code className="typename">Boolean</code> enable = <b>true</b>;
                        <br />
                        &nbsp;&nbsp;<b>parameter</b> <code className="typename">Boolean</code> showStartAttribute ={" "}
                        <b>false</b>;<br />
                        &nbsp;&nbsp;<b>parameter</b> <code className="typename">String</code> &nbsp;groupImage = "";
                        <br />
                        &nbsp;&nbsp;<b>parameter</b> <code className="typename">Boolean</code> connectorSizing ={" "}
                        <b>false</b>;<br />
                        <b>end</b> <code className="typename">Dialog</code>;
                    </code>
                </td>
            </tr>
        </table>
        <Note>
            <p>
                A detailed description of each field in the <code>Dialog</code> annotation can be found in{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=225" target="_blank">
                    &sect;18.7
                </a>
                .
            </p>
        </Note>
    </div>
);
export const documentation = (
    <div style={{ padding: 5, maxWidth: "86vw" }}>
        <div>
            <code>
                <b>annotation</b>(Documentation(info="&lt;html&gt;...&lt;/html&gt;",
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;revisions="..."));
            </code>
            <br />
            <br />
            <div>
                <div>
                    <p>
                        <b>Note:</b> Within the <code>&lt;html&gt;</code> tags, it is possible to use "Modelica URIs" of
                        the form:
                    </p>
                    <ul>
                        <li>
                            <code>Modelica://Fully.Qualfied.Name#layer</code>: Where layer can be one of{" "}
                            <code>diagram</code>, <code>info</code>, <code>text</code>
                            or <code>icon</code>.
                        </li>
                        <li>
                            <code>Modelica://Fully.Qualfied.Name/dir/path/filename</code>: Where <code>dir/path</code>{" "}
                            is a directory structure starting at the point where the package{" "}
                            <code>Fully.Qualified.Name</code> is stored and <code>filename</code> is a file in that
                            directory.
                        </li>
                    </ul>
                    <p>
                        Complete documentation for the <code>Documentation</code>
                        annotation can be found in{" "}
                        <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=214" target="_blank">
                            &sect;18.2
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    </div>
);
export const dynamicSelect = (
    <table className="table">
        <tr>
            <th>Syntax</th>
        </tr>
        <tr>
            <td>
                <code>DynamicSelect(val1, val2)</code>
            </td>
        </tr>
        <tr>
            <th>Explanation</th>
        </tr>
        <tr>
            <td>
                <p>
                    The <code>DynamicSelect</code> annotation can be used as a value in any graphical annotation. The
                    first argument must be a literal expression (no variables) and the second argument can reference
                    variables. Tools can then use the second expression in contexts (<i>e.g.,</i> when simulation
                    results are available) to adjust the graphical representation according to the values of the
                    variables.
                </p>
            </td>
        </tr>
    </table>
);
export const evaluate = (
    <Note>
        <div>
            <p>
                When applied to a{" "}
                <code>
                    <b>parameter</b>
                </code>
                , the <code>Evaluation</code> annotation indicates that the user does not intend to modify the value of
                the parameter between simulations. As a result, some potentially significant symbolic optimizations can
                often be made.
            </p>
            <p>
                See{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=214" target="_blank">
                    &sect;18.3
                </a>{" "}
                for more details.
            </p>
        </div>
    </Note>
);
export const experiment = (
    <SimpleCard
        title="Definition"
        note={
            <div>
                <p>
                    <code>StartTime</code>, <code>StopTime</code> and <code>Interval</code> are all assumed to have
                    units of seconds.
                </p>
                <p>
                    See{" "}
                    <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=215" target="_blank">
                        &sect;18.4
                    </a>{" "}
                    for more details.
                </p>
            </div>
        }
    >
        <code>
            <b>record</b> <code className="typename">experiment</code>
            <br />
            &nbsp;&nbsp;<b>parameter</b> <code className="typename">Real</code> StartTime;
            <br />
            &nbsp;&nbsp;<b>parameter</b> <code className="typename">Real</code> StopTime;
            <br />
            &nbsp;&nbsp;<b>parameter</b> <code className="typename">Real</code> Interval;
            <br />
            &nbsp;&nbsp;<b>parameter</b> <code className="typename">Real</code> Tolerance;
            <br />
            <b>end</b> <code className="typename">experiment</code>;
        </code>
    </SimpleCard>
);
export const generateEvents = (
    <Note>
        <div>
            <p>
                When the <code>GenerateEvents</code> annotation is associated with a function definition and given a
                value of{" "}
                <code>
                    <b>true</b>
                </code>
                , this indicates that expressions in the function should generate events (<i>e.g.,</i> as if they
                appeared in an{" "}
                <code>
                    <b>equation</b>
                </code>{" "}
                section).
            </p>
            <p>
                See{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=214" target="_blank">
                    &sect;18.3
                </a>{" "}
                for more details.
            </p>
        </div>
    </Note>
);
export const hideResult = (
    <div>
        <p>
            When applied to a variable declaration, the <code>HideResult</code> annotation indicates that the user does
            not wish to view this variable among the simulation results.
        </p>
        <p>
            See{" "}
            <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=214" target="_blank">
                &sect;18.3
            </a>{" "}
            for more details.
        </p>
    </div>
);
export const inline = (
    <Note>
        <div>
            <p>
                When the <code>Inline</code> annotation is associated with a function definition and given a value of{" "}
                <code>
                    <b>true</b>
                </code>
                , this indicates that the function should be inlined prior to symbolic manipulation.
            </p>
            <p>
                See{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=214" target="_blank">
                    &sect;18.3
                </a>{" "}
                for more details.
            </p>
        </div>
    </Note>
);
export const inverse = (
    <Note>
        <code>
            <b>function</b> <code className="typename">f</code>
            <br />
            &nbsp;&nbsp;<b>input</b> <code className="typename">T1</code> u1;
            <br />
            &nbsp;&nbsp;<b>input</b> <code className="typename">T2</code> u2;
            <br />
            &nbsp;&nbsp;<b>output</b> <code className="typename">R</code> y;
            <br />
            <b>algorithm</b>
            <br />
            &nbsp;&nbsp;...
            <br />
            &nbsp;&nbsp;<b>annotation</b>(inverse(u1=fi1(u2,y),
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;u2=fi2(u1,
            y)));
            <br />
            <b>end</b> <code className="typename">f</code>;
        </code>
    </Note>
);
export const lateInline = (
    <Note>
        <div>
            <p>
                When the <code>LateInline</code> annotation is associated with a function definition and given a value
                of{" "}
                <code>
                    <b>true</b>
                </code>
                , this indicates that the function should be inlined during the code generation process, but not before
                symbolic manipulation has been performed.
            </p>
            <p>
                See{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=214" target="_blank">
                    &sect;18.3
                </a>{" "}
                for more details.
            </p>
        </div>
    </Note>
);
export const missingInnerMessage = (
    <Note>
        <div>
            <code>
                <b>annotation</b>(missingInnerMessage="...");
            </code>
            <br />
            <br />
            <p>
                This annotation allows a tool to provide a customized message when an{" "}
                <code>
                    <b>outer</b>
                </code>{" "}
                declaration cannot find a matching{" "}
                <code>
                    <b>inner</b>
                </code>
                . This allows library developers to provide more specific and meaningful diagnostics to users.
            </p>
            <p>
                See{" "}
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=224" target="_blank">
                    &sect;18.7
                </a>{" "}
                for more details.
            </p>
        </div>
    </Note>
);
export const preferredView = (
    <Note>
        <div>
            <p>
                In a definition, the <code>preferredView</code> annotation can be given the values <code>"info"</code>,{" "}
                <code>"diagram"</code>
                or <code>"text"</code> to indicate which particular view makes the most sense as the default view for
                that definition (see
                <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=214" target="_blank">
                    &sect;18.2
                </a>
                ).
            </p>
        </div>
    </Note>
);
export const smoothOrder = (
    <Note>
        <p>
            In a function definition, the <code>smoothOrder</code>
            annotation indicates how many times the function can be differentiated and still have continuous outputs.
            <br />
            <br />
            See{" "}
            <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=215" target="_blank">
                &sect;18.3
            </a>{" "}
            for complete details.
        </p>
    </Note>
);
export const unassignedMessage = (
    <Note>
        <p>
            If the <code>unassignedMessage</code> annotation is associated with a variable, then the value of the
            annotation (which must be a <code className="typename">String</code>) will be used as a diagnostic message
            to the user if the structural analysis of the problem does not yield an equation to compute that variable.
            <br />
            <br />
            See{" "}
            <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=224" target="_blank">
                &sect;18.7
            </a>{" "}
            for complete details.
        </p>
    </Note>
);
export const version = (
    <Note>
        <p>
            Within a top-level package, the <code>version</code> annotation is used to indicate the version number for
            that package. This is used to distinguish between multiple versions when they are available.
            <br />
            <br />
            See{" "}
            <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=228" target="_blank">
                &sect;18.8.2
            </a>{" "}
            for more details about version handling.
        </p>
    </Note>
);

const data: TopicProps = {
    title: "Statements",
    items: [
        {
            title: <code>choices</code>,
            example: choices,
        },
        {
            title: <code>defaultComponentName</code>,
            example: defaultComponentName,
        },
        {
            title: <code>defaultComponentPrefixes</code>,
            example: defaultComponentPrefixes,
        },
        {
            title: <code>derivative</code>,
            example: derivative,
        },
        {
            title: <code>Dialog</code>,
            example: dialog,
        },
        {
            title: <code>Documentation</code>,
            example: documentation,
        },
        {
            title: <code>DynamicSelect</code>,
            example: dynamicSelect,
        },
        {
            title: <code>Evaluate</code>,
            example: evaluate,
        },
        {
            title: <code>experiment</code>,
            example: experiment,
        },
        {
            title: <code>GenerateEvents</code>,
            example: generateEvents,
        },
        {
            title: <code>HideResult</code>,
            example: hideResult,
        },
        {
            title: <code>Inline</code>,
            example: inline,
        },
        {
            title: <code>inverse</code>,
            example: inverse,
        },
        {
            title: <code>LateInline</code>,
            example: lateInline,
        },
        {
            title: <code>missingInnerMessage</code>,
            example: missingInnerMessage,
        },
        {
            title: <code>preferredView</code>,
            example: preferredView,
        },
        {
            title: <code>smoothOrder</code>,
            example: smoothOrder,
        },
        {
            title: <code>unassignedMessage</code>,
            example: unassignedMessage,
        },
        {
            title: <code>version</code>,
            example: version,
        },
    ],
};

export const standardAnnotations = <Topic {...data} />;
