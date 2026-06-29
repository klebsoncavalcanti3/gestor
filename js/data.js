// ============================================
// GESTOR — MOTOR DE DADOS CENTRAL (Data Store)
// Conecta Processos, Agenda, CRM, Kanban,
// Follow-ups e Notificações — tudo comunicando
// ============================================

const GESTOR = {
  // -------- BASE DE DADOS --------
  processos: [
    { id:'P1', num:'0012345-67.2024.8.26.0100', cliente:'João Pedro Silva', clienteId:'C1', area:'prev', responsavel:'Dr. Klebson Cavalcanti', tribunal:'TJSP', status:'ativo', ultimoAndamento:'2026-06-27', diasParado:0 },
    { id:'P2', num:'0098765-43.2023.5.15.0001', cliente:'Maria Costa', clienteId:'C2', area:'trab', responsavel:'Dra. Ana Carvalho', tribunal:'TRT15', status:'ativo', ultimoAndamento:'2026-06-26', diasParado:1 },
    { id:'P3', num:'0034521-89.2022.4.03.6100', cliente:'Empresa Ferreira Ltda', clienteId:'C3', area:'civel', responsavel:'Dr. Marcos Santos', tribunal:'TRF3', status:'ativo', ultimoAndamento:'2026-04-10', diasParado:78 },
    { id:'P4', num:'0076543-21.2024.8.26.0224', cliente:'Carlos Rodrigues', clienteId:'C4', area:'prev', responsavel:'Dra. Juliana Faria', tribunal:'TJSP', status:'suspenso', ultimoAndamento:'2026-03-15', diasParado:104 },
    { id:'P5', num:'0011122-33.2021.8.26.0050', cliente:'Grupo Empreendimentos SA', clienteId:'C5', area:'trib', responsavel:'Dr. Klebson Cavalcanti', tribunal:'TJSP', status:'ativo', ultimoAndamento:'2026-06-23', diasParado:4 },
  ],

  clientes: [
    { id:'C1', nome:'João Pedro Silva',      doc:'123.456.789-00',    area:'prev',  honorarios:15500, status:'ativo',    ultimoContato:'2026-06-27', diasSemContato:0,  tipo:'cliente', pastaFisica:'001/2026', localizacaoPasta:'Arquivo A · Gaveta 1' },
    { id:'C2', nome:'Maria Costa',           doc:'987.654.321-00',    area:'trab',  honorarios:8200,  status:'ativo',    ultimoContato:'2026-06-26', diasSemContato:1,  tipo:'cliente', pastaFisica:'002/2026', localizacaoPasta:'Arquivo A · Gaveta 1' },
    { id:'C3', nome:'Empresa Ferreira Ltda', doc:'12.345.678/0001-99',area:'civel', honorarios:42000, status:'ativo',    ultimoContato:'2026-06-10', diasSemContato:17, tipo:'cliente', pastaFisica:'003/2022', localizacaoPasta:'Arquivo B · Gaveta 3' },
    { id:'C4', nome:'Carlos Rodrigues',      doc:'456.789.123-00',    area:'prev',  honorarios:4800,  status:'suspenso', ultimoContato:'2026-05-20', diasSemContato:38, tipo:'cliente', pastaFisica:'004/2024', localizacaoPasta:'Arquivo A · Gaveta 2' },
    { id:'C5', nome:'Grupo Empreendimentos SA',doc:'98.765.432/0001-11',area:'trib',honorarios:20000, status:'ativo',    ultimoContato:'2026-04-15', diasSemContato:73, tipo:'cliente', pastaFisica:null,       localizacaoPasta:null },
    { id:'C6', nome:'Ana Lima',               doc:'321.654.987-00',    area:'civel',honorarios:0,    status:'ativo',    ultimoContato:'2026-06-20', diasSemContato:7,  tipo:'cliente', pastaFisica:'006/2022', localizacaoPasta:'Arquivo B · Gaveta 4' },
  ],

  // Pastas de documentos por cliente
  pastaClientes: {
    'C1': [
      { id:'D-C1-1', nome:'Contrato de Honorários — João Silva.pdf',     tipo:'contrato',    tamanho:'0,4 MB', data:'10/01/2026', reutilizavel:true,  modeloId:null },
      { id:'D-C1-2', nome:'Procuração — João Pedro Silva.pdf',            tipo:'procuracao',  tamanho:'0,2 MB', data:'10/01/2026', reutilizavel:true,  modeloId:null },
      { id:'D-C1-3', nome:'Extrato CNIS — João Silva.pdf',                tipo:'cnis',        tamanho:'1,1 MB', data:'15/01/2026', reutilizavel:false, modeloId:null },
      { id:'D-C1-4', nome:'Recurso de Apelação — Silva vs Banco.pdf',     tipo:'peca',        tamanho:'1,2 MB', data:'26/06/2026', reutilizavel:true,  modeloId:'PJ1' },
      { id:'D-C1-5', nome:'Requerimento INSS — Aposentadoria.pdf',        tipo:'admin',       tamanho:'0,6 MB', data:'10/03/2026', reutilizavel:true,  modeloId:'PA1', protocolo:'1.024.987.654-3' },
      { id:'D-C1-6', nome:'RG e CPF — João Pedro Silva.pdf',              tipo:'pessoal',     tamanho:'0,3 MB', data:'10/01/2026', reutilizavel:false, modeloId:null },
      { id:'D-C1-7', nome:'Certidão de Casamento.pdf',                    tipo:'pessoal',     tamanho:'0,2 MB', data:'10/01/2026', reutilizavel:false, modeloId:null },
      { id:'D-C1-8', nome:'Declaração Tempo Rural — João Silva.pdf',      tipo:'declaracao',  tamanho:'0,3 MB', data:'12/01/2026', reutilizavel:true,  modeloId:null },
    ],
    'C2': [
      { id:'D-C2-1', nome:'Contrato de Honorários — Maria Costa.pdf',     tipo:'contrato',    tamanho:'0,4 MB', data:'20/04/2023', reutilizavel:true,  modeloId:null },
      { id:'D-C2-2', nome:'Procuração — Maria Costa.pdf',                  tipo:'procuracao',  tamanho:'0,2 MB', data:'20/04/2023', reutilizavel:true,  modeloId:null },
      { id:'D-C2-3', nome:'Contestação INSS — Costa.pdf',                  tipo:'peca',        tamanho:'0,9 MB', data:'25/06/2026', reutilizavel:true,  modeloId:'PJ2' },
      { id:'D-C2-4', nome:'Recurso Administrativo — Invalidez.pdf',        tipo:'admin',       tamanho:'0,7 MB', data:'05/05/2026', reutilizavel:true,  modeloId:'PA2', protocolo:'1.024.654.321-7' },
      { id:'D-C2-5', nome:'Laudo Médico — Dr. Carvalho.pdf',               tipo:'medico',      tamanho:'2,1 MB', data:'01/04/2026', reutilizavel:false, modeloId:null },
      { id:'D-C2-6', nome:'Carteira de Trabalho — Maria Costa.pdf',        tipo:'pessoal',     tamanho:'1,4 MB', data:'20/04/2023', reutilizavel:false, modeloId:null },
    ],
    'C3': [
      { id:'D-C3-1', nome:'Contrato de Honorários — Ferreira Ltda.pdf',   tipo:'contrato',    tamanho:'0,5 MB', data:'15/06/2022', reutilizavel:true,  modeloId:null },
      { id:'D-C3-2', nome:'Procuração — Empresa Ferreira Ltda.pdf',        tipo:'procuracao',  tamanho:'0,2 MB', data:'15/06/2022', reutilizavel:true,  modeloId:null },
      { id:'D-C3-3', nome:'Razões Finais — Ferreira Trabalhista.pdf',      tipo:'peca',        tamanho:'0,8 MB', data:'24/06/2026', reutilizavel:true,  modeloId:'PJ3' },
      { id:'D-C3-4', nome:'Contrato Social — Ferreira Ltda.pdf',           tipo:'pessoal',     tamanho:'1,8 MB', data:'15/06/2022', reutilizavel:false, modeloId:null },
    ],
    'C4': [
      { id:'D-C4-1', nome:'Contrato de Honorários — Carlos Rodrigues.pdf', tipo:'contrato',    tamanho:'0,4 MB', data:'10/03/2024', reutilizavel:true,  modeloId:null },
      { id:'D-C4-2', nome:'Procuração — Carlos Rodrigues.pdf',              tipo:'procuracao',  tamanho:'0,2 MB', data:'10/03/2024', reutilizavel:true,  modeloId:null },
      { id:'D-C4-3', nome:'Requerimento BPC — Carlos Rodrigues.pdf',       tipo:'admin',       tamanho:'0,5 MB', data:'18/04/2026', reutilizavel:true,  modeloId:null, protocolo:'1.024.111.999-2' },
      { id:'D-C4-4', nome:'Laudo Médico Pericial.pdf',                     tipo:'medico',      tamanho:'1,7 MB', data:'05/04/2026', reutilizavel:false, modeloId:null },
    ],
    'C5': [],
    'C6': [
      { id:'D-C6-1', nome:'Contrato de Honorários — Ana Lima.pdf',        tipo:'contrato',   tamanho:'0,4 MB', data:'15/06/2022', reutilizavel:true,  modeloId:null },
      { id:'D-C6-2', nome:'Procuração — Ana Lima.pdf',                     tipo:'procuracao', tamanho:'0,2 MB', data:'15/06/2022', reutilizavel:true,  modeloId:null },
    ],
  },

  // -------- CALENDÁRIO CENTRAL — absorve TUDO --------
  // origens: tribunal | inss | google | sistema | interno
  // tipos:   audiencia | prazo | andamento | intimacao | inss_exigencia |
  //          inss_decisao | inss_recurso | inss_pericia | reuniao | interno
  eventos: [
    // JUDICIAIS — audiências
    { id:'E1',  data:'2026-06-27', hora:'10:00', tipo:'audiencia',      critico:false, meet:true,  titulo:'Audiência virtual — Costa vs INSS',              procId:'P2', cliente:'Maria Costa',           responsavel:'Dra. Ana Carvalho', origem:'google',   meetUrl:'meet.google.com/abc-defg-hij' },
    { id:'E8',  data:'2026-08-15', hora:'14:00', tipo:'audiencia',      critico:false, meet:true,  titulo:'Audiência de Instrução — Ferreira',               procId:'P3', cliente:'Empresa Ferreira Ltda', responsavel:'Dr. Marcos Santos',  origem:'tribunal', meetUrl:'meet.google.com/xyz-1234-abc' },

    // JUDICIAIS — prazos fatais
    { id:'E6',  data:'2026-06-27', hora:'17:00', tipo:'prazo',          critico:true,  meet:false, titulo:'PRAZO FATAL: Recurso Silva vs Banco Itaú',        procId:'P1', cliente:'João Pedro Silva',      responsavel:'Dr. Klebson Cavalcanti',    origem:'sistema' },
    { id:'E7',  data:'2026-06-28', hora:'17:00', tipo:'prazo',          critico:false, meet:false, titulo:'Prazo: Contestação INSS — Costa',                 procId:'P2', cliente:'Maria Costa',           responsavel:'Dra. Ana Carvalho',  origem:'sistema' },
    { id:'E9',  data:'2026-06-30', hora:'17:00', tipo:'prazo',          critico:false, meet:false, titulo:'Prazo: Razões Finais — Ferreira Trabalhista',      procId:'P3', cliente:'Empresa Ferreira Ltda', responsavel:'Dr. Marcos Santos',  origem:'sistema' },
    { id:'E10', data:'2026-07-02', hora:'17:00', tipo:'prazo',          critico:false, meet:false, titulo:'Prazo: Contrarrazões — Grupo Empreendimentos',     procId:'P5', cliente:'Grupo Empreend. SA',   responsavel:'Dr. Klebson Cavalcanti',    origem:'sistema' },
    { id:'E11', data:'2026-07-18', hora:'17:00', tipo:'prazo',          critico:false, meet:false, titulo:'Prazo Fatal: Apelação — Silva (Tempo Rural)',      procId:'P1', cliente:'João Pedro Silva',      responsavel:'Dr. Klebson Cavalcanti',    origem:'sistema' },

    // JUDICIAIS — andamentos capturados
    { id:'E4',  data:'2026-06-27', hora:'09:14', tipo:'andamento',      critico:false, meet:false, titulo:'Andamento: Despacho — Juntada de documentos',     procId:'P1', cliente:'João Pedro Silva',      responsavel:'Dr. Klebson Cavalcanti',    origem:'tribunal', tribunal:'TJSP' },
    { id:'E5',  data:'2026-06-27', hora:'08:52', tipo:'intimacao',      critico:false, meet:false, titulo:'Intimação: Audiência de Instrução designada',      procId:'P2', cliente:'Maria Costa',           responsavel:'Dra. Ana Carvalho',  origem:'tribunal', tribunal:'TRT15' },
    { id:'E12', data:'2026-06-25', hora:'14:15', tipo:'andamento',      critico:false, meet:false, titulo:'Sentença proferida — Proc. Ferreira (TRF3)',       procId:'P3', cliente:'Empresa Ferreira Ltda', responsavel:'Dr. Marcos Santos',  origem:'tribunal', tribunal:'TRF3' },
    { id:'E13', data:'2026-06-26', hora:'17:30', tipo:'intimacao',      critico:true,  meet:false, titulo:'Penhora SISBAJUD — 5 dias para manifestação',      procId:'P4', cliente:'Carlos Rodrigues',      responsavel:'Dra. Juliana Faria', origem:'tribunal', tribunal:'TJSP' },

    // ADMINISTRATIVOS INSS — exigências e decisões
    { id:'E14', data:'2026-06-29', hora:'09:00', tipo:'inss_exigencia', critico:true,  meet:false, titulo:'⚠ Exigência INSS: documentos pendentes — Maria Costa',    procId:null, cliente:'Maria Costa',     responsavel:'Dra. Ana Carvalho',  origem:'inss', nb:'182.440.312-1', protocolo:'1.024.654.321-7', prazoResposta:'04/07/2026' },
    { id:'E15', data:'2026-07-04', hora:'17:00', tipo:'prazo',          critico:true,  meet:false, titulo:'Prazo INSS: Responder exigência — Maria Costa',            procId:null, cliente:'Maria Costa',     responsavel:'Dra. Ana Carvalho',  origem:'inss', nb:'182.440.312-1' },
    { id:'E16', data:'2026-06-20', hora:'10:30', tipo:'inss_decisao',   critico:false, meet:false, titulo:'✓ Deferimento BPC — Carlos Rodrigues',                      procId:null, cliente:'Carlos Rodrigues', responsavel:'Dra. Juliana Faria', origem:'inss', nb:'182.501.774-0', protocolo:'1.024.111.999-2' },
    { id:'E17', data:'2026-07-10', hora:'09:00', tipo:'inss_recurso',   critico:false, meet:false, titulo:'Prazo Recurso CRPS — João Silva (Aposentadoria)',           procId:null, cliente:'João Pedro Silva',  responsavel:'Dr. Klebson Cavalcanti',    origem:'inss', nb:'182.367.490-5', prazoResposta:'10/07/2026' },
    { id:'E18', data:'2026-07-15', hora:'14:00', tipo:'inss_pericia',   critico:false, meet:false, titulo:'Perícia Médica agendada — Maria Costa (Invalidez)',         procId:null, cliente:'Maria Costa',     responsavel:'Dra. Ana Carvalho',  origem:'inss', nb:'182.440.312-1', local:'APS Centro — Sala 3' },
    { id:'E19', data:'2026-07-20', hora:'09:00', tipo:'inss_exigencia', critico:false, meet:false, titulo:'Exigência INSS: Certidão rural — João Silva',               procId:null, cliente:'João Pedro Silva',  responsavel:'Dr. Klebson Cavalcanti',    origem:'inss', nb:'182.367.490-5' },

    // REUNIÕES & INTERNOS
    { id:'E2',  data:'2026-06-27', hora:'14:30', tipo:'reuniao',        critico:false, meet:false, titulo:'Reunião com cliente Ferreira',                     procId:'P3', cliente:'Empresa Ferreira Ltda', responsavel:'Dr. Marcos Santos',  origem:'google', local:'Sala 2' },
    { id:'E3',  data:'2026-06-27', hora:'16:00', tipo:'interno',        critico:false, meet:false, titulo:'Alinhamento interno da equipe',                    procId:null, cliente:null,                    responsavel:'Todos',              origem:'interno' },
    { id:'E20', data:'2026-06-30', hora:'09:00', tipo:'interno',        critico:false, meet:false, titulo:'Reunião de pauta semanal',                         procId:null, cliente:null,                    responsavel:'Todos',              origem:'interno' },
  ],

  tarefas: [
    { id:'T1', titulo:'Elaborar Recurso de Apelação', area:'prev', responsavel:'Dr. Klebson Cavalcanti', col:'fazer', procId:'P1', prazo:'Hoje' },
    { id:'T2', titulo:'Revisar Razões Finais Costa', area:'trab', responsavel:'Dra. Ana Carvalho', col:'fazer', procId:'P2', prazo:'30/06' },
    { id:'T3', titulo:'Calcular Benefício — Oliveira', area:'prev', responsavel:'Dra. Juliana Faria', col:'andamento', procId:'P4', prazo:'—' },
    { id:'T4', titulo:'Revisar Petição Inicial — Costa', area:'prev', responsavel:'Dr. Klebson Cavalcanti', col:'revisao', procId:'P2', prazo:'—' },
    { id:'T5', titulo:'Protocolar Recurso Silva', area:'prev', responsavel:'Dr. Klebson Cavalcanti', col:'concluido', procId:'P1', prazo:'26/06' },
  ],

  notificacoes: [],
  followups: [],

  // -------- ANDAMENTOS CAPTURADOS DOS TRIBUNAIS (com pipeline IA) --------
  // Fluxo: capturado → analisando → revisao → aprovado → protocolado
  andamentos: [
    {
      id:'A1', procId:'P1', procNum:'0012345-67.2024.8.26.0100', cliente:'João Pedro Silva',
      area:'prev', tribunal:'TJSP', responsavel:'Dr. Klebson Cavalcanti',
      capturadoEm:'27/06/2026 09:14', status:'revisao',
      teor:'Sentença de improcedência do pedido de aposentadoria por tempo de contribuição. Magistrado entendeu não comprovado o tempo rural alegado.',
      iaAnalise:{
        tipo:'Sentença Desfavorável',
        prazo:'15 dias úteis',
        prazoFatal:'18/07/2026',
        recomendacao:'Recurso de Apelação',
        urgencia:'alta',
        resumo:'A sentença julgou improcedente por suposta ausência de prova do tempo rural. Há farta documentação não valorada (autodeclaração rural + entrevista do INSS), o que viabiliza apelação com boa chance de reforma.'
      },
      pecasSugeridas:[
        {
          id:'PEC1', titulo:'Recurso de Apelação — Reforma de Sentença (Tempo Rural)', match:96,
          fundamentos:['Art. 1.009 do CPC','Art. 55, §3º da Lei 8.213/91','Súmula 149 do STJ','Súmula 14 da TNU','Tema 1.007/STJ'],
          jurisprudencia:'STJ, REsp 1.354.908/SP (Tema 642) — início de prova material corroborado por prova testemunhal é suficiente para comprovação de atividade rural.',
          preview:'EGRÉGIO TRIBUNAL DE JUSTIÇA DO ESTADO DE SÃO PAULO\n\nRecurso de Apelação\n\nJOÃO PEDRO SILVA, já qualificado nos autos da ação previdenciária em epígrafe, inconformado com a r. sentença de fls., vem, respeitosamente, à presença de Vossa Excelência, com fundamento no art. 1.009 do CPC, interpor o presente RECURSO DE APELAÇÃO...\n\nDA TEMPESTIVIDADE\nA r. sentença foi disponibilizada em 27/06/2026. Sendo o prazo de 15 dias úteis (art. 1.003, §5º, CPC), o presente recurso é tempestivo.\n\nDO MÉRITO — DA COMPROVAÇÃO DO TEMPO RURAL\nA Súmula 149 do STJ e a Súmula 14 da TNU admitem o início de prova material corroborado por prova testemunhal idônea...'
        },
        {
          id:'PEC2', titulo:'Embargos de Declaração — Omissão quanto à prova rural', match:71,
          fundamentos:['Art. 1.022, II do CPC','Art. 489, §1º do CPC'],
          jurisprudencia:'STJ — sentença que não enfrenta prova relevante é omissa e nula por deficiência de fundamentação.',
          preview:'EXCELENTÍSSIMO SENHOR DOUTOR JUIZ\n\nEmbargos de Declaração\n\nJOÃO PEDRO SILVA opõe EMBARGOS DE DECLARAÇÃO em face da r. sentença, ante a OMISSÃO quanto à valoração da autodeclaração rural e da entrevista realizada pelo INSS...'
        }
      ]
    },
    {
      id:'A2', procId:'P2', procNum:'0098765-43.2023.5.15.0001', cliente:'Maria Costa',
      area:'trab', tribunal:'TRT15', responsavel:'Dra. Ana Carvalho',
      capturadoEm:'27/06/2026 08:52', status:'analisando',
      teor:'Designada audiência de instrução e julgamento. Determinada intimação das partes para apresentação de rol de testemunhas em 5 dias.',
      iaAnalise:{
        tipo:'Despacho — Designação de Audiência',
        prazo:'5 dias úteis',
        prazoFatal:'04/07/2026',
        recomendacao:'Petição de Rol de Testemunhas',
        urgencia:'media',
        resumo:'Necessário apresentar rol de até 3 testemunhas. Recomenda-se incluir ex-colegas que presenciaram a jornada extraordinária e o ambiente de trabalho.'
      },
      pecasSugeridas:[
        {
          id:'PEC3', titulo:'Petição de Apresentação de Rol de Testemunhas', match:94,
          fundamentos:['Art. 825 da CLT','Art. 357, §4º do CPC','Art. 450 do CPC'],
          jurisprudencia:'TST, Súmula 357 — não torna suspeita a testemunha o simples fato de litigar contra o mesmo empregador.',
          preview:'EXCELENTÍSSIMO SENHOR JUIZ DO TRABALHO DA 1ª VARA\n\nMARIA COSTA, nos autos da Reclamação Trabalhista, vem apresentar seu ROL DE TESTEMUNHAS, com fundamento no art. 825 da CLT...\n\n1. [Nome], que comparecerá independentemente de intimação;\n2. [Nome], idem;\n3. [Nome], idem.'
        },
        {
          id:'PEC4', titulo:'Petição de Rol + Requerimento de Intimação', match:78,
          fundamentos:['Art. 825, parágrafo único da CLT','Art. 455, §1º do CPC'],
          jurisprudencia:'CLT art. 825 — testemunha que não comparecer espontaneamente será intimada.',
          preview:'EXCELENTÍSSIMO SENHOR JUIZ DO TRABALHO\n\nMARIA COSTA apresenta rol de testemunhas e, desde já, REQUER a intimação daquelas que não comparecerão espontaneamente, nos termos do art. 825, parágrafo único, da CLT...'
        }
      ]
    },
    {
      id:'A3', procId:'P4', procNum:'0076543-21.2024.8.26.0224', cliente:'Carlos Rodrigues',
      area:'prev', tribunal:'TJSP', responsavel:'Dra. Juliana Faria',
      capturadoEm:'26/06/2026 17:30', status:'capturado',
      teor:'Deferida a penhora de valores via SISBAJUD. Intimação para manifestação em 5 dias sobre eventual impenhorabilidade.',
      iaAnalise:{
        tipo:'Decisão — Penhora SISBAJUD',
        prazo:'5 dias úteis',
        prazoFatal:'04/07/2026',
        recomendacao:'Impugnação à Penhora (impenhorabilidade)',
        urgencia:'alta',
        resumo:'Valores penhorados aparentam ser de natureza alimentar (benefício do INSS), o que atrai a impenhorabilidade do art. 833, IV, do CPC. Cabe impugnação urgente.'
      },
      pecasSugeridas:[
        {
          id:'PEC5', titulo:'Impugnação à Penhora — Impenhorabilidade de Verba Alimentar', match:97,
          fundamentos:['Art. 833, IV do CPC','Art. 833, §2º do CPC','Súmula 449 do STJ'],
          jurisprudencia:'STJ, REsp 1.230.060/PR — proventos de aposentadoria são impenhoráveis por força do art. 833, IV, do CPC.',
          preview:'EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO\n\nImpugnação à Penhora\n\nCARLOS RODRIGUES, nos autos da execução, vem, com fundamento no art. 833, IV, do CPC, apresentar IMPUGNAÇÃO À PENHORA realizada via SISBAJUD, pelas razões a seguir...\n\nDA IMPENHORABILIDADE DOS PROVENTOS\nOs valores constritos são oriundos de benefício previdenciário, de natureza alimentar, sendo absolutamente impenhoráveis...'
        }
      ]
    }
  ],

  // -------- MOTOR DE ESTRATÉGIA IA --------
  // Analisa cada caso e indica o próximo passo mais viável para o deferimento
  analisarEstrategia() {
    const estrategias = [];

    // ---- CASOS JUDICIAIS ----
    this.andamentos.forEach(a => {
      const proc = this.processos.find(p => p.id === a.procId);
      const cliente = this.clientes.find(c => c.id === proc?.clienteId);

      if (a.status === 'capturado') {
        estrategias.push({
          id: 'EST-'+a.id, tipo:'judicial', urgencia:'alta',
          cliente: a.cliente, procNum: a.procNum, tribunal: a.tribunal,
          situacaoAtual: 'Andamento capturado — ainda não analisado pela IA',
          proximoPasso: 'Iniciar análise com IA imediatamente',
          acao: 'Analisar',
          fundamentacao: 'A IA lê o teor do andamento, classifica o tipo, calcula o prazo fatal e prepara as peças cabíveis. Sem análise, o prazo pode ser perdido.',
          viabilidade: null,
          prazoFatal: a.iaAnalise?.prazoFatal || '—',
          modulo: 'andamentos',
          andamentoId: a.id,
        });
      }

      if (a.status === 'revisao' || a.status === 'analisando') {
        const melhorPeca = a.pecasSugeridas?.sort((x,y) => y.match - x.match)[0];
        const tipoIA = a.iaAnalise?.tipo || '';

        // Detecta tipo de recurso ou contrarrazão cabível
        let proximoPasso, fundamentacao, recursoTipo = null;

        if (tipoIA.includes('Sentença Desfavorável') || tipoIA.includes('Improcedente')) {
          recursoTipo = 'Recurso de Apelação';
          proximoPasso = `Interpor ${recursoTipo} — ${a.iaAnalise.prazo} a partir da publicação`;
          fundamentacao = `${a.iaAnalise.resumo} A sentença é recorrível pelo Recurso de Apelação (art. 1.009 CPC). ${melhorPeca ? `Peça com ${melhorPeca.match}% de aderência já preparada pelo banco de petições.` : ''}`;
        } else if (tipoIA.includes('Procedente') || tipoIA.includes('Favorável')) {
          recursoTipo = 'Contrarrazões de Apelação';
          proximoPasso = `Preparar ${recursoTipo} — aguardar recurso da parte contrária e contrarrazoar no prazo`;
          fundamentacao = `Sentença favorável. Se a parte contrária recorrer, é necessário apresentar Contrarrazões reforçando os fundamentos da procedência e atacando os argumentos do recorrente.`;
        } else if (tipoIA.includes('Despacho') || tipoIA.includes('Audiência')) {
          recursoTipo = null;
          proximoPasso = a.iaAnalise?.recomendacao || melhorPeca?.titulo || 'Cumprir determinação judicial';
          fundamentacao = a.iaAnalise?.resumo || '';
        } else if (tipoIA.includes('Penhora') || tipoIA.includes('Decisão')) {
          recursoTipo = 'Agravo de Instrumento';
          proximoPasso = `Interpor ${recursoTipo} — prazo de 15 dias (art. 1.015 CPC)`;
          fundamentacao = `Decisão interlocutória recorrível por Agravo de Instrumento. ${a.iaAnalise?.resumo || ''}`;
        } else {
          proximoPasso = melhorPeca?.titulo || a.iaAnalise?.recomendacao || 'Revisar e protocolar peça sugerida';
          fundamentacao = a.iaAnalise?.resumo || '';
        }

        estrategias.push({
          id: 'EST-'+a.id, tipo:'judicial', urgencia:'alta',
          cliente: a.cliente, procNum: a.procNum, tribunal: a.tribunal,
          situacaoAtual: `IA analisou: ${tipoIA} · Prazo fatal ${a.iaAnalise?.prazoFatal}`,
          proximoPasso,
          recursoTipo,
          acao: recursoTipo ? `Gerar ${recursoTipo}` : 'Revisar peça',
          fundamentacao,
          viabilidade: melhorPeca?.match || 85,
          prazoFatal: a.iaAnalise?.prazoFatal,
          melhorPeca,
          modulo: 'andamentos',
          andamentoId: a.id,
          pecasSugeridas: a.pecasSugeridas,
        });
      }
    });

    // ---- CASOS ADMINISTRATIVOS INSS ----
    this.geridRequerimentos?.forEach(r => {
      if (r.situacao === 'exigencia') {
        estrategias.push({
          id: 'EST-INSS-'+r.nb, tipo:'inss', urgencia:'alta',
          cliente: r.beneficiario, nb: r.nb, protocolo: r.protocolo,
          situacaoAtual: `Exigência INSS pendente — tipo: ${r.tipo}`,
          proximoPasso: 'Atender exigência documental e peticionar pelo cumprimento',
          acao: 'Gerar petição',
          fundamentacao: 'O não atendimento da exigência no prazo resulta em indeferimento por abandono. Peticionar o cumprimento demonstra boa-fé e garante o contraditório (art. 5º, LV, CF/88).',
          viabilidade: 82,
          prazoFatal: r.prazoResposta || '—',
          modulo: 'gerid',
        });
      }

      if (r.situacao === 'aguardando_pericia') {
        estrategias.push({
          id: 'EST-INSS-PER-'+r.nb, tipo:'inss', urgencia:'media',
          cliente: r.beneficiario, nb: r.nb, protocolo: r.protocolo,
          situacaoAtual: `Aguardando perícia médica INSS — ${r.tipo}`,
          proximoPasso: 'Preparar laudo médico complementar e relatório do perito do segurado',
          acao: 'Preparar laudo',
          fundamentacao: 'A perícia do INSS frequentemente subestima o grau de incapacidade. Laudo de perito assistente + relatório médico detalhado aumentam significativamente as chances de deferimento.',
          viabilidade: 74,
          prazoFatal: '—',
          modulo: 'gerid',
        });
      }

      if (r.situacao === 'em_analise') {
        estrategias.push({
          id: 'EST-INSS-AN-'+r.nb, tipo:'inss', urgencia:'baixa',
          cliente: r.beneficiario, nb: r.nb, protocolo: r.protocolo,
          situacaoAtual: `Requerimento em análise no INSS — ${r.tipo}`,
          proximoPasso: 'Monitorar prazo legal de análise (45 dias). Se ultrapassado, protocolar reclamação administrativa',
          acao: 'Monitorar',
          fundamentacao: 'O INSS tem prazo de 45 dias para decidir (art. 41-A da Lei 8.213/91). Ultrapassado, cabe mandado de segurança por omissão ou ação de obrigação de fazer.',
          viabilidade: 78,
          prazoFatal: '—',
          modulo: 'gerid',
        });
      }

      if (r.situacao === 'indeferido') {
        estrategias.push({
          id: 'EST-INSS-IND-'+r.nb, tipo:'inss', urgencia:'alta',
          cliente: r.beneficiario, nb: r.nb, protocolo: r.protocolo,
          situacaoAtual: `Benefício INDEFERIDO pelo INSS — ${r.tipo}`,
          proximoPasso: 'Interpor Recurso Administrativo ao CRPS (prazo 30 dias)',
          acao: 'Gerar recurso',
          fundamentacao: 'O Recurso ao CRPS tem taxa de reforma de ~40%. Sendo negado, ingressar com ação judicial. A via administrativa deve ser esgotada antes do judiciário (Súmula Vinculante 29).',
          viabilidade: 65,
          prazoFatal: '30 dias da decisão',
          modulo: 'peticoes',
        });
      }
    });

    // Ordenar por urgência
    const ordem = { alta:0, media:1, baixa:2 };
    estrategias.sort((a,b) => (ordem[a.urgencia]||9) - (ordem[b.urgencia]||9));
    return estrategias;
  },

  geridRequerimentos: [
    { nb:'182.367.490-5', protocolo:'1.024.987.654-3', beneficiario:'João Pedro Silva',  tipo:'Aposentadoria por Tempo de Contribuição', situacao:'em_analise',       prazoResposta:null },
    { nb:'182.440.312-1', protocolo:'1.024.654.321-7', beneficiario:'Maria Costa',       tipo:'Aposentadoria por Invalidez',              situacao:'exigencia',         prazoResposta:'04/07/2026' },
    { nb:'182.501.774-0', protocolo:'1.024.111.999-2', beneficiario:'Carlos Rodrigues',  tipo:'BPC/LOAS',                                  situacao:'aguardando_pericia', prazoResposta:'15/07/2026' },
    { nb:'182.612.009-8', protocolo:'1.024.888.555-9', beneficiario:'Ana Lima',           tipo:'Salário-Maternidade',                       situacao:'em_analise',         prazoResposta:null },
  ],

  // Mover andamento no pipeline
  avancarAndamento(id, novoStatus) {
    const a = this.andamentos.find(x => x.id === id);
    if (a) a.status = novoStatus;
    return a;
  },

  aprovarEProtocolar(id, pecaId) {
    const a = this.andamentos.find(x => x.id === id);
    if (a) {
      a.status = 'protocolado';
      a.pecaEscolhida = pecaId;
      // cria evento no calendário
      this.eventos.push({
        id:'E'+Date.now(), data:new Date().toISOString().slice(0,10), hora:new Date().toTimeString().slice(0,5), tipo:'andamento',
        titulo:'Peça protocolada: '+a.iaAnalise.recomendacao, procId:a.procId,
        responsavel:a.responsavel, origem:'sistema'
      });
    }
    return a;
  },

  // -------- MOTOR DE FOLLOW-UPS INTELIGENTES --------
  gerarFollowups() {
    this.followups = [];
    const hoje = new Date();

    // 1. Cliente sem retorno
    this.clientes.forEach(c => {
      if (c.tipo === 'cliente' && c.diasSemContato >= 15) {
        this.followups.push({
          tipo:'contato', prioridade: c.diasSemContato > 30 ? 'alta':'media',
          titulo:`Cliente sem retorno há ${c.diasSemContato} dias`,
          alvo:c.nome, alvoId:c.id, modulo:'clientes',
          acao:'Registrar atendimento', icon:'📞'
        });
      }
    });

    // 2. Honorário em atraso
    this.clientes.forEach(c => {
      if (c.id==='C3') {
        this.followups.push({
          tipo:'financeiro', prioridade:'alta',
          titulo:'Honorário em atraso — R$ 12.000',
          alvo:c.nome, alvoId:c.id, modulo:'financeiro',
          acao:'Enviar cobrança', icon:'💰'
        });
      }
    });

    // 3. Processo parado
    this.processos.forEach(p => {
      if (p.diasParado >= 60) {
        this.followups.push({
          tipo:'processo', prioridade: p.diasParado > 90 ? 'alta':'media',
          titulo:`Processo parado há ${p.diasParado} dias`,
          alvo:p.num, alvoId:p.id, modulo:'processos',
          acao:'Verificar andamento', icon:'⚖'
        });
      }
    });

    // 4. Lead frio
    this.clientes.forEach(c => {
      if (c.tipo === 'lead' && c.diasSemContato >= 30) {
        this.followups.push({
          tipo:'lead', prioridade:'media',
          titulo:`Lead frio há ${c.diasSemContato} dias`,
          alvo:c.nome, alvoId:c.id, modulo:'clientes',
          acao:'Reativar contato', icon:'🎯'
        });
      }
    });

    this.followups.sort((a,b) => (a.prioridade==='alta'?0:1)-(b.prioridade==='alta'?0:1));
    return this.followups;
  },

  // -------- MOTOR DE NOTIFICAÇÕES --------
  gerarNotificacoes() {
    const agora = Date.now();
    const _tempo = (ms) => {
      const diff = Math.floor((agora - ms) / 60000);
      if (diff < 1) return 'agora mesmo';
      if (diff < 60) return 'há ' + diff + 'min';
      const h = Math.floor(diff / 60);
      return 'há ' + h + 'h';
    };
    this.notificacoes = [
      { id:'N1', tipo:'prazo',     critico:true,  texto:'Prazo vence HOJE: Recurso Silva vs Banco Itaú', tempo:_tempo(agora - 2*3600000),   lida:false, modulo:'prazos',     ts: agora - 2*3600000  },
      { id:'N2', tipo:'meet',      critico:false, texto:'Audiência virtual agendada — Costa vs INSS',    tempo:_tempo(agora - 5*60000),     lida:false, modulo:'agenda',     ts: agora - 5*60000    },
      { id:'N3', tipo:'intimacao', critico:false, texto:'7 novas intimações capturadas dos tribunais',   tempo:_tempo(agora - 1*3600000),   lida:false, modulo:'intimacoes', ts: agora - 1*3600000  },
      { id:'N4', tipo:'followup',  critico:false, texto:'4 follow-ups inteligentes pendentes',           tempo:_tempo(agora - 3*3600000),   lida:false, modulo:'dashboard',  ts: agora - 3*3600000  },
      { id:'N5', tipo:'andamento', critico:false, texto:'Novo andamento: Despacho no proc. Silva',       tempo:_tempo(agora - 4*3600000),   lida:true,  modulo:'processos',  ts: agora - 4*3600000  },
    ];
    return this.notificacoes;
  },

  // -------- AÇÕES QUE MOVEM DADOS ENTRE MÓDULOS --------

  // Tratar intimação → cria prazo no calendário + tarefa no Kanban + notificação
  tratarIntimacao(procNum, descricao, dias) {
    const proc = this.processos.find(p => p.num.startsWith(procNum.split('.')[0]));
    const dataBase = new Date();
    dataBase.setDate(dataBase.getDate() + (dias || 15));
    const dataPrazo = dataBase.toISOString().slice(0, 10);
    // cria evento no calendário
    this.eventos.push({
      id:'E'+Date.now(), data:dataPrazo, hora:'17:00', tipo:'prazo', meet:false,
      titulo:'Prazo: '+descricao, procId:proc?proc.id:null,
      responsavel:proc?proc.responsavel:'—', origem:'sistema'
    });
    // cria tarefa no Kanban
    this.tarefas.push({
      id:'T'+Date.now(), titulo:'Cumprir: '+descricao, area:proc?proc.area:'civel',
      responsavel:proc?proc.responsavel:'—', col:'fazer', procId:proc?proc.id:null, prazo:'11/07'
    });
    return { prazo:dataPrazo, proc };
  },

  // Registrar atendimento → atualiza CRM (zera dias sem contato) + remove follow-up
  registrarAtendimento(clienteId) {
    const c = this.clientes.find(x => x.id === clienteId);
    if (c) { c.diasSemContato = 0; c.ultimoContato = new Date().toISOString().slice(0,10); }
    this.gerarFollowups();
    return c;
  },

  // Mover tarefa no Kanban
  moverTarefa(tarefaId, novaCol) {
    const t = this.tarefas.find(x => x.id === tarefaId);
    if (t) t.col = novaCol;
    return t;
  }
};

// Inicializa motores
GESTOR.gerarFollowups();
GESTOR.gerarNotificacoes();
