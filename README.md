# GESTOR — Plataforma Jurídica v2.0 (Integrada)

## Novidades da v2.0
Agora o sistema todo se comunica! Dados se movem entre módulos de forma inteligente.

### 📅 Agenda integrada
- Agenda interna + Google Agenda + Google Meet
- **Calendário central** mostra TUDO: andamentos, intimações, prazos, audiências e reuniões
- Reuniões com link do Google Meet (criar e entrar)
- Sincronização automática com Google Agenda

### 🔔 Notificações e alertas
- Painel de notificações no sino (topo direito) — clique para abrir
- Barra de alertas no Dashboard (prazos, reuniões, intimações)
- Alertas críticos destacados em vermelho

### 🎯 Follow-ups Inteligentes (NOVO MÓDULO)
O sistema monitora sozinho e dispara ações:
- Cliente sem retorno há X dias → registrar atendimento (atualiza CRM)
- Honorário em atraso → enviar cobrança (lança no Financeiro)
- Processo parado → verificar andamento (cria tarefa no Workflow)
- Lead frio → reativar contato (move no funil CRM)

### 🔗 Comunicação entre módulos (clique e veja acontecer)
- **Tratar intimação** → cria prazo na Agenda + tarefa no Workflow automaticamente
- **Executar follow-up** → atualiza CRM / Financeiro / Workflow
- **Gerar peça do prazo** → abre o módulo de Petições IA
- Cada ação mostra um aviso confirmando para onde os dados foram

## Como abrir (Mac + VS Code)
1. Extraia a pasta `gestor`
2. Abra no VS Code → instale a extensão **Live Server**
3. Clique direito em `index.html` → **Open with Live Server**
4. (Ou só clique 2x no `index.html` para abrir no navegador)

## Estrutura
```
gestor/
├── index.html       ← Interface (14 módulos)
├── css/style.css    ← Design + componentes integrados
├── js/
│   ├── data.js      ← Motor de dados central (conecta tudo)
│   └── app.js       ← Navegação + ações integradas
└── README.md
```

## Teste a integração
1. Vá em **Intimações** → clique **Tratar** → veja o aviso (prazo + tarefa criados)
2. Vá em **Follow-ups** → clique numa ação → veja o card sumir e o aviso de atualização
3. Clique no **sino** 🔔 no topo → painel de notificações
4. Vá em **Agenda** → clique **Conectar Google Agenda** e **Criar reunião com Meet**

---
**GESTOR v2.0** — Plataforma Jurídica Inteligente e Integrada

---

## v3.0 — Andamentos & IA (NOVO)
Módulo de captura inteligente nos tribunais com supervisão humana obrigatória.

### Fluxo completo (pipeline de 5 estágios)
**Capturado → IA Analisa → Aguardando revisão → Aprovado → Protocolado**

1. **Captura automática** nos tribunais (TJSP, TRT, TRF...)
2. **IA lê e analisa** o andamento: classifica o tipo, calcula o prazo fatal, sugere a providência
3. **Banco de Petições**: a IA entrega 2-3 peças PRONTAS, com fundamentação real:
   - Artigos de lei (CPC, CLT, Lei 8.213/91...)
   - Jurisprudência (STJ, STF, TST, Temas, REsp)
   - Súmulas, INs e Teses
   - % de aderência ao caso
4. **Advogado revisa**: vê a peça completa, pode editar
5. **Aprovação obrigatória**: só protocola depois do advogado clicar "Aprovar e Protocolar"

### 🛡️ Supervisão humana
Nenhuma peça vai ao tribunal sem revisão e aprovação de um advogado.
A responsabilidade técnica permanece sempre com o profissional.

### Teste o fluxo
1. Vá em **Andamentos & IA**
2. No andamento "capturado", clique **Iniciar análise com IA**
3. Veja a IA classificar e sugerir peças
4. Clique **Ver peça** → leia a peça pronta com fundamentação
5. Clique **Aprovar e Protocolar** → status muda + tarefa criada no Workflow
