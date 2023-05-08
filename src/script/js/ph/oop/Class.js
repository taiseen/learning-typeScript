"use strict";
// 05 - May - 2023
class Animal {
    name;
    specie;
    sound;
    // public name: string
    // public specie: string
    // public sound: string
    // parameter properties... 
    // by using this approach we can avoid repetitive tasks
    constructor(name, specie, sound) {
        this.name = name;
        this.specie = specie;
        this.sound = sound;
        // this.name = name;
        // this.specie = specie;
        // this.sound = sound;
    }
    makeSound() {
        const sound = `The ${this.specie} sound is ${this.sound}`;
        console.log(sound);
    }
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
const cat = new Animal('Neo', 'Cat', 'mew-mew');
const dog = new Animal('Zen', 'Dog', 'gew-gew');
cat.makeSound();
dog.makeSound();
