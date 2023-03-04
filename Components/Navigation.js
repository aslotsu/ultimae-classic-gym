import {logo, nav} from "../styles/modules/navigation.module.css"
import Logo from "./Logo";

const Navigation = () => {

    return <nav className={nav}>
        <Logo />
        <h2 className={logo}>Get In The Best Shape Of your life &#8594; <br/> Ultimate Classic Gym</h2>
    </nav>

}

export default Navigation