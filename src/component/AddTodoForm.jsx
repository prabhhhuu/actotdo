import { useState } from "react"
function AddTodoForm(props){


  const activityArr = props.activityArr
  const setactivityArr = props.setactivityArr
  const [item,setnewitem] = useState("")
  

  function HandleChange(event){
    setnewitem(event.target.value)
  }

  function handleAdd(){
    setactivityArr([...activityArr,{id:activityArr.length+1,activity:item}])
  }

    return(
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
              <input onChange={HandleChange} value={item}
                type="text"
                className="border border-black p-1 bg-transparent"
                placeholder="Next Activity?"
              />
              <button onClick={handleAdd}  className="bg-black text-white p-1 border border-black">
                Add
              </button>
            </div>
          </div>
    )
}
export default AddTodoForm