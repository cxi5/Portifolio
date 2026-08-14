<div align="center">

# Cxi5 [cxi5.site.je](https://cxi5.site.je/)

### Leonardo Sebastião — Front-end Developer

**Portfolio pessoal • Bilingue (PT / EN) • Zero framework • Zero build step**

<br>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-cxi5.site.je-0A0E1A?style=for-the-badge&logoColor=white)](https://cxi5.site.je/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<br>

![Preview](og-image.png)

<br>

</div>

---

## Sobre o projeto

Site pessoal desenvolvido do zero, **sem frameworks e sem etapa de build**.  
Cada página é HTML puro, servido diretamente — leve, rápido e fácil de hospedar em qualquer lugar.

O portfólio apresenta quem sou, a stack que utilizo e os projetos que construí, com suporte completo a **português** e **inglês**.

---

## Destaques

| Recurso | Descrição |
|--------|-----------|
| **Bilingue real** | Versões PT e EN com conteúdo próprio + troca instantânea via `data-pt` / `data-en` |
| **Zero dependências** | HTML + CSS + JS vanilla. Sem React, sem Vite, sem npm |
| **SEO completo** | Meta tags, Open Graph, Twitter Cards, `hreflang`, sitemap e Google Search Console |
| **Animações leves** | Matrix canvas, reveal on scroll e carrossel com suporte a teclado/arrasto |
| **Modais temáticos** | Cada projeto tem a sua própria “mood color” no modal de descrição |
| **WhatsApp ofuscado** | Número codificado em base64 para dificultar bots |

---

## Estrutura do projeto

```text
portfolio/
├── index.html                  # Página principal (PT)
├── projetos.html               # Lista completa de projetos (PT)
├── en/
│   ├── index.html              # Página principal (EN)
│   └── projetos.html           # Lista completa de projetos (EN)
├── css/
│   └── style.css               # Estilos partilhados
├── js/
│   └── main.js                 # JavaScript partilhado
├── img/
│   └── projects/               # Screenshots dos projetos
│       ├── luxestay-horizontal.webp
│       ├── nexdoc-horizontal.webp
│       ├── softsolucoes-horizontal.webp
│       └── terminal-horizontal.webp
├── favicon.ico
├── favicon-16.png
├── favicon-32.png
├── apple-touch-icon.png
├── og-image.png
├── robots.txt
├── sitemap.xml
├── google37376cb676225d15.html
└── README.md
```

## Páginas

| Página | Descrição |
|--------|-----------|
| `index.html` | Hero, secção “Quem sou” (com assinatura `class Cxi5 {}`), stack e carrossel dos 4 projetos em destaque |
| `projetos.html` | Lista completa com descrição curta, tags de tecnologia, link ao vivo e modal com descrição detalhada |
| `en/index.html` + `en/projetos.html` | Versões em inglês com conteúdo próprio (não é tradução automática) |

---

## Stack técnica

```text
HTML5  •  CSS3  •  JavaScript Vanilla  •  Google Fonts
```

- **CSS** → `css/style.css` (partilhado)
- **JS** → `js/main.js` (partilhado)
- **Fontes** → Space Grotesk + JetBrains Mono

---

## Funcionalidades principais

- **Troca de idioma instantânea**  
  Atributos `data-pt` / `data-en` — sem reload e sem biblioteca de i18n.

- **Modal de descrição de projeto**  
  Abre com foco preso, fecha com `Esc`, clique fora ou botão.  
  Existe apenas em `projetos.html` (não no carrossel da home).

- **Mood por projeto**  
  Cada modal muda a cor de destaque conforme o projeto (NexDoc, LuxeStay, Soft Soluções, Terminal).

- **Animação Matrix**  
  Canvas na secção “Quem sou”, pausada automaticamente quando a aba não está visível.

- **Carrossel de projetos**  
  Navegação por setas, arrasto ou teclado.

- **Reveal on scroll**  
  Animações de entrada com `IntersectionObserver`.

- **Links de WhatsApp ofuscados**  
  Número guardado em base64 e decodificado apenas no browser.

---

## SEO & Performance

- Meta tags completas (description, keywords, robots)
- Open Graph + Twitter Card com imagem própria
- Tags `hreflang` para as versões PT/EN
- `sitemap.xml` + ficheiro de verificação do Google Search Console
- Favicons em múltiplos formatos
- Imagens em WebP com `loading="lazy"`

## Links

| | |
|---|---|
| **site** | [cxi5.site.je](https://cxi5.site.je/) |
| **GitHub** | [github.com/cxi5](https://github.com/cxi5) |
| **CodePen** | [codepen.io/cxi5](https://codepen.io/cxi5) |
| **X** | [x.com/cx50z](https://x.com/cx50z) |
| **Ko-fi** | [ko-fi.com/cxi50](https://ko-fi.com/cxi50) |

---

<div align="center">

**Feito com HTML, CSS e JavaScript puro**

`class Cxi5 {}`

</div>
