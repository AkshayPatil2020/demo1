// HOC.js

import React, { Component } from 'react';

export default function MainHOC(HocComponent: any, data: any){
    return class extends Component{
        render(){
            return (
                <HocComponent data={data} {...this.props} />
            );
        }
    }
}