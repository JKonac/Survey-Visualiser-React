import React, {useEffect} from 'react';
import {useDispatch} from "react-redux"
import {loadData, isLoaded} from "./redux"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import Survey from "./Survey"
import SurveyList from "./SurveyList"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/focaldata/demo/db")
    .then(res => res.json())
    .then(res => dispatch(loadData(res)))
    .then(res => dispatch(isLoaded(true)))
    .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <nav>
        <div className="linkButton">
          <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>Home page</Link>
        </div>
      </nav>
      <div className="main-layout">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
              <SurveyList />
            </Route>
            <Route path="/survey/:clickedSurveyId">
              <Survey />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App;
