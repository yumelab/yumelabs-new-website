import { Component } from "react"

const ConditionalRenderer = (condition:Boolean, children:any)=>{
    if(condition) return children
    else null
};

export default ConditionalRenderer