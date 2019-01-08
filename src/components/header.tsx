import React from "react";
import { SearchBox } from "./search";

const Header = ({ siteTitle }) => (
    <div>
        <div
            style={{
                marginTop: "0",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "10px",
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img style={{ marginTop: "auto", marginBottom: "auto" }} src="/static/xogeny.png" />
                <h2 style={{ margin: 5 }}>{siteTitle}</h2>
                <SearchBox />
            </div>
        </div>
    </div>
);

export default Header;
