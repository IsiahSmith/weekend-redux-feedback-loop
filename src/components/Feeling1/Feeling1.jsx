import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function Feeling1() {
    const [feeling, setFeeling] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_FEEDBACK',
            payload: {
                feeling: feeling
        }});
        history.push('/understanding')
    }

    return (
        <>
            <Header />
            <h1>How are you feeling today?</h1>
            <input
                type="number"
                value={feeling}
                placeholder="feeling?"
                onChange={(event) => setFeeling(event.target.value)}
            />
            <button onClick={handleSubmit}>NEXT</button>
        </>
    )
}

export default Feeling1;