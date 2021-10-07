import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { BookDetail, Home, Library, NotFound } from 'pages'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={BookDetail} />
        <Route exact path="/library" component={Library} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
