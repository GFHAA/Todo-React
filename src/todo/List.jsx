import React from 'react';
import Item from './Item';

const List = (props) => {
    return (
        <ul>
            {props.posts.map(el =>{
                return <Item post={el} key={el.id}/>
            })}
        </ul>
    );
};

export default List;