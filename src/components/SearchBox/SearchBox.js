import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component{
  constructor(){
    super();
    this.state ={
      searchText: ''
    }
  }
  onSearchChange = e => {
		this.setState({ searchText: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
	};
  render(){
    return(
          <div className="search-container">
            <div className="search-box">
            <form onSubmit={this.handleSubmit}>
              <input type="search" placeholder="Type to search..." 
                onChange={this.onSearchChange}
                ref={input => (this.query = input)}
                name="search"
              />
              </form>
            </div>
          </div>
     )
  }
    
}
export default SearchBox;