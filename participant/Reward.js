import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({results,number,inputed}) => ({
	results,number
})

const Reward = ({results,number}) => {
	var min = 100,key
	var Re_number = Math.round(results.sum * 2 / results.inputs / 3 * 10) / 10
	for(key in results.participants){
		var dis = Math.abs(results.participants[key].number - Re_number)
		if(min > dis) min = dis
		if(min == 0) break
	}
	console.log(min)
	if(Math.abs(Re_number - number) == min) return(<p>あなたは報酬を得ることができました</p>)
        else 					return(<p>あなたは報酬を得ることができませんでした</p>)
}

export default connect(mapStateToProps)(Reward)