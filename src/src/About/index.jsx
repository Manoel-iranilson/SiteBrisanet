import React from 'react';
import { MdEast } from "react-icons/md";
import {useLottie} from "lottie-react"
import internet from '../../assets/internet.json'

function About() {

  const options = {
    animationData: internet,
    loop: true
  };
  const { View } = useLottie(options);
    
  return ( 
  <section>
    <div className="row text-center text-md-start">
        <div className="col-md-6">
        <h2 className="fs-5">Ultravelocidade na sua casa e diversão garantida. Aproveite!</h2>
        <h1  className="display-2 fw-bold"> Brisanet</h1>
          <p className="text-muted">Com a Brisanet você tem muito mais vantagens! Como assinante, você ganha acesso a diversos serviços para aproveitar mais ainda o seu plano.</p>
          <a className="btn w-50 p-3 fw-bold text-white " style={{backgroundColor:"#F56E28"}}>Assine Já<MdEast className='mx-1' size={20}/></a>
        </div>
        <div className="col-md-6">
          {View}
        </div>
    </div>
  </section>
  
  );
}

export default About;