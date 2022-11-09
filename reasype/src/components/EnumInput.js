import React from "react"

export default function EnumInput(props) {
    return (
        // console.log(props)
        <div className="form--input">
            <input //enum
                type="text"
                placeholder={props.placeholder}
                // className="form--input"
                value={props.value}
                onChange={props.handleChange}
                name={props.name}
                list={props.name}
            />
            <datalist id={props.name}>
                {props.options.map((item, key) => 
                    <option key={key} value={item} />
                )}
            </datalist>
        </div>
    )
}