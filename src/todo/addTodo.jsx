import React, { useState } from 'react';

const AddTodo = () => {
    const [value, setValue] = useState("")
    return (
        <div className='input-holder'>
            <form>
                <input type="text" onChange={el => setValue(el.target.value)}/>
                <button type="submit">Добавить задание</button>
            </form>
        </div>
    );
};

export default AddTodo;