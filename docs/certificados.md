---
layout: page
title: Certificados
permalink: /certificados/
heading: "Certificados de participação"
eyebrow: "01 / Reconhecimento verificável"
description: "Uma conquista merece uma prova. Conheça a proposta de emissão e verificação dos certificados de Residentes e Alunos do iRede."
next_url: /token-irede-c/
next_label: "Explorar o iRede.c"
---

A proposta é que cada Residente e Aluno do iRede receba um **certificado de
participação** ao concluir etapas da sua jornada. O sistema deverá emitir o
documento e permitir, de forma opcional, o **registro do seu hash na blockchain
Polygon** para posterior conferência de integridade e do registro do emissor.

> O projeto está em definição de requisitos. O registro do hash permite
> conferir se o documento corresponde ao conteúdo registrado; a validação do
> emissor e as regras de revogação também fazem parte da solução prevista.

## Como funciona

1. **Conclusão de etapa** — o participante completa uma etapa do programa
   (residência ou curso) e o sistema registra a conquista.
2. **Emissão do certificado** — o certificado é gerado com os dados do
   participante, da etapa e do emissor (iRede).
3. **Registro on-chain (opcional)** — o hash do certificado é ancorado na
   Polygon por meio do contrato de registro, permitindo verificação pública
   independente do sistema emissor.
4. **Verificação** — qualquer pessoa pode conferir a autenticidade comparando
   o hash do documento com o registro on-chain.

## Custos em iRede.c

A emissão e o registro on-chain de certificados podem consumir **iRede.c**,
a moeda utilitária que o participante acumula ao longo das etapas.
As regras de precificação serão detalhadas nos
[requisitos]({{ 'requirements/' | relative_url }}).
