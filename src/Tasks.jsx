import './App.css';

const Tasks = (props) => {

  const DeleteTask = (e) => {
    e.preventDefault();
    props.deleteItem(props.id);
  };

  return (


    <div className="col s12 m6 l3" id="">
      <div className="z-depth-1 indigo lighten-5 hello" id="input">
        <div>
          <div className="input-field"  >
            <h5 className="indigo-text" id="myTitle">{props.title}</h5>
          </div>
          <div className="input-field"  >
            <h7 id="myContent">{props.content}</h7>
            <div className="add">
              <button href="#" class="btn-floating indigo waves-effect waves-light right">
                <i class="material-icons" onClick={DeleteTask}>delete</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;