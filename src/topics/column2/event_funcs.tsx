import React from "react";
import { Topic } from "../../components/topic";

const comment = (
    <div style={{ padding: 5 }}>
        <p className="seminarrow">
            The functions shown here <b>generate events</b>. More information about these functions can be found in{" "}
            <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=21" target="_blank">
                &sect;3.7.1.1
            </a>{" "}
            along with information about how to use the <code>noEvent</code> operator to suppress event generation.
        </p>
    </div>
);
export const eventFunctions = (
    <Topic title="Event Generating Functions">
        <Topic.Item
            title={
                <b>
                    <code>ceil div fill floor integer max min mod rem</code>
                </b>
            }
            comment={comment}
        />
    </Topic>
);
