import React, { Component } from "react";

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: null,
        errorInfo: null 
    }

    componentDidCatch = (error, info) => {
        console.log(error, info);
        this.setState({hasError: true, errorMessage: error, errorInfo: info})
    }

    render(){
        if(this.state.hasError){
            return <div>
                <h1>{this.state.errorMessage.toString()}</h1>
                <p>{this.state.errorInfo.componentStack}</p>
            </div>;
        }else{
            return this.props.children;
        }
        
    }
}

export default ErrorBoundary;