import React, { Component } from 'react'

export default class GithubSearch extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            searchInput: ''
        }
    }

    handleChanges = e => {
        this.setState({
            searchInput: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
          handle: (this.state.searchInput === '' ? 'Robert-D-Campbell' : this.state.searchInput)
        })
      };
    

    render() {
        return (
            <div className='github-search-container'>
                <h1>Search For Your Github Profile!</h1>
                <input type='text' value={this.state.searchInput} onChange={this.handleChanges}/>
                <button onClick={this.handleSubmit}>Search</button>
            </div>
        )
    }
}
