import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Vishwas'
      }
      console.log('LofecucleA construcctor ')
    }
    static getDerivedStateFromProps(props, state){
        console.log('Liffdcsdc dcsdcsdc')
        return null
    }
    compponentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
  render() {
    console.log("Life render")
    return (
      <div>
            Life 
      </div>
    )
  }
}

export default LifecycleA
