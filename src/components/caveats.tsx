import { Popover, Card } from "@blueprintjs/core";
import { warningIcon, commentIcon, exampleIcon } from "./icons";
import { SimpleCard } from "./helpers";

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
        <div style={{ float: "right", cursor: "pointer" }}>
            {props.caveats.warning && (
                <div>
                    <Popover
                        content={
                            <ContentWrapper>
                                <SimpleCard title="Warning">{props.caveats.warning}</SimpleCard>
                            </ContentWrapper>
                        }
                        target={warningIcon}
                    />
                </div>
            )}
            {props.caveats.comment && (
                <div>
                    <Popover
                        content={
                            <ContentWrapper>
                                <SimpleCard title="Comment">{props.caveats.comment}</SimpleCard>
                            </ContentWrapper>
                        }
                        target={commentIcon}
                    />
                </div>
            )}
            {props.caveats.example && (
                <div>
                    <Popover
                        content={
                            <ContentWrapper>
                                <SimpleCard title="Example">{props.caveats.example}</SimpleCard>
                            </ContentWrapper>
                        }
                        target={exampleIcon}
                    />
                </div>
            )}
        </div>
    );
};
