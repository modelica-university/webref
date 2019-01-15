import React from "react";
import { Topic, TopicProps } from "../components/topic";
import { Code, SimpleCard } from "../components/helpers";
import { Reference } from "./references";

const modelDescription = (
    <SimpleCard title="Canonical Model">
        <div>
            <b>
                <code>model</code>
            </b>{" "}
            <span className="typename">ModelName</span> <span className="descstr">"Descriptive String"</span>
            <br />
            <Code src="&nbsp;&nbsp;// parameters, connectors and sub-components" />
            <br />
            <code>
                &nbsp;&nbsp;<b>parameter</b> <span className="typename">TypeName</span> varName{" "}
                <span className="descstr">"Parameter declaration"</span>;
            </code>
            <br />
            <code>
                &nbsp;&nbsp;<span className="typename">ConnectorType</span> conName{" "}
                <span className="descstr">"Connector declaration"</span>;
            </code>
            <br />
            <code>
                &nbsp;&nbsp;<span className="typename">ModelType</span> subcompName{" "}
                <span className="descstr">"Sub-component declaration"</span>;
            </code>
            <br />
            <code>
                &nbsp;&nbsp;<span className="typename">SomeType</span>
                condComp <b>if</b> ...{" "}
                <span className="descstr">
                    "<Reference id="condcomp" />"
                </span>
                ;
            </code>
            <br />
            <code>
                <b>protected</b>
            </code>
            <br />
            <code>
                &nbsp;&nbsp;<span className="typename">TypeName</span> varName{" "}
                <span className="descstr">"Protected declaration"</span>;
            </code>
            <br />
            <b>
                <code id="initeqs">initial equation</code>
            </b>
            <br />
            <Code src="&nbsp;&nbsp;// Place any equations that apply only at the" />
            <br />
            <Code src="&nbsp;&nbsp;// start of a simulation here" />
            <br />
            <b>
                <code id="eqs">equation</code>
            </b>
            <br />
            <Code src="&nbsp;&nbsp;// Equations go here" />
            <br />
            <code>
                &nbsp;&nbsp;<b>annotation</b>(...);
            </code>
            <br />
            <b>
                <code>end </code>
            </b>
            <span className="typename">ModelName</span>
            <code>;</code>
        </div>
    </SimpleCard>
);

const recordDescription = (
    <SimpleCard title="Canonical Record" note={<span><code><b>record</b></code> <i>definitions cannot contain</i>
      <code><b>protected</b></code> <i>sections,</i> <code><b>equation</b></code>
      <i>sections or</i> <br/><code><b>algorithm</b></code> <i>sections</i> (<Reference id="recrest"/>)</span>}>
  <code>
     <b>record</b> <span className="typename">RecordName</span><br/>
&nbsp;&nbsp;<span className="typename">Real</span> x;<br/>
&nbsp;&nbsp;<span className="typename">Real</span> y;<br/>
<b>end</b> <span className="typename">RecordName</span>;<br/>
</code>
    </SimpleCard>
);

const connectorDescription = (
    <SimpleCard title="Connector Example" note={<span>A complete list of restrictions for the 
      <code><b>connector</b></code> class can be find in <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=42" target="_blank">&sect;4.6</a>.  More information about <code><b>expandable</b></code> connectors
      can be found in <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=94" target="_blank">&sect;9.1.3</a>.</span>
      }>
      <code>
  <span className="comment">// Typical Phyical Connector</span><br/>
  <b>connector</b> <span className="typename">ConName</span><br/>
  &nbsp;&nbsp;<span className="typename">Real</span> acrossVar;<br/>
  &nbsp;&nbsp;<b>flow</b> <span className="typename">Real</span> throughVar;<br/>
  <b>end</b> <span className="typename">ConName</span>;<br/>
  <br/>
  <span className="comment">// Causal Connector</span><br/>
  <b>connector</b> <span className="typename">ConName</span> = <b>input</b> <span className="typename">Real</span>;<br/>
  <br/>
  <span className="comment">// Expandable Connector</span><br/>
  <b>expandable</b> <b>connector</b> <span className="typename">ConName</span><br/>
  &nbsp;&nbsp;<span className="comment">// Minimum connector elements</span><br/>
  &nbsp;&nbsp;<b>input</b> <span className="typename">Real</span> alwaysPresent;<br/>
  <b>end</b> <span className="typename">ConName</span>;<br/>
  <br/>
</code>

    </SimpleCard>
);

const blockDescription = (
    <SimpleCard title="Canonical Block" note={<span>
      <i>a</i> <code><b>block</b></code> <i>is just like
      a</i> <code><b>model</b></code> <i>except that all connector instances
      (or their constituents) must have
      either</i> <code><b>input</b></code> <i>or</i> <code><b>output</b></code>
      {" "}<i>qualifiers.
      </i>
    </span>}>
        <div>	  <b><code>block</code></b> <span className="typename">BlockName</span> <span className="descstr">"Descriptive String"</span>
<br/>
<code className="comment">&nbsp;&nbsp;// parameters, connectors and sub-compoennts</code>
<br/>
<code>&nbsp;&nbsp;<b>parameter</b> <span className="typename">TypeName</span>   varName <span className="descstr">"Parameter declaration"</span>;</code><br/>
<code>&nbsp;&nbsp;<b>input</b> <span className="typename">ConnectorType</span>   conName <span className="descstr">"Connector declaration"</span>;</code><br/>
<code>&nbsp;&nbsp;<span className="typename">ModelType</span>   subcompName <span className="descstr">"Sub-component declaration"</span>;</code>
<br/>
<code><b>protected</b></code><br/>
<code>&nbsp;&nbsp;<span className="typename">TypeName</span>   varName <span className="descstr">"Protected declaration"</span>;</code><br/>
<b><code id="initeqs">initial equation</code></b>
<br/>
<code><span className="comment">
&nbsp;&nbsp;// Place any equations that apply only at the
<br/>
&nbsp;&nbsp;// start of a simulation here</span></code>
<br/>
<b><code id="eqs">equation</code></b><br/>
<code><span className="comment">
&nbsp;&nbsp;// Equations go here
</span>
</code>
<br/>
<code>&nbsp;&nbsp;<b>annotation</b>(...);</code>
<br/>
<b><code>end </code></b><span className="typename">BlockName</span><code>;</code></div>
    </SimpleCard>
);

const typeDescription = (
    <SimpleCard title="Type Examples">
        <div> <code><span className="comment">// Extending built-in types</span></code><br/>
<code><b>type</b> <span className="typename">Pressure</span> = <span className="typename">Real</span>(unit="Pa");</code><br/>
<br/>
<code><span className="comment">// Creating enumerated types</span></code><br/>
<code><b>type</b> <span className="typename">AssertionLevel</span> = <b>enumeration</b>(warning, error);</code><br/>
<br/>
<code><span className="comment">// Named type for arrays</span></code><br/>
<code><b>type</b> <span className="typename">Point</span> = <span className="typename">Real</span>[3];</code></div>
    </SimpleCard>
);

const packageDescription = (
  <SimpleCard title="Canonical Package" note={<Reference id="pkgs"/>}>
        <code>
<b>within</b> <span className="typename">ParentPackage</span>; <span className="comment">// <b>within</b>; for top-level packages</span><br/>
<b>package</b> <span className="typename">PackageName</span> <span className="descstr">"Package description"</span><br/>
&nbsp;&nbsp;<span className="comment">// The fully qualified name for this package</span><br/>
&nbsp;&nbsp;<span className="comment">// will be PackageName.NestedPackage</span><br/>
&nbsp;&nbsp;<b>package</b> <span className="typename">NestedPackage</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">// Package contents</span><br/>
&nbsp;&nbsp;<b>end</b> <span className="typename">NestedPackage</span>;<br/>
&nbsp;&nbsp;<br/>
&nbsp;&nbsp;<span className="comment">// The fully qualified name for this model</span><br/>
&nbsp;&nbsp;<span className="comment">// will be PackageName.SomeModel</span><br/>
&nbsp;&nbsp;<b>model</b> <span className="typename">SomeModel</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;...<br/>
&nbsp;&nbsp;<b>end</b> <span className="typename">SomeModel</span>;<br/><br/>
&nbsp;&nbsp;<b>annotation</b>(version="1.0", <span className="comment">// This package's version number,</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">// if it is a top-level package</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">// Set of packages this package depends on</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uses(AnotherPackageName(version="2.0"),<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YetAnother(version="1.2")));<br/>
<b>end</b> <span className="typename">PackageName</span>;
</code>
    </SimpleCard>
);

const functionDescription = (
    <SimpleCard title="Canonical Function" note={<Reference id="funcs"/>}>
        <code>
<b>function</b> <span className="typename">FunctionName</span> <span className="descstr">"Function description"</span><br/>
&nbsp;&nbsp;<b>input</b> Real a;<br/>
&nbsp;&nbsp;<b>input</b> Integer b;<br/>
&nbsp;&nbsp;<b>output</b> Boolean c;<br/>
<b>algorithm</b><br/>
&nbsp;&nbsp;<span className="comment">// Whatever value the <b>output</b> variables have after the</span><br/>
&nbsp;&nbsp;<span className="comment">// <b>algorithm</b> section is completed or when a <b>return</b> statement</span><br/>
&nbsp;&nbsp;<span className="comment">// is encountered will be returned as the output values.</span><br/>
<b>end</b> <span className="typename">FunctionName</span>;
</code>

    </SimpleCard>
);

const data: TopicProps = {
    title: "Specialized Classes",
    items: [
        { title: <code>model</code>, example: modelDescription },
        { title: <code>record</code>, example: recordDescription },
        { title: <code>connector</code>, example: connectorDescription },
        { title: <code>block</code>, example: blockDescription },
        { title: <code>type</code>, example: typeDescription },
        { title: <code>package</code>, example: packageDescription },
        { title: <code>function</code>, example: functionDescription },
    ],
};

export const specializedClasses = <Topic {...data} />;
