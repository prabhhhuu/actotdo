import { useState } from "react"
import { BrowserRouter, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props){
    // login credentials
    const[Uname,setUname] = useState("")
    const [Upass,setUpass] = useState("")
    // assuming user to be registered first time to make sure to register if it fails
    const [existuser,setexistuser] = useState(true)
    // Navigate function container
    const navigate = useNavigate()


    const Ruser = props.Ruser


    function Checkuser(){ 
        var userNotFound = false
                Ruser.forEach(function(item){
                    if(item.name === Uname && item.pass === Upass){
                        console.log("Login Succesfull")
                        userNotFound = true
                        navigate("/Landing" ,{state:{user:Uname +"!"}})
                        
                    }
                })
            if (userNotFound == false){
                console.log("Login Failed")
                setexistuser(false)
            }
        }

        function Uinput(event){
            setUname(event.target.value)
        }

        function Pinput(event){
            setUpass(event.target.value)
        }


    return(
         <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] border rounded-md p-10">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {
                    existuser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-600">Please Sign Up Before you Login</p>
                }
                
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" 
                    className="w-52 border-black border rounded-md p-1 bg-transparent"
                    placeholder="Username"
                    value={Uname} onChange={Uinput}/>

                    <input type="text" 
                    className="w-52 border-black border rounded-md p-1 bg-transparent"
                    placeholder="Password" 
                    value={Upass} onChange={Pinput}/>

                    <button className="bg-[#8272DA] p-1 border rounded-md w-24" onClick={Checkuser}>Login</button>
                    <p>Dont't have an account ? <Link to={"/Signup"} className="underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login