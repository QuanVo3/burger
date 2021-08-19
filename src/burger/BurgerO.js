import React, { Component } from 'react';
import AddItem from './AddItem';

import VisualBg from './VisualBg';


class BurgerO extends Component {
    constructor(state) {
        super(state);
        this.state = {
            burger:
                [
                    {
                        id: 0,
                        name: "lectuce",
                        img: "../img/Veggie.png",
                        price: 10,
                        quant: 0,
                        mStatus: true,
                    },
                    {
                        id: 1,
                        name: "beef",
                        img: "../img/Beef.png",
                        price: 25,
                        quant: 0,
                        mStatus: true,
                    },
                    {
                        id: 2,
                        name: "cheese",
                        img: "../img/Cheese.png",
                        price: 20,
                        quant: 0,
                        mStatus: true,
                    },
                    {
                        id: 3,
                        name: "Top Bun",
                        img: "../img/topBuns.png",
                        price: 1,
                        quant: 0,
                        mStatus: true,
                    },
                    {
                        id: 4,
                        name: "Bottom Bun",
                        img: "../img/B-Buns.png",
                        price: 1,
                        quant: 0,
                        mStatus: true,
                    },
                ],
            total: 0,
            order: [],
            
        };
        
    }
    setQuantPlus = id => {
        let newQuant = this.state.burger[id];
        newQuant.quant += 1;
        this.setState({ quant: newQuant.quant + 1 })
        this.state.order.push(id);
        console.log(this.state.order)
    }
    setQuantMinus = id => {
        let newQuant = this.state.burger[id];
        newQuant.quant -= 1;
        this.setState({ quant: newQuant.quant - 1 });
        if (this.state.order.length > 0) {
            let updateOd = this.state.order;
            updateOd.splice(updateOd.lastIndexOf(id), 1);
            this.setState({ order: updateOd });
        }
    }
    sumP = (cost) => {
        let newCost = this.state.total;
        this.setState({ total: newCost + cost })
    }

    sumM = (mCost) => {
        let mNewCost = this.state.total;
        this.setState({ total: mNewCost - mCost })
    }
    resetAll = () => (
      
        this.state.burger.map((reset) => (
            reset.setState({quant:0})
        ))
      
    );

    render() {
        return (
            <div className="row Wrapper">
                <div className="col-md-6 left">
                    {
                        this.state.order.length > 0 ? (this.state.order.map((items) => <VisualBg img={this.state.burger[items].img} />)) : console.log("Make your burger!")
                    }
                </div>
                <div className="col-md-6">
                    <div className="row right">
                        <div className="row"><h3 className="Banner">Custom your burger</h3></div>
                        <div className="row">
                            <p className="col-md-2 partName"><b>Topping</b></p>
                            <p className="col-md-2 partName"><b>More</b></p>
                            <p className="col-md-2 partName"><b>Quantity</b></p>
                            <p className="col-md-2 partName"><b>Less</b></p>
                            <p className="col-md-2 partName"><b>Unit Price</b></p>
                            <p className="col-md-2 partName"><b>Price</b></p>
                        </div>
                        {this.state.burger.map((part) => (
                            <AddItem part={part}
                                key={part.id}
                                setQuantPlus={this.setQuantPlus}
                                setQuantMinus={this.setQuantMinus}
                                sumP={this.sumP}
                                sumM={this.sumM}
                            />
                        )
                        )}
                        <div className="line"></div>
                        <div className="row botRow">
                            <div className=" col-md-6"><b>Total:</b></div>
                            <b className="total col-md-6">{this.state.total}$</b>
                        </div>
                        <div className="row botRow">
                        <button className="botBtn" onClick = {() => this.resetAll()}>Order now!</button>
                        <button className="botBtn" onClick = {() => this.resetAll()}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BurgerO;