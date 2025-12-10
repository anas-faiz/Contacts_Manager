import { type Contact } from "../utils/types";

interface ContactListProps {
  contact: Contact[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const ContactList = ({ contact, onDelete, onEdit }: ContactListProps) => {
  return (
    <div className="border bg-amber-200 m-4 p-4 rounded">
      <h2 className="text-xl font-semibold mb-3">Saved Contacts</h2>

      {contact.length === 0 && (
        <p className="text-gray-700">No contacts found.</p>
      )}

      {contact.map((c) => (
        <div
          key={c.id}
          className="border bg-white p-3 my-2 rounded shadow-sm"
        >
          <h1 className="font-bold text-lg">{c.name}</h1>
          <p className="text-sm text-gray-700">{c.contact}</p>
          <p className="text-sm text-gray-700 mb-2">{c.email}</p>

          <button
            onClick={() => onEdit(c.id)}
            className="border bg-blue-500 text-white px-2 py-1 mr-2 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(c.id)}
            className="border bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
