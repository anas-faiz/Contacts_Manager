const AddContactForm = ()=>{

    
    return (
        <div className="p-10  ">
            <form className=" flex flex-col gap-1">
                <input className="border bg-amber-50 p-2" placeholder="Name"></input>
                <input className="border bg-amber-50 p-2" placeholder="Phone Number"></input>
                <input className="border bg-amber-50 p-2" placeholder="Email"></input>
                <button className="border bg-blue-500 p-2 w-1/2 text-center">Add Contact</button>
            </form>
        </div>
    )

}

export default AddContactForm