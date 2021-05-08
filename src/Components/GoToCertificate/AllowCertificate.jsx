import React from 'react';
import {withRouter} from 'react-router-dom'
import { Button } from 'react-bootstrap';

const AllowCertificate = ({history}) => {
    return (
        <div className="m-3">
            <p className="small text-success">Congratulations, you have successfully pass the test!</p>
            <div className="btn-allow-test">
                <Button 
                className="mt-3"
                onClick={() => setTimeout(() => { history.push('/certificate/ghty145phjjghy45879632lm124-457poiuytf-231l/get-certificate') }, 1500)}
                >
                    Get A Certificate
                </Button>
            </div>
        </div>
    );
}

export default withRouter(AllowCertificate);
