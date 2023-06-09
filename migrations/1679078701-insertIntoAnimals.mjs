const animals = [
  { id: 1, first_name: 'Sylas', type: 'anguila', accessory: 'pop tart' },
  { id: 2, first_name: 'Evelina', type: 'Hedgehog', accessory: 'Comb' },
  { id: 3, first_name: 'Otto', type: 'Otter', accessory: 'Stone' },
];

export async function up(sql) {
  await sql`
    INSERT INTO animals ${sql(animals, 'first_name', 'type', 'accessory')}
  `;
}

export async function down(sql) {
  for (const animal of animals) {
    await sql`
      DELETE FROM
        animals
      WHERE
        id = ${animal.id}
    `;
  }
}
