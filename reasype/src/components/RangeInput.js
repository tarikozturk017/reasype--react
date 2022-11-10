import React from "react"

export default function EnumInput(props) {
    const [range, setRange] = React.useState({
        name: props.name,
        start: '',
        end: ''
    })

    function handleChange(event) {
        const {name, value} = event.target
        setRange(prevData => ({
            ...prevData,
            // [name]: value
            [name]: value
        }))
    }

    function handleRange(){
        let rangeData;
        if(range.start === '' && range.end !== '')  rangeData = `${range.end}`;
        else if(range.start !== '' && range.end === '')  rangeData = `${range.start}%2B`; //encode for +
        else if(range.start !== '' && range.end !== '') rangeData = `${range.start}-${range.end}`;
        if(!(range.start === '' && range.end === '')) props.handleRange(rangeData, range.name)
        setRange({
            name: props.name,
            start: '',
            end: ''
        })
    }

    return (
        <div className="form">
            <div className="form--input">
                <input 
                    type="text" //range
                    placeholder="Enter start range"
                    value={range.start}
                    onChange={handleChange}
                    name='start'
                    autoComplete="off"
                />
            </div>
            <div className="form--input">
                <input 
                    type="text" //range
                    placeholder="Enter end range"
                    value={range.end}
                    onChange={handleChange}
                    name='end'
                    autoComplete="off"
                />
            </div>
                <button 
                    className="form--button"
                    onClick={handleRange}
                >
                    Set range
                </button>
            </div>
            

        
    )
}