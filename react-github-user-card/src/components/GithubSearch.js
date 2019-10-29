import React, { Component } from 'react'

export default class GithubSearch extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            searchProfile: ''
        }
    }

    handleChanges = e => {
        this.setState({
            searchProfile: e.target.value
        })
    }

    render() {
        return (
            <div className='github-search-container'>
                <h1>Search For Your Github Profile!</h1>
                <input type='text' value={this.state.searchProfile} onChange={this.handleChanges}/>
                <button onClick={this.props.fetchProfile(this.state.searchProfile)}>Search</button>
            </div>
        )
    }
}
