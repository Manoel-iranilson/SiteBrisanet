import React from 'react';
import {AiFillPhone,AiOutlineWhatsApp,AiOutlineMail} from 'react-icons/ai'

function Contacts() {
  return (
    <section id='contacts' className='py-5 my-5'>
        <div className="row pt-5">
            <div className='col-12 text-center mb-4'>
                <h2 className='display-5 fw-bold'>Contatos</h2>
            </div>
        <div className="row align-items-md-stretch text-center">
        <div className="col-md-6">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2>Fale conosco</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore qui nobis, ea quaerat temporibus dolorem asperiores molestiae nemo cumque, sit placeat iste laudantium nesciunt nihil repellendus alias quisquam doloribus quos!</p>
            <p className='mt-4' ><AiFillPhone size={20} className="mb-1"/>(00) 00000-0000 </p>
            <p><AiOutlineMail size={20} className="mb-1"/>brisa@provedor.com </p>
          <button className="mt-4 btn btn-success" type="button"><AiOutlineWhatsApp size={20} className="mb-1"/>WhatsApp</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border rounded-3">
            R. São Pedro,305
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.553393656518!2d-39.31888877180701!3d-7.202065875111346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a17f3152a2204b%3A0x4c29d1f48430d010!2sBrisanet%20Centro%3A%20Internet%2C%20Fibra%20%C3%93ptica%2C%20Wifi%2C%20Telefonia%20M%C3%B3vel%2C%20Tv%20a%20Cabo%2C%20Juazeiro%20do%20Norte%20CE!5e0!3m2!1spt-BR!2sbr!4v1660758693281!5m2!1spt-BR!2sbr" width="100%" height="250" className='border'></iframe>
          
        </div>
      </div>
    </div>
        </div>

    </section>
  );
}

export default Contacts;