import { BrowserRouter,Switch,Route } from "react-router-dom";
import About from "./Component/About/About";
import Blog from "./Component/Blog/Blog";
import Contact from "./Component/Contact/Contact";


import Home from "./Component/Home/Home";
import Projects from "./Component/Projects/Projects";


function App() {
  return (
   <BrowserRouter>
       
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/contact">
         <Contact></Contact>
       </Route>
       <Route path="/blog">
         <Blog></Blog>
       </Route>
       <Route path="/projects">
         <Projects></Projects>
       </Route>
       <Route path="/about">
         <About></About>
       </Route>

     </Switch>
   </BrowserRouter>
  );
}

export default App;
