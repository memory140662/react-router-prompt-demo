import { useContext, useEffect } from 'react'
import context from '../context/main'

const History = () => {
   const { setLeaveConfirm } = useContext(context)

   useEffect(() => {
      setLeaveConfirm(true)
   }, [])

   return <div>History</div>
}

export default History
