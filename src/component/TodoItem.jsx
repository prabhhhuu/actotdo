function TodoItem(props){

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    


    function handleDelete(removeid){
        console.log(removeid)
        const leftItems = activityArr.filter(function(item) {
            if (item.id == removeid){
                return false
            }
            else {
                return true
            }
        });
        setactivityArr(leftItems)
    }

    return(
        <div className="flex justify-between">
            <p>{props.index+1}.{props.activity}</p>
            <button className="text-red-600" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
    )
}
export default TodoItem