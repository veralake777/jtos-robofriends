import React, { Component } from 'react';
import './App.css'
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

const state = {
    
}
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            robots: robots, 
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
    }
    render(){
        const filterRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterRobots}/>
            </div>
        )
    }
    

}

export default App;