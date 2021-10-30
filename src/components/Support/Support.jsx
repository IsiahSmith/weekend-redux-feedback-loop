import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function Support() {
    const [support, setSupport] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (support === '') {
            alert('Response cannot be left blank')
        } else if (support > 5 || support < 1) {
            alert('Please keep your response between 1 and 5')
        } else {
            dispatch({
                type: 'ADD_SUPPORT',
                payload: support
            });
            history.push('/comments')
        }
    }

    return (
        <>
            <Header />
            <h1>How well are you being supported?</h1>
            <input
                type="number"
                max="5"
                min="1"
                value={support}
                placeholder="Support?"
                onChange={(event) => setSupport(event.target.value)}
            />
            <button onClick={handleSubmit}>NEXT</button>
        </>
    )
}

export default Support;