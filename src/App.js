import Header from "./components/Header";
import MyKitchen from "./components/MyKitchen";
import Menu from './components/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IngredientForm from "./components/IngredientForm";
import RecipesForm from "./components/RecipesForm";

function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route exact path='/' element={<MyKitchen />}></Route>
          <Route exact path='/ingredients' element={<IngredientForm />}></Route>
          <Route exact path='/recipes' element={<RecipesForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
