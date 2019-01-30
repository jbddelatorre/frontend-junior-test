import React, { Component } from "react";
import Counter from './Counter'

class Form extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
        currentCounterName: "",
        counters:[]
    }
  }

  handleAddCounter = async () => {
    const state = { ...this.state }
    const name = state.currentCounterName
    const counterList = state.counters
    const id = counterList.length + 1 || 1
    const newCounter = { name, key: id, value: 0 }

    counterList.push(newCounter)
    await this.setState({
      currentCounterName: "",
      counters: counterList
    })
    console.log(this.state)
  }

  handleInc = () => {

  }

  handleDec = () => {

  }

  render() {
    const { currentCounterName, counters } = this.state

    return (
      <form>
        <label className="label" htmlFor="name">
          Counter Name
        </label>
        <input className="input" type="text" placeholder="Counter Name" value={currentCounterName} onChange={e => this.setState({ currentCounterName: e.target.value })}/>

        <a className="button is-primary" onClick={this.handleAddCounter}>Add</a>

        <hr />

        {
          counters.map(c => <Counter key={c.key} name={c.name} value={c.value} handleInc={() => this.handleInc()} handleDec={this.handleDec}/>)
        }
      </form>
    );
  }
}

export default Form;
