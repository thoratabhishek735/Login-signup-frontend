import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  const history = useHistory()
    const postData=()=>{
  
        fetch('/login',{
            method:"post",
            headers :{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,password
            }),
    
        }).then((res)=>res.json()).then((data)=>{
            if(data.error){
                alert("error");
            }else{
                alert("login successfull")
               
                localStorage.setItem("token",JSON.stringify(data.token));
                localStorage.setItem("user",JSON.stringify(data.user));
                if(data.user.type == "student"){
                         history.push('/student')
                }else{
                    history.push('/teacher')
                }
            }
        })
    }
    return (
        


        <React.Fragment>
        <h2 className="text-center">Login</h2>

       


        <div className="col-lg-6 mt-5 offset-lg-3">
         <div class="form-group">
 <label for="exampleInputEmail1">Email address</label>
 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
 
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
