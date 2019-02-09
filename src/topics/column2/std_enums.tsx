import React from "react";
import { Topic } from "../../components/topic";

const assertionLevel = (
  <div style={{padding: 5}}>
  <code><span className="comment">// From <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=86" target="_blank">&sect;8.3.7</a></span></code><br/>
  <code><b>type</b> <span className="typename">AssertionLevel</span> = <b>enumeration</b>(warning, error);</code>
  </div>
);

const stateSelect = (
  <div style={{padding: 5}}>
  <code><span className="comment">// From <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=52" target="_blank">&sect;4.8.8.1</a></span></code><br/>
  <code><b>type</b> <span className="typename">StateSelect</span> = <b>enumeration</b>(never, avoid, default, prefer, always);</code>
  </div>
)
export const standardEnumerations = (
    <Topic title="Standard Enumerations">
        <Topic.Item
            title={
                <b>
                    <code>AssertionLevel</code>
                </b>
            }
            comment={assertionLevel}
        />
        <Topic.Item
            title={
                <b>
                    <code>StateSelect</code>
                </b>
            }
            comment={stateSelect}
        />
    </Topic>
);
