import React, { useState, useRef } from 'react'
import { Prompt, useHistory } from 'react-router-dom'
import { Modal } from 'antd'
import PropTypes from 'prop-types'

function CustomPrompt(props) {
   const { message = '是否確定要離開', leaveCheck = true } = props

   const history = useHistory()
   const [open, setOpen] = useState(false)

   const loc = useRef(null)
   const leave = useRef(false)
   const handleAction = (location, action) => {
      if (action !== 'PUSH') {
         return false
      }

      if (typeof leaveCheck === 'function') {
         if (!leaveCheck()) {
            return true
         }
      } else if (typeof leaveCheck === 'boolean') {
         if (!leaveCheck) {
            return true
         }
      } else {
         return false
      }

      if (!open) {
         loc.current = location
         setOpen(true)
         return false
      }

      setOpen(false)
      loc.current = null
      const l = leave.current
      leave.current = false
      return l
   }

   const handleOk = () => {
      leave.current = true
      history.push(loc.current)
   }

   return (
      <>
         <Prompt message={handleAction} />
         <Modal title='Modal' open={open} onOk={handleOk} onCancel={() => setOpen(false)}>
            <div>{message}</div>
         </Modal>
      </>
   )
}

CustomPrompt.propTypes = {
   message: PropTypes.string,
   leaveCheck: PropTypes.oneOf([PropTypes.bool, PropTypes.func]),
}
export default CustomPrompt
