import './post.css'
export default function Post({post}){
    console.log(post)
    if(!post){
        return null;
    }
    const {title, id, userId, body} = post;
    
    return(
        <div className="box">
            <h3>Title: {title}</h3>
            <p><small>userId:{userId} </small></p>
            <p><small>postId: {id}</small></p>
            <p><small>post: {body}</small></p>
        </div>
    )
}