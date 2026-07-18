import { FaRegCircleCheck } from "react-icons/fa6"
import { IoWarningOutline } from "react-icons/io5";
import { MdOutlineErrorOutline } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import "./notification.css";

const iconsStyles={marginRight:"10px"}

const icons={
    success:<FaRegCircleCheck style={iconsStyles}/>,
    warning:<IoWarningOutline style={iconsStyles}/>,
    error:<MdOutlineErrorOutline style={iconsStyles}/>,
    info:<BsInfoCircleFill style={iconsStyles}/>,
}



const Notification = ({type="info",message,onClose})=>{
   return <div className={`notification ${type}`}>
        {/* icons */}
        {icons[type]}
        {/* message */}
        {message}
        {/* onClose */}
        <IoClose onClick={onClose} className="close-btn" />
   </div>
}

export default Notification