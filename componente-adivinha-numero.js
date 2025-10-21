



const Adivinhador = (numero) =>  {
    const numeroAleatorio = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    if (numero == numeroAleatorio) {
        return "Parabéns! Você adivinhou o número!";
    } else if (numero < numeroAleatorio) {
        return "Tente um número maior.";
    } else {
        return "Tente um número menor.";
    }
};