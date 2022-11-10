import React from "react"

export default function EnumInput(props) {
    const [elem, setElem] = React.useState({
        filterElem: ''
    })
    const [arr, setArr] = React.useState([])

    function handleChange(event) {
        const {name, value} = event.target
        setElem(prevData => ({
            ...prevData,
            // [name]: value
            [name]: value
        }))
    }

    function handleEnumChange() {
        // console.log('setting handle range data: ' + elem.filterElem)
        setArr(prevData => ([
            ...prevData,
            elem.filterElem
        ]))
        // console.log('before array is being set the elem is: ' + elem.filterElem)
        setElem({
            filterElem: ''
        })
    }

    React.useEffect(() => {
        // console.log('handling enum: ' + arr + props.name)
        props.handleEnumChange(arr, props.name)
    //     setArr([])
    }, [arr])

    // function handleEnum() {
    //     console.log('handling enum: ' + arr + props.name)
    //     props.handleEnumChange(arr, props.name)
    //     setArr([])
    // }
    
    function resetEnum() {
        setArr([]);
    }

    let settedItems = '';
    arr.map((item) => settedItems += `${item} `)
    
    return (
        // console.log(props)
        <div className="form--input">
            <input //enum
                type="text"
                placeholder={props.placeholder}
                // className="form--input"
                value={elem.filterElem}
                onChange={handleChange}
                name='filterElem'
                list={props.name}
            />
            <datalist id={props.name}>
                {props.options.map((item, key) => 
                    <option key={key} value={item} />
                )}
            </datalist>
            <button 
                className="form--button"
                onClick={handleEnumChange}
            >
                Add
            </button>
            {/* <button 
                className="form--button"
                onClick={handleEnum}
            >
                Set
            </button> */}
            <button 
                className="form--button"
                onClick={resetEnum}
            >
                Reset
            </button>
            {arr[0] && settedItems}
        </div>
    )
}