import { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Input2 from './Input2';
import Navbar from "./Navbar";
import Tasks from './Tasks';


const App = () => {

  const [AddItem, setAddItem] = useState([]);

  const AddNote = (Note) => {
    setAddItem((prevData) => {
      return [...prevData, Note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currData, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <div className="project">
      <div className="top">
        <Navbar />
        <Input2 passNote={AddNote} />


        <div className="row">
          {AddItem.map((val, index) => {
            return (
              <Tasks
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
              />
            );
          })}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;