const years =[2000, 2005, 2008, 2012];

//  ES5

var edad5= years.map(function(el){
    return 2019 - el;
});
console.log(edad5);

//es6

let edad6 =years.map(el => 2019-el);
console.log(edad6);

edad6 = years.map((el, index)=>`Edad ${index+1}:${2019-el}`);
console.log(edad6)

edad6 = years.map(
    (el, index)=>{
        const yearActual = new Date().getFullYear();
        const edad = yearActual - el;
        return `Edad${index+1}:${edad}`;
    }
    
);

console.log(edad6);
// 
//function cuadrado(num){
  //  return num * num;

//}
//console.log(cuadrado(5))

const cuadrado=(num)=>{
    return num * num;

}
console.log(cuadrado(5))

const personas =[
    {
        nombre:'pablo',
        edad:23
    },
    {
        nombre:'pana',
        edad:33
    },
    {
        nombre:'Carlos',
        edad:25
    },
    {
        nombre:'Carlos3',
        edad:19
    }
];

const menores30 = personas.filter(function(personas){
    return personas.edad<30;
});
console.log(menores30);


const menores20 = personas.filter((personas) => personas.edad < 20);
console.log(menores20);
