import { useRef } from "react";

const Body = () => {
  const body = useRef();

<article className="header"
      ref={body}>
  <div className=" f-elements">
    <div>
      <header>
        <h1>Importa como preguntas</h1>
      </header>
    </div>
  </div>
</article>
};


export default Body;
