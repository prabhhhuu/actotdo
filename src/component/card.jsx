function Card(props){

    return(
        <div className="px-10 py-6 border rounded-md text-center flex-grow" style={{background:props.bgcolor}}>
            <h1>{props.title}</h1>
            <p className="font-semibold">{props.subtitle}</p>
        </div>
    )

}

export default Card