import React from 'react';
import PropTypes from 'prop-types';

class Person extends React.Component
{
    render()
    {
        const { name, birth_year, eye_color, gender, homeworld } = this.props;

        return(
            <div>
                <h1>Person</h1>

                <div>
                    <h2>{name}</h2>

                    <p>Birth Year: {birth_year}</p>

                    <p>Eye Colour: {eye_color}</p>

                    <p>Gender: {gender}</p>

                    <p>Homeworld: {homeworld}</p>
                </div>
            </div>
        );
    }
}

Person.propTypes = 
{
    name: PropTypes.string,
    birth_year: PropTypes.string,
    eye_color: PropTypes.string,
    gender: PropTypes.string,
    homeworld: PropTypes.string,
};

export default Person;