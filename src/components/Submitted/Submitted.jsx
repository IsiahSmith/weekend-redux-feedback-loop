import { useHistory } from "react-router";
import Button from '@mui/material/Button';

function Submitted() {
    const history = useHistory();

    const handleSubmit = () => {
        history.push('/');
    }

    return (
        <>
            <h2>Feedback!</h2>
            <div>
                <h1>Thank You!</h1>
                <Button variant="contained" color="primary" onClick={handleSubmit}>Leave New Feedback</Button>
            </div>
        </>
    )
}


export default Submitted;