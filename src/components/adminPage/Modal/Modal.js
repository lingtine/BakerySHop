import "./Modal.scss";
import ReactDOM from 'react-dom';
import React from "react";
import { useState, useEffect } from "react";

function Modal(status) {
    const [checked,setChecked] = useState(status.props)
    // console.log(status.props);
    console.log(status);

    useEffect(() => {
        const elementSearched = document.querySelector('.panel');
        // console.log(elementSearched);
        if(checked) {
            elementSearched.classList.add("active");
            console.log("đã đúng");
        } else {
            elementSearched.classList.remove("active");
            console.log("sai");
        }
    }, []);



    return (
        <div class="panel overlay hidden"  id="my-panel">
            <div class="panel-body" >
                <div class="panel-body--search">
                        <input type="text" class="panel-body--input" placeholder='Search...'/>
                        <span class="panel-body--line"></span>          
                </div>
            </div>
        </div>
    )
};

export default Modal;