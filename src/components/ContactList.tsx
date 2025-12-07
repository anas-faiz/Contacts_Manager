import { type Contact } from "../utils/types";

interface ContactListProps{
        contact: Contact[]
        onDelete:(id: string) => void
    }

const ContactList = ({ contact,onDelete }: ContactListProps) => {

    

    return (
    <div className="border bg-amber-200 m-4">
      <h2>Saved Contacts</h2>

      {contact.map((c, idx) => (
        <div key={idx}>
          <h1 className="m-1">{c.name}</h1>
          <h2 className="m-1">{c.contact}</h2>
          <h2 className="m-1">{c.email}</h2>

          <button className="border bg-blue-400 p-1 mr-2">Edit</button>
          <button onClick={()=>onDelete(c.id)} className="border bg-red-400 p-1">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
