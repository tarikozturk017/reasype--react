import React from "react";
import Post from "../post.png"


export default function BasicPaper(props) {
    return (
        <div className="basic-paper--container" >
            {!props.isAdvanced && <div className="basic--paper">
                <img src={Post} alt="" />
            </div>}
            <div className="basic-p--paper">
                <li>Querying for Chicken</li>
                <li>Max 5 ingredients</li>
                <li>Diet types: </li>
            </div>
        </div>
    )
}