import { useState } from "react";
function AddProduct(){
    const [name,setName]=useState("")
    const [file,setFile]=useState("")
    const [price,setPrice]=useState("")
    const[description,setDescription] = useState(""); 
    return(
        <div className="col-sm-6 offset-sm-3">
            <br></br>
            <input type='text' className="form-control" onChange />
             

            </div>
    )
}
