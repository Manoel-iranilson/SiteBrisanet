import React from 'react';
import Celular from '../../assets/icons/celular.png'
import Fibra from '../../assets/icons/fibra.png'
import Companhia from '../../assets/icons/companhia.png'

function Plans() {
  return (
    <section id="plans" class="text-center py-5 my-5">
    <div class="row">
      <div class="col-12 mb-5">
          <h2 class="fw-bold">Serviços prestados</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
      <img src={Fibra}/>
        <h2 class="fw-normal my-3">Fibra óptica</h2>
        <p>Ultravelocidade na sua casa e diversão garantida. Aproveite!</p>
        <p><a class="btn text-white "style={{backgroundColor:"#F56E28"}} href="#" >Quero assinar »</a></p>
      </div>
      <div class="col-lg-4">
        <img src={Celular}/>
        <h2 class="fw-normal my-3">Telefone</h2>
        <p>Já pensou em fazer ligações com qualidade e economia? O brisafixo foi feito para você!</p>
        <p><a class="btn text-white" style={{backgroundColor:"#F56E28"}} href="#">Adquirir agora »</a></p>
      </div>
      <div  class="col-lg-4">
      <img src={Companhia}/>
        <h2 class="fw-normal my-3">Empresas</h2>
        <p>Internet fibra óptica com a ultravelocidade certa para sua empresa</p>
        <p><a class="btn text-white" style={{backgroundColor:"#F56E28"}} href="#">Falar com Atendente »</a></p>
      </div>
    </div>
  </section>
  );
}

export default Plans;