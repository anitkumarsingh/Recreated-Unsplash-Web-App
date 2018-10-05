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
            <h1 style={{color:'#ee6488',fontWeight:'bolder'}}>Welcome,to <span style={{fontSize:'25px',color:'white'}}>photos search engine</span></h1>
            <form onSubmit={this.handleSubmit}>
              <input type="search" placeholder="Type to search and hit enter key..." 
                onChange={this.onSearchChange}
                ref={input => (this.query = input)}
                name="search"
              />
              </form>
              <p style={{color:'white',fontSize:'22px;'}}>Search anything: Computer, love, rose ...</p>
            </div>
          </div>
     )
  }
    
}
export default SearchBox;