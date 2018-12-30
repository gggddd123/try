import React from "react";


class Form extends React.Component{
    render(){
        return(
        <div>{this.props.children}
	<form onSubmit={this.props.getData}>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Your Weather</button>
	</form>
</div>
        );
    }
    }
    export default Form;