import { Popover } from "@blueprintjs/core";
import { warningIcon, commentIcon, exampleIcon } from "./icons";

export interface Caveats {
    warning?: JSX.Element;
    comment?: JSX.Element;
    example?: JSX.Element;
}

export interface IconSetProps {
    caveats: Caveats;
}

export const IconSet = (props: IconSetProps) => {
    return (
        <div style={{ float: "right", cursor: "pointer" }}>
            {props.caveats.warning && (
                <div>
                    <Popover content={props.caveats.warning} target={warningIcon} />
                </div>
            )}
            {props.caveats.comment && (
                <div>
                    <Popover content={props.caveats.comment} target={commentIcon} />
                </div>
            )}
            {props.caveats.example && (
                <div>
                    <Popover content={props.caveats.example} target={exampleIcon} />
                </div>
            )}
        </div>
    );
};
