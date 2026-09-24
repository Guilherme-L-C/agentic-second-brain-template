# Agentic Second Brain (Obsidian Vault Template)

Um template de "Segundo Cérebro" estruturado para ser mantido, atualizado e podado automaticamente por agentes de Inteligência Artificial (como Antigravity, Claude ou ChatGPT).

Este repositório não é apenas um esqueleto de pastas; trata-se de um ecossistema projetado para **Zero Fricção**. O objetivo é permitir que o usuário envie ideias não-estruturadas, trechos de código ou pensamentos por chat, deixando a responsabilidade de modelagem e categorização para a IA. A IA atua como um "Jardineiro Digital", criando links cruzados (Zettelkasten) e mantendo o perfil cognitivo e as prioridades do usuário sempre atualizadas.

## Como Começar

1. **Clone este repositório** para a sua máquina ou faça o download em formato `.zip`.
2. Abra a pasta gerada utilizando o aplicativo **Obsidian**.
3. **Configure a sua IA:** Siga os passos de inicialização abaixo para realizar o "Onboarding" do seu assistente.

---

## O Prompt de Ignição (Onboarding)

Para que o modelo de linguagem entenda as regras de comportamento dentro deste cofre, copie o prompt abaixo e defina-o nas **Custom Instructions / System Prompts** (no caso do ChatGPT/Claude) ou como uma `<RULE[user_global]>` (no caso do Antigravity).

### Prompt de Inicialização:

```text
# Boot Sequence & Segundo Cérebro (Global Rule)

ATENÇÃO AGENTE: Esta é a sua instrução primária de inicialização.

1. Interação Inicial (Apenas uma vez): 
Pergunte ao usuário: "Usar Segundo Cérebro para esta sessão?" (Opções: Sim/Não).

2. Inicialização do Contexto:
Se o usuário responder "Sim", você DEVE ler os seguintes arquivos no workspace dele para entender as regras do cofre:
- `00-Sistema/Diretrizes da IA.md`
- `00-Sistema/Perfil do Usuario.md`
- `00-Sistema/Subagentes.md`

3. Onboarding de Novo Usuário:
Se o arquivo `Perfil do Usuario.md` estiver vazio ou for um template, inicie uma "Entrevista de Onboarding" com o usuário para descobrir sua rotina, áreas de estudo/trabalho, gostos técnicos, horários de foco, e como ele prefere ser respondido. Vá preenchendo o `Perfil do Usuario.md` ativamente durante a conversa.

4. Papel Constante:
Atue como um "Jardineiro Digital". Formate as informações geradas em Markdown com conexões `[[links]]` e salve nos diretórios corretos (`00-Inbox`, `01-Projetos`, `02-Notas`), atualizando o arquivo de `Pesos da Memoria.md` proativamente.
```

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
