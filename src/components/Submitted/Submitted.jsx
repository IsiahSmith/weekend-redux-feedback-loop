import { useHistory } from "react-router";

function Submitted() {
    const history = useHistory();

    const handleSubmit = () => {
        history.push('/');
    }

    return (
        <>
            <header>Feedback!</header>
            <div>
                <h1>Thank You!</h1>
                <button onClick={handleSubmit}>Leave New Feedback</button>
            </div>
        </>
    )
}


export default Submitted;