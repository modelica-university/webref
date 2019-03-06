import React from "react";
import { Topic, Note } from "../../components";

const comment = (
    <Note>
        <p>
            The functions shown here <b>generate events</b>. More information about these functions can be found in{" "}
            <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=21" target="_blank">
                &sect;3.7.1.1
            </a>{" "}
            along with information about how to use the <code>noEvent</code> operator to suppress event generation.
        </p>
    </Note>
);
export const eventFunctions = (
    <Topic title="Event Generating Functions">
        <Topic.Item
            num={0}
            of={1}
            title={
                <b>
                    <code>ceil div fill floor integer max min mod rem</code>
                </b>
            }
            comment={comment}
        />
    </Topic>
);
