import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Edit () {
    const param = useParams()

    const [title, setTitle] = useState([])
    const [category, setCategory] = useState([])
    const [text, setText] = useState([])

    async function editPost (e) {
        e.preventDefault()
        let res = await fetch(`https://n36-blog.herokuapp.com/posts/${param.id}`, {
            method: 'PUT',
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1MzY3MGU4LTY3YzAtNGZiZi1hYmVjLTk2ZDUxMTQwMjM5YSIsInVzZXJfbmFtZSI6Ik51cnVsbG9oIiwidXNlcl9wYXNzd29yZCI6Im51cjIwMDR1YjE0IiwiaWF0IjoxNjU5NjQyNjUxfQ._dePGcyEQtGW5f9WgrYPM-Djpu4JnaXRYKx0fAwFbxo",
            },
            body: JSON.stringify({
                categoryName: category,
                title:  title,
                imageUrl: "https://source.unsplash.com/352x300",
                body: text
            })
        })
        res = await res.json()

        console.log(res);
    }


    return<>

        <form onSubmit={editPost}>
                <h3>Edit Post</h3>
                <input onChange={e => setTitle(e.target.value)} type="text" name="title" placeholder="Title" required/>
                <input onChange={e => setCategory(e.target.value)} type="text" name="category" placeholder="Category" required/>
                <input onChange={e => setText(e.target.value)} type="text" name="body" placeholder="Text" required/>
                <button>Edit Post</button>
                <Link to={-1}>Cancel</Link>
            </form>
    </>
}

export default Edit