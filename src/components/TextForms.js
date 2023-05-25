import React, { useState } from 'react'


export default function TextForms(props) {
    let [text, setText] = useState('');
    const [text2, setText2] = useState('0');
    const [text3, setText3] = useState('0');
    const [text4, setText4] = useState('0');

    const handleUpClick = () => {
        if(text===""){
            alert("Enter a Text");
        }
        //console.log('Hi am Dipesh'+text);
        else{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case","primary");
        }

        
    }

    const handleLoClick = () => {
        //console.log('Hi am Dipesh'+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","secondary");
    }

    const handledetailsClick = () => {
        //console.log('Hi am Dipesh'+text);
        if (text === " ") {
            setText2(0);
            setText3(0);
            setText4(0);
        }
        else {
            let word = text.trim().split(/\s+/).length;
            let len=0;
            for(let i=0;i<text.length;i++){
                if(text.charAt(i)!==" "){
                    len++;
                }
            }
            let time = 0.008 * text.length;

            setText2(word);
            setText3(len);
            setText4(time);
        }
        
        props.showAlert("details Updated","success");
    }

    const handleClearClick = () => {
        //console.log('Hi am Dipesh'+text);
        let newText = "";
        setText(newText)
        props.showAlert("text cleared","danger");
        
    }

    const handleCopyText = () => {
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied","info");
        document.getSelection().removeAllRanges();//delselect
        // alert('Text Copied');
    }

    const handleExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed","dark");
    }

    const handleTitleClick = () => {
        text = text.toLowerCase().split(' ');
        for (var i = 0; i < text.length; i++) {
            text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
        }
        setText(text.join(' '));
        props.showAlert("Converted to title case","warning");

    }

    const handleUpChange = (event) => {
        //console.log("on Change");
        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
                <h1 >{props.header}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#5d607e':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleUpChange} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.length===0} type="button" style={{backgroundColor:props.mode==='primary'?'#f07e22':''}} className="btn btn-primary mx-3  my-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length===0} type="button" style={{backgroundColor:props.mode==='secondary'?'#f07e22':''}} className="btn btn-secondary mx-3 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
                <button disabled={text.length===0} type="button" style={{backgroundColor:props.mode==='success'?'#f07e22':''}} className="btn btn-success mx-3 my-1" onClick={handledetailsClick}>Text Deatils</button>
                <button disabled={text.length===0} type="button" style={{backgroundColor:props.mode==='danger'?'#f07e22':''}} className="btn btn-danger mx-3 my-1" onClick={handleClearClick}>Clear All</button>
                <button disabled={text.length===0} type="button" style={{backgroundColor:props.mode==='warning'?'#f07e22':''}} className="btn btn-warning mx-3 my-1" onClick={handleTitleClick}>Convert To Title Case</button>
                <button disabled={text.length===0} type="button" style={{backgroundColor:props.mode==='info'?'#f07e22':''}} className="btn btn-info mx-3 my-1" onClick={handleCopyText}>Copy Text</button>
                <button disabled={text.length===0} type="button" className="btn btn-dark mx-3 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container mt-5">
                <table className="table" style={{color:props.mode==='dark'?'white':'black'}}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">No Of Words</th>
                            <th scope="col">No of Letters</th>
                            <th scope="col">Reading Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{text2}</td>
                            <td>{text3}</td>
                            <td>{text4}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>

    )
}
