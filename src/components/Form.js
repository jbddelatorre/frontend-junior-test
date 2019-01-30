import React, { Component } from "react";
import Counter from './Counter'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
        currentCounterName: "",
        counters:[],
        sum: 0
    }
  }

  handleAddCounter = () => {
    const state = { ...this.state }
    const name = state.currentCounterName || 'Nameless Counter'
    const counterList = state.counters
    const id = Date.now()
    const newCounter = { id, name, value: 0 }

    counterList.push(newCounter)
    this.setState({
      ...state,
      currentCounterName: "",
      counters: counterList
    })
  }

  handleCounter = (id, type) => {
    const state = { ...this.state }
    let counterList = state.counters
    const index = counterList.findIndex(c => c.id === id)
    const counter = counterList[index]

    switch(type){
      case 'inc':
        counter.value += 1
        break
      case 'dec':
        counter.value -= 1
        break
      case 'delete':
        counterList = counterList.filter(c => c.id !== id)
        break
      default:
        break
    }

    state.sum = counterList.reduce((acc, cur) => (acc + cur.value), 0)
    this.setState({...state, counters: counterList})  
  }

  render() {
    const { currentCounterName, counters, sum } = this.state
    return (
      <form>
        <label className="label" htmlFor="name">
          Counter Name
        </label>
        <div className="columns">
          <div className="column">
            <input className="input" type="text" placeholder="Counter Name" value={currentCounterName} onChange={e => this.setState({ currentCounterName: e.target.value })}/>
          </div>
          <div className="column">
            <a className="button is-primary" onClick={this.handleAddCounter}>Add</a>
          </div>
        </div>

        <p className="subtitle is-5">{`Counter Sum: ${sum}`}</p>
        <hr />
        {
          counters.length === 0 ?
            <p className="subtitle is-6">{'Click add button for a new counter.'}</p>
            :
            counters.map(c => 
            (<Counter key={c.id} id={c.id} name={c.name} value={c.value} 
              handleInc={(id) => this.handleCounter(id, 'inc')} 
              handleDec={(id) => this.handleCounter(id, 'dec')}
              handleDelete={(id) => this.handleCounter(id, 'delete')} />
            ))
        }
      </form>
    );
  }
}

export default Form;
