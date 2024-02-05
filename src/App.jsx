import { useState } from 'react'
import { Switch, Route, Link, HashRouter, Prompt } from 'react-router-dom'
import Home from './components/Home'
import History from './components/History'
import Profile from './components/Profile'
import { Provider } from './context/main'

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
         <HashRouter
            getUserConfirmation={(message, callback) => {
               console.log(message)
               // Custom confirm component
               const allow = window.confirm(message)

               if (allow) {
                  setLeaveConfirm(false)
               }

               callback(allow)
            }}
         >
            <LinkList />
            <Provider value={{ setLeaveConfirm }}>
               <Switch>
                  <Routes />
               </Switch>
            </Provider>
            <Prompt when={isLeaveConfirm} message='Are you sure you want to leave?' />
         </HashRouter>
      </>
   )
}

export default App
