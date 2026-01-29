import fs from 'fs';

const niche = process.argv[2];
if (!niche) {
  console.log('Informe o nome do nicho');
  process.exit();
}

fs.cpSync('templates/onyx', `clones/${niche}`, { recursive: true });
console.log(`Clone criado: ${niche}`);
