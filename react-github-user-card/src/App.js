import React, { Component } from 'react'
import axios from 'axios'

import GithubCard from './components/GithubCard'
import GithubSearch from './components/GithubSearch';
import GithubFollowers from './components/GithubFollowers'

class App extends Component {
  state = {
    id: null,
    pic: null,
    handle: 'Robert-D-Campbell',
    name: '',
    bio: '',
    portfolio:'',
    location: '',
    followers: [],
    following: null,
    pubRepos: null,
  };

  componentDidMount() {
      axios.get(`https://api.github.com/users/${this.state.handle}`).then(res => {
        console.log(res)
        this.setState({
          id: res.data.id,
          pic: res.data.avatar_url,
          handle: res.data.login,
          name: res.data.name,
          bio: res.data.bio,
          portfolio:res.data.blog,
          location: res.data.location,
          following: res.data.following,
          pubRepos: res.data.public_repos,
        })
    })
    .catch(err => {
      console.log(err)
    })
  };

  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.handle !== this.state.handle) {
      axios.get(`https://api.github.com/users/${this.state.handle}`).then(res => {
        console.log(res)
        this.setState({
          id: res.data.id,
          pic: res.data.avatar_url,
          handle: res.data.login,
          name: res.data.name,
          bio: res.data.bio,
          portfolio:res.data.blog,
          location: res.data.location,
          following: res.data.following,
          pubRepos: res.data.public_repos,
        })
        return res.data.followers_url;
      })
      .catch(err => {
        console.log(err)
      })
      .then(followersUrl => {
        axios.get(followersUrl).then(res => {
          console.log('nested axios request', res.data)
          this.setState({followers: res.data})
        })
      })
      .catch(err => console.log('axios user error', err))
    }
  };

  

  render() {
    return (
      <>
        <GithubSearch followers={this.state.followers}/>
        <GithubCard 
          pic={this.state.pic}
          key={this.state.id}
          handle={this.state.handle}
          name={this.state.name}
          bio={this.state.bio}
          portfolio={this.state.portfolio}
          location={this.state.location}
          following={this.state.following}
          pubRepos={this.state.pubRepos}
        />
        <GithubFollowers handle={this.state.handle} followers={this.state.followers}/>
      </>
    )
  }
}

export default App