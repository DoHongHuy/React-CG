import React, { useState } from "react";

var users = [];
fetch("https://jsonplaceholder.typicode.com/users")
    .then(async (res) => {
        let usersRes = await res.json();
        usersRes[0].id = 0;
        users = usersRes;
    })

function Post() {
    const [posts, setPosts] = useState([]);
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
        show ?
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(async (res) => {
                    let postRes = await res.json();
                    let data =  postRes.map(post => {
                        let user = users.find(user => user.id === post.userId);
                        let newPost = { ...post };
                        return {
                            ...newPost,
                            user: user
                        }
                    });
                    setPosts(data);
                })
            : setPosts([])
    }
    return (
        <div className="container mt-2">
            <button className="btn btn-outline-secondary" onClick={handleShow}>Show</button>
            <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>#ID</th>
                        <th>Username</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.user ? post.user.name : 'Anonymous'}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Post;