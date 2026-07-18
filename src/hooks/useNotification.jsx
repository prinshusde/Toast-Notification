import { useCallback, useState } from "react"
import Notification from "../components/notification"
import { v4 as uuidv4 } from 'uuid';


const useNotification = (position="top-right")=>{
    const [notifications,setNotifications] = useState([])

    const handleCloseNotification = (index)=>{
        setNotifications((preNotifications)=>{
            const updatedNotifications = [...preNotifications]
                updatedNotifications.splice(index,1)
                return updatedNotifications
        })
    }

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
         <div className={`notification-container ${position} ${position.split("-")[0]}`}>
            {
                notifications.map((notification,index)=>{
                    return <Notification key={notification.id} {...notification} onClose={()=>handleCloseNotification(index)}/>
                })
            }
            
         </div>
    ):null

    return {NotificationComponent,triggerNotification}

}

export default useNotification