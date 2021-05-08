import React , {useRef} from 'react'
import { Button } from 'react-bootstrap';
import {useReactToPrint} from 'react-to-print'
import CertificateClass from '../Certificate/CertificateClass';

export default function PrintCertificate() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content : () => componentRef.current
    });

  return (
    <div>
       <CertificateClass ref={componentRef}/>
       <div className="text-right mt-4 mr-2">
           <Button className="" onClick={handlePrint}>Save it in the pdf</Button>
       </div>
    </div>
  )
}
