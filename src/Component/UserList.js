// import { useEffect, useState } from "react"
// import { Table } from 'react-bootstrap'
// function Users() {
//     const [data, setData] = useState([])

//     useEffect(() => {
//         dashboard();
//     }, [])

//     const dashboard = async (e) => {
//         e.preventDefault();

//         const res = await fetch("http://localhost:1000/products", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 email,
//                 username,
//                 password,
//                 confirm_password,
//                 phone_number,
//                 city,
//             })
//         });

//         const result = await res.json();
//         //  console.log("result",resp)
//         setData(result)
//     }

//     return (

//         <div className="App">
//             <h1>Get api</h1>
//             <Table>
//                 <tbody>
//                     <tr>
//                       <th>email</th>  
//                        <th>firstname</th> 
//                        <th>lastname</th> 
//                        <th>email</th> 
                       
//                        <th>phone</th> 
                       
//                     </tr>
//                     {
//                         data.map((item, i) => {
//                             <tr key={i} >
//                                 <td>{item.email}</td>
//                                 <td>{item.firstname}</td>
//                                 <td>{item.lastname}</td>
//                                 <td>{item.password}</td>
//                                 <td>{item.conform_password}</td>
//                                 <td>{item.phone}</td>
//                             </tr>
//                         })
//                     }

//                 </tbody>
//             </Table>

//         </div>
//     )
// }
// export default Users;