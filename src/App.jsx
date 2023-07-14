import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/common/itemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a la tienda!" />
    </div>
  );
};

export default App;
