import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function Comments() {
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        });
        history.push('/review')
    }

    return (
        <>
            <Header />
            <h1>Any comments you want to leave?</h1>
            <input
                type="text"
                value={comments}
                placeholder="Comments"
                onChange={(event) => setComments(event.target.value)}
            />
            <button onClick={handleSubmit}>NEXT</button>
        </>
    )
}

export default Comments;