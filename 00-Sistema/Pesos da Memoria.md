# Mapa de Calor da Memória (Pesos e Prioridades)

#sistema #memoria #prioridades #contexto

Última calibração global: **[Preencher com Data de Hoje]**

Este arquivo é a tabela de roteamento cognitivo da IA. Ele mantém o registro temporal de menções para aplicar TTL (Time-To-Live) e decaimento natural aos ramos de projeto/estudo. A IA deve consultá-lo e atualizá-lo ativamente.

---

## 🟢 Tier 1: Foco Ativo (Memória Quente / Alta Prioridade)
*Ramos consultados proativamente. Carregamento imediato no início de sessões relevantes.*

| Ramo / Projeto | Categoria | Visto em | Próximo Ponto Crítico | TTL Estimado |
| :--- | :--- | :--- | :--- | :--- |
| **[[Exemplo de Projeto Ativo]]** | Exemplo | YYYY-MM-DD | Data de entrega | Até Data Final |

---

## 🟡 Tier 2: Foco Secundário (Memória Morna / Média Prioridade)
*Consultar sob demanda ou quando correlacionado a perguntas técnicas.*

| Ramo / Projeto | Categoria | Visto em | Observações / Gatilho de Ativação |
| :--- | :--- | :--- | :--- |
| **[[Exemplo de Ferramenta]]** | Estudo | YYYY-MM-DD | Gatilhos |

---

## ⚪ Tier 3: Arquivo / Foco Baixo (Memória Fria)
*Projetos concluídos ou congelados. **NUNCA carregar automaticamente**, a menos que solicitado.*

| Ramo / Projeto | Categoria | Visto em | Status |
| :--- | :--- | :--- | :--- |
| [[Projeto Arquivado Antigo]] | Concluído | < Data | Arquivado |

---

## ⏱️ Regras do Ciclo Temporal (Decaimento e Promoção)
1. **Timestamping Obrigatório:** Toda vez que um projeto for discutido, a coluna `Visto em` é atualizada com a data atual.
2. **Decaimento por Inatividade:**
   - **Tier 1:** Se ficar sem menção e a data crítica passar $\rightarrow$ cai para **Tier 2** em 7 dias.
   - **Tier 2:** Se ficar sem menção por mais de 21 dias $\rightarrow$ cai para **Tier 3**.
3. **Promoção Rápida:**
   - Menção com prazo próximo $\rightarrow$ sobe imediatamente para **Tier 1**.
