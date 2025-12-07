import { useEffect, useState } from "react";
import ContactList from "./ContactList";
import type { Contact } from "../utils/types";

const AddContactForm = () => {
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Load from localStorage only once (React 19-safe)
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });

  const [isSaved, setIsSaved] = useState<boolean>(contacts.length>0);

  // Save to localStorage whenever contacts change
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function addContact(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    const newContact: Contact = {
      name,
      contact,
      email,
    };

    setContacts((prev) => [...prev, newContact]);

    setName("");
    setEmail("");
    setContact("");

    setIsSaved(true);
  }

  return (
    <div className="p-10">
      <form className="flex flex-col gap-1">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border bg-amber-50 p-2"
          placeholder="Name"
        />

        <input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="border bg-amber-50 p-2"
          placeholder="Phone Number"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border bg-amber-50 p-2"
          placeholder="Email"
        />

        <button
          onClick={addContact}
          className="border bg-blue-500 p-2 w-1/2 text-center"
        >
          Add Contact
        </button>
      </form>

      {isSaved && <ContactList contact={contacts} />}
    </div>
  );
};

export default AddContactForm;
