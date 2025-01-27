
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const mensaje = "Tu lugar para encontrar todo lo que amas del anime y más.";

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje={mensaje} />
    </>
  );
};

export default App;