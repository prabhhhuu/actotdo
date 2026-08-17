import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup(props) {

    const navigate = useNavigate()


    const Ruser = props.Ruser
    const setNewRuser = props.setNewRuser

    const[Euname,setUname] = useState("")
    const [Epass,setUpass] = useState("")

     function Uinput(event){
            setUname(event.target.value)
        }

        function Pinput(event){
            setUpass(event.target.value)
        }

        function Adduser(){
                
                setNewRuser([...Ruser,{name:Euname,pass:Epass}])
                navigate("/")
                
        }

    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] border rounded-md p-10">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up here :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" 
                    className="w-52 border-black border rounded-md p-1 bg-transparent"
                    placeholder="Username" 
                    value={Euname}
                    onChange={Uinput}/>

                    <input type="text" 
                    className="w-52 border-black border rounded-md p-1 bg-transparent"
                    placeholder="Password"
                    value={Epass} 
                    onChange={Pinput}/>

                    <input type="text" 
                    className="w-52 border-black border rounded-md p-1 bg-transparent"
                    placeholder="Confirm Password" />

                    <button 
                    className="bg-[#FCA201] p-1 border rounded-md w-24" onClick={Adduser}>Sign Up</button>
                    <p>Already have an account ? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup