import React, { Component } from 'react'

export class GithubCard extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (
            <div className='github-card-container'>
                <div className='github-card'>
                    <img src={this.props.pic} alt='Profile Avatar'></img>
                    <h1>Handle:{this.props.handle}</h1>
                    <h2>Name:{this.props.name}</h2>
                    <h3>Biography:{this.props.bio}</h3>
                    <p>Portfolio:{this.props.portfolio}</p>
                    <p>Location:{this.props.location}</p>
                    <p>Followers:{this.props.followers}</p>
                    <p>Following:{this.props.following}</p>
                    <p>Public Repos:{this.props.pubRepos}</p>
                </div>
            </div>
        )
    }
}

export default GithubCard
