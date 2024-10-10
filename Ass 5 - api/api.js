const getCharacterById = async (id) => 
{
    try
    {
        const res = await fetch(`https://swapi.dev/api/people/${id}/`);
        // const res = await fetch(`https://swapi.dev/api/people/${id}/`, {
        //     method: 'GET',
        //     headers: 
        //     {
        //         'Content-Type': 'application/json',
        //     }
        // } );

        console.log('Response Status:', res.status);
        console.log('Response OK:', res.ok);
        console.log('Response Headers:', res.headers);

        if(!res.ok)
        {
            console.log(`https://swapi.dev/api/people/${id}/`);
            console.log(await res.text());
            throw new Error('Network response was not ok');
        }

        if(res.status === 401)
        {
            throw new Error('Unauthorized');
        }

        if(res.status === 200)
        {
            const data = await res.json();

            return data;
        }
    }
    catch(error)
    {

        return {error: error.message};
        // throw new Error('Error when making API call');
    }
};

const getCharacterByName = async (name) =>
{
    try
    {
        const res = await fetch(`https://swapi.dev/api/people/?search=${name}`);
        // const res = await fetch(`https://swapi.dev/api/people/?search=${name}`, {
        //     method: 'GET',
        //     headers: 
        //     {
        //         'Content-Type': 'application/json',
        //     }
        // });

        if(!res.ok)
        {
            throw new Error('Network response was not ok');
        }

        if(res.status === 401)
        {
            throw new Error('Unauthorized');
        }

        if(res.status === 200)
        {
            const data = await res.json();
            return data;
        }
    }
    catch(error)
    {
        return {error: error.message};
    }
};

export {getCharacterById, getCharacterByName };