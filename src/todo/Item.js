import React, { useContext } from 'react';
import Context from '../context';
const Item = ({ post }) => {
    const classes = []
    if (post.completed) {
        classes.push("done")
    }
    const { onChange, deleteTodo } = useContext(Context)
    return (
        <li className='todoItem'>
            <span className={`left-item-content ${classes.join(" ")}`}>
                <input type="checkbox" id={post.id} onChange={() => { onChange(post.id) }} checked={post.completed} />
                <label
                    htmlFor={post.id}>{post.title}
                </label>
            </span>
            <span className='button-span'>
                <button onClick={()=>{deleteTodo(post.id)}}>&times;</button>
            </span>
        </li>
    );
};

export default Item;