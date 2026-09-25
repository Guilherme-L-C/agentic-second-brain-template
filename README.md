# Agentic Second Brain (Obsidian Vault Template)

Um template de "Segundo Cérebro" estruturado para ser mantido, atualizado e podado automaticamente por agentes de Inteligência Artificial (como Antigravity, Claude ou ChatGPT).

Este repositório não é apenas um esqueleto de pastas; trata-se de um ecossistema projetado para **Zero Fricção**. O objetivo é permitir que o usuário envie ideias não-estruturadas, trechos de código ou pensamentos por chat, deixando a responsabilidade de modelagem e categorização para a IA. A IA atua como um "Jardineiro Digital", criando links cruzados (Zettelkasten) e mantendo o perfil cognitivo e as prioridades do usuário sempre atualizadas.

https://github.com/Guilherme-L-C/agentic-second-brain-template/raw/main/docs/demo_graph.mp4

*A IA agindo em background: notas sendo criadas e conectadas organicamente no Graph View do Obsidian enquanto o usuário apenas conversa pelo chat.*

## Como Começar (Zero Fricção)

Instalar este ecossistema é tão simples quanto dar uma ordem ao seu assistente. Não é necessário configurar pastas ou copiar regras manualmente.

### Passo a Passo (One-Click Install)

1. **Copie o link** deste repositório:
   `https://github.com/Guilherme-L-C/agentic-second-brain-template`
2. **Cole no chat** do seu Agente de IA (Antigravity, OpenCode, etc) junto com a ordem:
   > *"Leia o arquivo AI_INSTALL.md e instale o template deste repositório."*
3. **Pronto! Comece a usar.** 
   O seu Agente vai ler as instruções de sistema, clonar os arquivos na sua máquina, se auto-configurar e abrir o Obsidian automaticamente. Você só precisa responder às perguntas de onboarding dele!

---

## Por que o Obsidian?

O [Obsidian](https://obsidian.md/) é a interface perfeita (o "frontend") para a mente da IA. Ele trabalha inteiramente com arquivos `.md` (Markdown) armazenados localmente, o que significa que:
1. **Privacidade e Simplicidade:** O seu "Cérebro" vive no seu disco rígido. A IA altera arquivos de texto simples localmente, sem depender de bancos de dados opacos ou APIs proprietárias.
2. **Visualização em Grafo:** O recurso *Graph View* do Obsidian permite ver fisicamente as sinapses acontecendo — você consegue assistir a IA criando nós e interligando os seus pensamentos, projetos e tecnologias em tempo real.
3. **À prova de futuro:** Se a IA mudar ou se o Obsidian deixar de existir, suas memórias continuam sendo arquivos de texto puro que você possui para sempre.

---

## Estrutura de Diretórios

- **`00-Sistema/`**: O motor operacional. Contém as diretrizes da IA, a tabela de prioridades (`Pesos da Memoria.md`), prompts para Subagentes (para execução em background) e o Perfil do Usuário.
- **`00-Inbox/`**: Área de despejo (buffer). A IA aloca ideias em estágio inicial e rascunhos que ainda precisam ser lapidados (`Banco de Insights.md`).
- **`01-Projetos/`**: Notas ativas atreladas a projetos tangíveis, com escopo e prazos definidos.
- **`02-Notas/`**: A base de conhecimento permanente (Zettelkasten). Documentações de tecnologias, resumos conceituais e aprendizados consolidados.

## Subagentes e Scripts de Integração

O repositório inclui definições de **Subagentes** (ex: `zettelkasten_gardener` e `calendar_sync_agent`) localizados em `00-Sistema/Subagentes.md`. 
- **Usuários de macOS:** Em `00-Sistema/Scripts/`, há um script local `apple_calendar.js` que a IA pode invocar via terminal para leitura e escrita nativa no Calendário e Lembretes da Apple.
- **Usuários de Windows/Linux:** A IA já está previamente instruída a adaptar os scripts ou propor integrações baseadas em linha de comando compatíveis com o seu sistema operacional. Certifique-se apenas de informar o seu ambiente durante a entrevista de onboarding.

## Filosofia de Uso

- **Delegação Máxima:** Evite criar arquivos ou formatar notas manualmente. Comunique-se com a IA de forma natural: *"Tive uma ideia de um sistema de cache. Salve nos projetos, conecte com as anotações de Redis e defina a prioridade como média."*
- **Evolução Orgânica:** O `Perfil do Usuario.md` e o `Pesos da Memoria.md` são documentos vivos. À medida que o usuário interage e demonstra preferências, a IA deve atualizar esses parâmetros silenciosamente, adaptando as futuras respostas sem necessidade de ordens explícitas.

---

## Por que isso existe?

A organização tradicional de anotações (como Zettelkasten convencional) muitas vezes gera atrito. Interromper o fluxo de pensamento para criar arquivos, definir tags ou estruturar pastas prejudica a produtividade.

A ideia deste projeto é inverter essa lógica: **usar a Inteligência Artificial não apenas como um chat passivo, mas como um "Jardineiro Digital" atuando diretamente nos arquivos.** 

Este template consolida uma estrutura onde o usuário apenas "despeja" a matéria-prima bruta (ideias, rascunhos) e o Agente se encarrega de categorizar e conectar os pontos, mantendo o sistema limpo com **zero fricção**.

## Autor

Criado por **Guilherme Leite** ([@Guilherme-L-C](https://github.com/Guilherme-L-C)). Sinta-se à vontade para abrir uma *Issue* ou enviar melhorias!

---

## Licença

Este projeto é distribuído sob a [Licença MIT](LICENSE). Sinta-se livre para usar, alterar e adaptar este modelo para o seu próprio Segundo Cérebro.
