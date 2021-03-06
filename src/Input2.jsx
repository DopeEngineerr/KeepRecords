import { useState } from 'react';
import './App.css';
import Button from './Button';



const Input2 = (props) => {

  const [Note, setNote] = useState({
    title: "",
    content: ""
  });

  const [Expand, setExpand] = useState(false);

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };


  const AddEvent = () => {
    props.passNote(Note);

    setNote({
      title: "",
      content: ""
    });
  };


  const ExpandIt = () => {
    setExpand(true);
  };

  const CompressIt = () => {
    setExpand(false);
  };


  return (
    <div className="input2">
      <div className="row">
        <div className="col l4 s12 offset-l4">
          <div className="z-depth-1 indigo lighten-5">
            <div className="" id="input" onDoubleClick={CompressIt} onClick={ExpandIt}>
              {Expand ? (
                <div className="input-field">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    autoComplete="off"
                    value={Note.title}
                    onChange={InputEvent}
                    required
                  />
                  <label htmlFor="" for="title">Title</label>
                </div>
              ) : null}
              <div className="input-field">
                <textarea
                  name="content"
                  id="content"
                  className="materialize-textarea"
                  cols="30" rows="10"
                  value={Note.content}
                  onChange={InputEvent}
                  onClick={ExpandIt}
                  required
                ></textarea>
                <label htmlFor="" for="content">Write a note</label>

                {Expand ? (
                  <div className="myButton">
                    <br />
                    <Button onSelect={AddEvent} />
                  </div>
                ) : null}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input2;