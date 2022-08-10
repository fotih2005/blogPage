import { useState } from "react"
import { AddForm, AddInput, AddPostBtn, AddPostTitle, Cancel, ErrorMessage, FormWrapper } from "./addPost.style"

function AddPost () {
    const [error, setError] = useState({error: null, successfull: false})
    const [title, setTitle] = useState([])
    const [category, setCategory] = useState([])
    const [text, setText] = useState([])


    async function AddNewPost (event) {
        event.preventDefault()
        let res = await fetch("https://n36-blog.herokuapp.com/posts", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1MzY3MGU4LTY3YzAtNGZiZi1hYmVjLTk2ZDUxMTQwMjM5YSIsInVzZXJfbmFtZSI6Ik51cnVsbG9oIiwidXNlcl9wYXNzd29yZCI6Im51cjIwMDR1YjE0IiwiaWF0IjoxNjU5NjQyNjUxfQ._dePGcyEQtGW5f9WgrYPM-Djpu4JnaXRYKx0fAwFbxo",
            },
            body: JSON.stringify({
                categoryName: category,
                title: title,
                imageUrl: "https://source.unsplash.com/352x300",
                body: text
            })
        })
        if(!res.ok){
            setError({error: "errror"})
            throw new Error("Whoops!")
        }
        res = await res.json()
        setError({successfull: "post qoshildi"})
    }

    return <>
        <FormWrapper>
        {
            error.error && <ErrorMessage>Error. Post not added!</ErrorMessage>
        }
        {
            error.successfull && <b>The post has been updated</b>
        }
            <AddForm onSubmit={AddNewPost}>
                <AddPostTitle>Add New Post</AddPostTitle>
                <AddInput onChange={e => setTitle(e.target.value)} type="text" name="title" placeholder="Title" required/>
                <AddInput onChange={e => setCategory(e.target.value)} type="text" name="category" placeholder="Category" required/>
                <AddInput onChange={e => setText(e.target.value)} type="text" name="body" placeholder="Text" required/>
                <AddPostBtn>Add New Post</AddPostBtn>
                <Cancel to={-1}>Cancel</Cancel>
            </AddForm>
        </FormWrapper>
    </>
}

export default AddPost