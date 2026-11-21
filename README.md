# Hemorroida Sem Vergonha - página de vendas

Site estático responsivo, pronto para ser enviado ao GitHub e importado pela Vercel.

## Estrutura

- `index.html`: página de vendas.
- `styles.css`: identidade visual e responsividade.
- `script.js`: carrossel, animações e contador promocional.
- `assets/`: imagens promocionais otimizadas para a web.
- `vercel.json`: configuração de URLs e cache dos arquivos estáticos.
- `PENDENCIAS.md`: itens comerciais que ainda precisam ser definidos.

## Testar no computador

Na pasta do projeto, execute:

```powershell
python -m http.server 8765
```

Depois abra `http://127.0.0.1:8765/`.

## Enviar ao GitHub

1. Crie um repositório vazio no GitHub.
2. Envie **todo o conteúdo desta pasta**, mantendo `index.html` na raiz.
3. Não inclua os PDFs completos do produto no repositório público.

Também é possível usar o GitHub Desktop: **File > Add local repository**, escolha esta pasta e publique o repositório.

### Atualizar o site que já está publicado

Substitua no repositório o `index.html`, o `styles.css`, o `script.js`, o `vercel.json` e a pasta `assets` pelos arquivos deste pacote. Envie o conteúdo da pasta do projeto para a raiz do repositório; não envie a pasta do projeto como uma subpasta.

Esta versão usa imagens `.webp`. O `index.html` e a pasta `assets` precisam ser atualizados juntos para que os nomes dos arquivos permaneçam sincronizados.

## Publicar na Vercel

1. Na Vercel, escolha **Add New > Project**.
2. Importe o repositório criado no GitHub.
3. Selecione **Other** em Framework Preset.
4. Deixe Build Command e Output Directory vazios.
5. Clique em **Deploy**.

O arquivo `vercel.json` já está configurado para este site estático.

## Configuração comercial pendente

- Confirmar as regras da garantia com a plataforma de pagamento.
- Entregar os PDFs pela área protegida da plataforma de venda, nunca pela pasta pública do site.

Os botões dos planos Básico e Mais Completo já apontam para seus respectivos checkouts da Hotmart.
