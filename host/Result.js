import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, CardHeader, CardText } from 'material-ui/Card'

import Result_info from './Result_info'

const mapStateToProps = ({page,inputs}) => ({page,inputs})

const Result = ({page,inputs}) => (
  <div>
    <Card>
      <CardHeader
        title={"実験結果"}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        {(page == "result")?
        ((inputs == 0)?
	 <p>参　加　者　０　人</p>	
	:<Result_info />
	)
	:<p>実験が終了していません</p>
	}
      </CardText>
    </Card>
   </div>
)

export default connect(mapStateToProps)(Result)
