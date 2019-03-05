import React from "react";
import { Topic } from "../../components/topic";

const comment = (
    <div style={{ padding: 5 }}>
        <p className="seminarrow">
            Explanations for these functions can be found in{" "}
            <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=20" target="_blank">
                &sect;3.7.1
            </a>
            .
        </p>
    </div>
);
export const conversionFunctions = (
    <Topic title="Numeric and Conversion Functions">
        <Topic.Item
            num={0}
            of={1}
            title={
                <b>
                    <code>abs sign sqrt Integer String</code>
                </b>
            }
            comment={comment}
        />
    </Topic>
);
