import { useRef } from "react";

const Footer = () => {
  
  const footer = useRef();

  return (
    <main className="section" ref={footer}>
      <footer className="f-elements--footer" >
        <nav>
          <table width="100%">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h3>Quizizz</h3>
                </td>
                <td>
                  <ul>
                    <li>Perfil</li>
                    <li>Planes</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Recursos</li>
                    <li>Juega ahora</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <a href="">
                        <img src="../img/facebook-svgrepo-com.svg" alt="Facebook" width="24" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src="../img/linkedin-svgrepo-com.svg" alt="LinkedIn" width="24" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src="../img/youtube-svgrepo-com.svg" alt="Youtube" width="24" />
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4">
                  <h5>
                    copyright &copy;
                    Todos los derechos reservados
                  </h5>
                </td>
              </tr>
            </tfoot>
          </table>
        </nav>
      </footer>
    </main>
  );
};


export default Footer;