export type AnimalType =  'dog' | 'horse';

export enum Sequence {
  'dog' = 8,
  'horse' = 16
}

export class Animal {
  type: AnimalType;
  get sequence(): string[] {
    const sequence = [];
    for (let i = 1; i <= Sequence[this.type]; i++) {
      sequence.push(`url('../assets/${this.type}/${i}.svg')`);
    }
    return sequence;
  }
}

export class Dog extends Animal {
  type: AnimalType = 'dog';
}

export class Horse extends Animal {
  type: AnimalType = 'horse';
}

