import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = (props) => {

let newPostElement = React.createRef();

let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost (text ) ;
    newPostElement.current.value = '';
}


let postsElements =
props.posts.map( post => <Post message={post.message} date={post.date} />);


return(<div className={s.MyPosts}>
<div className="blockRight block">
<input type="text" placeholder="What`s new?" className={s.AddMyPostInput} ref={newPostElement}/>

<button onClick={addPost} className={s.button}>add post</button>
</div>

    {postsElements}
       
       
       </div>
    )
}

export default MyPosts;