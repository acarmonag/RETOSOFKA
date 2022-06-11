import preguntas from "./preguntas";
import { useState, useEffect } from "react";

function App() {
  const [preguntaA, setPreguntaA] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(1000);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);
  const [start, setStart] = useState(true);
  const [premio, setPremio] = useState(100);

  function handleAnswerSubmit(isCorrect, e) {
    if (isCorrect) {
      setPuntaje(puntaje + 1);
      setPremio(premio*3);
    }else{
      setPuntaje(puntaje);
    };
    e.target.classList.add(isCorrect ? "correct" : "incorrect");

    setTimeout(() => {
      if (preguntaA === preguntas.length - 1) {
        setIsFinished(true);
      } else if(isCorrect){
        setPreguntaA(preguntaA + 1);
        setTiempoRestante(10);
      }else{
        setIsFinished(true);
        setPremio(0);
      };
    }, 1000);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  if(start)
    return(
      <main className="app">
      <div className="inicia">
          <span class="inicia2">
            {" "}
            Bienvenido hoy te enfrentaras a {preguntas.length} preguntas. {" "}
          </span>
          <span>
            {" "}
            Empezaras con ${premio} por cada pregunta que ganes se multiplicara por 3 si te equivocas o huyes antes de ganar puntos sera $0
          </span>
            <button onClick={() => {
              setStart(false);
              setTiempoRestante(10);
              }}>
              Listo?
            </button>
          </div>
        </main>
    );
  

  if (isFinished)
    return (
      <main className="app">
        <div className="juegoTerminado">
          <span>
            {" "}
            Tu puntaje es {puntaje} de {preguntas.length}{" "}
          </span>
          <span>
            {" "}
            Tu premio es de ${premio}
          </span>
          <button onClick={() => (window.location.href = "/")}>
            {" "}
            Volver a jugar
          </button>
          <button
            onClick={() => {
              setIsFinished(false);
              setAnswersShown(true);
              setPreguntaA(0);
            }}
          >
            Ver respuestas
          </button>
        </div>
      </main>
    );

  if (answersShown)
    return (
      <main className="app">
        <div className="ladoIzquierdo">
          <div className="numeroPregunta">
            <span> Pregunta {preguntaA + 1} de</span> {preguntas.length}
          </div>
          <div className="tituloPregunta">
            {preguntas[preguntaA].titulo}
          </div>
          <div>
            {
              preguntas[preguntaA].opciones.filter(
                (opcion) => opcion.isCorrect
              )[0].textoRespuesta
            }
          </div>
          <button
            onClick={() => {
              if (preguntaA === preguntas.length - 1) {
                window.location.href = "/";
              } else {
                setPreguntaA(preguntaA + 1);
              }
            }}
          >
            {preguntaA === preguntas.length - 1
              ? "Volver a jugar"
              : "Siguiente"}
          </button>
        </div>
      </main>
    );

  return (
    <main className="app">
      <div className="ladoIzquierdo">
        <div className="numeroPregunta">
          <span> Pregunta {preguntaA + 1} de {preguntas.length} premio actual {premio}</span>
        </div>
        <div className="tituloPregunta">
          {preguntas[preguntaA].titulo}
        </div>
        <div>
          {!areDisabled ? (
            <span className="tiempo-restante">
              Tiempo restante: {tiempoRestante}{" "}
            </span>
          ) : (
            <button
              onClick={() => {
                setAreDisabled(false);
                setIsFinished(true);
                setPuntaje(0);
                setPremio(0);
              }}
            >
              Se acabo el tiempo!
            </button>
          )}
        </div>
        <div>
          {!areDisabled ? (
          <button
              onClick={() => {
                setAreDisabled(false);
                setIsFinished(true);
                if(puntaje ===0){ 
                  setPremio(0);
                };
              }}
                > HUIR?
          </button>):(
          <span className= "seAcabo">Ya no puedes huir</span>
          )}
        </div>
      </div>
      <div className="ladoDerecho">
        {preguntas[preguntaA].opciones.map((r) => (
          <button
            disabled={areDisabled}
            key={r.textoRespuesta}
            onClick={(e) => handleAnswerSubmit(r.isCorrect, e)}
          >
            {r.textoRespuesta}
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;