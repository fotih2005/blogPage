import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Cancel,
  EditForm,
  EditInput,
  EditPostBtn,
  EditPostTitle,
  FormWrapper,
} from "./editPost.style";

function Edit() {
  const param = useParams();
  const [title, setTitle] = useState([]);
  const [category, setCategory] = useState([]);
  const [text, setText] = useState([]);
  const [error, setError] = useState({
    error: false,
    loading: false,
    sucsesful: false,
  });

  async function editPost(e) {
    setError({ loading: "loading" });
    e.preventDefault();
    let res = await fetch(`https://n36-blog.herokuapp.com/posts/${param.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1MzY3MGU4LTY3YzAtNGZiZi1hYmVjLTk2ZDUxMTQwMjM5YSIsInVzZXJfbmFtZSI6Ik51cnVsbG9oIiwidXNlcl9wYXNzd29yZCI6Im51cjIwMDR1YjE0IiwiaWF0IjoxNjU5NjQyNjUxfQ._dePGcyEQtGW5f9WgrYPM-Djpu4JnaXRYKx0fAwFbxo",
      },
      body: JSON.stringify({
        categoryName: category,
        title: title,
        imageUrl: "https://source.unsplash.com/352x300",
        body: text,
      }),
    });
    if (!res.ok) {
      setError({ error: "error", loading: false, sucsesful: false });
      throw new Error("error");
    }
    res = await res.json();
    console.log(res);
    setError({ loading: false, sucsesful: "post qoshildi" });
  }

  return (
    <>
      <FormWrapper>
        {error.loading && <b>Loading...</b>}
        {error.error && <b>Error</b>}
        {error.sucsesful && <b>The post has been updated</b>}
        <EditForm onSubmit={editPost}>
          <EditPostTitle>Edit Post</EditPostTitle>
          <EditInput
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder="Title"
            required
          />
          <EditInput
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            name="category"
            placeholder="Category"
            required
          />
          <EditInput
            onChange={(e) => setText(e.target.value)}
            type="text"
            name="body"
            placeholder="Text"
            required
          />
          <EditPostBtn>Edit Post</EditPostBtn>
          <Cancel to={-1}>Cancel</Cancel>
        </EditForm>
      </FormWrapper>
    </>
  );
}

export default Edit;
