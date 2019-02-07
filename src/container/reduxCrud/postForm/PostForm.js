import React, { Component } from 'react';
import "./PostForm.css"

class PostForm extends Component {
render() {
return (
<div>
  <h1>Create Post</h1>
  <form>
   <input required type="text" placeholder="Enter Title" /><br /><br />
   <textarea required rows="4" cols="28" placeholder="Enter Message" /><br /><br />
   <button>Post details</button>
  </form>
</div>
);
}
}
export default PostForm;