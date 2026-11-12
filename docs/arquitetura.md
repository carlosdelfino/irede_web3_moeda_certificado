---
layout: page
title: Arquitetura
permalink: /arquitetura/
heading: "Tecnologia que conecta a jornada."
eyebrow: "03 / Por dentro do ecossistema"
description: "Quatro módulos independentes, uma proposta integrada: conectar participação, certificados e moeda utilitária na Web 3."
next_url: /requirements/
next_label: "Explorar os requisitos"
---

O projeto é organizado como um **repositório principal de documentação e
orquestração** com **quatro submódulos Git** independentes, um por módulo.

<div class="architecture-flow">
  <div><span>01 / EXPERIÊNCIA</span><h3>Participante</h3><p>O frontend apresenta a jornada, os certificados, os desafios e o saldo de iRede.c.</p></div>
  <div><span>02 / ORQUESTRAÇÃO</span><h3>API e serviços</h3><p>O backend conecta as regras do programa à emissão e à integração com a blockchain.</p></div>
  <div><span>03 / OPERAÇÃO</span><h3>Administração</h3><p>O dashboard reúne a gestão de participantes, etapas, emissões e parâmetros.</p></div>
  <div><span>04 / REGISTRO</span><h3>Smart contracts</h3><p>Os contratos na Polygon deverão implementar o token iRede.c e o registro de certificados.</p></div>
</div>

> Esta é a arquitetura prevista. Os módulos estão em fase de documentação,
> e as integrações serão detalhadas nos requisitos antes da implementação.

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
