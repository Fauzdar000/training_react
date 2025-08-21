import React from "react";
import { Contacts } from "./ContactData";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {Contacts.map((contact) => (
          <li key={contact.id}>
           <Link to={`${contact.id}`}>id: {contact.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
