import React from 'react';
import fibraoptica from '../../assets/icons/fibraotica.png'
import wifi from '../../assets/icons/wifi.png'
import download from '../../assets/icons/download.png'
import upload from '../../assets/icons/upload.png'


function Prices() {
  return (
    <section id='prices' >
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal" style={{color:"#F56E28"}} >Compo Ultra - 500 Mega</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">R$ 109,80<small className="text-muted fw-light">/mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li><img className="mx-2 mb-1" src={fibraoptica} /> 100% fibra óptica</li>
                <li> <img className="mx-2 mb-1" src={wifi} />Wi-fi de alta performance</li>
                <li><img className="mx-2 mb-1" src={download} /> Download 500 Mbps</li>
                <li><img className="mx-2 mb-1" src={upload}/> Upload 250Mbps</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg text-white" style={{backgroundColor:"#F56E28"}}  >Assine Já</button>
            </div>
          </div>
        </div>
          
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 " style={{color:"#F56E28"}} >
              <h4 className="my-0 fw-normal " >200 Mega</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">R$ 89,99<small className="text-muted fw-light">/mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
              <li><img className="mx-2 mb-1" src={fibraoptica} /> 100% fibra óptica</li>
                <li> <img className="mx-2 mb-1" src={wifi} />Wi-fi de alta performance</li>
                <li><img className="mx-2 mb-1" src={download} /> Download 200 Mbps</li>
                <li><img className="mx-2 mb-1" src={upload}/> Upload 100Mbps</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary text-white" style={{backgroundColor:"#F56E28"}} >Assine Já</button>
            </div>
          </div>
        </div>

        
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal" style={{color:"#F56E28"}} >70 Mega</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">R$ 79,99<small className="text-muted fw-light">/mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
              <li><img className="mx-2 mb-1" src={fibraoptica} /> 100% fibra óptica</li>
                <li> <img className="mx-2 mb-1" src={wifi} />Wi-fi de alta performance</li>
                <li><img className="mx-2 mb-1" src={download} /> Download 70 Mbps</li>
                <li><img className="mx-2 mb-1" src={upload}/> Upload 35Mbps</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg text-white" style={{backgroundColor:"#F56E28"}} >Assine Já</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prices;