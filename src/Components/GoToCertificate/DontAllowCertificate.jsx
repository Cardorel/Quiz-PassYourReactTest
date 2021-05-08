import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom'

const DontAllowCertificate = ({history}) => {
    const handleRetakeQuiz = () => {
        setTimeout(() => { 
            window.location.reload();
        }, 1000) 
        history.push('/next-step-to-the-test/1fgh5034tyui6897o45/gotothetest')
    }
    return (
        <div className="m-3">
            <p className="small text-danger">You did not met the minimum score of 50% necessary to pass this quiz. Don't worry, you can click "Retake Quiz" to try again.</p>
            <Button 
            className="mt-3"
            onClick={handleRetakeQuiz}
            >
                Retake Quiz
            </Button>
        </div>
    );
}

export default withRouter(DontAllowCertificate);
