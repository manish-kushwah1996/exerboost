import { Link } from "react-router-dom" 
 function Home(){
 
    return(
        <div>
          


<div class="navbar navbar-white bg-dark " style={{display: 'flex', justifyContent: 'between', padding: "10px 10px"}}>
  <div class="">
    <a  class="btn btn-success" role="button" href="#">Exerboost</a>
  </div>
  <div class= "d-grid gap-2 d-md-flex justify-content-md-end">
  
<a class="btn btn-info" role="button" href="/registration">Register</a>
    
<a  class="btn btn-info" role="button" href="/login">Login</a>
<a  class="btn btn-info" role="button" href="/payment">Payment</a>
  </div>
</div>




      <nav class="navbar navbar-dark ">
   {
    localStorage.getItem('user-info')
   }

            <ul class="nav gap-3  flex-column ">
  <li class="nav-item">
    <a class="btn btn-info" role="button"  href="#">Dashboard</a>
  </li>
  <li class="nav-item">
    <a class="btn btn-info" role="button" href="#">Users</a>
  </li>
  <li class="nav-item">
    <a class="btn btn-info" role="button" href="#">Produts</a>
  </li>
  <li class="nav-item">
    <a class="btn btn-info" role="button"  href="#" >Orders</a>
  </li>
  <li class="nav-item">
    <a class="btn btn-info" role="button" href="#">Push Notification</a>
  </li>
  <li class="nav-item">
    <a class="btn btn-info" role="button"  href="#" >Logout</a>
  </li>
  
</ul>
</nav>
</div>
        
    )
}
export default Home