import React from "react";
import { messages, contacts } from "../data";
import ContactList from "./ContactList";
import MessageList from "./MessageList";

// console.log("Messages:", messages);
// console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <ContactList contacts={contacts}/>

      <MessageList messages={messages}/>
    </div>
  );
}

export default App;
