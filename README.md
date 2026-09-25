<div align="center">

# Agentic Second Brain

*Um template de Segundo Cérebro estruturado e mantido por agentes de Inteligência Artificial.*

[![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

[Como Começar](#como-começar) • [Por que o Obsidian?](#por-que-o-obsidian) • [Estrutura](#estrutura-de-diretórios) • [Filosofia](#filosofia-de-uso) • [Origem](#por-que-isso-existe)

</div>

Um ecossistema projetado para **Zero Fricção**. O objetivo é permitir que você envie ideias não-estruturadas, trechos de código ou pensamentos por chat, deixando a responsabilidade de modelagem e categorização para a IA. A IA atua como um "Jardineiro Digital", criando links cruzados (Zettelkasten) e mantendo o perfil cognitivo e as prioridades sempre atualizadas.

<p align="center">
  <img src="docs/demo_graph.gif" alt="Grafo do Obsidian expandindo (Demonstração)" width="500"/>
  <br>
  <em>A IA agindo em background: notas sendo criadas e conectadas organicamente no Graph View do Obsidian enquanto o usuário apenas conversa pelo chat.</em>
</p>

## Como Começar

Instalar este ecossistema é tão simples quanto dar uma ordem ao seu assistente. Não é necessário configurar pastas ou copiar regras manualmente.

### Passo a Passo

1. **Copie o link** deste repositório:
   `https://github.com/Guilherme-L-C/agentic-second-brain-template`
2. **Cole no chat** do seu Agente de IA (Antigravity, OpenCode, Claude Desktop, etc) junto com a ordem:
   > *"Leia o arquivo AI_INSTALL.md e instale o template deste repositório."*
3. **Pronto! Comece a usar.** 
   O seu Agente vai ler as instruções de sistema, clonar os arquivos na sua máquina, se auto-configurar e abrir o Obsidian automaticamente. Você só precisa responder às perguntas de onboarding dele!

## Por que o Obsidian?

O [Obsidian](https://obsidian.md/) é a interface perfeita (o "frontend") para a mente da IA. Ele trabalha inteiramente com arquivos `.md` (Markdown) armazenados localmente.

- **Privacidade e Simplicidade:** O seu "Cérebro" vive no seu disco rígido. A IA altera arquivos de texto simples localmente, sem depender de APIs proprietárias.
- **Visualização em Grafo:** O recurso *Graph View* do Obsidian permite ver fisicamente as sinapses acontecendo.
- **À prova de futuro:** Se a IA mudar ou se o Obsidian deixar de existir, suas memórias continuam sendo arquivos de texto puro.

## Estrutura de Diretórios

- **`00-Sistema/`**: O motor operacional. Contém as diretrizes da IA, a tabela de prioridades, prompts para subagentes e o seu Perfil.
- **`00-Inbox/`**: Área de despejo (buffer). A IA aloca ideias em estágio inicial e rascunhos que ainda precisam ser lapidados.
- **`01-Projetos/`**: Notas ativas atreladas a projetos tangíveis, com escopo e prazos definidos.
- **`02-Notas/`**: A base de conhecimento permanente (Zettelkasten). Documentações, resumos conceituais e aprendizados consolidados.

> [!NOTE]
> O repositório inclui definições de subagentes (em `00-Sistema/Subagentes.md`) e um script para integração nativa com o calendário do macOS (`00-Sistema/Scripts/apple_calendar.js`). A IA pode adaptar essas ferramentas conforme o seu ambiente operacional.

## Filosofia de Uso

- **Delegação Máxima:** Evite criar arquivos ou formatar notas manualmente. Comunique-se com a IA de forma natural: *"Tive uma ideia de um sistema de cache. Salve nos projetos, conecte com as anotações de Redis e defina a prioridade como média."*
- **Evolução Orgânica:** O `Perfil do Usuario.md` e o `Pesos da Memoria.md` são documentos vivos. À medida que você interage e demonstra preferências, a IA deve atualizar esses parâmetros silenciosamente.

## Por que isso existe?

A organização tradicional de anotações muitas vezes gera atrito. Interromper o fluxo de pensamento para criar arquivos, definir tags ou estruturar pastas prejudica a produtividade.

A ideia deste projeto é inverter essa lógica: **usar a Inteligência Artificial não apenas como um chat passivo, mas como um "Jardineiro Digital" atuando diretamente nos arquivos.** 

Este template consolida uma estrutura onde o usuário apenas "despeja" a matéria-prima bruta, e o Agente se encarrega de categorizar e conectar os pontos, mantendo o sistema limpo com **zero fricção**.

## Autor

Criado por **Guilherme Leite** ([@Guilherme-L-C](https://github.com/Guilherme-L-C)).
