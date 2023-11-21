import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from './components/Detail';
import Login from './components/Login';
import { store } from './app/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
    <Router>
    <Provider store={store}>
       <Header/>
       </Provider>          
       <Routes>
      
           <Route exact path="/"
         element = { 
          <Provider store={store}>
          <Home />
         </Provider>          
                 
         }/>
         <Route exact path="/login"
         element = {           
           <Login />            
         }/>
          <Route exact path="/detail/:id"
         element = {            
           <Detail />
         }/>
      
      
       </Routes>
    </Router>
 </div>
  );
}

export default App;
