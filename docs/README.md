![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=iRede%20Certificados%20%26%20iRede.c&fontSize=32&fontAlignY=35&animation=twinkling)

![visitors](https://visitor-badge.laobi.icu/badge?page_id=carlosdelfino.iRede.docs_readme)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-blue.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
![Language: Portuguese](https://img.shields.io/badge/Language-Portuguese-brightgreen.svg)
![Status](https://img.shields.io/badge/Status-Ongoing-yellow)
[![GitHub Issues](https://img.shields.io/github/issues/carlosdelfino/irede_web3_moeda_certificado)](https://github.com/carlosdelfino/irede_web3_moeda_certificado/issues)
[![Pages](https://img.shields.io/badge/GitHub%20Pages-docs-blue)](https://carlosdelfino.github.io/irede_web3_moeda_certificado/)

# Site do projeto iRede Web 3

Site institucional e documentação em Jekyll. O tema próprio usa a identidade
do logo em `imgs/iRede-Logo.png` e a paleta do material de referência
“Desafios Web 3.0 em Realidade Virtual”: índigo, violeta e ciano.

## Executar localmente

```bash
cd docs
bundle install
bundle exec jekyll serve
```

Abra o endereço completo informado pelo Jekyll, incluindo o `baseurl`
`/irede_web3_moeda_certificado/`.

Para compilar sem iniciar o servidor:

```bash
bundle exec jekyll build
```

O workflow existente publica `docs/_site/` no branch `gh-pages`.

## Onde editar

- `index.md`: apresentação, jornada do participante e laboratório de hash.
- `_layouts/`: estrutura compartilhada e layout das páginas de documentação.
- `_includes/`: cabeçalho, rodapé e cena Web 3.
- `assets/css/site.css`: identidade visual, responsividade e animações CSS 3D.
- `assets/js/site.js`: menu móvel, paralaxe, abas acessíveis e SHA-256 local.
- `_config.yml`: navegação, metadados, domínio e caminho de publicação.
- `certificados.md`, `token-irede-c.md`, `arquitetura.md` e `requirements/`:
  documentação com front matter próprio para páginas web.

Use o filtro Liquid `relative_url` nos caminhos internos para manter a
compatibilidade com o GitHub Pages. Novas páginas usam `layout: page`,
`title`, `heading`, `description` e `permalink` no front matter. O layout já
gera o título principal; comece as seções do conteúdo com `##`.

## Interações e acessibilidade

A cena é construída com CSS 3D e SVG, sem bibliotecas gráficas ou serviços
externos. Ela reage ao mouse em dispositivos com ponteiro fino e pausa
fora da tela. A preferência `prefers-reduced-motion` desativa animações e
paralaxe. A jornada aceita mouse, toque e teclas de seta, Home e End.

O laboratório calcula hashes SHA-256 com a Web Crypto API em HTTPS ou
localhost. Todos os cálculos ficam no navegador. Ele demonstra integridade
do conteúdo; não consulta a Polygon e não emite certificados nem tokens.
Sem JavaScript, conteúdo e navegação continuam disponíveis.

Fontes Poppins são servidas localmente; a licença está em
`assets/fonts/OFL.txt`. O PDF de referência é preservado como fonte e
excluído do site publicado. A seção Changelog é mantida apenas em
`requirements/`.

![footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer&animation=twinkling)
