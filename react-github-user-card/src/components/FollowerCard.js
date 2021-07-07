import React, { Component } from 'react'

export class FollowerCard extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            id: null,
            pic: null,
            handle: '',
        }
    }
    
    render() {
        return (
            <div className='github-followers-card'>
                <img src={this.props.pic} alt='Profile Avatar'></img>
                <h2>Handle:{this.props.handle}</h2>
            </div>
        )
    }
}

export default FollowerCard
