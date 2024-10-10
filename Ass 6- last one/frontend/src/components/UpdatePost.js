import React from 'react';
import { Navigate } from 'react-router-dom';

class UpdatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            content: '',
            author: {
                name: '',
                email: '',
            },
            postId: props.postId,
            commentName: '',
            comment: '',
            updated: false,
            error: '', // To store error messages
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        try {
            const res = await fetch(`http://localhost:3000/api/posts/update/${this.state.postId}`);
            const data = await res.json();

            if (res.ok) {
                this.setState({
                    name: data.data.name,
                    content: data.data.content,
                    author: data.data.author,
                });
            } else {
                this.setState({ error: "Failed to fetch post data." });
            }
        } catch (error) {
            console.error("Error while updating post:", error);
            this.setState({ error: "An error occurred while fetching post data." });
        }
    }

    async handleSubmit(e) {
        e.preventDefault();

        const { name, content, author, postId, commentName, comment } = this.state;

        // Basic validation
        if (!name || !content || !author.name || !author.email) {
            this.setState({ error: "Please fill in all fields." });
            return;
        }

        const updatedPost = {
            name,
            content,
            author: {
                name: author.name,
                email: author.email,
            },
            comments: [
                {
                    name: commentName,
                    comment,
                },
            ],
        };

        try {
            const res = await fetch(`http://localhost:3000/api/posts/update/${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPost),
            });

            if (res.ok) {
                alert("Post updated successfully!");
                this.setState({ updated: true });
            } else {
                const errorData = await res.json();
                this.setState({ error: errorData.message || "Failed to update post." });
            }
        } catch (error) {
            console.error("Error when updating post: ", error);
            this.setState({ error: "An error occurred while updating the post." });
        }
    }

    handleChange(event) {
        const { name, value } = event.target;

        if (name === 'authorName' || name === 'authorEmail') {
            this.setState((prevState) => ({
                author: {
                    ...prevState.author,
                    [name]: value,
                },
            }));
        } else {
            this.setState({ [name]: value });
        }
    }

    render() {
        const { name, content, author, updated, error } = this.state;

        if (updated) {
            return <Navigate to='/posts' />;
        }

        return (
            <div>
                <h1>Update Post</h1>

                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Content:
                        <input type="text" name="content" value={content} onChange={this.handleChange} />
                    </label>
                    <label>
                        Author name:
                        <input type="text" name="authorName" value={author.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Author email:
                        <input type="text" name="authorEmail" value={author.email} onChange={this.handleChange} />
                    </label>

                    <h2>Add a comment!</h2>
                    <label>
                        Commenter name:
                        <input type="text" name="commentName" value={this.state.commentName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Comment:
                        <input type="text" name="comment" value={this.state.comment} onChange={this.handleChange} />
                    </label>

                    <button type="submit">Update Post!</button>
                </form>
            </div>
        );
    }
}

export default UpdatePost;
