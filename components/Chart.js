/*import React from 'react'

import { Card, CardHeader, CardText } from 'material-ui/Card'
import Highcharts from 'react-highcharts'

const Chart = ({participants,inputs}) => {
  const Count = inputs
  var data = new Array( 101 )
  participants.forEach( function(participant,key,map){
    if(participant.inputed) data[participant.number]++
  })
  return (
    <Highcharts config={{
          chart: {
            type: 'column'
          },
          title: {
            text: null
          },
          xAxis: {
            title: {
              text: 'Number'
            },
            min: 0,
          },
          yAxis: {
            title: {
              text: '人数'
            },
            min: 0,
          },
          series: [{
            name: 'aaa',
            data: data
	  }]
        }} />
  )
}

export default Chart*/
