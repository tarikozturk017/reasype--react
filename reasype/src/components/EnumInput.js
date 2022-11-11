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
        <div className="form-enum--input">
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
            <div className="enum--buttons">
                <button 
                    // style={{marginLeft: "-50px"}}
                    className="form--button"
                    onClick={handleEnumChange}
                >
                    Add
                </button>
                <button 
                    // style={{backgroundColor: '#b89099', boxShadow: '2px 2px 5px 0px #b878ce' }}

                    id="reset--button"
                    className="form--button"
                    onClick={resetEnum}
                >
                    Reset
                </button>
            </div>
            {/* {arr[0] && settedItems} */}
        </div>
    )
}