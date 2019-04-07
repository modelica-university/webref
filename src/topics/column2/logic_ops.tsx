import React from "react";
import { Topic, Note } from "../../components";

const warning = (
    <Note>
        <p>
            These role of these operators is self-explanatory. However, it is worth pointing out that the relational
            operators <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code> and <code>&gt;=</code> will generate
            events when used in conjunction with continuous time variables. More discussion of such events and how to
            avoid them can be found in{" "}
            <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=29" target="_blank">
                &sect;3.7.3
            </a>
            .
        </p>
    </Note>
);
export const logicalOperators = (
    <Topic title="Logical Operators">
        <Topic.Item
            num={0}
            of={1}
            title={
                <b>
                    <code>
                        and or not {"<>"} {"<"} {"<="} {">="}
                    </code>
                </b>
            }
            warning={warning}
        />
    </Topic>
);
