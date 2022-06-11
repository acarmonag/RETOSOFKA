const preguntasArte = [
  {
    titulo: "pregunta1?, basico",
    opciones: [
      { textoRespuesta: "incooooa", isCorrect: false },
      { textoRespuesta: "incoooob", isCorrect: false },
      { textoRespuesta: "incooooc", isCorrect: false },
      { textoRespuesta: "corroood", isCorrect: true },
    ],
  },
  {
    titulo: "pregunta1?, medio",
    opciones: [
      { textoRespuesta: "incooooae", isCorrect: false },
      { textoRespuesta: "incaaaf", isCorrect: false },
      { textoRespuesta: "incoaaag", isCorrect: false },
      { textoRespuesta: "corraaah", isCorrect: true },
    ],
  },
  {
    titulo: "pregunta1?, alto",
    opciones: [
      { textoRespuesta: "incoaai", isCorrect: false },
      { textoRespuesta: "incoaaaj", isCorrect: false },
      { textoRespuesta: "incoaak", isCorrect: false },
      { textoRespuesta: "corraaam", isCorrect: true },
    ],
  },
  {
    titulo: "pregunta1?, superior",
    opciones: [
      { textoRespuesta: "incoaaan", isCorrect: false },
      { textoRespuesta: "incoaaaok", isCorrect: false },
      { textoRespuesta: "incoaaaao", isCorrect: false },
      { textoRespuesta: "corraaaap", isCorrect: true },
    ],
  },
  {
    titulo: "pregunta1?, experto",
    opciones: [
      { textoRespuesta: "incoaaaq", isCorrect: false },
      { textoRespuesta: "incoaaaar", isCorrect: false },
      { textoRespuesta: "incoaaas", isCorrect: false },
      { textoRespuesta: "corraaat", isCorrect: true },
    ],
  },
];

const preguntasHistoria = [
  {
    titulo: "pregunta2?, basico",
    opciones: [
      { textoRespuesta: "incooou", isCorrect: false },
      { textoRespuesta: "incooov", isCorrect: false },
      { textoRespuesta: "incooow", isCorrect: false },
      { textoRespuesta: "corrrrx", isCorrect: true },
    ],
  },
  {
    titulo: "pregunta2?, medio",
    opciones: [
      { textoRespuesta: "incoy", isCorrect: false },
      { textoRespuesta: "incoz", isCorrect: false },
      { textoRespuesta: "incoa", isCorrect: false },
      { textoRespuesta: "corrrrb", isCorrect: true },
    ],
  },
  {
    titulo: "pregunta2?, alto",
    opciones: [
      { textoRespuesta: "incooooc", isCorrect: false },
      { textoRespuesta: "incooood", isCorrect: false },
      { textoRespuesta: "incooooe", isCorrect: false },
      { textoRespuesta: "corrrrrf", isCorrect: true },
    ],
  },
  {
    titulo: "pregunta2?, superior",
    opciones: [
      { textoRespuesta: "incooog", isCorrect: false },
      { textoRespuesta: "incoooh", isCorrect: false },
      { textoRespuesta: "incoooio", isCorrect: false },
      { textoRespuesta: "corrrrrj", isCorrect: true },
    ],
  },
  {
    titulo: "pregunta2?, experto",
    opciones: [
      { textoRespuesta: "incoook", isCorrect: false },
      { textoRespuesta: "incooom", isCorrect: false },
      { textoRespuesta: "incooon", isCorrect: false },
      { textoRespuesta: "corrrro", isCorrect: true },
    ],
  },
];

const preguntasCiensia = [
  {
    titulo: "Que celulas actúan en la respuesta inmune?, basico",
    opciones: [
      { textoRespuesta: "Células NK", isCorrect: false },
      { textoRespuesta: "Linfocitos T", isCorrect: false },
      { textoRespuesta: "Linfocitos B", isCorrect: false },
      { textoRespuesta: "Todas las anteriores", isCorrect: true },
    ],
  },
  {
    titulo: "Que descubrió Marie curie?,  medio",
    opciones: [
      { textoRespuesta: "El polonio y el radio", isCorrect: false },
      { textoRespuesta: "La radioactividad", isCorrect: false },
      { textoRespuesta: "La A y B ", isCorrect: true },
      { textoRespuesta: "Nada", isCorrect: false },
    ],
  },
  {
    titulo: " Si hay baja hormona antidiuretica..., alto",
    opciones: [
      { textoRespuesta: " Hay mayor retención", isCorrect: false },
      { textoRespuesta: "Hay menor retención", isCorrect: true },
      { textoRespuesta: "No importa si hay retención", isCorrect: false },
      { textoRespuesta: "Ninguna de las anteriores", isCorrect: false },
    ],
  },
  {
    titulo: " Cuales son las células de la neurologia que mielinizan más de un axon?, superior",
    opciones: [
      { textoRespuesta: "Oligodendrocito", isCorrect: true },
      { textoRespuesta: "Astrocito", isCorrect: false },
      { textoRespuesta: "Celulas satélites", isCorrect: false },
      { textoRespuesta: "Microglia", isCorrect: false },
    ],
  },
  {
    titulo: "Que enfermedades causa la bacteria Staphylococcus aureus, experto",
    opciones: [
      { textoRespuesta: "Meningitis", isCorrect: false },
      { textoRespuesta: "Lupus", isCorrect: false },
      { textoRespuesta: "Celulitis", isCorrect: true },
      { textoRespuesta: "Artritis reumatoide", isCorrect: false },
    ],
  },

];

const preguntasMatematica = [
  {
    titulo: "cuanto es 2+2, basico",
    opciones: [
      { textoRespuesta: "2", isCorrect: false },
      { textoRespuesta: "6", isCorrect: false },
      { textoRespuesta: "9", isCorrect: false },
      { textoRespuesta: "4", isCorrect: true },
    ],
  },
  {
    titulo: "cuanto es 9x8?, medio",
    opciones: [
      { textoRespuesta: "28", isCorrect: false },
      { textoRespuesta: "98", isCorrect: false },
      { textoRespuesta: "74", isCorrect: false },
      { textoRespuesta: "72", isCorrect: true },
    ],
  },
  {
    titulo: "Alberto, Benjamín y Carlota hicieron un total de 20 sándwiches. Benjamín hizo 3 veces más que Alberto, y Carlota hizo el doble que Benjamín. ¿Cuántos sándwiches hizo Alberto?, alto",
    opciones: [
      { textoRespuesta: "4", isCorrect: false },
      { textoRespuesta: "6", isCorrect: false },
      { textoRespuesta: "5", isCorrect: false },
      { textoRespuesta: "2", isCorrect: true },
    ],
  },
  {
    titulo: "Si 10 + x es 5 más que 10, ¿cuál es el valor de 2x?, superior",
    opciones: [
      { textoRespuesta: "-5", isCorrect: false },
      { textoRespuesta: "5", isCorrect: false },
      { textoRespuesta: "10", isCorrect: true },
      { textoRespuesta: "25", isCorrect: false },
    ],
  },
  {
    titulo: "Si 3x -y=12 ¿cual es el valor de (8^(x))/(2^(y))?, experto",
    opciones: [
      { textoRespuesta: "2^12", isCorrect: true },
      { textoRespuesta: "4^4", isCorrect: false },
      { textoRespuesta: "8^2", isCorrect: false },
      { textoRespuesta: "El valor no se puede determinar con la info dada", isCorrect: false },
    ],
  },

];

const preguntasProgramacion = [
      {
      titulo: "¿Cuál es el mejor lenguaje de programación?, basico",
      opciones: [
        { textoRespuesta: "JavaScript", isCorrect: true },
        { textoRespuesta: "PHP", isCorrect: false },
        { textoRespuesta: "C++", isCorrect: false },
        { textoRespuesta: "Kotlin", isCorrect: false },
      ],
    },
    {
      titulo: "Con Lasfito aprendes de tutoriales...?, alto",
      opciones: [
        { textoRespuesta: "sin contenido", isCorrect: false },
        { textoRespuesta: "sin relleno", isCorrect: true },
        { textoRespuesta: "sin gracia :v", isCorrect: false },
        { textoRespuesta: "sin código", isCorrect: false },
      ],
    },
    {
      titulo: "¿Cuánto es `11`+ 1 en JavaScript?, medio",
      opciones: [
        { textoRespuesta: "111", isCorrect: true },
        { textoRespuesta: "12", isCorrect: false },
        { textoRespuesta: "Syntax Error", isCorrect: false },
        { textoRespuesta: "`11`1", isCorrect: false },
      ],
    },
    {
      titulo: "¿En qué año fue creado JavaScript?, superior",
      opciones: [
        { textoRespuesta: "1997", isCorrect: false },
        { textoRespuesta: "2001", isCorrect: false },
        { textoRespuesta: "1987", isCorrect: false },
        { textoRespuesta: "1995", isCorrect: true },
      ],
    },
    {
      titulo: "una funcion arrow de javascript, que suma dos numeros es..., experto",
      opciones: [
        { textoRespuesta: "(a,b)=> a+b", isCorrect: true },
        { textoRespuesta: "()=> a+b", isCorrect: false },
        { textoRespuesta: "(a,b)->a+b", isCorrect: false },
        { textoRespuesta: "(a,2)=>a+2", isCorrect: false },
      ],
    },
];
const preguntas=[];
while (preguntas.length<4){
    var c=[];
    var b = 0;
    var random =Math.floor(Math.random()*5)+1;
    if(random===1&&b===0){
        c=preguntasArte[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===2&&b===0){
        c=preguntasHistoria[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===3&&b===0){
        c=preguntasMatematica[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===4&&b===0){
        c=preguntasCiensia[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===5&&b===0){
        c=preguntasProgramacion[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===1&&b===1){
        c=preguntasArte[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===2&&b===1){
        c=preguntasHistoria[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===3&&b===1){
        c=preguntasMatematica[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===4&&b===1){
        c=preguntasCiensia[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===5&&b===1){
        c=preguntasProgramacion[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===1&&b===2){
        c=preguntasArte[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===2&&b===2){
        c=preguntasHistoria[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===3&&b===2){
        c=preguntasMatematica[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===4&&b===2){
        c=preguntasCiensia[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===5&&b===2){
        c=preguntasProgramacion[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===1&&b===3){
        c=preguntasArte[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===2&&b===3){
        c=preguntasHistoria[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===3&&b===3){
        c=preguntasMatematica[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===4&&b===3){
        c=preguntasCiensia[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===5&&b===3){
        c=preguntasProgramacion[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===1&&b===4){
        c=preguntasArte[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===2&&b===4){
        c=preguntasHistoria[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===3&&b===4){
        c=preguntasMatematica[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===4&&b===4){
        c=preguntasCiensia[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
    c = []
    if(random===5&&b===4){
        c=preguntasProgramacion[b]
        preguntas[b]=c;
        b=b+1;
        random =Math.floor(Math.random()*5)+1;
    }
}

export default preguntas;