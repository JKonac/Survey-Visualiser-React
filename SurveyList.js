import React from "react"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

function SurveyList() {    
  const stateData = useSelector(state => state.surveys)
  const isLoaded = useSelector(state => state.isLoaded)

  let surveys = []

  if(isLoaded){
    surveys = stateData.map(i => (
      <div key={i.surveyId}>
          <p className="surveyButton">
              <Link to={`/survey/${i.surveyId}`} style={{ textDecoration: 'none', color: '#2F4F4F'}}>
                {i.title}
              </Link>
          </p>
      </div> 
    ))
  }
    
  return (
      <div className="surveyList">
          <h2>Survey List</h2>
          {isLoaded ? surveys : <p>Loading...</p>}
      </div>
  )
}

export default SurveyList