import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
/* import App from './App' */
import registerServiceWorker from './registerServiceWorker'

class Title extends Component {
  static defaultProps = {
    title: 'react 丁丁啊'
  }
  clickTitle (e) {
    console.log(e.target)
  }
  render () {
    return (
      <h1 onClick={this.clickTitle.bind(this)}> {this.props.title} { 1 + 2 } </h1>
    )
  }
}
const users = [
  { username: 'Jerry', age: 21, gender: 'male', id: 0 },
  { username: 'Tomy', age: 22, gender: 'male', id: 1 },
  { username: 'Lily', age: 19, gender: 'female', id: 2 },
  { username: 'Lucy', age: 20, gender: 'female', id: 3 }
]

class List extends Component {
  render () {
    const user = this.props.user
    return (
      <div>
        <div key={user.id}>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
      </div>
    )
  }
}

class LikeButton extends Component {
  constructor() {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton() {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render() {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? '取消' : '点赞'} 👍
      </button>
    )
  }
}

class Header extends Component {
  render () {
    const isShow = true
    return (
      <div id={2 + 2}>
        <Title />
        { isShow ? <h2>i am dingding</h2> : null }
        <LikeButton />
        <div>{users.map((user) => <List user={user} />) }</div>
      </div>
    )
  }
}

ReactDOM.render(
  <Header/>,
  document.getElementById('root')
)
registerServiceWorker()
