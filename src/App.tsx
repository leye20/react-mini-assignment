import React from 'react';

export interface IAppProps {
}

interface IState {
  message:string;
  showColor: any;

}


export default class App extends React.Component<IAppProps, IState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
          message: '',
          showColor: ''
          
        }
      

    }
    componentDidMount() {
      this.setState( { showColor:'blue'} )
      this.setState( {message:'Hello World!'} )
  
    }
  

     IshowColor = () => {
      this.setState( { showColor:'yellow' } )
    }

   render() {
    return (

      <div style = { {backgroundColor: this.state.showColor} }>
        <h2> {this.state.message} </h2>
        <button  onClick ={this.IshowColor} > Apply Update </button>
             
      </div>
    );
  }
}