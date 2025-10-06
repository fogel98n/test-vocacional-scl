import logo from "../../assets/logo.png"
import "./header.css"
export function Header(){
    return(
        <>
        <header className="header-inicio">
            <img src={logo} alt=""  className="logo"/>
            <h1>TEST DE INTERÉS VOCACIONAL</h1>
        </header>
        </>
    )
}