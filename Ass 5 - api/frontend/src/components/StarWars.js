import React from 'react';
import { Navigate } from 'react-router-dom';

import Person from './Person';
import Search from './Search';
import {getCharacterById, getCharacterByName} from '../../../api'

class StarWars extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            id: 1,
            data: null,
            error: null,
        };
    }

    componentDidMount()
    {
        this.fetchCharacterById(this.state.id);
    }

    fetchCharacterById = async (id) => 
    {
        this.setState({ data: null, error: null });

        try
        {
            const result = await getCharacterById(id);

            if(result.error)
            {
                throw new Error(result.error);
            }

            this.setState({ data: result });
        }
        catch(error)
        {
            this.setState({ error: error.message});
        }
    };

    next = () => 
    {
        this.setState(
            (prevState) => ({ id: prevState.id + 1 }),
            () => this.fetchCharacterById(this.state.id)
        );
    };

    previous = () => 
    {
        this.setState(
            (prevState) => {
                if(prevState.id > 1)
                {
                    return {id: prevState.id - 1};
                }
                return null;
            },
            () => {
                if(this.state.id > 0)
                {
                    this.fetchCharacterById(this.state.id);
                }
                else
                {
                    this.setState({ error: 'This is the first character'});
                }
            }
        );
    };

    handleSearch = async (name) => 
    {
        this.setState({data: null, error: null });

        try
        {
            const result = await getCharacterByName(name);

            if(result.error || result.count === 0)
            {
                throw new Error('Character not found. Check spelling and try again');
            }

            this.setState({ data: result.results[0] });
        }
        catch(error)
        {
            this.setState({error: error.message});
        }        
    };


    render()
    {
        const { data, error } = this.state;

        console.log(data);

        return(
            <div>
                <h1>Activity Feed</h1>

                <Search onSearch = {this.handleSearch}/>
                
                {error && <p>{error}</p>}

                <button onClick = {this.previous} disabled = {this.state.id <= 1}>Previous</button>
                <button onClick = {this.next}>Next</button>

                {data && <Person
                    name = {data.name}
                    birth_year = {data.birth_year}
                    eye_color = {data.eye_color}
                    gender = {data.gender}
                    homeworld = {data.homeworld}
                />}

            </div>
        );
    }
}

export default StarWars;