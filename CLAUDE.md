# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## O que é este repositório

Este é o repositório de perfil GitHub (`thiago662/thiago662`) do usuário. Não é um app buildável — não há package.json, build, lint ou testes. Dois artefatos:

- [README.md](README.md) — README de perfil, renderizado na página principal do GitHub (`github.com/thiago662`). É a carta de apresentação profissional do usuário: bio, stack, formação, contato, em inglês e português. Deve refletir o mesmo posicionamento do portfólio novo (`thiago662.github.io`) — ao editar, checar se algo mudou lá (cargo, empresa, stack, formação) antes de desatualizar o README.
- [docs/index.html](docs/index.html) — página estática de redirecionamento (meta refresh) para `https://thiago662.github.io/`, o portfólio novo. O antigo portfólio em Angular foi aposentado em favor desse redirecionamento (ver commit `2c12fea`).

## Automação

[.github/workflows/github-metrics.yml](.github/workflows/github-metrics.yml) roda diariamente (cron `0 3 * * *`, America/Sao_Paulo) via `lowlighter/metrics` e gera `github-metrics.svg`, referenciado no README. Não editar esse SVG manualmente.

## Convenções

- README bilíngue: qualquer alteração de conteúdo deve manter os blocos "In English" e "Em Português" sincronizados.
- `docs/index.html` é intencionalmente minimalista (só redirect). Não adicionar build tooling aqui — se o portfólio precisar de mais que um redirect estático, o lugar certo é o repo `thiago662.github.io`, não este.
- README é o ponto de entrada de quem visita o perfil (recrutador, cliente, colega): tom deve ser direto e profissional, sem seção de projetos em destaque (removida por preferência do usuário — o portfólio já cobre isso).

## Ideias futuras para o README

- Badge de "disponível para oportunidades" caso o status mude (avaliado, deixado de fora por ora).
- Se voltar a listar projetos, puxar do portfólio em vez de manter lista manual duplicada (risco de desatualizar).
