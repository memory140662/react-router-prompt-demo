import { useContext, useEffect, useState } from 'react'
import context from '../context/main'

const Profile = () => {
   const { setLeaveConfirm } = useContext(context)
   const [count1, setCount1] = useState(0)
   const [count2, setCount2] = useState(0)
   const [count3, setCount3] = useState(0)

   useEffect(() => {
      setLeaveConfirm(true)
   }, [])
   useEffect(() => {
      console.log('render2')
   })
   console.log('render')
   const handleClick = () => {
      setCount1(count1 + 1)
      setCount2(count2 + 1)
      for (let i = 0; i < 100000000; i++);
      setCount3(count3 + 1)
      setCount1(prev => prev + 1)
   }

   return (
      <>
         <div>
            <p>Profile</p>
            <p>count1: {count1}</p>
            <p>count2: {count2}</p>
            <p>count3: {count3}</p>
         </div>
         <button onClick={handleClick}>Add</button>
      </>
   )
}

export default Profile
