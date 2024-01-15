import axios from "axios";

function Logout(){
    axios.get('http://localhost:3131/logout',{withCredentials:true}).then(response =>{
        console.log(response.data)
    }).catch(err=>{
        console.error(err)
    })
}