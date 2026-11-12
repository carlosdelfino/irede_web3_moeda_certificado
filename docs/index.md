---
layout: home
title: Início
---

![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=iRede%20Certificados%20%26%20iRede.c&fontSize=32&fontAlignY=35&animation=twinkling)

![visitors](https://visitor-badge.laobi.icu/badge?page_id=carlosdelfino.iRede.docs_index)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-blue.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
![Language: Portuguese](https://img.shields.io/badge/Language-Portuguese-brightgreen.svg)
![Status](https://img.shields.io/badge/Status-Ongoing-yellow)
[![GitHub Issues](https://img.shields.io/github/issues/carlosdelfino/irede_web3_moeda_certificado)](https://github.com/carlosdelfino/irede_web3_moeda_certificado/issues)

<p align="center">
  <img src="{{ 'imgs/iRede-Logo.png' | relative_url }}" alt="Logo iRede" width="280"/>
</p>

# iRede — Certificados de Participação & iRede.c

Sistema de emissão de **certificados de participação** para os **Residentes e
Alunos do iRede**. Cada participante recebe seu certificado, que pode ser
registrado na blockchain **Polygon**, e acumula a moeda utilitária
**Utility iRede Coin (iRede.c)** ao longo de cada etapa — usada em desafios e
na emissão de certificados.

## Visão geral

| Elemento | Descrição |
| :--- | :--- |
| **Certificados** | Emitidos por participação; registro opcional on-chain na Polygon. |
| **iRede.c** | Moeda utilitária ganha por etapa; gasta em desafios e emissões de certificado. |
| **Participantes** | Residentes e Alunos do iRede. |
| **Blockchain** | Polygon (baixo custo de transação, ampla compatibilidade EVM). |

## Módulos do projeto

| Módulo | Repositório | Papel |
| :--- | :--- | :--- |
| Backend | [irede_web3_moeda_certificado_backend](https://github.com/carlosdelfino/irede_web3_moeda_certificado_backend) | API e serviços de emissão/registro |
| Frontend | [irede_web3_moeda_certificado_frontend](https://github.com/carlosdelfino/irede_web3_moeda_certificado_frontend) | App do participante |
| Dashboard | [irede_web3_moeda_certificado_frontend_dashboard](https://github.com/carlosdelfino/irede_web3_moeda_certificado_frontend_dashboard) | Painel administrativo |
| Smart Contracts | [irede_web3_moeda_certificado_smartcontracts](https://github.com/carlosdelfino/irede_web3_moeda_certificado_smartcontracts) | Token iRede.c e registro on-chain |
| Principal | [irede_web3_moeda_certificado](https://github.com/carlosdelfino/irede_web3_moeda_certificado) | Documentação e orquestração (este site) |

## Estado do projeto

Fase de **documentação e levantamento de requisitos** — os requisitos estão
sendo consolidados em [`requirements/`]({{ 'requirements/' | relative_url }}).
Ainda não há código.

## Changelog

| Data | Versão | Descrição |
|---|---|---|
| 2026-11-12 | 0.1.0 | Site e documentação inicial do projeto |

![footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer&animation=twinkling)
