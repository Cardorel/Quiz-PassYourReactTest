import React, { Component } from 'react'
import BrowserDesign from '../Browser/browserDesign';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        console.error(error , errorInfo);
      }
    
      render() {
        if (this.state.hasError) {
          return (
              <BrowserDesign>
                    <div className="w-75 h-50 m-auto browser-desing-conatiner-all">
                        <h1 className=" d-flex justify-content-center align-items-center h-100">Something went wrong.</h1>;
                    </div>
              </BrowserDesign>
          );
        }
        return this.props.children;
      }
}
