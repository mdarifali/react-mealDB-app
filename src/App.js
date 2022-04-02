import { Route, Routes } from 'react-router-dom';
import './App.css';
import FoodCategories from './componants/FoodCategories/FoodCategories';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import NotFound from './componants/NotFound';
import Products from './componants/Products/Products';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/food-category' element={<FoodCategories></FoodCategories>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
