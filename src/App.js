import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import axios from 'axios';
import CardList from './components/Card/CardList';
import Footer from './components/Footer/Footer';




class App extends Component {
  constructor() {
		super();
		this.state = {
			imgs_array: [],
			loadingStatus: true
		};
	}

	componentDidMount() {
		this.SearchPerforming();
	}

	SearchPerforming = (query = 'rose') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${query}&client_id=${'70693869dfbdd08a6432da34ad8bb3627f764b7fb58ca8c9062ada573c46ec25'}`
			)
      //  fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${'70693869dfbdd08a6432da34ad8bb3627f764b7fb58ca8c9062ada573c46ec25'}`)
			.then(data => {
				// console.log(data);
				// console.log(data.data.results[0].likes);
				this.setState({ imgs_array: data.data.results, loadingStatus: false });
			})
			.catch(err => {
				console.log('Error occoured while fetching!', err);
			});
	};

  
  render() {
    return (
      <div>
      <Header/>
      <SearchBox onSearch={this.SearchPerforming}/>
			<h1 className="searchText">Your Search Results</h1>
      <div className="main-content">
					{this.state.loadingStatus
						? <p>Loading Please wait...</p>
						: <CardList data={this.state.imgs_array} />}
				</div>
       <Footer/>
      </div>
    );
  }
}

export default App;
