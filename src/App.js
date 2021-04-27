import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './Pages/Loading'


const Home = React.lazy(() => import('./Pages/Home'))
const Admin = React.lazy(() => import('./components/admin/Admin'))
const AdminControle = React.lazy(() => import('./components/admin/AdminControle'))
const Eroor = React.lazy(() => import('./Pages/Eroor'))
const RoomPage = React.lazy(() => import('./Pages/RoomPage'))
const RoomSingle = React.lazy(() => import('./Pages/RoomSingle'))
const App = () => {
  return (
    <>
    <Router>
      <React.Suspense fallback={<Loading/>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/room" component={RoomPage} />
        <Route exact path= '/room/:id' component={RoomSingle} />
        <Route exact path="/AdminControle" component={AdminControle} />
        <Route exact path="/Admin" component={Admin} />
        <Route component={Eroor} />
      </Switch>
      </React.Suspense>
    </Router>
    </>
  )
}

export default App;
