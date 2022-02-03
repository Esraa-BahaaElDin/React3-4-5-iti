
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './component/Nav';
import MoviePage from './pages/MoviePage';
import Details from './pages/Details';
import Search from './pages/PageSearch';
import Favor from './pages/Favorait';

import { LanguageContext } from './contexts/language';
import { useState } from 'react';

function App() {

  const [contextLang, setContextLang] = useState("en");
  return (
    <div
    className={contextLang === "ar" ? "text-right" : "text-left"}
    dir={contextLang === "ar" ? "rtl" : "ltr"}
  >
    <LanguageContext.Provider value={{ contextLang, setContextLang }}>
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          
          <Route path={"/home"} exact component={MoviePage} />
          <Route path={"/Movie_Details/:id"} exact component={Details} />
          <Route path={"/spesific"} exact component={Search} />
          <Route path={"/Fav"} exact component={Favor} />
        </Switch>
      </Router>
    </div>
    </LanguageContext.Provider>
    </div>
  );
}

export default App;
