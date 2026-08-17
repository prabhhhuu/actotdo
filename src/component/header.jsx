import { useLocation } from "react-router-dom"
function Header(){

    const data = useLocation()
    return(
        <>
        <h1 className="text-black text-3xl font-medium">Hello {data.state.user}</h1>
        <p>I help you manage your activities :)</p>
        </>
    )
}

export default Header