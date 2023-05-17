import React from 'react';
import './Footer.css';

import { library } from '@fortawesome/fontawesome-svg-core'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  library.add(fab, faCheckSquare, faCoffee)

const Footer = () => {
    return (
      <section className="mt-4 container-fluid text-center bg-dark">
        <div className="row align-items-start text-white h3 d-flex flex-row">
          <div className="mt-5 col m-2">
            <p>© Kiosco Ilolay 2023. Todos los derechos reservados.</p>
          </div>
          <div className="col m-5">
            <a
              href="..."
              className="h3 text-decoration text-white"
            >
              <FontAwesomeIcon icon="fab fa-facebook" />
            </a>
            <a
              href="..."
              className="h3 text-decoration text-white"
            >
              <FontAwesomeIcon icon="fab fa-whatsapp" />
            </a>
          </div>
        </div>
      </section>
    );
  }




export default Footer