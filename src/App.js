import Header from "./Components/header"
import { data } from "./Components/imagedata"
import Imagecard from "./Components/imagecard"
function App(){
    return(
        <>
        <Header></Header>
        <div className="conbox">
            {
                data.map(function(item){
                    return <Imagecard image={item.image} name={item.name} des={item.description}></Imagecard>
                })
            }
            
        </div>     
        </>
    )
}
export default App