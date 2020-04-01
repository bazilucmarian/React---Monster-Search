import React, {Component} from 'react';
import './App.css';
import CardList from './Components/CardList/CardList'
import SearchBox from './Components/search-box/Search-box'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

        monsters: [],
        searchField: ''
         
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>this.setState({monsters: users }) )
  }



  render() {

    const {monsters, searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox handleChange={(e)=>this.setState({searchField: e.target.value})}/>
        <CardList monsters={filteredMonsters}/>
    
       
        
      </div>
    ) 
  }
}

export default App;


