import React from 'react';
import {Navigate} from 'react-router-dom';

// import DeletePost from './DeletePost';
// import UpdatePost from './UpdatePost';

class DeletePost extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            postId: props.postId,
            deleted: false          
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    async handleDelete()
    {
        const {postId} = this.state;

        try
        {
            console.log(`poisadejbjfiporfgujob ${postId}`);
            const res = await fetch(`http://localhost:3000/api/posts/delete/${postId}`, {
                method: 'DELETE',
            });

            if(res.ok)
            {
                alert("Post deleted");
                this.setState({deleted: true});
            }
            else
            {
                console.error("Failed to delete post");
            }
        }
        catch(error)
        {
            console.error("Error when deleting post ", error);
        }
    }

    render()
    {

        const {deleted} = this.state;

        if(deleted)
        {
            // return <Navigate to='/Home'/>;
        }

        return(
            <div>
                <h1>Delete Post</h1>

                <h3 style={{color: 'red'}}>Are you sure you want to delete post?</h3>

                <button onClick={this.handleDelete}>Yes, Delete Post</button>
                <button onClick={() => this.props.navigate('/Home')}>Cancel</button>
            </div>
        );
    }
}

export default DeletePost;