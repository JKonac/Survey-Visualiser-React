import React from 'react'
import {useParams} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import ReactEcharts from "echarts-for-react"
import PlotQuestion from "./PlotQuestion"

function Survey() {

  const {clickedSurveyId} = useParams()
  const stateData = useSelector(state => state.surveys)
  const isLoaded = useSelector(state => state.isLoaded)
  let thisSurvey = []
  let questions = []

  if(isLoaded){
    for(let arr of stateData){
      if(Number(clickedSurveyId) === arr.surveyId){
        thisSurvey = arr
        break
      }
    }

    questions = thisSurvey.questions.map(que => (
      <PlotQuestion key={que.questionId} answers={que.answerOptions} title={que.questionTitle}/>
    ))

  }

  return (
    <div>
      <h1>{thisSurvey.title}</h1>
      {questions}
    </div>
  )
}

export default Survey
