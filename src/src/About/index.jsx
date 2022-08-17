import React from 'react';
import { MdEast } from "react-icons/md";

function About() {
  return ( 
  <section>
    <div className="row text-center text-md-start">
        <div className="col-md-6">
        <h2 className="fs-5">Ultravelocidade na sua casa e diversão garantida. Aproveite!</h2>
        <h1  className="display-2 fw-bold"> Brisanet</h1>
          <p className="text-muted">Com a Brisanet você tem muito mais vantagens! Como assinante, você ganha acesso a diversos serviços para aproveitar mais ainda o seu plano.</p>
          <a className="btn w-50 p-3 fw-bold text-white " style={{backgroundColor:"#F56E28"}}>Assine Já<MdEast className='mx-1' size={20}/></a>
        </div>
    </div>
  </section>
  
  );
}

export default About;