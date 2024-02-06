import { useState } from 'react'
import { Switch, Route, Link, HashRouter, Prompt } from 'react-router-dom'
import Home from './components/Home'
import History from './components/History'
import Profile from './components/Profile'
import { Provider } from './context/main'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const { confirm } = Modal

const LinkList = () => (
   <div style={{ margin: '15px' }}>
      <Link to='/'>Home</Link>
      <span style={{ margin: '5px' }}></span>
      <Link to='/profile'>Profile</Link>
      <span style={{ margin: '5px' }}></span>
      <Link to='/history'>History</Link>
   </div>
)

const Routes = () => {
   return (
      <>
         <Route path='/profile' component={Profile} />
         <Route path='/history' component={History} />
         <Route exact path='/' component={Home} />
      </>
   )
}

function App() {
   const [isLeaveConfirm, setLeaveConfirm] = useState(false)

   return (
      <>
         <HashRouter>
            <LinkList />
            <Provider value={{ setLeaveConfirm }}>
               <Switch>
                  <Routes />
               </Switch>
            </Provider>
         </HashRouter>
      </>
   )
}

export default App
