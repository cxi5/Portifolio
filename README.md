## Cxi5 — Portfolio |

### Visão Geral

O portfólio de **Leonardo Sebastião (Cxi5)** é um site pessoal de desenvolvedor front-end. Funciona como carta de apresentação profissional, vitrine de projetos e canal de contacto direto para freelance. É uma SPA (Single Page Application) em HTML, CSS e JavaScript vanilla, com animações, internacionalização PT/EN, cena 3D interativa e efeitos visuais de identidade técnica.

#### Loader de Entrada
Ecrã de carregamento animado com o alias **Cxi5** em destaque, texto "Initializing..." e barra de progresso — cria uma primeira impressão técnica e imersiva antes de revelar o conteúdo.

#### Navegação (Dock)
Barra de navegação lateral ou inferior com 6 itens linkados por âncora: `// início`, `// sobre`, `// skills`, `// projetos`, `// depoimentos`, `// contacto`. Destaca a secção activa durante o scroll. Suporte i18n completo (PT/EN).

#### Botão de Idioma
Botão flutuante `🌐 EN / PT` no canto superior que comuta toda a interface instantaneamente entre Português e Inglês sem recarregar a página.

#### 01 — Hero
Secção de entrada com:
- **Eyebrow** — "Disponível para projetos freelance"
- **Nome com efeito glitch** — "Leonardo" com animação CSS de distorção digital, "Sebastião" em ciano
- **Alias** — "Cxi5" em tipografia destacada
- **Typewriter animado** — texto rotativo que exibe as tecnologias do stack (HTML, CSS, JavaScript, React…) simulando digitação em tempo real
- **CTAs** — botão verde WhatsApp e botão ghost "entrar em contacto"
- **Indicador de scroll** — linha vertical animada com label "ROLAR / SCROLL"

#### 02 — Sobre Mim
Apresentação pessoal em dois blocos:

**Texto** — 4 parágrafos que cobrem: identidade (Leonardo / Cxi5), foco técnico (HTML, CSS, JS, React), experiência (3 anos, projetos reais), disponibilidade para freelance e links para GitHub, CodePen e Ko-fi.

**Code Block animado** — snippet `class Cxi5 {}` com syntax highlighting simulado, exibindo em pseudo-código o `constructor()` com nome, alias, localização, role e `available: true`, o método `stack()` com as tecnologias, e o método `projects()` listando os 4 projetos actuais: Tunerise, StayOS, NexDoc e Soft Soluções.

#### 03 — Skills
Grid de ícones SVG representando as tecnologias do stack com labels. Inclui HTML5, CSS3, JavaScript, React, Node.js, PHP, MySQL, Tailwind, Git e PWA. Visual limpo com ícones coloridos das tecnologias reais.

#### 04 — Projetos
Grid de cards de projeto, cada um com número sequencial, nome, descrição técnica real, tags de tecnologias e link "Ver projeto →". Estrutura actual:

**001 — Tunerise** — Plataforma social para músicos independentes africanos. Feed, perfis, descoberta de artistas, sistema de publicações. Stack: PHP, MySQL, HTML/CSS, JavaScript. Sem link externo activo (em desenvolvimento).

**002 — NexDoc** — Plataforma de gestão documental e legal com redação inteligente de contratos, assinatura digital, arquivo seguro e painel de acompanhamento para escritórios de advocacia e PMEs. Stack: React, Node.js, PDF.js, MySQL. Link activo: `cxi5.github.io/nexdoc`.

**003 — StayOS** — PWA de experiência hoteleira de luxo — portal do hóspede com reservas em tempo real, galeria interactiva com lightbox, serviços in-room, gestão de estadias, sistema de avaliações, suporte offline e instalável no homescreen. Stack: JavaScript, PWA, HTML/CSS, i18n. Link activo: `cxi5.github.io/Luxury-Residences`.

**004 — Soft Soluções** — Site institucional para empresa de assistência técnica em Luanda. Cobre desbloqueio FRP/IMEI, reparação mobile, câmeras CCTV, redes Wi-Fi, manutenção de PC e criação de sites. Design dark com SEO local, Schema.org, Open Graph e contacto via WhatsApp. Stack: HTML/CSS, JavaScript, SEO, PWA. Sem link externo activo.

**··· — Próximo Projecto** — Card com borda tracejada e estilo muted, com CTA verde de WhatsApp para quem tiver uma ideia de projeto.

#### 05 — Depoimentos
Dois cards de testemunhos reais de clientes (Mendes Augusto — Projeto Web 2025; Filomena Andrade — Landing Page 2024) com texto e identificação do projeto.

**Formulário de submissão** — campos: Nome, Empresa/Projeto, Comentário, e botão "Enviar para aprovação" integrado com EmailJS para envio real por email.

#### 06 — Contacto
Layout em dois blocos:

**Terminal interativo** — janela de terminal com barra de semáforo (dots vermelho/amarelo/verde), comandos `whoami` e `cat contact.txt` que revelam identidade e todos os contactos: email, WhatsApp, GitHub, CodePen, X (Twitter), Ko-fi.

**Links sociais** — lista vertical com ícones SVG linkados para: email, WhatsApp, GitHub, CodePen, X, Ko-fi, Vimeo.

#### Cena 3D Final
Elemento diferenciador: canvas WebGL com **Three.js** exibindo um universo técnico 3D interativo. O utilizador pode arrastar para rodar e usar scroll para zoom. Label: *"// universo técnico — arrasta para rodar"*.

#### Footer
Linha de rodapé: *"Desenhado & construído por Cxi5 — Leonardo Sebastião · 2026 🇦🇴"*
