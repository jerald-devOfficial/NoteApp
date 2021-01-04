import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NotesList from "./NotesList";
import About from "./About";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/about" component={About} />

        <Route exact path="/" component={NotesList} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
