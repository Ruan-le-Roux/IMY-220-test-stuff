import React from 'react';

import DeletePost from './DeletePost';
import UpdatePost from './UpdatePost';

class Posts extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            posts: [],

          
        };

        this.getPosts = this.getPosts.bind(this);
    }

    async componentDidMount()
    {
        await this.getPosts();
    }

    async getPosts()
    {
        try
        {
            const res = await fetch("http://localhost:3000/api/posts");
            const data = await res.json();

            this.setState({posts: data.data});
        }
        catch(error)
        {
            console.error("Error fetching posts: ", error);
        }
    }

    render()
    {
        return(
            <div>
                <h1>Posts</h1>

                {this.state.posts.length === 0 ? (
                    <p>No posts available</p>
                ) : (
                    this.state.posts.map((post) => (
                        <div key={post.id}>
                            <h1>{post.name}</h1>
                            <p>{post.content}</p>
                            <p>author: {post.author.name}</p>
                            <div>
                                <h1>Comments</h1>
                                {post.comments.length === 0 ? (
                                    <p>No comments availible</p>
                                ): (post.comments.map((comment, index) => (
                                    <div key={index}>
                                        <h3>{comment.name}</h3>
                                        <p>{comment.comment}</p>
                                    </div>
                                )))}                                
                            </div>
                            <DeletePost postId={post.id} fetchPosts={this.getPosts.bind(this)}/>
                            <UpdatePost postId={post.id} fetchPosts={this.getPosts.bind(this)}/>
                        </div>
                    ))
                )}
            </div>
        );
    }
}

export default Posts;