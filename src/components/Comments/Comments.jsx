import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
            <Button variant="contained" color="primary" onClick={goBack}>BACK</Button>
            <TextField
                variant="outlined"
                id="Outlined-basic"
                color="primary"
                type="text"
                value={comments}
                label="Comments"
                onChange={(event) => setComments(event.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>NEXT</Button>
        </>
    )
}

export default Comments;