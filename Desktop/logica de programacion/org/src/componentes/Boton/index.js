
import { hover } from "@testing-library/user-event/dist/hover";
import "./Boton.css"

const  Boton = (props) => {
    return <button className="boton">{props.children}</button>
}

export default Boton;