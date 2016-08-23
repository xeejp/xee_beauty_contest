import React from 'react'

import Highcharts from 'react-highcharts'

const Chart = ({participants}) => {
  var data = new Array( 101 )
  for(var i = 0;i < 101;i++) data[i] = 0
  for (var key in participants){
	  if(participants[key].inputed) data[participants[key].number]++
  }
  console.log(data)
  return (<Highcharts 
  config = {{
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
	    allowDecimals: false
          },
          series: [{
            name: '投票した人数',
            data: data
	  }]
        }} />)
}

export default Chart
