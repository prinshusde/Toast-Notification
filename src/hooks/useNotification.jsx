import { useCallback, useState } from "react"
import Notification from "../components/notification"
import { v4 as uuidv4 } from 'uuid';


const useNotification = (position="top-right")=>{
    const [notifications,setNotifications] = useState([])

    const triggerNotification = useCallback((notificationProps)=>{
        const toastId = uuidv4();
        setNotifications((preNotification)=>[
            ...preNotification,
            {
                id:toastId,
                ...notificationProps
            }
        ])

        setTimeout(()=>{
         setNotifications((preNotification)=>preNotification.filter(n=>n.id!==toastId))
        },notificationProps.duration)
    },[])

    const NotificationComponent = notifications?(
         <div className={`notification-container ${position}`}>
            {
                notifications.map((notification)=>{
                    return <Notification key={notification.id} {...notification} onClose={()=>{}}/>
                })
            }
            
         </div>
    ):null

    return {NotificationComponent,triggerNotification}

}

export default useNotification