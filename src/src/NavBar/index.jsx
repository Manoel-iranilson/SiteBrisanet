import React from "react";

function NavBar() {
  return (
    <header className="bg-white sticky-top d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="https://www.brisanet.com.br/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <div className="w-25">
          <img alt="Brisanet" className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf37fA68Xhm3ajWvGHKmkfArsqxAmlAtjWV7eZxKd0hdAYbDVHM0Nj-GINfhH_jFzPM2s&usqp=CAU" />
          </div>

          <span className="fs-4 fw-bold">Brisanet</span>
      </a>

      <ul className="mt-3 nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Serviços</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Preços</a></li>
        <li className="nav-item"><a href="#" className="nav-link">FAQ</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Contato</a></li>
      </ul>
    </header>
    );
}

export default NavBar;
