import React, { Component } from 'react';
import './App.css';
import ImgList from './ImgList';
import SearchForm from './SearchForm';

class App extends Component {
 state={
   imgs:[],
   loadingState:true,
   avatarImg:''
 }
 
componentDidMount() {
  this.performSearch();
  this.showAnAvatar();
 }

showAnAvatar=()=>{
   fetch(`https://api.unsplash.com/photos/random?client_id=9017fada58487b1c3d9aeefea55b9c98af9d7f9027c754b5f5282b805c8d62b1`)
   .then(res=>{
     return res.json()
   }).then(data =>{
     this.setState({avatarImg:data.urls.thumb})
   })
 }

performSearch = (query='',perPage=10,orientationOfImg) => {
			fetch(
				`https://api.unsplash.com/search/photos/?orientation=${orientationOfImg}&page=1&per_page=${perPage}&query=${query}&client_id=9017fada58487b1c3d9aeefea55b9c98af9d7f9027c754b5f5282b805c8d62b1`
			).then(response=>{
        return response.json()
      })
			.then(data => {
        this.setState({ imgs: data.results, loadingState: false });
			})
};

render() {
  return (
    <div>
      <div className="main-header">
        <img className="avatar" src={this.state.avatarImg} />
         <h1><em>ImageSearch</em></h1>
          <div>
            <SearchForm onSearch={this.performSearch} />
          </div>
      </div>
      <div>
        {this.state.loadingState
          ? <p>Loading</p>
          : <ImgList data={this.state.imgs} />}
      </div>
    </div>
    );
  }
}

export default App;
