import { useLocation } from "react-router-dom"
import Header from "../component/header"
import Card from "../component/card"
import TodoContainer from "../component/todoContainer"


function Landing(){
    const data = useLocation()
    return(
        <div className="bg-black p-14">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header */}
      <Header name={data.state.user}/>

      {/* Card */}
      <div className="flex justify-between gap-5 my-5 flex-wrap">
        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
        <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:13:08"}/>
        <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}/>
      </div>

      {/* TodoContainer */}
      <TodoContainer/>
      </div>
    </div>
    )
}
export default Landing