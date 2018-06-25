import React, { Component } from 'react';

 class SearchForm extends Component {
	state = {
        searchText: '',
        selectValue:'10',
        selectedOrientation:''
	};

	onSearchChange = e => {
		this.setState({ searchText: e.target.value });
    };
    
    handleSelect = e =>{
        this.setState({selectValue:e.target.value})
        console.log(e.target.value)
    }

    handleOrientation= e =>{
        this.setState({selectedOrientation:e.target.value})
    }

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.query.value,this.perPage.value,this.orientationOfImg.value);
        this.query.value='';
    };
    
   

	render() {
		return (
			<form className="search-form" onSubmit={this.handleSubmit}>
				<label>Search</label>
				<input
					type="search"
					onChange={this.onSearchChange}
					ref={input => (this.query = input)}
					name="search"
					placeholder="Search Here"
				/>
                <select value={this.state.selectValue} onChange={this.handleSelect} ref={input => (this.perPage = input)} className="form-control">
                    <option value='5'>5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
                <select onChange={this.handleOrientation} ref={input => (this.orientationOfImg = input)}>
                    <option value="">all</option>
                    <option value="landscape">landscape</option>
                    <option value="portrait">portrait</option>
                    <option value="squarish">squarish</option>
                </select>
				<button type="submit">
					<i>search</i>
				</button>
			</form>
		);
	}
}

export default SearchForm