import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PostList from "./components/post/PostList"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PostList} />
      </Switch>
    </Router>
  )
}

export default App
