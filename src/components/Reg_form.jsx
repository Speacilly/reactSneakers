import React,{ useState } from "react"
import { Create_One_Product } from "../graphql/mutation.js"
import { useMutation } from "@apollo/client"
export default function Reg()
{
    const [content,setContent] = useState({})

     
    const changeInputRegister = event => {
        event.persist()
        setContent ((value) => ({
            ...value,
            [event.target.name]: event.target.value
        }))
    }
     
     const [addNewSneakers] = useMutation(Create_One_Product)

     
    const submitChackin = event => {
        event.preventDefault();
        addNewSneakers({
            variables:{
                data: content
            },
            onCompleted: (res) => {
                console.log(res)
            }
        })
    }
    return (
        <div className="form">
            <h2>Register user:</h2>
            <form onSubmit={submitChackin}>
                <p>Name: <input 
                type="name"
                id="name"
                name="name"
                value={content.name}
                onChange={changeInputRegister}
                /></p>
                <p>type <input 
                type="type"
                id="type"
                name="type"
                value={content.type}
                onChange={changeInputRegister}
                /></p>
                <p>price <input 
                type="price"
                id="price"
                name="price"
                value={content.price}
                onChange={changeInputRegister}
                /></p>
                <p>description <input 
                type="description"
                id="description"
                name="description"
                value={content.description}
                onChange={changeInputRegister}
                    /></p>
                <p>qty<input 
                type="qty"
                id="qty"
                name="qty"
                value={content.qty}
                onChange={changeInputRegister}
                    /></p>
                <input type="submit"/> 
            </form>
        </div>
    )
}