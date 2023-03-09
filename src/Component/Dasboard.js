import { useEffect, useState } from "react"

function Dashboard(){
    const[data,setData]=useState([])
    useEffect(() =>{
        fetch("  ").then((result)=>{
            result.json().then((resp) =>{
                // console.log("result",resp)

                setData(resp)
            })
        } )
    },[])

    return(

        <div className="App">
            <h1>Get api</h1>
         <Tabel>
            <tbody>
                <tr>
                    <td>Users</td>
                    <td>ProductName</td>
                    <td>Daily order</td>
                    <td>earning pay</td>
                </tr>
                {
                    data.map((item) =>{
                     <tr>
                        <td>{item.userId}</td>
                        <td>{item.ProductName}</td>
                        <td>{item.Daily_order}</td>
                        <td>{item.earning_pay}</td>
                     </tr>
                    })
                }
            
            </tbody>
         </Tabel>

        </div>
    )
}
export default Dashboard;