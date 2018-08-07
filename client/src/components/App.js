import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Index from './Index'

const Dashboard = () => <h2>Dashboard</h2>
const NewCategory = () => <h2>NewCategory</h2>

class App extends Component {

    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <div className="container">
                            <Route exact path="/" component={Index} />
                            <Route exact path="/categories" component={Dashboard} />
                            <Route path="/categories/new" component={NewCategory} />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App)

