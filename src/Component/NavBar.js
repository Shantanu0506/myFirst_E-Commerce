import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import dark from '../images/dark_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import light from '../images/light_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';



function NavBar() {
    const { theme, setTheme } = useContext(ThemeContext);
    console.log(theme);


    let myStyle = {};

    if (theme === 'light') {
        myStyle = {
            background: 'skyblue'
        }
    }
    else if (theme === 'dark') {
        myStyle = {
            background: 'green'
        }
    }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm custom-navbar" style={myStyle} >
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to={"/home"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/about"}>About Us!</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/login"}>Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/register"}>Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/contacts"}>Contact Us!</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/product"}>Product</NavLink>
                            </li>

                            
                            {
                                theme === 'light' ?
                                    (
                                        <img src={dark} onClick={() => setTheme('dark')} />
                                    )
                                    :
                                    (
                                        <img src={light} onClick={() => setTheme('light')} />
                                    )
                            }
                            
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>

        </>
    );
}
export default NavBar;