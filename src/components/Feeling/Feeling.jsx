import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Feeling() {
    const feedback = useSelector(store => store.feedbackReducer)
    const [feeling, setFeeling] = useState(feedback.feeling || '');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (feeling === '') {
            alert('Response cannot be left blank')
        } else if (feeling > 5 || feeling < 1) {
            alert('Please keep your response between 1 and 5')
        } else {
            dispatch({
                type: 'ADD_FEELING',
                payload: feeling
            });
            history.push('/understanding')
        }
    }

    return (
        <>
            <Header />
            <h1>How are you feeling today?</h1>
            <TextField
                variant="outlined"
                id="Outlined-basic"
                color="primary"
                type="number"
                max="5"
                min="1"
                value={feeling}
                label="feeling?"
                onChange={(event) => setFeeling(event.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>NEXT</Button>
        </>
    )
}

export default Feeling;