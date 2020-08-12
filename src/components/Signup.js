import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'





export default function Signup() {
    const history = useHistory()
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [type,setType] = useState("")
const [mobile,setMobile] = useState("")
const postData=()=>{
   
    fetch('/signup',{
        method:"post",
        headers :{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name,email,password,mobile,type
        }),

    }).then((res)=>res.json()).then((data)=>{
        if(data.error){
            alert("error");
        }else{
            alert("Signup successfull")
            history.push('/login')
        }
    })
}
    return (
       <React.Fragment>
           <h2 className="text-center">Signup</h2>
           <div className="col-lg-6 mt-5 offset-lg-3">
            <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
    
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">type</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setType(e.target.value)}/>
    
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setName(e.target.value)}/>
    
  </div>
 
          
            <div class="form-group">
    <label for="exampleInputEmail1">Mobile</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setMobile(e.target.value)}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  </div>

  <button type="button" className="btn btn-lg btn-danger d-block mx-auto w-20 mt-5" onClick={()=>{postData()}}>Signup</button>
       </React.Fragment>
    )
}
