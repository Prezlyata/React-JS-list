import React, { Component } from 'react';
import './Addphone.css';


class Addphone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            phone: null
        };
    }

	onChangeName = (e) => {
		let name = e.target.value === '' ? 0 : e.target.value;
		this.setState({
			name: name
		});
	};

	onChangePrice = (e) => {
		let price = e.target.value;
		this.setState({
			price: price
		});
    };

    addItem = () => {
		let addDate = new Date().toLocaleString();
		let newItem = {
			isChecked: false,
			isEditMode: false,
			id: Date.now(),
			name: this.state.name,
			price: this.state.price,
			date: addDate
        };
        this.setState({
			phone: newItem
		});
        
	};

    render() {
        console.log(this.state.phone)
        return(
            <div className="wrapper">
                <div className="inputWrapper">
                    <input onChange={(e) => this.onChangeName(e)} className="input" placeholder="Name" />
                    <input onChange={(e) => this.onChangePrice(e)} className="input" placeholder="Price"/>
                    <button onClick={() => this.addItem() } className="btnAdd">Add phone</button>
                </div>
            </div>
        );
    }
}

export default Addphone;