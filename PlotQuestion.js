import React from "react"
import ReactEcharts from "echarts-for-react"

function PlotQuestion(props) {  

  const voteOptions = props.answers.map(i => i.text)
  const votes = props.answers.map(i => i.selectedByRespondents)

  let chartOption = {
    title: {
      text: props.title,
      left: 'center',
    },
    xAxis: {
        type: 'category',
        data: voteOptions
    },
    yAxis: {
        type: 'value',
        max: '100'
    },
    series: [{
        data: votes,
        type: 'bar'
    }]
  }

  return (
    <>
      <ReactEcharts
        option={chartOption}
      />
      <hr />
    </>
  )

}

export default PlotQuestion