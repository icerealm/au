import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Header extends Component {

    renderHeaderContent() {
        switch (this.props.auth){
            case null:
                return 
            case false:
                return (
                    <li><a href='/auth/google'>sign in with GOOGLE+</a></li>
                )
            default:
                return (
                    <li><a href='api/logout'>sign out</a></li>
                )
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper pink lighten-3">
                    <Link 
                        to={this.props.auth ? '/categories': '/'} 
                        className="left brand-logo" style={{marginLeft:'20px'}}
                    >
                        AU
                    </Link>
                    <ul className="right">
                        {this.renderHeaderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header)