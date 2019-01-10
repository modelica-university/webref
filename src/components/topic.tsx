import { Popover, Icon, Elevation, Card } from "@blueprintjs/core";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { searchContext } from "../components/context";

export interface TopicProps {
    title: string | JSX.Element;
}

export interface TopicItemProps {
    title: string | JSX.Element;
    warning?: JSX.Element;
    comment?: JSX.Element;
    example?: JSX.Element;
}

function contains(elem: JSX.Element, term: string): boolean {
    const html = ReactDOMServer.renderToStaticMarkup(elem);
    if (html.toLowerCase().includes(term.toLowerCase())) {
        return true;
    }
}
function isVisible(item: TopicItem, term: string): boolean {
    if (term === "") return true;
    if (typeof item.props.title === "string") {
        if (item.props.title.toLowerCase().includes(term.toLowerCase())) return true;
    } else {
        if (contains(item.props.title, term)) return true;
    }
    if (item.props.warning && contains(item.props.warning, term)) return true;
    if (item.props.example && contains(item.props.example, term)) return true;
    if (item.props.comment && contains(item.props.comment, term)) return true;
    return false;
}
export class TopicItem extends React.Component<TopicItemProps> {
    render() {
        return (
            <searchContext.Consumer>
                {state =>
                    isVisible(this, state.search) && (
                        <div style={{ margin: "2px" }}>
                            {this.props.title}
                            {this.props.warning && (
                                <div style={{ float: "right" }}>
                                    <Popover
                                        content={this.props.warning}
                                        target={
                                            <Icon style={{ marginLeft: "4px", color: "red" }} icon="warning-sign" />
                                        }
                                    />
                                </div>
                            )}
                            {this.props.comment && (
                                <div style={{ float: "right" }}>
                                    <Popover
                                        content={this.props.comment}
                                        target={
                                            <Icon style={{ marginLeft: "4px", color: "black" }} icon="align-left" />
                                        }
                                    />
                                </div>
                            )}
                            {this.props.example && (
                                <div style={{ float: "right" }}>
                                    <Popover
                                        content={this.props.example}
                                        target={<Icon style={{ marginLeft: "4px", color: "blue" }} icon="code" />}
                                    />
                                </div>
                            )}
                        </div>
                    )
                }
            </searchContext.Consumer>
        );
    }
}

export class Topic extends React.Component<TopicProps> {
    static Item = TopicItem;
    render() {
        return (
            <Card interactive={true} elevation={Elevation.TWO} style={{ padding: 0, marginBottom: 4 }}>
                <div
                    style={{
                        textAlign: "center",
                        borderBottom: "1px solid #ccc",
                        backgroundColor: "#eee",
                        paddingTop: 3,
                        paddingBottom: 3,
                    }}
                    className="cardHeader"
                >
                    <b>{this.props.title}</b>
                </div>
                <div className="topicList" style={{ display: "flex", flexDirection: "column", padding: 4 }}>
                    {this.props.children}
                </div>
            </Card>
        );
    }
}
