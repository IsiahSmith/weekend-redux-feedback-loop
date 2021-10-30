import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function Understanding() {
    const [understanding, setUnderstanding] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        });
        history.push('/support')
    }

    return (
        <>
            <Header />
            <h1>How well are you understanding the content?</h1>
            <input
                type="number"
                max="5"
                min="1"
                value={understanding}
                placeholder="understanding?"
                onChange={(event) => setUnderstanding(event.target.value)}
            />
            <button onClick={handleSubmit}>NEXT</button>
        </>
    )
}

export default Understanding;