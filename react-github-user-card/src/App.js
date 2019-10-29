import React, { Component } from 'react'
import axios from 'axios'

import GithubCard from './components/GithubCard'
import GithubSearch from './components/GithubSearch';
import GithubFollowers from './components/GithubFollowers'

class App extends Component {
  state = {
    id: null,
    pic: null,
    handle: '',
    name: '',
    bio: '',
    portfolio:'',
    location: '',
    followers: null,
    following: null,
    pubRepos: null,
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/Robert-D-Campbell').then(res => {
      console.log(res)
      this.setState({
        id: res.data.id,
        pic: res.data.avatar_url,
        handle: res.data.login,
        name: res.data.name,
        bio: res.data.bio,
        portfolio:res.data.blog,
        location: res.data.location,
        followers: res.data.followers,
        following: res.data.following,
        pubRepos: res.data.public_repos,
      })
    }).catch(err => {
      console.log(err)
    })
  }

  
  fetchProfile = (search) => {
    axios.get(`https://api.github.com/users/${search}`).then(res => {
      console.log(res)
      this.setState({
        id: res.data.id,
        pic: res.data.avatar_url,
        handle: res.data.login,
        name: res.data.name,
        bio: res.data.bio,
        portfolio:res.data.blog,
        location: res.data.location,
        followers: res.data.followers,
        following: res.data.following,
        pubRepos: res.data.public_repos,
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <>
        <GithubSearch fetchProfile={this.fetchProfile}/>
        <GithubCard 
          pic={this.state.pic}
          key={this.state.id}
          handle={this.state.handle}
          name={this.state.name}
          bio={this.state.bio}
          portfolio={this.state.portfolio}
          location={this.state.location}
          followers={this.state.followers}
          following={this.state.following}
          pubRepos={this.state.pubRepos}
        />
        <GithubFollowers />
      </>
    )
  }
}

export default App