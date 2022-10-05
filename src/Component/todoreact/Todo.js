import React, { useEffect, useState } from 'react';

import "./style.css";

// store Local Data

const getLocalData = () => {
    const lists = localStorage.getItem("mytodoList");
    if (lists){
        return JSON.parse(lists);
    }else{
        return [];
    }
}


const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItems, setEditItems] = useState("");
    const [toggleButton, setToggleButton] = useState(false);

    const addItem = () => {
        if(!inputData){
            alert("please fill Data");
        }else if( inputData && toggleButton){
                setItems(
                    items.map((curElmt) =>{
                        if (curElmt.id === isEditItems){
                            return {...curElmt, name: inputData}
                        }else{
                            return curElmt;
                        }
                    })
                )
                setInputData("");
                setEditItems();
                setToggleButton(false);
            }
        else{
            const newInputData = {
                id : new Date().getTime().toString(),
                name :inputData,
            };
            setItems([...items, newInputData])
            setInputData("");
        }
    }
    // edit items 

    const editItem = (index) =>{
        const items_edited = items.find((curElmt) => {
            return curElmt.id === index;
        })
        setInputData(items_edited.name);
        setEditItems(index);
        setToggleButton(true);
    }

    // Delete Items
    const deletItems = (index) =>{
        const updateList = items.filter((curElmt)=>{
            return curElmt.id != index;
        })
        setItems(updateList);
    }
    // remove All items fun
    const removeAll = () =>{
        setItems([]);
    }

    // Local Stroge fun
    useEffect(() =>{
        localStorage.setItem("mytodoList", JSON.stringify(items));
    }, [items]);
  return (
    <>
    <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="./images/checklist.png" alt="todo list" />
                <figcaption>Add Your List Here ✌</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder='✍ Add Items' className='form-control' 
                    value={inputData}
                    onChange={(event)=> setInputData(event.target.value)}
                    />
                    {toggleButton ? (<i className="fas fa-edit " onClick={addItem}></i>) :
                        (<i className="fas fa-plus add-btn" onClick={addItem}></i>)}
                </div>
                {/* show items */}
                <div className="showItems">
                    {items.map((curElmt)=>{
                        return(
                            <div className="eachItem" key={curElmt.id}>
                            <h3>{curElmt.name}</h3>
                            <div className="todo-btn">
                            <i className="fas fa-edit " onClick={() => editItem(curElmt.id)}></i>
                            <i className="fas fa-trash-alt" onClick={()=> deletItems(curElmt.id)}></i>
                            </div>
                        </div>
                        )
                    })}
                   
                </div>

                {/* Remove all */}
                <div className="showItems">
                    <button className='btn effect04' data-sm-link-text= "Remove All" onClick={removeAll}><span>Check List</span> </button>
                </div> 
        </div>
    </div>
    </>
  )
}

export default Todo;