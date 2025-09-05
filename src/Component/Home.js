import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";


function Home (){
    const {theme: firstTheme} = useContext(ThemeContext);
    console.log(firstTheme);
    
    return(
        <>
        <h2>This is my Home page!</h2>
        </>
    );
}
export default Home;