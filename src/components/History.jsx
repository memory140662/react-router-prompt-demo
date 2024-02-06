import { useContext, useEffect } from 'react'
import context from '../context/main'
import CustomPrompt from './CustomPrompt'
import { Button, Modal } from 'antd'

const History = () => {
   const { setLeaveConfirm } = useContext(context)

   useEffect(() => {
      setLeaveConfirm(true)
   }, [])

   return (
      <div>
         <div>123</div>
         <div>
            <Button onClick={() => history.goBack()}>Go</Button>
         </div>
         <CustomPrompt />
      </div>
   )
}

export default History
