import NavBar from "./component/NavBar";

const arr=["Product","Services","Overview","Contact Us"]
function App() {
  return (
    <NavBar links={arr}/>
  );
}

export default App;
