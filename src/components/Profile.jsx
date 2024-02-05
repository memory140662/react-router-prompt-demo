import { useContext, useEffect } from 'react'
import context from '../context/main'

const Profile = () => {
   const { setLeaveConfirm } = useContext(context)

   useEffect(() => {
      setLeaveConfirm(true)
   }, [])

   return <div>Profile</div>
}

export default Profile
