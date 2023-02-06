import React from 'react'

const CreatePost = () => {
  return (
    <div id="create-post-dropdown" className="">
      <form action="">
        <label>Title:</label>
        <input type="text" name="title" /><br />
        <label>Body:</label>
        <textarea name="body"></textarea><br />
        <input type="submit" value="Post" />
      </form>
    </div>
  )
}

export default CreatePost