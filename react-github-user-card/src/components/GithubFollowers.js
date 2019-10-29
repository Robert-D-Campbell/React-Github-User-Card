import React, { Component } from 'react'
import axios from 'axios'

import FollowerCard from './FollowerCard'

export class GithubFollowers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/Robert-D-Campbell/followers').then(res => {
          console.log(res)
          this.setState({
            followers: res.data
          })
        }).catch(err => {
          console.log(err)
        })
    }
    render() {
        console.log(this.state)
        return (
            <div className='github-followers-container'>
                {this.state.followers.map(follower => <FollowerCard key={follower.id} pic={follower.avatar_url} handle={follower.login}/>
                )}
            </div>
        )
    }
}

export default GithubFollowers
