# Gelateria (React + Vite + Tailwind)

Landing page da sorveteria com cabeçalho translúcido, hero com banner, seções Sobre/Produtos/Localização e rodapé — estilizada com Tailwind.

## Como rodar

1) Instale dependências

```powershell
npm i
npm i -D tailwindcss postcss autoprefixer
```

2) Rodar em desenvolvimento

```powershell
npm run dev
```

3) Build de produção

```powershell
npm run build
npm run preview
```

## Imagens

Coloque suas imagens em `public/assets/`:

- hero-principal.jpg
- sobre.jpg
- prod-1.jpg … prod-6.jpg

O código referencia como `/assets/...` (por estar em `public/`).

## Estrutura de componentes

- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/Sobre.jsx`
- `src/components/Produtos.jsx` (grade responsiva 3x2)
- `src/components/Localizacao.jsx` (mapa + redes + formulário de contato)
- `src/components/Footer.jsx`
