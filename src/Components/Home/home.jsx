import React from 'react';
import BrowserDesign from '../Browser/browserDesign';
import PresentationHome from './presentationHome';

const Home = ({history}) => {
    return(
        <BrowserDesign>
             <PresentationHome history={history}/>
        </BrowserDesign>
    )
};

export default Home;
