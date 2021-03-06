import React, { Component } from 'react';
// importing css file
import './App.css';
// importing components
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import axios from 'axios';
import CardList from './components/Card/CardList';
import Footer from './components/Footer/Footer';


class App extends Component {
  constructor() {
		super();
		this.state = {
			imgs_array: [], //declare array to store data fetched from external server
			loadingStatus: true
		};
	}

	componentDidMount() {
		this.SearchPerforming();
	}

	SearchPerforming = (query = 'rose') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${query}&client_id=${'App_ID'}`
			)
      //  fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${'App_ID'}`)
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
