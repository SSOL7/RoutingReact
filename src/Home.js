import React, { Component } from 'react'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      console.log(json);
      this.setState({
        isLoaded: true,
        items: json,
      });
    })
  }
  

  render() {
    let {isLoaded, items} = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Home</h1>
          <ul>
            {items.map(item =>(
              <table>
                <tr>
                  <li key={item.id}>
                    <th><span>Name:{item.name}</span> | <p>Email:{item.email}</p></th>
                  </li>
                </tr>
              </table>
              
            ))}
          </ul>
        </div>
      )
    }
  }
}
