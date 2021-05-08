import React from 'react';
import BrowserDesign from '../Browser/browserDesign';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import DontAllowCertificate from './DontAllowCertificate';
import AllowCertificate from './AllowCertificate';
import WithDataByEmail from '../../Api/FetchDataByEmail';

const ResultPage = ({data}) => {
    const {score} = data;    
    return (
        <BrowserDesign>
        <div className="w-75 m-auto browser-design-conatiner-all">
               <div className="div text-center w-100">
                   <div className="d-flex justify-content-center align-items-center mb-4 mt-4">
                       <FontAwesomeIcon className="text-success h1" icon={faCheckCircle} />
                       <h5 className="text-center ml-2">Well done! Your test has been successful!</h5>
                   </div>
                   <p>Your score: <span className="font-weight-bold">{score}</span></p>
                   <p>Passing Score: <span className="font-weight-bold">60% (11 points)</span></p>
                   {
                     parseInt(score) >= 60
                      ?
                     <AllowCertificate/>
                     :
                     <DontAllowCertificate/>
                   }
               </div>
        </div>
        </BrowserDesign>
    );
}

export default WithDataByEmail(ResultPage);
