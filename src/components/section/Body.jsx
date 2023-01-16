import { useRef } from "react";

const Body = () => {
  const body = useRef();

  return (
    <main ref={body} >
      <article className="section f-elements">
        <div className="container f-elements f-elements--responsive">
          <div className="flex-1">
            <header>
              <h1 className="titulo">Importa como preguntas</h1>
            </header>
            <div></div>
            <section>
              <p>
                Evaluación, instrucción y práctica que motivan a cada estudiante a dominar
              </p>
            </section>
          </div>
          <div className="boton">
            <a className="boton--1" href="">Regístrate gratis</a>
            <a className="boton--1" href="http://" target="_blank" rel="noopener noreferrer">Aprende más</a>
          </div>
          <footer className="f-elements--center">
            <div>
              <p>
                Utilizado por más de 50 millones de personas alrededor del mundo
              </p>
            </div>
          </footer>
        </div>
      </article>
      <section className="section section--hero f-elements f-elements--center" >
        <div className="container f-elements f-elements--center f-elements--iconos">
          <div className="flex-1">
            <div>
              <h2> Vea por qué a los
                administradores les
                encanta Quizizz para sus
                profesores y alumnos</h2>
            </div>
            <div className="botonbajo">
              <a className="boton--2" href="">Prueba el juego</a>
            </div>
            <div>
              <a href=""></a>
            </div>
          </div>
          <div>
            <figure>
              <img className="f-elements--main" src="../img/facebook-svgrepo-com.svg" alt="Facebook" width="48" />
              <img className="f-elements--main" src="../img/linkedin-svgrepo-com.svg" alt="LinkedInd" width="48" />
              <img className="f-elements--main" src="../img/youtube-svgrepo-com.svg" alt="Youtube" width="48" />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );

};


export default Body;
