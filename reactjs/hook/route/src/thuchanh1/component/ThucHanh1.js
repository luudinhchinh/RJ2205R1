import {Routes, Route, Link} from "react-router-dom"
import About from "./About"
import Home from "./Home"


export default function Thuchanh1(){
    return (
        <div>
             <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

    </div>
            <hr/>
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
        </div>
    )
}