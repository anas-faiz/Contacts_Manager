const ContactList = ()=>{
    
    return(
        <div className="border bg-amber-200 m-4">
            <h1 className="m-1">Name</h1>
            <h2 className="m-1">Contact Number</h2>
            <h2 className="m-1">Email</h2>
            <button className="border bg-blue-400 p-1 mr-2">Edit</button>
            <button className="border bg-red-400 p-1">Delete</button>
        </div>
    )
}

export default ContactList