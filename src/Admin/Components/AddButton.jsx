import React from "react";
 
function AddButton(props) {
    return (
        <button id="btn_open_modal" className="float-end btn btn-success fw-bold" data-bs-toggle="modal" data-bs-target="#modal">
            <i className="fa-solid fa-circle-plus"></i>&nbsp;{props.text_button.toUpperCase()}
        </button>
    )
}
export default AddButton;