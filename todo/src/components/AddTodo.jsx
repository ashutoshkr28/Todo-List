import { useState } from "react";

function AddTodo({addBtn}) {

  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleOnNameChange = (e) => {
    setTodoName(e.target.value)
  }

  const handleOnDateChange = (e) => {
    setTodoDate(e.target.value)
  }
  const handeOnClicked = () => {
    // console.log(`${todoName}, ${todoDate}`);
    addBtn(todoName, todoDate)
  }


    return (
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here"  onChange={handleOnNameChange}/>
          </div>
          <div className="col-4">
            <input type="date" onChange={handleOnDateChange} />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button" onClick={handeOnClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddTodo;