import React,{ useState } from "react"
import { Create_One_Product } from "../graphql/mutation.js"
import { useMutation } from "@apollo/client"
import "./style/reg.css"
import { postUser } from "../asyncActions/postUser.js"
import { getUsers } from "../asyncActions/getUser.js"
import { useSelector,useDispatch } from "react-redux"

export default function Reg()
{
    const [content,setContent] = useState(false)
    
    const dispatch = useDispatch()
    
    const usersElem = useSelector((state) => state.usersElem.Items)
   
    const handleSubmit = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        const formDataObj = {};
        formData.forEach((value, key) => (formDataObj[key] = value));
        dispatch(postUser(formDataObj,usersElem))
    }
    const handleSubmitLogin = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        const formDataObj = {};
        formData.forEach((value, key) => (formDataObj[key] = value));
        console.log(usersElem)
        usersElem.forEach((value, key) => {
           formDataObj.password == value.password && formDataObj.email == value.email && setContent(true)
        })
    }

    return (
        <div>
        { !content?
        <div class="main">  	
		    <input type="checkbox" id="chk" aria-hidden="true" class="input"/>

			<div class="signup">
				<form onSubmit={handleSubmit}>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="Name" placeholder="User name" required="" class="input"/>
					<input type="email" name="email" placeholder="Email" required="" class="input"/>
					<input type="password" name="password" placeholder="Password" required="" class="input"/>
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form onSubmit={handleSubmitLogin}>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" class="input"/>
					<input type="password" name="password" placeholder="Password" required="" class="input"/>
					<button>Login</button>
				</form>
			</div>
	    </div>: 
        <div>
        </div>}
        
        </div>
    )   
}