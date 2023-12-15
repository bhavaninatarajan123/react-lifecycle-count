import React ,{Component} from 'react';


class LifecycleB extends Component {
    constructor(props){
        super(props);
        this.state={
               count:"0"
            // name:"react.js"
            }

        console.log(" lifecycleB constructor");
    }

static getDerivedStateFromProps(props,state){
        console.log(" lifecycleB  getDerivedStateFromProps ");
return null;
}

componentDidMount(){
    console.log("lifecycleB  componentDidMount");
}


shouldComponentUpdate(){
    console.log(" lifecycleB   shouldComponentUpdate");
    return true
}


componentDidUpdate(prevprops,prevState){
    console.log(" lifecycleB  componentDidUpdate ");
}



    render(){

        console.log(" lifecycleB render");
        return(
            <div className='cycle-1'>

                <h2> LifecycleB</h2>

            </div>
        )
    }
}

export default LifecycleB ;