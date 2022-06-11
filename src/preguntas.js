const preguntasArte = [
  {
    titulo: "Qué parte de la capilla sixtina pintó Miguel Ángel?, basico",
    opciones: [
      { textoRespuesta: "Las paredes", isCorrect: false },
      { textoRespuesta: "Las columnas", isCorrect: false },
      { textoRespuesta: "El suelo", isCorrect: false },
      { textoRespuesta: "El techo", isCorrect: true },
    ],
  },
  {
    titulo: "A qué famoso escultor pertenece la obra El pensador?, medio",
    opciones: [
      { textoRespuesta: "Auguste Rodin", isCorrect: false },
      { textoRespuesta: "Miguel Angel", isCorrect: false },
      { textoRespuesta: "Gian Lorenzo Bernini", isCorrect: false },
      { textoRespuesta: "Jan Van Eyck", isCorrect: true },
    ],
  },
  {
    titulo: "¿Cuáles son las flores más famosas pintadas por Van Gogh?, alto",
    opciones: [
      { textoRespuesta: "Flor de loto", isCorrect: false },
      { textoRespuesta: "Girasoles", isCorrect: true },
      { textoRespuesta: "Margaritas", isCorrect: false },
      { textoRespuesta: "Claveles", isCorrect: false },
    ],
  },
  {
    titulo: "En qué arte destacó Isadora Duncan?, superior",
    opciones: [
      { textoRespuesta: "Pintura", isCorrect: false },
      { textoRespuesta: "Escultura", isCorrect: false },
      { textoRespuesta: "Danza", isCorrect: true },
      { textoRespuesta: "Gimnasia", isCorrect: false },
    ],
  },
  {
    titulo: "Qué personaje de cómic creó Bob Kane cuando tenía 18 años?, experto",
    opciones: [
      { textoRespuesta: "Spiderman", isCorrect: false },
      { textoRespuesta: "Dardervil", isCorrect: false },
      { textoRespuesta: "Batman", isCorrect: true },
      { textoRespuesta: "Superman", isCorrect: false },
    ],
  },
];

const preguntasHistoria = [
  {
    titulo: "Qué hito informático de 1969 cambiaría radicalmente el curso de la historia de la humanidad?, basico",
    opciones: [
      { textoRespuesta: "El primer ordenador personal", isCorrect: false },
      { textoRespuesta: "Internet", isCorrect: true },
      { textoRespuesta: "El primer router wi-fi", isCorrect: false },
      { textoRespuesta: "El primer iPod", isCorrect: false },
    ],
  },
  {
    titulo: "A través de qué río africano se alzó el antiguo Egipto?, medio",
    opciones: [
      { textoRespuesta: "Amazonas", isCorrect: false },
      { textoRespuesta: "Tigris", isCorrect: false },
      { textoRespuesta: "Nilo", isCorrect: true },
      { textoRespuesta: "Éufrates", isCorrect: false },
    ],
  },
  {
    titulo: "Con qué nombre se conoce el escándalo que obligó al presidente estadounidense Richard Nixon a dimitir?, alto",
    opciones: [
      { textoRespuesta: "Vietnam", isCorrect: false },
      { textoRespuesta: "Powergate", isCorrect: false },
      { textoRespuesta: "NixonProcess", isCorrect: false },
      { textoRespuesta: "Watergate", isCorrect: true },
    ],
  },
  {
    titulo: "Quién fue el primer Presidente de Estados Unidos?, superior",
    opciones: [
      { textoRespuesta: "Abraham Lincoln", isCorrect: false },
      { textoRespuesta: "Thomas Jefferson", isCorrect: false },
      { textoRespuesta: "Andrew Jackson", isCorrect: false },
      { textoRespuesta: "George Washington", isCorrect: true },
    ],
  },
  {
    titulo: "En qué año se disolvió la Unión Soviética?, experto",
    opciones: [
      { textoRespuesta: "1981", isCorrect: false },
      { textoRespuesta: "1987", isCorrect: false },
      { textoRespuesta: "1989", isCorrect: false },
      { textoRespuesta: "1991", isCorrect: true },
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
      titulo: "Una caracteristica de los metodos estaticos es...?, alto",
      opciones: [
        { textoRespuesta: "Comparte el mismo espacio de memoria", isCorrect: true },
        { textoRespuesta: "No necesita nombrar la clase", isCorrect: false },
        { textoRespuesta: "Deénde de que clase sea final", isCorrect: false },
        { textoRespuesta: "No requiere tener una instancia para poder acceder", isCorrect: false },
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