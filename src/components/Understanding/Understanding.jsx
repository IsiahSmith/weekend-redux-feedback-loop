import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Understanding() {
    const feedback = useSelector(store => store.feedbackReducer)
    const [understanding, setUnderstanding] = useState(feedback.understanding || '');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (understanding === '') {
            alert('Response cannot be left blank')
        } else if (understanding > 5 || understanding < 1) {
            alert('Please keep your response between 1 and 5')
        } else {
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: understanding
            });
            history.push('/support')
        }
    }

    const goBack = () => {
        history.push('/')
    }

    return (
        <>
            <Header />
            <h1>How well are you understanding the content?</h1>
            <Button variant="contained" color="primary" onClick={goBack}>BACK</Button>
            <TextField
                variant="outlined"
                id="Outlined-basic"
                color="primary"
                type="number"
                value={understanding}
                label="understanding?"
                onChange={(event) => setUnderstanding(event.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>NEXT</Button>
        </>
    )
}

export default Understanding;