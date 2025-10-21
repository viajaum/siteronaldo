// atualizar-imagens.js
import fs from 'fs';
import path from 'path';

const pastas = ['./src/pages', './src/components', './public'];

function substituirTagsImg(conteudo) {
  return conteudo.replace(
    /<img\s+([^>]*?)src=["']([^"']+)["']([^>]*)>/gi,
    (match, antes, src, depois) => {
      if (!src.match(/\.(jpg|jpeg|png)$/i)) return match;

      const caminhoWebp = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      return `
<picture>
  <source srcset="${caminhoWebp}" type="image/webp">
  <img ${antes}src="${src}"${depois}>
</picture>`;
    }
  );
}

function atualizarArquivos(diretorio) {
  const arquivos = fs.readdirSync(diretorio);
  for (const arquivo of arquivos) {
    const caminho = path.join(diretorio, arquivo);
    const estat = fs.statSync(caminho);

    if (estat.isDirectory()) {
      atualizarArquivos(caminho);
    } else if (/\.(astro|html)$/i.test(arquivo)) {
      let conteudo = fs.readFileSync(caminho, 'utf8');
      const atualizado = substituirTagsImg(conteudo);
      if (conteudo !== atualizado) {
        fs.writeFileSync(caminho, atualizado, 'utf8');
        console.log(`🪄 Atualizado: ${caminho}`);
      }
    }
  }
}

for (const pasta of pastas) {
  if (fs.existsSync(pasta)) atualizarArquivos(pasta);
}
