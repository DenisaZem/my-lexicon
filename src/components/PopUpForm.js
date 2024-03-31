import Form from "./Form"
import { GiCancel } from "react-icons/gi"

const PopUpForm = (props) => {
    return (props.trigger) ? (
      <div className="popup">
          <div className="popup--inner">
              <button className="close-btn" onClick={()=> props.setTrigger(false)}><GiCancel/></button>
              <Form/>
              {props.children}
          </div>
      </div>
    ) : ""
  }

export default PopUpForm
