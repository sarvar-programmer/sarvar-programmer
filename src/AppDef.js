import React,{ Component } from "react";
import FirstComponent from "./FirstComponent";
export default class AppDef extends Component{
  state = {
    count : 100, 
    isShow : false,
    textButton : "ClickHide"
  }
  clickButton = (()=>{
    this.setState({
      count : this.state.count + 100
    })
  })
  clickShowHide = (() => {
    if(this.state.isShow===false) {
      this.setState({
        textButton : "ClickShow",
        isShow : true
      })
    } else{
      this.setState({
        textButton : "ClickHide",
        isShow : false
      })
    }

  })
  
  render(){
    return (
      <div className="container">
        <h1>{this.state.count}</h1>
        <button onClick={this.clickButton}>Click</button> <br/><br/>
        <button onClick={this.clickShowHide} className="btn btn-succes">{this.state.textButton}</button>
        {this.state.isShow ? '' : <FirstComponent/>}
      </div>
    )
  }
}