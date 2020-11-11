import React,{ Component } from 'react'

import { CardList } from './component/card-list/card-list.jsx'

import { SearchBox } from './component/searchbox/searchbox'

import './App.css';

class  App extends Component {

   constructor (){
     super();

     this.state = {
       peoples : [],
       searchFeild : ''
     };

   }

   componentDidMount () {
     fetch(`https:jsonplaceholder.typicode.com/users`)
     .then(response => response.json())
     .then(users => this.setState({peoples: users}))
   }

  handleChange = (e) => {
    this.setState({ searchFeild: e.target.value })
  }

  render() {
   const { peoples, searchFeild } = this.state
   const filteredPeoples = peoples.filter(people =>
        people.name.toLowerCase().includes(searchFeild.toLowerCase())
    )
  return (
    <div className="App">
      <h1>People's Profile</h1>
      <SearchBox
        placeholder='search for people'
        handleChange={this.handleChange}
      /> 
     <CardList peoples={filteredPeoples}/>
    </div>
  );
}
}
  

export default App;
