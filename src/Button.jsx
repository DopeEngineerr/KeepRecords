import './App.css';


const Button = (props) => {




  return (
    <button href="#" class="btn-floating indigo waves-effect waves-light right" onClick={props.onSelect}>
      <i class="material-icons">add</i>
    </button>
  );
}

export default Button;