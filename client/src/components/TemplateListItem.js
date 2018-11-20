import React from 'react';
import {Col} from 'react-bootstrap';

export default class TemplateListItem extends React.Component{


	localAddToCanvas = (e) => {
		e.preventDefault();
		//console.log(this.props);
		this.props.func(this.props.value,this.props.url);
		
	}

	render(){

		return(

			<Col xs={6} md={4} >
                <a  className="thumbnail"   onClick = {this.localAddToCanvas}>
                	<img alt ="from fabric"   src={this.props.url}   />
                	
                </a>
            </Col>
		);
	}
}