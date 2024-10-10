import React from 'react';
import { Link } from 'react-router-dom';

import Posts from '../components/Post';
import UpdatePost from '../components/UpdatePost';
import DeletePost from '../components/DeletePost';

const Home = () => {
    return(
        <div>
            <main>
                <Posts/>
                
            </main>
        </div>
    );
};

export default Home;