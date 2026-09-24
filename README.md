# Agentic Second Brain (Obsidian Vault Template)

Um template de "Segundo Cérebro" estruturado para ser mantido, atualizado e podado automaticamente por Agentes de IA (como Antigravity, Claude ou ChatGPT).

Este não é apenas um template de pastas; é um ecossistema projetado para **Zero Fricção**. Você joga suas ideias cruas no chat da IA, e ela atua como um **Jardineiro Digital**, categorizando, criando links cruzados (Zettelkasten) e atualizando o seu perfil cognitivo ao longo do tempo.

## 🚀 Como Começar

1. **Clone este repositório** para a sua máquina (ou faça o download em formato `.zip`).
2. Abra a pasta gerada usando o aplicativo **Obsidian**.
3. **Configure a sua IA:** Siga o passo abaixo para realizar a "Ignição" do seu assistente.

---

## ⚡ O Prompt de Ignição (Onboarding)

Para que sua IA entenda as regras deste cofre, copie o prompt abaixo e coloque nas **Instruções Globais / Custom Instructions** (se for ChatGPT/Claude) ou como uma `<RULE[user_global]>` (se for Antigravity).

### Copie isto para a IA:

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
Se o arquivo `Perfil do Usuario.md` estiver vazio ou for um template, inicie uma "Entrevista de Onboarding" com o usuário para descobrir sua rotina, áreas de estudo/trabalho, gostos técnicos, horários de foco, e como ele gosta de ser respondido. Vá preenchendo o `Perfil do Usuario.md` ativamente durante a conversa.

4. Papel Constante:
Atue como um "Jardineiro Digital". Formate as informações geradas em Markdown com conexões `[[links]]` e salve nos diretórios corretos (`00-Inbox`, `01-Projetos`, `02-Notas`), atualizando o arquivo de `Pesos da Memoria.md` proativamente.
```

---

## 📂 Estrutura de Pastas

- **`00-Sistema/`**: O motor da IA. Contém as diretrizes, a tabela de prioridades (`Pesos da Memoria`), prompts para Subagentes (para rodarem em background) e o seu Perfil.
- **`00-Inbox/`**: Área de despejo rápido. A IA coloca ideias que ainda precisam ser lapidadas aqui (`Banco de Insights.md`).
- **`01-Projetos/`**: Notas ativas atreladas a projetos reais com início e fim.
- **`02-Notas/`**: A base de conhecimento permanente (Zettelkasten). Tecnologias, resumos de livros, dogmas.

## 🤖 Subagentes e Scripts Opcionais

O repositório inclui definições de **Subagentes** (ex: `zettelkasten_gardener` e `calendar_sync_agent`) em `00-Sistema/Subagentes.md`. 
- **macOS Users:** Dentro de `00-Sistema/Scripts/` existe um script `apple_calendar.js` que a IA pode usar via terminal para ler e escrever nativamente no Calendário e Lembretes da Apple.
- **Windows/Linux Users:** A IA está instruída a adaptar os scripts de acordo com o seu sistema operacional ou sugerir integrações de terceiros. Apenas avise sua IA qual SO você usa durante o onboarding!

## 💡 Filosofia

- **Deixe a IA trabalhar:** Não crie arquivos manualmente a menos que queira. Fale com a IA: *"Tive uma ideia de um app que faz X. Salva isso nos projetos e conecta com as tecnologias que eu já estudo."*
- **Evolução Orgânica:** O `Perfil do Usuario.md` se adapta à medida que você conversa. Se você disser *"Nossa, detesto programar em Java"*, a IA anotará isso silenciosamente e evitará sugerir Java no futuro.
