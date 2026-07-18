import { FaRegCircleCheck } from "react-icons/fa6"
import { IoWarningOutline } from "react-icons/io5";
import { MdOutlineErrorOutline } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import "./notification.css";
import { useEffect,useRef } from "react";

const iconsStyles={marginRight:"10px"}

const icons={
    success:<FaRegCircleCheck style={iconsStyles}/>,
    warning:<IoWarningOutline style={iconsStyles}/>,
    error:<MdOutlineErrorOutline style={iconsStyles}/>,
    info:<BsInfoCircleFill style={iconsStyles}/>,
}


const animations = {
    fade:"fadeIn",
    pop:"popUp",
    slide:"slideIn"
}



const Notification = ({type="info",message,onClose,animation="slide"})=>{

    const notificationRef = useRef(null)

    useEffect(()=>{
           if(notificationRef.current){
             notificationRef.current.focus()
           }
    },[])

    const ariaRole = type === "warning" || type ==="error" ?"alert":"status"
    const ariaLive = type === "warning" || type ==="error" ?"assertive":"polite"

   return <div 
          className={`notification ${type} ${animations[animation]}`}
          role={ariaRole}
          aria-live={ariaLive}
          tabIndex={-1}
          ref={notificationRef}
          >
        {/* icons */}
        {icons[type]}
        {/* message */}
        {message}
        {/* onClose button*/}
        <button onClick={onClose}>
        <IoClose  className="closeBtn" />
        </button>
       
   </div>
}

export default Notification