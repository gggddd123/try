
import React from "react";


class MainBar extends React.Component{
    render(){
        return(
            <div>
				{this.props.city && this.props.country &&
			<p>Location:  {this.props.city}, {this.props.country} </p>}
			{this.props.temperature && <p>Temperature: {this.props.temperature}</p>}

			{this.props.humidity &&<p>Humidity: {this.props.humidity}</p>}
			{this.props.description && <p>Description: {this.props.description}</p>}
			{this.props.icon &&<p>Icon: {this.props.icon}</p>}
           </div>
        );
    }
    }
    export default MainBar;
