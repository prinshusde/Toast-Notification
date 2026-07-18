
import './App.css'
import Notification from './components/notification'
import useNotification from './hooks/useNotification'

function App() {

  // cutome hook, useNotification(position)

  const {NotificationComponent,triggerNotification} = useNotification("bottom-right")

  const onClose = ()=>{
    console.log("closed")
  }

  const handleTriggerSuccess = ()=>{
        triggerNotification({
          type:"success",
          message:"Data get successfully",
          duration:3000
        })
  }


  return (
    <>
     <h1 className="text-red-500">Toast Component</h1>
     <div className="flex">
    <button onClick={()=>{
       triggerNotification({
        type:"success",
        message:"Data get successfully  ",
        duration:3000
      })
    }}>Trigger Success</button>
    <button onClick={()=>{
       triggerNotification({
        type:"info",
        message:"Data get successfully",
        duration:3000
      })
    }}>Trigger Info</button>
    <button onClick={()=>{
       triggerNotification({
        type:"warning",
        message:"Data get successfully",
        duration:3000
      })
    }}>Trigger Warning</button>
    <button onClick={()=>{
       triggerNotification({
        type:"error",
        message:"Data get successfully",
        duration:3000
      })
    }}>Trigger Error</button>
     </div>

     {NotificationComponent}
    </>
  )
}

export default App
