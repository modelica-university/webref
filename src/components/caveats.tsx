import { Popover, Card } from "@blueprintjs/core";
import { warningIcon, commentIcon, exampleIcon } from "./icons";

export interface Caveats {
    warning?: JSX.Element;
    comment?: JSX.Element;
    example?: JSX.Element;
}

export interface IconSetProps {
    caveats: Caveats;
}

const ContentWrapper = (props: { children: JSX.Element }) => {
    return <Card style={{ padding: 0 }}>{props.children}</Card>;
};

export const IconSet = (props: IconSetProps) => {
    return (
        <div style={{ display: "flex", float: "right", cursor: "pointer" }}>
            {props.caveats.warning && (
                <div>
                    <Popover content={<ContentWrapper>{props.caveats.warning}</ContentWrapper>} target={warningIcon} />
                </div>
            )}
            {props.caveats.comment && (
                <div>
                    <Popover content={<ContentWrapper>{props.caveats.comment}</ContentWrapper>} target={commentIcon} />
                </div>
            )}
            {props.caveats.example && (
                <div>
                    <Popover content={<ContentWrapper>{props.caveats.example}</ContentWrapper>} target={exampleIcon} />
                </div>
            )}
        </div>
    );
};
