function Imagecard(props){
    return(
    
     <div className="container">
        <img src={props.image} alt="" />
        <h2>{props.name}</h2>
        <p>{props.des}</p>
     </div>
        
    )

}
export default Imagecard