import React ,{Component} from 'react';
import LifecycleB from './lifecycleB';


class LifecycleA extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        // name:"react.js"
        }

        console.log(" lifecycleA constructor");  

    }

static getDerivedStateFromProps(props,state){
        console.log(" lifecycleA  getDerivedStateFromProps");
return null;
}

componentDidMount(){
    console.log("lifecycleA  componentDidMount");
}

shouldComponentUpdate(){
    console.log(" lifecycleA   shouldComponentUpdate");
    return true
}

componentDidUpdate(prevprops,prevState){
    console.log(" lifecycleA  componentDidUpdate ");
   
}


changeState=()=>{
    this.setState({
         count :this.state.count+1
        // name:"fabevy"
    })

}

changeSet=()=>{
    this.setState({
         count :this.state.count > 0 ? this.state.count -1 : 0
        // name:"front end dev"
    })

}
    render(){

        console.log(" lifecycleA render");
        return(
            <div className='cycle'>
                 <h2> LifecycleA</h2>
                 <button onClick={this.changeState}>INCREMENT</button>
                 <button onClick={this.changeSet}>DECREMENT</button>

                 <h1> {this.state.count}</h1>
                <LifecycleB />
               
            </div>
        )
    }
}

export default LifecycleA ;