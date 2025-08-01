import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    //create a copy of multiple array
    //and then check if the current id is present in the array or not
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);
    //find the index of current id in the array
    //if it is present then it will return the index of that id
    //if it is not present then it will return -1

    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);
    //agr current id is not present in the array then push it
    //else remove it from the array

    setMultiple(cpyMutiple);
    //set the multiple state to the updated array
    if (cpyMutiple.length === 0) setSelected(null);
  }

    console.log(selected, multiple);
    
  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}
