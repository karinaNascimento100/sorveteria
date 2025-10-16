# Sorveteria

Projeto com duas versões do site:

- `gelateria/` — versão estática (HTML + CSS + JS)
- `gelateria-react/` — versão em React + Vite + Tailwind (recomendada)

## Como rodar a versão React

1. Entre na pasta do app
```
cd gelateria-react
```
2. Instale as dependências e rode o dev server
```
npm i
npm run dev
```

As imagens ficam em `gelateria-react/public/assets/` e são referenciadas no código como `/assets/...`.

## Estrutura
```
.
├── gelateria/                  # versão estática
├── gelateria-react/            # app React + Vite + Tailwind
│   ├── public/assets/          # imagens do site
│   └── src/                    # código-fonte
├── .gitignore
└── README.md                   # este arquivo
```

## Notas de Git
- Os diretórios `node_modules/` e os artefatos de build não devem ser versionados.
- Caso tenha sido commitado por engano, use:
```
git rm -r --cached node_modules
```
E depois faça um commit e push.

---

Made with 💖 and a lot of ice cream.