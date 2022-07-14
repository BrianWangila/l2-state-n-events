import React from "react";

export class CountDown extends React.Component{

    constructor(props){
        super(props)
        this.state = {count: 100} //initial value
    }

    componentDidMount(){
        this.update()
    }

    update(){
        setInterval(
            () => {
                const currentCount = this.state.count - 1
                this.setState({count: currentCount})
            }, 1000
        )
    }

        //TODO: IDENTIFY WHY COUNT REDUCES BY TWO INSTEAD OF 1

    render(){
        return(
            <div>
                <center>
                    <h4 className="time-text">{this.state.count}</h4>
                </center>
            </div>
        )
    }

}