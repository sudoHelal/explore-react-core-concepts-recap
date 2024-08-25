import { useEffect, useState } from "react"
import Post from "./post";

export default function Posts(){
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    },[])
    return (
        <div className="">
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post  post={post}></Post>)
            }
        </div>
    )
}

/**
 * 1. create a State to soter data
 * 2. create use effect with no dependencies
 */