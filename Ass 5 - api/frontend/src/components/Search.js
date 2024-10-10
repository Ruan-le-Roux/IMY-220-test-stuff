import React from 'react';
import { Navigate } from 'react-router-dom';

class Search extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            searchName: ''
        };
    }

    handleChange = (event) => 
    {
        this.setState({ searchName: event.target.value });
    };

    handleSearch = (event) => 
    {
        event.preventDefault();

        const { searchName } = this.state;

        if(searchName.trim() !== '')
        {
            this.props.onSearch(searchName);
        }
    };


    render()
    {
        const { name, birth_year, eye_color, gender, homeworld } = this.props;

        return(
            <div>
                <h1>Search</h1>

                <div>
                    <form onSubmit = {this.handleSearch}>
                        <input type = 'text' placeholder = 'name.....' value = {this.state.searchName} onChange = {this.handleChange}/>

                        <button type = "submit">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;