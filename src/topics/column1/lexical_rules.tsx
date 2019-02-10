import React from "react";
import { Topic, TopicProps } from "../../components/topic";
import { Reference } from "../../components/references";
import { Code } from "../../components/helpers";

const commentDescription = (
        <table className="table">
            <tr>
                <th>Single line comments</th>
            </tr>
            <tr>
                <td>
                    <Code src="// until EOL" />
                </td>
            </tr>
            <tr>
                <th>Multi-Line Comment</th>
            </tr>
            <tr>
                <td>
                    <Code
                        src={<span>/* Can span multiple<br/>multiple lines */</span>}                    />
                </td>
            </tr>
        </table>
);

const identifiersDescription = (
    <table className="table">
        <tr>
            <th>Normal Identifier</th>
            <th>Examples</th>
            <th />
        </tr>
        <tr>
            <td rowSpan={3}>
                Syntax:
                <br />
                <Code src="[A-Za-z_][A-Za-z_0-9]*" right={true} />
            </td>
            <td>
                <code>aVariable</code>
            </td>
            <td>
                <i className="pull-right">Variable names typically start with lower case letters.</i>
            </td>
        </tr>
        <tr>
            <td>
                <code>another_variable</code>
            </td>
            <td>
                <i className="pull-right">Word breaks are sometimes represented with underscores.</i>
            </td>
        </tr>
        <tr>
            <td>
                <code>ClassNames</code>
            </td>
            <td>
                <i className="pull-right">By convention, class names start with upper case letter.</i>
            </td>
        </tr>
        <tr>
            <th>Quoted Identifiers</th>
            <th />
            <th />
        </tr>
        <tr>
            <td>
                Syntax:
                <code className="pull-right">'...'</code>
            </td>
            <td colSpan={2} className="narrow">
                <p>
                    If an identifier is surrounded by single quotes, it can contains spaces, digits and non-digits
                    anywhere in the name. Furthermore, it can contain any of the following characters:
                </p>
                <Code src={`! # $ % & ( ) * + , - . / : ; < > = ? @ [ ] ^ { } | ~`} />
            </td>
        </tr>
    </table>
);

const numberDescription = (
    <table className="table">
        <tr>
            <th>Floating Point Numbers</th>
        </tr>
        <tr>
            <td>
                <code>
                    <Code src="1, 1.0, 0.5, 2.3e-5, 78.2E+2" />
                </code>
            </td>
        </tr>
        <tr>
            <td>
                <br />
            </td>
        </tr>
        <tr>
            <th>Leading zeros</th>
        </tr>
        <tr>
            <td>
                <Code src=".7" /> (as one example) is <b>not</b> a valid floating point number in Modelica because the
                lexical rules state that a floating point number must have a digit before the decimal point. However,
                several tools will accept such numbers anyway.
            </td>
        </tr>
        <tr>
            <th>Complications with signed numbers</th>
        </tr>
        <tr>
            <td className="seminarrow">
                Examples of expressions which are not allowed in Modelica because of interactions between binary
                operators and unary operators (<Reference id="unary"/>):
                <br />
                <Code src="2*-2, --2, ++2, 2--2" />
            </td>
        </tr>
    </table>
);

const data: TopicProps = {
    title: "Lexical Rules",
    comment: <div style={{padding: 5}}><Reference id="lexical"/></div>,
    items: [
        { title: "Comments", example: commentDescription },
        { title: "Identifiers", example: identifiersDescription },
        { title: "Numbers", example: numberDescription },
    ],
};

export const lexicalRules = <Topic {...data} />;
