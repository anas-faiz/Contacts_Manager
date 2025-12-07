import { useEffect, useState } from "react";
import ContactList from "./ContactList";
import type { Contact } from "../utils/types";

const AddContactForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);

  // Load localStorage
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });

  const [isSaved, setIsSaved] = useState(contacts.length > 0);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function addContact(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (editingId) {
      // Update existing
      setContacts(prev =>
        prev.map(c =>
          c.id === editingId ? { ...c, name, contact, email } : c
        )
      );

      setEditingId(null);
    } else {
      // Add new
      const newContact: Contact = {
        id: crypto.randomUUID(),
        name,
        contact,
        email,
      };

      setContacts(prev => [...prev, newContact]);
    }

    setName("");
    setContact("");
    setEmail("");
    setIsSaved(true);
  }

  function deleteContact(id: string) {
    setContacts(prev => prev.filter(c => c.id !== id));
  }

  function editContact(id: string) {
    const c = contacts.find(c => c.id === id);
    if (!c) return;

    setEditingId(id);
    setName(c.name);
    setContact(c.contact);
    setEmail(c.email);
  }

  return (
    <div className="p-10">
      <form className="flex flex-col gap-1">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="border bg-amber-50 p-2"/>
        <input value={contact} onChange={e=>setContact(e.target.value)} placeholder="Phone Number" className="border bg-amber-50 p-2"/>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="border bg-amber-50 p-2"/>

        <button onClick={addContact} className="border bg-blue-500 p-2 w-1/2">
          {editingId ? "Save Contact" : "Add Contact"}
        </button>
      </form>

      <div className="flex justify-center mt-3">
        {isSaved ? (
          <ContactList
            contact={contacts}
            onDelete={deleteContact}
            onEdit={editContact}
          />
        ) : (
          <p className="text-xl font-bold">No Contacts Yet</p>
        )}
      </div>
    </div>
  );
};

export default AddContactForm;
