import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const PostsSection = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    const posts = useSelector(state => state.p.posts)
    return (
        <>
        <button onClick={handleShow}>Get posts</button>
        {
            show &&
             <ol>
                {
                    posts.map((el)=>(
                        <li key={el.id}>{el.title}</li>
                    ))
                }
            </ol>
        }
        </>
    )
}

export default PostsSection;