// converter-webp.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const pasta = './public/images';

async function converterParaWebP(caminho) {
  const extensao = path.extname(caminho).toLowerCase();
  const nomeSemExtensao = caminho.replace(extensao, '');
  const novoArquivo = `${nomeSemExtensao}.webp`;

  if (fs.existsSync(novoArquivo)) return; // já existe .webp

  try {
    await sharp(caminho).webp({ quality: 85 }).toFile(novoArquivo);
    console.log(`✅ Convertido: ${novoArquivo}`);
  } catch (err) {
    console.error(`❌ Erro ao converter ${caminho}:`, err);
  }
}

function listarArquivos(diretorio) {
  const arquivos = fs.readdirSync(diretorio);
  for (const arquivo of arquivos) {
    const caminho = path.join(diretorio, arquivo);
    const estat = fs.statSync(caminho);

    if (estat.isDirectory()) {
      listarArquivos(caminho);
    } else if (/\.(jpg|jpeg|png)$/i.test(arquivo)) {
      converterParaWebP(caminho);
    }
  }
}

listarArquivos(pasta);
