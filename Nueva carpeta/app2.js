const personas =[
    {
        nombre:'pedro',
        estatura:1.40,
        peso:97
    },
    {
        nombre:'maria',
        estatura:1.65,
        peso:97
    },
    {
        nombre:'juan',
        estatura:1.95,
        peso:67
    },
    {
        nombre:'ana',
        estatura:1.45,
        peso:89
    },
    {
        nombre:'alex',
        estatura:1.47,
        peso:98
    },
    {
        nombre:'Ivan',
        estatura:1.84,
        peso:68
    },
    {
        nombre:'Roman',
        estatura:1.59,
        peso:67
    },
    {
        nombre:'pablo',
        estatura:1.45,
        peso:76
    },
    {
        nombre:'Rufino',
        estatura:1.85,
        peso:92
    },
    {
        nombre:'mario',
        estatura:1.65,
        peso:97
    },
   
];




const trabajo = personas.filter((personas) => personas.peso>80 && personas.estatura<1.60 );
console.log(trabajo);




