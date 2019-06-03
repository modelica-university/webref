import React from "react";
import Document, { Head, Main, NextScript, NextDocumentContext, DefaultDocumentIProps } from "next/document";

export default class MyDocument extends Document<{}> {
    render() {
        return (
            <html>
                <Head>
                    <link href="https://unpkg.com/normalize.css@^7.0.0" rel="stylesheet" />
                    <link href="https://unpkg.com/@blueprintjs/core@^3.0.0/lib/css/blueprint.css" rel="stylesheet" />
                    <link
                        href="https://unpkg.com/@blueprintjs/icons@^3.0.0/lib/css/blueprint-icons.css"
                        rel="stylesheet"
                    />

                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-33034217-3" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-33034217-3');`,
                        }}
                    />
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
