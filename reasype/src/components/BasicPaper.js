import React from "react";
import Post from "../post.png"


export default function BasicPaper(props) {
    const data = props.data;
    const OptionVal = data.ingr=== 100 ? '10+' : data.ingr;

    function enumElements(enumData) {
        let str = "";
        enumData.map((data, i, enumData) => {
            str+=data;
            if (enumData.length - 1 !== i) str+=', '
        });
        return str;
        // console.log("data: " + enumData)
    }   
    

    return (
        <div className="basic-paper--container" >
            {!props.isAdvanced && <div className="basic--paper">
                <img src={Post} alt="" />
            </div>}
            {!props.isAdvanced && <div className="basic-p--paper">
                {data.q && <li><span> Querying for: {data.q}</span></li>}
                {OptionVal && <li><span>Ingredients: <strong>{OptionVal}</strong></span></li>}
                {data.diet.length!==0 && <li><span> Diet type(s): {enumElements(data.diet)}</span></li>}
            </div>}
        </div>
    )
}