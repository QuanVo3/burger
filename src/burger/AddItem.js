import React, { Component } from 'react';

class AddItem extends Component {
    status = (value) => {
        if (value === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    TotalCost = (a,b) => {
        return a * b;
    }
    render() {
        const { part, setQuantPlus, setQuantMinus,sumP,sumM } = this.props;

        return (
            <div className="row lineWrapper">
                <p className="partName col-md-2"><b>{part.name}</b></p>
                <div className="col-md-2 buttonWrap"> <button onClick={() => {setQuantPlus(part.id);sumP(this.TotalCost(part.price,1))}} className="button" >+</button></div>
                <div className="quantBox col-md-2"><p>{part.quant}</p></div>
                <div className="col-md-2 buttonWrap"> <button onClick={() => {setQuantMinus(part.id);sumM(this.TotalCost(part.price,1))}} className="button" disabled={this.status(part.quant)}>-</button></div>
                <div className="quantBox col-md-2"><p>{part.price}$</p></div>
                <div className="quantBox col-md-2"><p>{this.TotalCost(part.price,part.quant)}</p></div>
               
            </div>
        );
    }
}

export default AddItem;