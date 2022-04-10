// BigInt - this is a new type - big integer
// Number.MAX_SAFE_INTEGER - the largest number that JS is willing to calulate - memory limit
// In JS and all other languages there is a certain limit number
// BigInt is used for number that are larger than Number.MAX_SAFE_INTEGER
// the letter 'n' at the end of an integer indecates the use of BigInt and for calculations
//      to be made.
1n + 2n;
9007199254740991n + 10n;

// Optional Chaining Operator ?
let will_pokemon = {
    pikachu: {
        species: 'mouse pokemon',
        height: 0.4,
        weight: 6
    }
}

let weight = will_pokemon.pikachu.weight;
console.log("weight: ", weight);

let andrei_pokemon = {
    raichu: {
        species: 'mouse pokemon',
        height: 0.8,
        weight: 30
    }
}

if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
    let weight2 = andrei_pokemon.pikachu.weight;
    console.log(weight2);
} else {
    let weight2 = undefined;
    console.log(weight2);
}

// instead of having to use an if statement with a lot of variables to pass, you can do this
let weight3 = andrei_pokemon?.pikachu?.weight;
// here the '?''s are checking if the properies exist within the object
//      if they don't appear then the function will result in an undefined 

let weight2 = andrei_pokemon.pikachu.weight;
console.log("weight: ", weight);

// Nullish Coalescing Operator ??

let andrei_pokemon = {
    pikachu: {
        species: 'mouse pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

let power = andrei_pokemon?.pikachu?.power || 'no power'

let power = andrei_pokemon?.pikachu?.power ?? 'no power'