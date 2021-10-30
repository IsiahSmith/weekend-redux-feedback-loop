import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function Comments() {
    const feedback = useSelector(store => store.feedbackReducer)
    const [comments, setComments] = useState(feedback.comments || '');
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

    const goBack = () => {
        history.push('/support')
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
            <button onClick={goBack}>BACK</button>
            <button onClick={handleSubmit}>NEXT</button>
        </>
    )
}

export default Comments;