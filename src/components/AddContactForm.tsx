import { useState } from "react"
import ContactList from "./ContactList"

const AddContactForm = ()=>{

    const [name,setName] = useState("")
    const [contact,setContact] = useState("")
    const [email,setEmail] = useState("")

    function addContact (){
        
    }

    return (
        <div className="p-10  ">
            <form className=" flex flex-col gap-1">
                <input value={name} onChange={(e)=>setName(e.target.value)} className="border bg-amber-50 p-2" placeholder="Name"></input>
                <input value={contact} onChange={(e)=>setContact(e.target.value)} className="border bg-amber-50 p-2" placeholder="Phone Number"></input>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className="border bg-amber-50 p-2" placeholder="Email"></input>
                <button onClick={addContact} className="border bg-blue-500 p-2 w-1/2 text-center">Add Contact</button>
            </form>
            <ContactList/>
        </div>
    )

}

export default AddContactForm