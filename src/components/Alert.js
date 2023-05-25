import React from 'react'

export default function Alert(props) {
    // const convert=(word)=>{
    //     let str=word.toLowerCase();
    //     return str.charAt(0).toUpperCase() + str.slice(1);
    // }
    return (
        <div style={{height:'55px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {/* <strong>{convert(props.alert.type)}</strong>: {props.alert.msg} */}
                <strong>Sucess:</strong>: {props.alert.msg}
            </div>}
        </div>


    )
}
