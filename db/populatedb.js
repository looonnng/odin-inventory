const { Client } = require('pg');
require('dotenv').config();

const guitars = [
  [
    1,
    'american elite telecaster',
    'fender',
    'telecaster',
    '/public/images/guitars/fender/american-elite-telecaster.jpg',
  ],
  [
    3,
    'standard les paul',
    'gibson',
    'les paul',
    '/public/images/guitars/gibson/standard-les-paul.jpg',
  ],
  [
    4,
    'studio les paul',
    'gibson',
    'les paul',
    '/public/images/guitars/gibson/studio-les-paul.jpg',
  ],
  [
    5,
    'standard sg',
    'gibson',
    'sg',
    '/public/images/guitars/gibson/standard-sg.jpg',
  ],
  [
    6,
    'signature sg',
    'gibson',
    'sg',
    '/public/images/guitars/gibson/signature-sg.jpg',
  ],
  [7, 'g-400', 'epiphone', 'sg', '/public/images/guitars/epiphone/g-400.jpg'],
  [8, 'viper ltd', 'esp', 'sg', '/public/images/guitars/esp/viper-ltd.jpg'],
  [
    9,
    'te-1000 ltd',
    'esp',
    'telecaster',
    '/public/images/guitars/esp/te-1000-ltd.jpg',
  ],
  [10, 'ec ltd', 'esp', 'les paul', '/public/images/guitars/esp/ec-ltd.jpg'],
  [
    11,
    'sn-1 ltd',
    'esp',
    'stratocaster',
    '/public/images/guitars/esp/sn-1-ltd.jpg',
  ],
  [
    2,
    'american professional stratocaster',
    'fender',
    'stratocaster',
    '/public/images/guitars/fender/american-professional-stratocaster.jpg',
  ],
  [
    15,
    'test',
    'fender',
    'telecaster',
    '/public/images/guitars/new-guitar/telecaster-outline.jpg',
  ],
  [
    16,
    'test2',
    'fender',
    'stratocaster',
    '/public/images/guitars/new-guitar/stratocaster-outline.jpg',
  ],
  [
    17,
    'Tony',
    'gibson',
    'sg',
    '/public/images/guitars/new-guitar/sg-outline.jpg',
  ],
  [
    18,
    'wata',
    'esp',
    'les paul',
    '/public/images/guitars/new-guitar/les-paul-outline.jpg',
  ],
];

const SQL_TABLES = `
CREATE TABLE guitars (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   name VARCHAR ( 255 ),
   brand VARCHAR ( 255 ),
   shape VARCHAR ( 255 ),
   img_src VARCHAR ( 255 )
);
`;

const SQL_VALUES = `
  INSERT INTO guitars (guitar_id, name, brand, shape, img_src) 
  VALUES ($1, $2, $3, $4, $5);
`;

async function main() {
  console.log('seeding...');

  const client = new Client({
    connectionString: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.RAILWAY_TCP_PROXY_DOMAIN}:38026/${process.env.POSTGRES_DB}`,
  });

  await client.connect;
  await client.query(SQL_TABLES);

  for (const [name, brand, shape, img_src] of guitars) {
    await client.query(SQL_VALUES, [name, brand, shape, img_src]);
  }
  
  await client.end();
  console.log('done');
}

main();