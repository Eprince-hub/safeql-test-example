import { sql } from './connect';

export type Animal = {
  id: number;
  firstName: string;
  type: string;
  accessory: string | null;
};

export default async function getAnimals() {
  return await sql<Animal[]>`
    SELECT * FROM animals
  `;
}

// export default async function getAnimals() {
//   const animals = await sql<Animal[]>`
//     SELECT * FROM animals
//   `;
//   return animals;
// }
