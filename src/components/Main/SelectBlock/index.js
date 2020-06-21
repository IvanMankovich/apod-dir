import React from 'react';
import './SelectBlock.css'

function SelectBlock(props) {
    const handleDateChange = props.handleDateChange;

    return (
        <div className="selectBlock">
            <h2 className="selectBlock_title">Selected data: {props.selectedDate}</h2>
            <form className="selectBlock_form">
                <label htmlFor="selectedData">Please, select date to see image of day:</label>
                <input type="date" id="selectedData" name="selectedData" onChange={(e) => handleDateChange(e)} max={new Date(Date.now()).toISOString().slice(0, 10)}></input>
            </form>
            <hr />
        </div>
    )
}

export { SelectBlock };