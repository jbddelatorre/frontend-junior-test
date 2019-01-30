import React, { Component, Fragment } from "react";

const style = {
	button: {
		marginRight:'3px'
	}
}

class Counter extends Component {
  render() {
  	const { id, name, value, handleInc, handleDec, handleDelete } = this.props
    return (
		<Fragment>
			<div className="columns">
				<div className="column is-paddingless">
					<p>{name}</p>
				</div>
			</div>
			<div className="columns">
				<div className="column control">
					<input type="number" value={value} className="input is-primary" readOnly/>
				</div>
				<div className="column control">
					<a className="button is-success" style={style.button}
					onClick={() => handleInc(id)}
					>Increase</a>

					<a className="button is-warning" style={style.button}
					onClick={() => handleDec(id)}
					>Decrease</a>

					<a className="button is-danger" style={style.button}
					onClick={() => handleDelete(id)}
					>Delete</a>	
				</div>
			</div>
		</Fragment>
    )
  }
}

export default Counter;
