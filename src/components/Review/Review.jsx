import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Review() {
    const feedback = useSelector(store => store.feedbackReducer)
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        }).then(response => {
                dispatch({
                    type:'EMPTY_FEEDBACK'
                })
                history.push('/submitted')
            }).catch(error => {
                console.log('Error in review POST', error);
            })
    }

    const goBack = () => {
        history.push('/comments')
    }

    return (
        <>
        <h1>Review Your Feedback</h1>
        <div>
            <h3>Feelings: {feedback.feeling}</h3>
            <h3>Understanding: {feedback.understanding}</h3>
            <h3>Support: {feedback.support}</h3>
            <h3>Comments: {feedback.comments}</h3>
        </div>
        <Button variant="contained" color="primary" onClick={goBack}>BACK</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>SUBMIT</Button>
        </>
    )
}

export default Review;