import { Popover, Elevation, Card } from "@blueprintjs/core";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { searchContext } from "../components/context";
import { warningIcon, exampleIcon, commentIcon } from "./icons";
import { IconSet, Caveats } from "./caveats";

export interface TopicProps extends Caveats {
    title: string | JSX.Element;
    items?: TopicItemProps[];
}

export interface TopicItemProps extends Caveats {
    title: string | JSX.Element;
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
                            <IconSet caveats={this.props} />
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
            <Card interactive={false} elevation={Elevation.TWO} style={{ padding: 0, marginBottom: 4 }}>
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
                    <IconSet caveats={this.props} />
                </div>
                <div className="topicList" style={{ display: "flex", flexDirection: "column", padding: 4 }}>
                    {this.props.items && this.props.items.map((item, i) => <Topic.Item {...item} key={i} />)}
                    {this.props.children}
                </div>
            </Card>
        );
    }
}
