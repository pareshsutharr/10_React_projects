import "./Navigation.css";
const Navigation = () =>{
    return (
        <div>
        <nav className="container">
            <div
            className="logo"
            >
              <img src="images/brand_logo.png" alt="logo" />
            </div>
            <ul>
              <li href="#">MENU</li>
              <li href="#">LOCATION</li>
              <li href="#">ABOUT</li>
              <li href="#">CONTECT</li>
            </ul>
            <button>LOGIN</button>
        </nav>
        </div>
    );
} 

export default Navigation;