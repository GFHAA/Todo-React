import React, { useContext, useState } from 'react';
import Context from '../context';

const AddTodo = () => {
    const [value, setValue] = useState("")
    const {addTodo} = useContext(Context)
    function createTodo(el){
        el.preventDefault()
        addTodo(value)
        setValue("")
    }
    return (
        <div className='input-holder'>
            <form onSubmit={createTodo}>
                <input value={value} type="text" onChange={el => setValue(el.target.value)}/>
                <button type="submit">Добавить задание</button>
            </form>
        </div>
    );
};

export default AddTodo;