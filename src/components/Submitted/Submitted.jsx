import { useHistory } from "react-router";
import Header from '../Header/Header';
import Button from '@mui/material/Button';

function Submitted() {
    const history = useHistory();

    const handleSubmit = () => {
        history.push('/');
    }

    return (
        <>
            <Header />
            <div>
                <h1>Thank You!</h1>
                <Button variant="contained" color="primary" onClick={handleSubmit}>Leave New Feedback</Button>
            </div>
        </>
    )
}


export default Submitted;