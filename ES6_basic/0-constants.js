export function taskFirst() {
    // Utiliser const car la variable task ne change jamais après l'initialisation
    const task = 'I prefer const when I can.';
    return task;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    // Utiliser let car la variable combination est modifiée après son initialisation
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }
  