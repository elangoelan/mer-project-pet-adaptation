// import {NavLink} from "react-router-dom";
// const Header=()=>{
//     return(
        
//         <nav>
//             <ul>
//                 <li></li>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Pet</li>
//                 <li> Contact Us</li>

//             </ul>
            
//         </nav>

//     );
// }
// export default(Header);
import './header.css';

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import About from "./about";
import Pet from "./pet"
import Uploadpage from './uploadpage';
const Header=()=>{
    return(
        
     <>
    
     <BrowserRouter>
       <div className='linkBox'>
        <div className='logo'>
           PAW    <img src=''></img>       <span>HEARTS</span>
        </div>
        <div className='links'>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/pet">Pet</Link>
        <Link className="link" to="/contact">Contact</Link>
        <Link className="link" to="/about">About</Link>
        
        </div>
        </div>
        <div className='paths'>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/pet" element={<Pet/>}></Route>
            <Route path="/uploadpage" element={<Uploadpage/>}></Route>
        </Routes>
        </div>
     </BrowserRouter>
   
     
     </>

    );
}
export default Header;