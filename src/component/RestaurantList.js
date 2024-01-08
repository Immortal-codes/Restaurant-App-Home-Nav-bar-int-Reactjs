import React, { Component } from 'react'

export default class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        fetch('https://api.example.com/data')
            .then(result => {
                this.setState({ list: result })
            });
    }

    render() {
        return (

            <div>

                <h1>List of Restaurant</h1>

                {

                    this.state.list?
                        <div>
                            {

                                this.state.list.map((item, i)=>
                            <div>
                                <span>{item.name}</span>
                                <span>{item.name}</span>
                                <span>{item.name}</span>
                                <span>{item.name}</span>
                            </div>)




                        }
                        </div> : <p>please wait</p>




                }







            </div>
        )
    }
}
