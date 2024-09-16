import React from "react";
/*function App() {
  const [title, setTitle] = useState("My name is Akash Sharma");
  
  function updateTitle(){
    setTitle("My name is: " + Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title="nehruji"></Header>
      <Header title="nehruji"></Header>
      <Header title="nehruji"></Header>
      <Header title="nehruji"></Header>
      <Header title="nehruji"></Header>

    </div>
  );
}
// using memo
const Header = React.memo(function Header({ title }) {
  return (
    <div>
      {title}
    </div>
  );
});

/*function HeaderwithButton(){
  const [title, setTitle] = useState("My name is Akash Sharma");
  
  function updateTitle(){
    setTitle("My name is: " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title} />
    </div>
  );
}*/
/*key----->
function App(){
  const  [todos, setTodos] = useState([
    { id:1,
      title:"go to gym",
      description:"go to gym daily"
    },{ id:2,
      title:"go to class",
      description:"go to class daily"
    },{ id:3,
      title:"go to park",
      description:"go to park daily"
    }]);
    function addTodo(){
      setTodos([...todos,{
        id:4,
        title:"go to shimla",
        description:"go once in a year"}
      ])
    }
  return(
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
};

function Todo({title, description}) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;*/

/*Wrapper--->
function App() {
    return (
      <div>
        <CardWrapper innerComponent = {<TextComponent />}  />
        <CardWrapper innerComponent = {<TextComponent />}  />
      </div>
    );
}

function CardWrapper({innerComponent}){
    return (
      <div style={{border: "2px solid black"}}>
        {innerComponent}
      </div>
    );
}

function TextComponent() {
  return (
    <div>
      hii there
    </div>
  );
}

export default App;
*/
function App(){
  return(
    <div>
      <CardWrapper>
        hii there
      </CardWrapper>
      <CardWrapper>
        hii there
      </CardWrapper>
      <CardWrapper>
        hii there
      </CardWrapper>
    </div>
  );
}

function CardWrapper({children}){
  return(
    <div style={{border: "2px solid black", padding: 20}}>
      {children}
    </div>
  );
}

export default App;
