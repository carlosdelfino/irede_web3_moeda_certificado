---
layout: page
title: Arquitetura
permalink: /arquitetura/
---

![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Arquitetura&fontSize=36&fontAlignY=35&animation=twinkling)

![visitors](https://visitor-badge.laobi.icu/badge?page_id=carlosdelfino.iRede.docs_arquitetura)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-blue.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
![Language: Portuguese](https://img.shields.io/badge/Language-Portuguese-brightgreen.svg)
![Status](https://img.shields.io/badge/Status-Ongoing-yellow)

# Arquitetura do Projeto

O projeto é organizado como um **repositório principal de documentação e
orquestração** com **quatro submódulos Git** independentes, um por módulo.

```
irede_web3_moeda_certificado (repo principal — este site)
├── backend/              → submódulo: API e serviços
├── frontend/             → submódulo: app do participante
├── frontend_dashboard/   → submódulo: painel administrativo
├── smartcontracts/       → submódulo: token iRede.c + registro (Polygon)
└── docs/                 → documentação (Jekyll → GitHub Pages)
```

## Papel de cada módulo

| Módulo | Responsabilidade |
| :--- | :--- |
| **backend** | API REST: emissão/validação de certificados, carteira de iRede.c, integração com a Polygon, autenticação. |
| **frontend** | Interface do participante: jornada, certificados, saldo de iRede.c, desafios. |
| **frontend_dashboard** | Interface administrativa: gestão de emissões, participantes, etapas e tokenomics. |
| **smartcontracts** | Token iRede.c (ERC-20 ou equivalente) e contrato de registro de certificados na Polygon. |

## Fluxo de alto nível

1. O participante conclui etapas — registradas pelo **backend** a partir das
   ações no **frontend**.
2. A cada etapa, o backend credita **iRede.c** conforme as regras — refletidas
   on-chain pelos **smartcontracts**.
3. O certificado é emitido; seu hash pode ser ancorado na **Polygon**.
4. O **dashboard** administra participantes, etapas, desafios e parâmetros de
   emissão.

## Repositórios

- [Principal](https://github.com/carlosdelfino/irede_web3_moeda_certificado)
- [Backend](https://github.com/carlosdelfino/irede_web3_moeda_certificado_backend)
- [Frontend](https://github.com/carlosdelfino/irede_web3_moeda_certificado_frontend)
- [Dashboard](https://github.com/carlosdelfino/irede_web3_moeda_certificado_frontend_dashboard)
- [Smart Contracts](https://github.com/carlosdelfino/irede_web3_moeda_certificado_smartcontracts)

## Changelog

| Data | Versão | Descrição |
|---|---|---|
| 2026-11-12 | 0.1.0 | Documento inicial |

![footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer&animation=twinkling)
