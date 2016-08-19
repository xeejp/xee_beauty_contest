import React, { Component }  from 'react'
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import SnackBar from 'material-ui/SnackBar'

import { submitNumber } from './actions'
	       
const mapStateToProps = ({ inputed }) => ({
	inputed
})

class Input extends Component {
  	constructor(props) {
		super(props)
		this.state = {
			value: '',
			isValid: false,
			snack: false
		}
	}
	
	closeSnack() {
    		this.setState({
      			snack: false
    		})
  	}

	handleChange(event) {
		const value = event.target.value
		const numValue = parseInt(value, 10)
	    	const isValid = (0 <= numValue && numValue <= 100)
		this.setState({
		      	value,
		      	isValid
	    	})
  	}
	
	handleClick() {
		const { dispatch } = this.props
		const { value } = this.state
		this.setState({
			value: '',
			isValid: false,
      			snack: true
		})
		dispatch(submitNumber(parseInt(value, 10)))
	}

	handleKeyDown(event) {
    		const { isValid } = this.state
    		if (isValid && (event.key === "Enter" || event.keyCode === 13)) { // Enter
      			this.handleClick()
   	 	}
  	}

	render() {
		const { value, snack, isValid } = this.state
		const { inputed } = this.props
		return(
			<div> 
			<p>数字を入力してください</p>
			<TextField
	      		 hintText="0～100までの整数を入力してください"
			 value = {value}
			 onChange={this.handleChange.bind(this)}
			 onKeyDown={this.handleKeyDown.bind(this)}
	    		/>
			<RaisedButton
			  primary={true}
			  label={
				inputed
				  ? "送信済"
				  : "送信"
			  }
			  disabled={inputed || !isValid}
			  onClick = {this.handleClick.bind(this)}
			/>
			<SnackBar
          		   open={snack}
          		   message={"送信しました。"}
          		   autoHideDuration={3000}
          	 	   onRequestClose={this.closeSnack.bind(this)}
        		/>
			</div>
		)
	}
}

export default connect(mapStateToProps)(Input)