// ============================================
// GESTOR — App principal · navegação + integração
// ============================================

// ============================================
// MÓDULO FINANCEIRO — Dados
// ============================================

window.FIN_COBRANCAS = [
  { id:'C01', cliente:'João Pedro Silva',    processo:'P1', tipo:'fixo',      descricao:'Honorários contratuais jan–jun/2026', valor:3500,  parcelas:6, parcelaAtual:3, vencimento:'2026-07-10', status:'em_aberto', formaPgto:'boleto'       },
  { id:'C02', cliente:'Maria Costa',        processo:'P2', tipo:'hibrido',   descricao:'Fixo + 20% êxito',                   valor:5200,  parcelas:1, parcelaAtual:1, vencimento:'2026-07-05', status:'em_aberto', formaPgto:'pix'          },
  { id:'C03', cliente:'Empresa Ferreira Ltda', processo:'P3', tipo:'exito', descricao:'30% sobre R$ 40.000 ganhos',          valor:12000, parcelas:1, parcelaAtual:1, vencimento:'2026-06-10', status:'atrasado',  formaPgto:'transferencia' },
  { id:'C04', cliente:'Carlos Rodrigues',   processo:'P4', tipo:'rpv',       descricao:'20% sobre RPV recebida',             valor:8500,  parcelas:1, parcelaAtual:1, vencimento:'2026-06-15', status:'recebido',  formaPgto:'pix'          },
  { id:'C05', cliente:'Grupo Empreendimentos SA', processo:'P5', tipo:'fixo',   descricao:'Honorários mensais',                 valor:5000,  parcelas:3, parcelaAtual:1, vencimento:'2026-07-15', status:'em_aberto', formaPgto:'boleto'       },
];

window.DOCUMENTOS = [
  { id:'D01', nome:'Recurso_Silva_Banco_Itau.pdf',      tipo:'peticao',    processo:'P1', cliente:'João Pedro Silva',      tamanho:'1,2 MB', data:'2026-06-27', tags:['recurso','TJSP'],        url:null },
  { id:'D02', nome:'Contrato_Honorarios_Costa.pdf',     tipo:'contrato',   processo:'P2', cliente:'Maria Costa',           tamanho:'0,4 MB', data:'2026-06-26', tags:['honorários'],            url:null },
  { id:'D03', nome:'Procuracao_Ferreira_Ltda.pdf',      tipo:'procuracao', processo:'P3', cliente:'Empresa Ferreira Ltda', tamanho:'0,2 MB', data:'2026-06-25', tags:['procuração'],            url:null },
  { id:'D04', nome:'Contestacao_INSS_Oliveira.docx',    tipo:'peticao',    processo:null, cliente:'Lucas Oliveira',        tamanho:'0,8 MB', data:'2026-06-24', tags:['INSS','contestação'],    url:null },
  { id:'D05', nome:'Laudo_Medico_Costa.pdf',            tipo:'laudo',      processo:'P2', cliente:'Maria Costa',           tamanho:'2,1 MB', data:'2026-06-20', tags:['laudo','médico'],         url:null },
  { id:'D06', nome:'Exame_Audiometria_Silva.pdf',       tipo:'exame',      processo:'P1', cliente:'João Pedro Silva',      tamanho:'0,5 MB', data:'2026-06-18', tags:['exame'],                 url:null },
  { id:'D07', nome:'Procuracao_Rodrigues.pdf',          tipo:'procuracao', processo:'P4', cliente:'Carlos Rodrigues',      tamanho:'0,2 MB', data:'2026-06-15', tags:['procuração'],            url:null },
  { id:'D08', nome:'Sentenca_Ferreira_TRF3.pdf',        tipo:'decisao',    processo:'P3', cliente:'Empresa Ferreira Ltda', tamanho:'0,9 MB', data:'2026-06-10', tags:['sentença','TRF3'],       url:null },
];

window.NOTIF_REGRAS = [
  { id:'NR01', nome:'Prazo vencendo em 3 dias',  tipo:'prazo',      diasAntes:3,  canal:'whatsapp', ativo:true,  destinatario:'advogado' },
  { id:'NR02', nome:'Prazo vencendo em 1 dia',   tipo:'prazo',      diasAntes:1,  canal:'whatsapp', ativo:true,  destinatario:'advogado' },
  { id:'NR03', nome:'Honorários em atraso',      tipo:'financeiro', diasAntes:-1, canal:'email',    ativo:true,  destinatario:'cliente'  },
  { id:'NR04', nome:'Audiência amanhã',          tipo:'agenda',     diasAntes:1,  canal:'whatsapp', ativo:true,  destinatario:'advogado' },
  { id:'NR05', nome:'Vencimento boleto 2 dias',  tipo:'financeiro', diasAntes:2,  canal:'whatsapp', ativo:false, destinatario:'cliente'  },
];

window.NOTIF_LOG = [
  { id:'NL01', regra:'Prazo vencendo em 3 dias', destinatario:'Dr. Klebson Cavalcanti', canal:'whatsapp', mensagem:'⚖ Prazo em 3 dias: Recurso Ordinário – João Pedro Silva (P1). Vence em 30/06/2026.', enviado:'2026-06-27 08:00', status:'entregue' },
  { id:'NL02', regra:'Honorários em atraso',     destinatario:'Empresa Ferreira Ltda',  canal:'email',    mensagem:'Prezado(a), informamos que há honorários em atraso no valor de R$ 12.000,00...', enviado:'2026-06-27 09:00', status:'entregue' },
  { id:'NL03', regra:'Audiência amanhã',         destinatario:'Dr. Marcos Santos',      canal:'whatsapp', mensagem:'📅 Audiência amanhã: Maria Costa vs INSS – TRT15 às 14:30.', enviado:'2026-06-26 18:00', status:'entregue' },
  { id:'NL04', regra:'Prazo vencendo em 1 dia',  destinatario:'Dra. Ana Carvalho',     canal:'whatsapp', mensagem:'⚠️ URGENTE: Prazo amanhã – Contestação INSS (P2). Vence 27/06/2026.', enviado:'2026-06-26 08:00', status:'falhou'   },
];

window.FIN_LANCAMENTOS = [
  { id:'F01', tipo:'receita', categoria:'honorarios',   descricao:'Honorários contratuais – João Pedro Silva',  processo:'P1', cliente:'João Pedro Silva',   valor:3500,  data:'2026-06-10', vencimento:'2026-06-30', status:'em_aberto',  formaPgto:'boleto'     },
  { id:'F02', tipo:'receita', categoria:'honorarios',   descricao:'Honorários contratuais – Maria Costa',       processo:'P2', cliente:'Maria Costa',         valor:5200,  data:'2026-06-12', vencimento:'2026-07-05', status:'em_aberto',  formaPgto:'boleto'     },
  { id:'F03', tipo:'receita', categoria:'honorarios',   descricao:'Honorários contratuais – Ferreira Ltda',     processo:'P3', cliente:'Empresa Ferreira Ltda',valor:12000, data:'2026-05-20', vencimento:'2026-06-10', status:'atrasado',   formaPgto:'transferencia'},
  { id:'F04', tipo:'receita', categoria:'honorarios',   descricao:'Honorários êxito – Carlos Rodrigues',        processo:'P4', cliente:'Carlos Rodrigues',     valor:8500,  data:'2026-06-01', vencimento:'2026-06-15', status:'recebido',   formaPgto:'pix'        },
  { id:'F05', tipo:'receita', categoria:'honorarios',   descricao:'Honorários contratuais – João Pedro Silva',  processo:'P1', cliente:'João Pedro Silva',     valor:3500,  data:'2026-05-10', vencimento:'2026-05-30', status:'recebido',   formaPgto:'boleto'     },
  { id:'F06', tipo:'receita', categoria:'pericia',      descricao:'Reembolso perícia médica – Maria Costa',     processo:'P2', cliente:'Maria Costa',         valor:1200,  data:'2026-06-20', vencimento:'2026-07-10', status:'em_aberto',  formaPgto:'transferencia'},
  { id:'F07', tipo:'despesa', categoria:'custas',       descricao:'Custas processuais – P1 TJSP',               processo:'P1', cliente:'João Pedro Silva',     valor:480,   data:'2026-06-08', vencimento:'2026-06-08', status:'pago',       formaPgto:'debito'     },
  { id:'F08', tipo:'despesa', categoria:'pericia',      descricao:'Honorários perito – P2 TRT15',               processo:'P2', cliente:'Maria Costa',         valor:2800,  data:'2026-06-15', vencimento:'2026-06-30', status:'pago',       formaPgto:'transferencia'},
  { id:'F09', tipo:'despesa', categoria:'escritorio',   descricao:'Aluguel sala – Junho/2026',                  processo:null, cliente:null,                  valor:3800,  data:'2026-06-05', vencimento:'2026-06-10', status:'pago',       formaPgto:'debito'     },
  { id:'F10', tipo:'despesa', categoria:'escritorio',   descricao:'Internet + telefone – Junho/2026',           processo:null, cliente:null,                  valor:420,   data:'2026-06-05', vencimento:'2026-06-10', status:'pago',       formaPgto:'debito'     },
  { id:'F11', tipo:'despesa', categoria:'escritorio',   descricao:'Software jurídico (licenças) – Junho/2026',  processo:null, cliente:null,                  valor:890,   data:'2026-06-01', vencimento:'2026-06-01', status:'pago',       formaPgto:'cartao'     },
  { id:'F12', tipo:'despesa', categoria:'escritorio',   descricao:'Salários e pró-labore – Junho/2026',         processo:null, cliente:null,                  valor:18500, data:'2026-06-30', vencimento:'2026-06-30', status:'a_pagar',    formaPgto:'transferencia'},
  { id:'F13', tipo:'despesa', categoria:'escritorio',   descricao:'Material de escritório – Junho/2026',        processo:null, cliente:null,                  valor:380,   data:'2026-06-20', vencimento:'2026-06-25', status:'pago',       formaPgto:'cartao'     },
  { id:'F14', tipo:'despesa', categoria:'deslocamento', descricao:'Deslocamento audiência TJSP – P3',           processo:'P3', cliente:'Empresa Ferreira Ltda',valor:320,   data:'2026-06-18', vencimento:'2026-06-18', status:'pago',       formaPgto:'cartao'     },
  { id:'F15', tipo:'receita', categoria:'honorarios',   descricao:'Parcela 1/3 – Grupo Empreendimentos SA',     processo:'P5', cliente:'Grupo Empreendimentos SA',valor:15000, data:'2026-06-25', vencimento:'2026-07-15', status:'em_aberto',  formaPgto:'boleto'     },
];

const FIN_CATEGORIAS = {
  receita: { honorarios:'Honorários', rpv:'RPV', precatorio:'Precatório', pericia:'Reembolso Perícia', outros:'Outros (Receita)' },
  despesa: { custas:'Custas Processuais', pericia:'Honorários Perito', escritorio:'Despesa de Escritório', deslocamento:'Deslocamento', exames:'Exames', despesas_medicas:'Despesas Médicas', outros:'Outros (Despesa)' },
};

const FIN_STATUS_LABELS = {
  recebido:'Recebido', em_aberto:'Em Aberto', atrasado:'Atrasado', pago:'Pago', a_pagar:'A Pagar',
};

function _finCor(status) {
  return { recebido:'#10b981', em_aberto:'#f59e0b', atrasado:'#dc2626', pago:'#10b981', a_pagar:'#f59e0b' }[status] || '#64748b';
}

function _finFmt(v) { return 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits:2, maximumFractionDigits:2 }); }

function renderPaginaFinanceiro() {
  const container = document.getElementById('page-financeiro');
  if (!container) return;

  const hoje = new Date();
  const mesAtual = hoje.getMonth();
  const anoAtual = hoje.getFullYear();

  // KPIs
  const receitas  = FIN_LANCAMENTOS.filter(l => l.tipo === 'receita');
  const despesas  = FIN_LANCAMENTOS.filter(l => l.tipo === 'despesa');
  const recMes    = receitas.filter(l => { const d=new Date(l.data); return d.getMonth()===mesAtual&&d.getFullYear()===anoAtual; }).reduce((s,l)=>s+l.valor,0);
  const despMes   = despesas.filter(l => { const d=new Date(l.data); return d.getMonth()===mesAtual&&d.getFullYear()===anoAtual; }).reduce((s,l)=>s+l.valor,0);
  const aReceber  = receitas.filter(l => ['em_aberto','atrasado'].includes(l.status)).reduce((s,l)=>s+l.valor,0);
  const aPagar    = despesas.filter(l => ['a_pagar'].includes(l.status)).reduce((s,l)=>s+l.valor,0);
  const lucro     = recMes - despMes;

  // Saldo por processo
  const porProcesso = {};
  FIN_LANCAMENTOS.filter(l=>l.processo).forEach(l => {
    if (!porProcesso[l.processo]) porProcesso[l.processo] = { cliente: l.cliente, receitas:0, despesas:0, lancamentos:[] };
    if (l.tipo==='receita') porProcesso[l.processo].receitas += l.valor;
    else                    porProcesso[l.processo].despesas += l.valor;
    porProcesso[l.processo].lancamentos.push(l);
  });

  container.innerHTML = `
    <div class="page-header">
      <div>
        <h1 class="page-title">Financeiro</h1>
        <p class="page-subtitle">Receitas · Despesas · Fluxo de Caixa por Processo/Cliente</p>
      </div>
      <button class="btn-primary" onclick="abrirModalLancamento(null)">+ Lançamento</button>
    </div>

    <!-- KPIs -->
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-label">Receita Junho</div>
        <div class="kpi-value">${_finFmt(recMes)}</div>
        <div class="kpi-delta positive">↑ 14% vs maio</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">A Receber</div>
        <div class="kpi-value text-gold">${_finFmt(aReceber)}</div>
        <div class="kpi-delta warning">${receitas.filter(l=>['em_aberto','atrasado'].includes(l.status)).length} lançamentos</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Despesas Junho</div>
        <div class="kpi-value text-alert">${_finFmt(despMes)}</div>
        <div class="kpi-delta neutral">A pagar: ${_finFmt(aPagar)}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Resultado Junho</div>
        <div class="kpi-value ${lucro>=0?'':'text-alert'}">${_finFmt(lucro)}</div>
        <div class="kpi-delta ${lucro>=0?'positive':'negative'}">${lucro>=0?'↑ Positivo':'↓ Negativo'}</div>
      </div>
    </div>

    <!-- Abas -->
    <div style="display:flex;gap:8px;margin:20px 0 0;border-bottom:2px solid var(--border)">
      ${[
        ['fin-tab-processos','Por Processo / Cliente','🗂'],
        ['fin-tab-escritorio','Despesas do Escritório','🏢'],
        ['fin-tab-todos','Todos os Lançamentos','📋'],
        ['fin-tab-cobrancas','Cobranças','💳'],
        ['fin-tab-caixa','Fluxo de Caixa','📊'],
      ].map(([id,label,icon],i)=>`
        <button id="${id}" onclick="_finAba('${id}')"
          style="padding:10px 18px;border:none;background:${i===0?'var(--gold)':'transparent'};color:${i===0?'#fff':'var(--text-muted)'};border-radius:8px 8px 0 0;font-weight:${i===0?700:500};cursor:pointer;font-size:13px;transition:all .2s">
          ${icon} ${label}
        </button>
      `).join('')}
    </div>

    <!-- Aba: Por Processo -->
    <div id="fin-conteudo-processos" class="fin-aba-conteudo">
      <div style="display:flex;gap:10px;margin:16px 0">
        <input id="fin-busca" class="calc-input" style="margin:0;flex:1" placeholder="🔍 Buscar processo ou cliente..." oninput="_finFiltrarProcessos()">
        <select id="fin-filtro-tipo" class="calc-input" style="margin:0;width:160px" onchange="_finFiltrarProcessos()">
          <option value="">Todos os tipos</option>
          <option value="receita">Receitas</option>
          <option value="despesa">Despesas</option>
        </select>
      </div>
      <div id="fin-lista-processos">
        ${Object.entries(porProcesso).map(([proc, dados]) => {
          const saldo = dados.receitas - dados.despesas;
          return `
          <div class="card fin-processo-card" style="margin-bottom:12px;padding:0;overflow:hidden">
            <div onclick="_finToggleProcesso('${proc}')" style="display:flex;align-items:center;padding:14px 18px;cursor:pointer;gap:16px">
              <div style="width:44px;height:44px;background:var(--navy);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0">⚖</div>
              <div style="flex:1">
                <div style="font-weight:700;color:var(--navy);font-size:14px">${esc(dados.cliente)}</div>
                <div style="font-size:12px;color:var(--text-muted)">Processo ${proc} · ${dados.lancamentos.length} lançamentos</div>
              </div>
              <div style="text-align:right;flex-shrink:0">
                <div style="font-size:11px;color:var(--text-muted)">Receitas</div>
                <div style="font-weight:700;color:#10b981">${_finFmt(dados.receitas)}</div>
              </div>
              <div style="text-align:right;flex-shrink:0;margin-left:16px">
                <div style="font-size:11px;color:var(--text-muted)">Despesas</div>
                <div style="font-weight:700;color:#dc2626">${_finFmt(dados.despesas)}</div>
              </div>
              <div style="text-align:right;flex-shrink:0;margin-left:16px;padding-left:16px;border-left:2px solid var(--border)">
                <div style="font-size:11px;color:var(--text-muted)">Saldo</div>
                <div style="font-weight:800;font-size:16px;color:${saldo>=0?'#10b981':'#dc2626'}">${_finFmt(saldo)}</div>
              </div>
              <div style="margin-left:12px;color:var(--text-muted);font-size:18px">▾</div>
            </div>
            <div id="fin-proc-${proc}" style="display:none;border-top:1px solid var(--border)">
              <div style="padding:12px 18px;background:#f8fafc;display:flex;justify-content:flex-end">
                <button class="btn-sm btn-primary" onclick="abrirModalLancamento('${proc}','${esc(dados.cliente)}')">+ Lançamento neste processo</button>
              </div>
              <table class="data-table">
                <thead><tr><th>Tipo</th><th>Categoria</th><th>Descrição</th><th>Data</th><th>Valor</th><th>Status</th><th></th></tr></thead>
                <tbody>
                  ${dados.lancamentos.map(l=>`
                    <tr>
                      <td><span style="background:${l.tipo==='receita'?'#dcfce7':'#fee2e2'};color:${l.tipo==='receita'?'#16a34a':'#dc2626'};padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600">${l.tipo==='receita'?'RECEITA':'DESPESA'}</span></td>
                      <td>${FIN_CATEGORIAS[l.tipo][l.categoria]||l.categoria}</td>
                      <td>${esc(l.descricao)}</td>
                      <td>${l.data.split('-').reverse().join('/')}</td>
                      <td style="font-weight:700;color:${l.tipo==='receita'?'#10b981':'#dc2626'}">${_finFmt(l.valor)}</td>
                      <td><span style="background:${_finCor(l.status)}22;color:${_finCor(l.status)};padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600">${FIN_STATUS_LABELS[l.status]||l.status}</span></td>
                      <td><button class="btn-sm" onclick="editarLancamento('${l.id}')">✏</button></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>

    <!-- Aba: Despesas do Escritório -->
    <div id="fin-conteudo-escritorio" class="fin-aba-conteudo" style="display:none">
      <div style="display:flex;justify-content:space-between;align-items:center;margin:16px 0">
        <div style="font-weight:700;color:var(--navy)">Despesas não vinculadas a processos</div>
        <button class="btn-primary btn-sm" onclick="abrirModalLancamento(null,'escritorio')">+ Despesa de Escritório</button>
      </div>
      ${(() => {
        const desp = FIN_LANCAMENTOS.filter(l=>l.tipo==='despesa'&&!l.processo);
        const totalPago   = desp.filter(l=>l.status==='pago').reduce((s,l)=>s+l.valor,0);
        const totalAPagar = desp.filter(l=>l.status==='a_pagar').reduce((s,l)=>s+l.valor,0);
        return `
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:16px">
          <div class="kpi-card" style="padding:14px">
            <div class="kpi-label" style="font-size:11px">Total Lançado</div>
            <div style="font-weight:800;font-size:18px;color:var(--navy)">${_finFmt(desp.reduce((s,l)=>s+l.valor,0))}</div>
          </div>
          <div class="kpi-card" style="padding:14px">
            <div class="kpi-label" style="font-size:11px">Pago</div>
            <div style="font-weight:800;font-size:18px;color:#10b981">${_finFmt(totalPago)}</div>
          </div>
          <div class="kpi-card" style="padding:14px">
            <div class="kpi-label" style="font-size:11px">A Pagar</div>
            <div style="font-weight:800;font-size:18px;color:#f59e0b">${_finFmt(totalAPagar)}</div>
          </div>
        </div>
        <div class="card" style="padding:0;overflow:hidden">
          <table class="data-table">
            <thead><tr><th>Categoria</th><th>Descrição</th><th>Vencimento</th><th>Valor</th><th>Status</th><th>Forma Pgto</th><th></th></tr></thead>
            <tbody>
              ${desp.map(l=>`
                <tr>
                  <td>${FIN_CATEGORIAS.despesa[l.categoria]||l.categoria}</td>
                  <td>${esc(l.descricao)}</td>
                  <td>${l.vencimento.split('-').reverse().join('/')}</td>
                  <td style="font-weight:700;color:#dc2626">${_finFmt(l.valor)}</td>
                  <td><span style="background:${_finCor(l.status)}22;color:${_finCor(l.status)};padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600">${FIN_STATUS_LABELS[l.status]||l.status}</span></td>
                  <td style="text-transform:capitalize">${l.formaPgto}</td>
                  <td><button class="btn-sm" onclick="editarLancamento('${l.id}')">✏</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>`;
      })()}
    </div>

    <!-- Aba: Todos os Lançamentos -->
    <div id="fin-conteudo-todos" class="fin-aba-conteudo" style="display:none">
      <div style="display:flex;gap:10px;margin:16px 0;flex-wrap:wrap">
        <input id="fin-todos-busca" class="calc-input" style="margin:0;flex:1;min-width:180px" placeholder="🔍 Buscar...">
        <select id="fin-todos-tipo" class="calc-input" style="margin:0;width:140px" onchange="_finFiltrarTodos()">
          <option value="">Todos</option><option value="receita">Receitas</option><option value="despesa">Despesas</option>
        </select>
        <select id="fin-todos-status" class="calc-input" style="margin:0;width:140px" onchange="_finFiltrarTodos()">
          <option value="">Todos os status</option>
          ${Object.entries(FIN_STATUS_LABELS).map(([k,v])=>`<option value="${k}">${v}</option>`).join('')}
        </select>
      </div>
      <div class="card" style="padding:0;overflow:hidden">
        <table class="data-table" id="fin-tabela-todos">
          <thead><tr><th>Tipo</th><th>Descrição</th><th>Processo</th><th>Data</th><th>Valor</th><th>Status</th><th></th></tr></thead>
          <tbody id="fin-tbody-todos">
            ${FIN_LANCAMENTOS.map(l=>`
              <tr data-tipo="${l.tipo}" data-status="${l.status}" data-busca="${(l.descricao+l.cliente+l.processo).toLowerCase()}">
                <td><span style="background:${l.tipo==='receita'?'#dcfce7':'#fee2e2'};color:${l.tipo==='receita'?'#16a34a':'#dc2626'};padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600">${l.tipo==='receita'?'RECEITA':'DESPESA'}</span></td>
                <td>${esc(l.descricao)}</td>
                <td class="proc-num">${l.processo||'—'}</td>
                <td>${l.data.split('-').reverse().join('/')}</td>
                <td style="font-weight:700;color:${l.tipo==='receita'?'#10b981':'#dc2626'}">${_finFmt(l.valor)}</td>
                <td><span style="background:${_finCor(l.status)}22;color:${_finCor(l.status)};padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600">${FIN_STATUS_LABELS[l.status]||l.status}</span></td>
                <td><button class="btn-sm" onclick="editarLancamento('${l.id}')">✏</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Aba: Cobranças -->
    <div id="fin-conteudo-cobrancas" class="fin-aba-conteudo" style="display:none">
      ${renderAbaCobrancas()}
    </div>

    <!-- Aba: Fluxo de Caixa -->
    <div id="fin-conteudo-caixa" class="fin-aba-conteudo" style="display:none">
      ${_finRenderCaixa()}
    </div>
  `;

  document.getElementById('fin-todos-busca')?.addEventListener('input', _finFiltrarTodos);
}

// ===== COBRANÇAS =====
function renderAbaCobrancas() {
  const cobr = FIN_COBRANCAS;
  const aReceber = cobr.filter(c=>['em_aberto'].includes(c.status)).reduce((s,c)=>s+c.valor,0);
  const atrasado = cobr.filter(c=>c.status==='atrasado').reduce((s,c)=>s+c.valor,0);
  const recebido = cobr.filter(c=>c.status==='recebido').reduce((s,c)=>s+c.valor,0);
  const tipoCor  = { fixo:'#2563eb', exito:'#10b981', hibrido:'#7c3aed', rpv:'#C9A84C', precatorio:'#ea580c' };
  const tipoLabel= { fixo:'Fixo', exito:'Êxito', hibrido:'Híbrido', rpv:'RPV', precatorio:'Precatório' };
  return '<div style="margin-top:16px">' +
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">' +
    '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;flex:1;margin-right:16px">' +
    '<div class="kpi-card" style="padding:12px"><div class="kpi-label">A Receber</div><div style="font-weight:800;font-size:18px;color:#f59e0b">' + _finFmt(aReceber) + '</div></div>' +
    '<div class="kpi-card" style="padding:12px"><div class="kpi-label">Atrasado</div><div style="font-weight:800;font-size:18px;color:#dc2626">' + _finFmt(atrasado) + '</div></div>' +
    '<div class="kpi-card" style="padding:12px"><div class="kpi-label">Recebido</div><div style="font-weight:800;font-size:18px;color:#10b981">' + _finFmt(recebido) + '</div></div>' +
    '</div>' +
    '<button class="btn-primary" onclick="abrirModalCobranca()">+ Nova Cobrança</button>' +
    '</div>' +
    '<div class="card" style="padding:0;overflow:hidden">' +
    '<table class="data-table"><thead><tr>' +
    '<th>Cliente</th><th>Processo</th><th>Tipo</th><th>Descrição</th><th>Parcela</th><th>Vencimento</th><th>Valor</th><th>Status</th><th>Ações</th>' +
    '</tr></thead><tbody>' +
    cobr.map(function(c) {
      return '<tr>' +
        '<td style="font-weight:600">' + esc(c.cliente) + '</td>' +
        '<td class="proc-num">' + (c.processo||'—') + '</td>' +
        '<td><span style="background:' + (tipoCor[c.tipo]||'#64748b') + '22;color:' + (tipoCor[c.tipo]||'#64748b') + ';padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700">' + (tipoLabel[c.tipo]||c.tipo) + '</span></td>' +
        '<td>' + esc(c.descricao) + '</td>' +
        '<td style="text-align:center">' + c.parcelaAtual + '/' + c.parcelas + '</td>' +
        '<td>' + c.vencimento.split('-').reverse().join('/') + '</td>' +
        '<td style="font-weight:700;color:#10b981">' + _finFmt(c.valor) + '</td>' +
        '<td><span style="background:' + _finCor(c.status) + '22;color:' + _finCor(c.status) + ';padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600">' + (FIN_STATUS_LABELS[c.status]||c.status) + '</span></td>' +
        '<td style="display:flex;gap:4px"><button class="btn-sm" onclick="gerarRecibo(\'' + c.id + '\')">📄 Recibo</button><button class="btn-sm btn-primary" onclick="enviarCobranca(\'' + c.id + '\')">💳 Cobrar</button></td>' +
        '</tr>';
    }).join('') +
    '</tbody></table></div></div>';
}

function gerarRecibo(id) {
  const c = FIN_COBRANCAS.find(x=>x.id===id);
  if (!c) return;
  document.getElementById('modal-recibo')?.remove();
  const m = document.createElement('div');
  m.id = 'modal-recibo';
  m.className = 'modal-overlay';
  m.innerHTML = '<div class="modal-box" style="max-width:560px">' +
    '<div class="modal-header"><h3 class="modal-title">📄 Recibo de Honorários</h3>' +
    '<button class="modal-close" onclick="document.getElementById(\'modal-recibo\').remove()">✕</button></div>' +
    '<div id="recibo-print" style="padding:24px;font-family:serif">' +
    '<div style="text-align:center;margin-bottom:20px;border-bottom:2px solid var(--navy);padding-bottom:16px">' +
    '<div style="font-size:20px;font-weight:800;color:var(--navy)">COSTA CAVALCANTI ADVOCACIA</div>' +
    '<div style="font-size:12px;color:var(--text-muted)">OAB/SP 123.456 · contato@costacavalcanti.adv.br</div>' +
    '<div style="font-size:18px;font-weight:700;margin-top:10px;color:var(--gold)">RECIBO Nº ' + c.id + '</div>' +
    '</div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">' +
    '<div><div style="font-size:11px;font-weight:600;color:var(--text-muted)">CLIENTE</div><div style="font-weight:700">' + esc(c.cliente) + '</div></div>' +
    '<div><div style="font-size:11px;font-weight:600;color:var(--text-muted)">PROCESSO</div><div style="font-weight:700">' + (c.processo||'—') + '</div></div>' +
    '<div><div style="font-size:11px;font-weight:600;color:var(--text-muted)">DESCRIÇÃO</div><div>' + esc(c.descricao) + '</div></div>' +
    '<div><div style="font-size:11px;font-weight:600;color:var(--text-muted)">TIPO</div><div>' + c.tipo.toUpperCase() + '</div></div>' +
    '<div><div style="font-size:11px;font-weight:600;color:var(--text-muted)">PARCELA</div><div>' + c.parcelaAtual + '/' + c.parcelas + '</div></div>' +
    '<div><div style="font-size:11px;font-weight:600;color:var(--text-muted)">FORMA PAGAMENTO</div><div style="text-transform:capitalize">' + c.formaPgto + '</div></div>' +
    '</div>' +
    '<div style="background:#f8fafc;border-radius:8px;padding:16px;text-align:center;margin-bottom:20px">' +
    '<div style="font-size:12px;color:var(--text-muted)">VALOR</div>' +
    '<div style="font-size:28px;font-weight:800;color:var(--navy)">' + _finFmt(c.valor) + '</div>' +
    '<div style="font-size:11px;color:var(--text-muted)">Vencimento: ' + c.vencimento.split('-').reverse().join('/') + '</div>' +
    '</div>' +
    '<div style="border-top:1px solid var(--border);padding-top:16px;display:flex;justify-content:space-between;align-items:flex-end">' +
    '<div style="font-size:11px;color:var(--text-muted)">Emitido em ' + new Date().toLocaleDateString('pt-BR') + '</div>' +
    '<div style="text-align:center"><div style="border-top:1px solid var(--navy);padding-top:4px;width:200px;font-size:12px">Dr. Klebson Cavalcanti — OAB/SP 123.456</div></div>' +
    '</div></div>' +
    '<div style="display:flex;gap:10px;padding:0 20px 20px">' +
    '<button class="btn-outline" style="flex:1" onclick="document.getElementById(\'modal-recibo\').remove()">Fechar</button>' +
    '<button class="btn-primary" style="flex:1" onclick="window.print()">🖨 Imprimir</button>' +
    '</div></div>';
  document.body.appendChild(m);
}

function enviarCobranca(id) {
  const c = FIN_COBRANCAS.find(x=>x.id===id);
  if (!c) return;
  document.getElementById('modal-enviar-cobr')?.remove();
  const msgWA = 'Olá, ' + c.cliente + '! 😊\nSeu honorário está disponível para pagamento.\n💰 Valor: ' + _finFmt(c.valor) + '\n📅 Vencimento: ' + c.vencimento.split('-').reverse().join('/') + '\n📋 Ref.: ' + c.descricao + '\n\nQualquer dúvida, estamos à disposição!\nCosta Cavalcanti Advocacia';
  const msgEmail = 'Prezado(a) ' + c.cliente + ',\n\nInformamos que há um honorário disponível para pagamento:\n\nValor: ' + _finFmt(c.valor) + '\nVencimento: ' + c.vencimento.split('-').reverse().join('/') + '\nReferência: ' + c.descricao + '\n\nAtenciosamente,\nCosta Cavalcanti Advocacia';
  const m = document.createElement('div');
  m.id = 'modal-enviar-cobr';
  m.className = 'modal-overlay';
  m.innerHTML = '<div class="modal-box" style="max-width:500px">' +
    '<div class="modal-header"><h3 class="modal-title">💳 Enviar Cobrança — ' + esc(c.cliente) + '</h3>' +
    '<button class="modal-close" onclick="document.getElementById(\'modal-enviar-cobr\').remove()">✕</button></div>' +
    '<div style="padding:20px;display:flex;flex-direction:column;gap:14px">' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Canal de envio</label>' +
    '<select id="cobr-canal" class="calc-input" style="margin:4px 0 0" onchange="_cobr_trocaMensagem(\'' + id + '\')">' +
    '<option value="whatsapp">📱 WhatsApp</option><option value="email">📧 E-mail</option>' +
    '</select></div>' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Mensagem</label>' +
    '<textarea id="cobr-msg" class="calc-input" style="margin:4px 0 0;height:140px;resize:vertical">' + msgWA + '</textarea></div>' +
    '<div style="display:flex;gap:10px">' +
    '<button class="btn-outline" style="flex:1" onclick="document.getElementById(\'modal-enviar-cobr\').remove()">Cancelar</button>' +
    '<button class="btn-primary" style="flex:1" onclick="_cobr_enviar(\'' + id + '\')">📤 Enviar</button>' +
    '</div></div></div>';
  m._msgWA    = msgWA;
  m._msgEmail = msgEmail;
  document.body.appendChild(m);
}

function _cobr_trocaMensagem(id) {
  const m   = document.getElementById('modal-enviar-cobr');
  const canal = document.getElementById('cobr-canal')?.value;
  const txt   = document.getElementById('cobr-msg');
  if (!txt || !m) return;
  txt.value = canal === 'email' ? m._msgEmail : m._msgWA;
}

function _cobr_enviar(id) {
  const canal = document.getElementById('cobr-canal')?.value || 'whatsapp';
  const label = canal === 'email' ? 'E-mail' : 'WhatsApp';
  document.getElementById('modal-enviar-cobr')?.remove();
  toast('✓ Cobrança enviada via <strong>' + label + '</strong>.', 'success');
}

function abrirModalCobranca() {
  document.getElementById('modal-nova-cobr')?.remove();
  const m = document.createElement('div');
  m.id = 'modal-nova-cobr';
  m.className = 'modal-overlay';
  m.innerHTML = '<div class="modal-box" style="max-width:520px">' +
    '<div class="modal-header"><h3 class="modal-title">+ Nova Cobrança</h3>' +
    '<button class="modal-close" onclick="document.getElementById(\'modal-nova-cobr\').remove()">✕</button></div>' +
    '<div style="padding:20px;display:flex;flex-direction:column;gap:12px">' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Cliente *</label><input id="nc-cliente" class="calc-input" style="margin:4px 0 0" placeholder="Nome do cliente"></div>' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Processo</label><input id="nc-processo" class="calc-input" style="margin:4px 0 0" placeholder="P1, P2..."></div>' +
    '</div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Tipo *</label><select id="nc-tipo" class="calc-input" style="margin:4px 0 0"><option value="fixo">Fixo</option><option value="exito">Êxito</option><option value="hibrido">Híbrido</option><option value="rpv">RPV</option><option value="precatorio">Precatório</option></select></div>' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Forma Pgto</label><select id="nc-forma" class="calc-input" style="margin:4px 0 0"><option value="boleto">Boleto</option><option value="pix">PIX</option><option value="transferencia">Transferência</option><option value="cartao">Cartão</option></select></div>' +
    '</div>' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Descrição *</label><input id="nc-desc" class="calc-input" style="margin:4px 0 0" placeholder="Descrição dos honorários"></div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px">' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Valor (R$) *</label><input id="nc-valor" type="number" class="calc-input" style="margin:4px 0 0" placeholder="0,00" min="0" step="0.01"></div>' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Parcelas</label><input id="nc-parcelas" type="number" class="calc-input" style="margin:4px 0 0" value="1" min="1"></div>' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Vencimento</label><input id="nc-venc" type="date" class="calc-input" style="margin:4px 0 0" value="' + new Date().toISOString().slice(0,10) + '"></div>' +
    '</div>' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Status</label><select id="nc-status" class="calc-input" style="margin:4px 0 0"><option value="em_aberto">Em Aberto</option><option value="recebido">Recebido</option><option value="atrasado">Atrasado</option><option value="a_pagar">A Pagar</option></select></div>' +
    '<div style="display:flex;gap:10px;margin-top:4px">' +
    '<button class="btn-outline" style="flex:1" onclick="document.getElementById(\'modal-nova-cobr\').remove()">Cancelar</button>' +
    '<button class="btn-primary" style="flex:1" onclick="_salvarCobranca()">✓ Salvar</button>' +
    '</div></div></div>';
  document.body.appendChild(m);
}

function _salvarCobranca() {
  const cliente = document.getElementById('nc-cliente')?.value?.trim();
  const desc    = document.getElementById('nc-desc')?.value?.trim();
  const valor   = parseFloat(document.getElementById('nc-valor')?.value);
  if (!cliente || !desc || !valor || valor <= 0) { toast('Preencha cliente, descrição e valor.','warn'); return; }
  FIN_COBRANCAS.push({
    id: 'C' + Date.now(),
    cliente,
    processo:    document.getElementById('nc-processo')?.value?.trim()||null,
    tipo:        document.getElementById('nc-tipo')?.value||'fixo',
    descricao:   desc,
    valor,
    parcelas:    parseInt(document.getElementById('nc-parcelas')?.value)||1,
    parcelaAtual:1,
    vencimento:  document.getElementById('nc-venc')?.value||new Date().toISOString().slice(0,10),
    status:      document.getElementById('nc-status')?.value||'em_aberto',
    formaPgto:   document.getElementById('nc-forma')?.value||'boleto',
  });
  document.getElementById('modal-nova-cobr').remove();
  _salvarDados();
  renderPaginaFinanceiro();
  _finAba('fin-tab-cobrancas');
  toast('✓ Cobrança salva com sucesso.','success');
}

// ===== DOCUMENTOS =====
const DOC_TIPOS = {
  peticao:   { label:'Petição',      icon:'📄', cor:'#2563eb' },
  contrato:  { label:'Contrato',     icon:'📝', cor:'#7c3aed' },
  procuracao:{ label:'Procuração',   icon:'✍',  cor:'#059669' },
  laudo:     { label:'Laudo Médico', icon:'🩺', cor:'#dc2626' },
  exame:     { label:'Exame',        icon:'🔬', cor:'#d97706' },
  decisao:   { label:'Decisão/Sentença', icon:'⚖', cor:'#0891b2' },
  outro:     { label:'Outro',        icon:'📎', cor:'#64748b' },
};

function renderPaginaDocumentos() {
  const container = document.getElementById('page-documentos');
  if (!container) return;
  const docs = DOCUMENTOS;
  const totalPet   = docs.filter(d=>d.tipo==='peticao').length;
  const totalLaud  = docs.filter(d=>['laudo','exame'].includes(d.tipo)).length;
  const totalOutros= docs.filter(d=>!['peticao','laudo','exame'].includes(d.tipo)).length;
  container.innerHTML =
    '<div class="page-header">' +
    '<div><h1 class="page-title">Documentos & Arquivos</h1><p class="page-subtitle">Armazenamento seguro · Upload · Busca por processo e cliente</p></div>' +
    '<button class="btn-primary" onclick="abrirUploadDocumento()">📤 Upload de Arquivo</button>' +
    '</div>' +
    '<div class="kpi-grid">' +
    '<div class="kpi-card"><div class="kpi-label">Total de Arquivos</div><div class="kpi-value">' + docs.length + '</div></div>' +
    '<div class="kpi-card"><div class="kpi-label">Petições</div><div class="kpi-value text-gold">' + totalPet + '</div></div>' +
    '<div class="kpi-card"><div class="kpi-label">Laudos / Exames</div><div class="kpi-value">' + totalLaud + '</div></div>' +
    '<div class="kpi-card"><div class="kpi-label">Outros</div><div class="kpi-value">' + totalOutros + '</div></div>' +
    '</div>' +
    '<div style="display:flex;gap:10px;margin:20px 0">' +
    '<input id="doc-busca" class="calc-input" style="margin:0;flex:1" placeholder="🔍 Buscar por nome, cliente ou processo..." oninput="_docFiltrar()">' +
    '<select id="doc-tipo" class="calc-input" style="margin:0;width:180px" onchange="_docFiltrar()">' +
    '<option value="">Todos os tipos</option>' +
    Object.entries(DOC_TIPOS).map(function(e){return '<option value="'+e[0]+'">'+e[1].icon+' '+e[1].label+'</option>';}).join('') +
    '</select>' +
    '<select id="doc-proc" class="calc-input" style="margin:0;width:140px" onchange="_docFiltrar()">' +
    '<option value="">Todos os processos</option>' +
    (GESTOR.processos||[]).map(function(p){return '<option value="'+p.id+'">'+p.id+'</option>';}).join('') +
    '</select>' +
    '</div>' +
    '<div class="doc-grid" id="doc-grid">' +
    docs.map(function(d) {
      const t = DOC_TIPOS[d.tipo]||DOC_TIPOS.outro;
      return '<div class="doc-card" data-busca="'+(d.nome+d.cliente+(d.processo||'')).toLowerCase()+'" data-tipo="'+d.tipo+'" data-proc="'+(d.processo||'')+'">' +
        '<div class="doc-icon">'+t.icon+'</div>' +
        '<div class="doc-nome">'+esc(d.nome)+'</div>' +
        '<div style="margin-bottom:6px"><span style="background:'+t.cor+'22;color:'+t.cor+';padding:2px 8px;border-radius:4px;font-size:10px;font-weight:700">'+t.label+'</span></div>' +
        '<div class="doc-meta">'+esc(d.cliente)+(d.processo?' · '+d.processo:'')+'<br>'+d.data.split('-').reverse().join('/')+' · '+d.tamanho+'</div>' +
        '<div class="doc-tags">'+d.tags.map(function(t){return '<span class="doc-tag">'+t+'</span>';}).join('')+'</div>' +
        '<div class="doc-acoes">' +
        '<button class="btn-sm" style="flex:1" onclick="verDocumento(\''+d.id+'\')">👁 Ver</button>' +
        '<button class="btn-sm btn-danger-sm" onclick="excluirDocumento(\''+d.id+'\')">🗑</button>' +
        '</div></div>';
    }).join('') +
    '</div>';
}

function _docFiltrar() {
  const busca = (document.getElementById('doc-busca')?.value||'').toLowerCase();
  const tipo  = document.getElementById('doc-tipo')?.value||'';
  const proc  = document.getElementById('doc-proc')?.value||'';
  document.querySelectorAll('#doc-grid .doc-card').forEach(function(c) {
    const ok = (!busca||c.dataset.busca.includes(busca))&&(!tipo||c.dataset.tipo===tipo)&&(!proc||c.dataset.proc===proc);
    c.style.display = ok ? '' : 'none';
  });
}

function verDocumento(id) {
  const d = DOCUMENTOS.find(function(x){return x.id===id;});
  if (!d) return;
  const t = DOC_TIPOS[d.tipo]||DOC_TIPOS.outro;
  document.getElementById('modal-ver-doc')?.remove();
  const m = document.createElement('div');
  m.id = 'modal-ver-doc';
  m.className = 'modal-overlay';
  const preview = d.url
    ? '<iframe src="'+d.url+'" style="width:100%;height:320px;border:none;border-radius:8px;background:#f1f5f9"></iframe>'
    : '<div style="height:200px;background:#f8fafc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;border:2px dashed var(--border)">' +
      '<div style="font-size:48px">'+t.icon+'</div>' +
      '<div style="font-weight:600;color:var(--navy)">Arquivo salvo localmente</div>' +
      '<div style="font-size:12px;color:var(--text-muted)">'+esc(d.nome)+' · '+d.tamanho+'</div>' +
      '</div>';
  m.innerHTML = '<div class="modal-box" style="max-width:580px">' +
    '<div class="modal-header"><h3 class="modal-title">'+t.icon+' '+esc(d.nome)+'</h3>' +
    '<button class="modal-close" onclick="document.getElementById(\'modal-ver-doc\').remove()">✕</button></div>' +
    '<div style="padding:20px;display:flex;flex-direction:column;gap:12px">' +
    preview +
    '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">' +
    '<div><div style="font-size:11px;font-weight:600;color:var(--text-muted)">TIPO</div><div>'+t.label+'</div></div>' +
    '<div><div style="font-size:11px;font-weight:600;color:var(--text-muted)">CLIENTE</div><div>'+esc(d.cliente)+'</div></div>' +
    '<div><div style="font-size:11px;font-weight:600;color:var(--text-muted)">PROCESSO</div><div>'+(d.processo||'—')+'</div></div>' +
    '<div><div style="font-size:11px;font-weight:600;color:var(--text-muted)">DATA</div><div>'+d.data.split('-').reverse().join('/')+'</div></div>' +
    '<div><div style="font-size:11px;font-weight:600;color:var(--text-muted)">TAMANHO</div><div>'+d.tamanho+'</div></div>' +
    '<div><div style="font-size:11px;font-weight:600;color:var(--text-muted)">TAGS</div><div>'+d.tags.join(', ')+'</div></div>' +
    '</div>' +
    '<button class="btn-outline" onclick="document.getElementById(\'modal-ver-doc\').remove()">Fechar</button>' +
    '</div></div>';
  document.body.appendChild(m);
}

function excluirDocumento(id) {
  const d = DOCUMENTOS.find(function(x){return x.id===id;});
  if (!d) return;
  document.getElementById('modal-excl-doc')?.remove();
  const m = document.createElement('div');
  m.id = 'modal-excl-doc';
  m.className = 'modal-overlay';
  m.innerHTML = '<div class="modal-box" style="max-width:400px">' +
    '<div style="text-align:center;padding:24px 20px 8px">' +
    '<div style="font-size:40px;margin-bottom:12px">🗑</div>' +
    '<div style="font-weight:700;font-size:15px;color:var(--navy)">Excluir documento?</div>' +
    '<div style="color:var(--text-muted);font-size:13px;margin-top:6px">'+esc(d.nome)+'<br>Esta ação não pode ser desfeita.</div>' +
    '</div>' +
    '<div style="display:flex;gap:10px;padding:16px 20px 20px">' +
    '<button class="btn-outline" style="flex:1" onclick="document.getElementById(\'modal-excl-doc\').remove()">Cancelar</button>' +
    '<button class="btn-primary" style="flex:1;background:#dc2626;border-color:#dc2626" onclick="_confirmarExclDoc(\''+id+'\')">Confirmar</button>' +
    '</div></div>';
  document.body.appendChild(m);
}

function _confirmarExclDoc(id) {
  const idx = DOCUMENTOS.findIndex(function(x){return x.id===id;});
  if (idx === -1) return;
  const nome = DOCUMENTOS[idx].nome;
  DOCUMENTOS.splice(idx,1);
  document.getElementById('modal-excl-doc')?.remove();
  _salvarDados();
  renderPaginaDocumentos();
  toast('✓ Documento <strong>'+esc(nome)+'</strong> excluído.','success');
}

function abrirUploadDocumento() {
  document.getElementById('modal-upload-doc')?.remove();
  const m = document.createElement('div');
  m.id = 'modal-upload-doc';
  m.className = 'modal-overlay';
  m.innerHTML = '<div class="modal-box" style="max-width:500px">' +
    '<div class="modal-header"><h3 class="modal-title">📤 Upload de Arquivo</h3>' +
    '<button class="modal-close" onclick="document.getElementById(\'modal-upload-doc\').remove()">✕</button></div>' +
    '<div style="padding:20px;display:flex;flex-direction:column;gap:14px">' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Arquivo *</label>' +
    '<input id="up-file" type="file" class="calc-input" style="margin:4px 0 0;padding:8px" accept=".pdf,.doc,.docx,.jpg,.png,.xlsx"></div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Tipo *</label><select id="up-tipo" class="calc-input" style="margin:4px 0 0">' +
    Object.entries(DOC_TIPOS).map(function(e){return '<option value="'+e[0]+'">'+e[1].icon+' '+e[1].label+'</option>';}).join('') +
    '</select></div>' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Processo</label><select id="up-proc" class="calc-input" style="margin:4px 0 0">' +
    '<option value="">Nenhum</option>'+(GESTOR.processos||[]).map(function(p){return '<option value="'+p.id+'">'+p.id+' – '+esc(p.cliente)+'</option>';}).join('')+
    '</select></div></div>' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Cliente</label><input id="up-cliente" class="calc-input" style="margin:4px 0 0" placeholder="Nome do cliente"></div>' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Tags (separadas por vírgula)</label><input id="up-tags" class="calc-input" style="margin:4px 0 0" placeholder="Ex: recurso, TJSP"></div>' +
    '<div style="display:flex;gap:10px;margin-top:4px">' +
    '<button class="btn-outline" style="flex:1" onclick="document.getElementById(\'modal-upload-doc\').remove()">Cancelar</button>' +
    '<button class="btn-primary" style="flex:1" onclick="_processarUpload()">📤 Fazer Upload</button>' +
    '</div></div></div>';
  document.body.appendChild(m);
}

function _processarUpload() {
  const fileInput = document.getElementById('up-file');
  const file      = fileInput?.files?.[0];
  if (!file) { toast('Selecione um arquivo.','warn'); return; }
  const tipo    = document.getElementById('up-tipo')?.value||'outro';
  const proc    = document.getElementById('up-proc')?.value||null;
  const cliente = document.getElementById('up-cliente')?.value?.trim()||'—';
  const tagsRaw = document.getElementById('up-tags')?.value||'';
  const tags    = tagsRaw.split(',').map(function(t){return t.trim();}).filter(Boolean);
  const tam     = file.size < 1024*1024 ? (file.size/1024).toFixed(0)+' KB' : (file.size/1024/1024).toFixed(1)+' MB';
  if (file.size > 3 * 1024 * 1024) {
    toast('⚠ Arquivo muito grande (máx. 3 MB). Reduza o tamanho antes de enviar.', 'warn');
    return;
  }
  const reader  = new FileReader();
  reader.onload = function(e) {
    DOCUMENTOS.unshift({
      id:       'D'+Date.now(),
      nome:     file.name,
      tipo, processo: proc||null, cliente, tamanho: tam,
      data:     new Date().toISOString().slice(0,10),
      tags,
      url:      e.target.result,
    });
    document.getElementById('modal-upload-doc')?.remove();
    try {
      _salvarDados();
    } catch(err) {
      toast('⚠ Arquivo salvo na sessão, mas o armazenamento local está cheio. Exporte os dados para não perdê-los.', 'warn');
    }
    renderPaginaDocumentos();
    toast('✓ Arquivo <strong>'+esc(file.name)+'</strong> enviado.','success');
  };
  reader.readAsDataURL(file);
}

// ===== NOTIFICAÇÕES AUTOMÁTICAS =====
function renderPaginaNotificacoes() {
  const container = document.getElementById('page-notificacoes');
  if (!container) return;
  const regrasAtivas = NOTIF_REGRAS.filter(function(r){return r.ativo;}).length;
  const hoje         = new Date().toISOString().slice(0,10);
  const enviadasHoje = NOTIF_LOG.filter(function(l){return l.enviado.startsWith(hoje);}).length;
  const falhas       = NOTIF_LOG.filter(function(l){return l.status==='falhou';}).length;
  const pendentes    = NOTIF_REGRAS.filter(function(r){return r.ativo;}).length;
  const tipoBg       = { prazo:'#2563eb', financeiro:'#10b981', agenda:'#7c3aed' };
  const tipoLabel    = { prazo:'Prazo', financeiro:'Financeiro', agenda:'Agenda' };
  container.innerHTML =
    '<div class="page-header">' +
    '<div><h1 class="page-title">Notificações Automáticas</h1><p class="page-subtitle">Alertas de prazos · Cobranças · Audiências via WhatsApp e E-mail</p></div>' +
    '<div style="display:flex;gap:8px">' +
    '<button class="btn-secondary" onclick="_dispararNotificacoes()">▶ Disparar Agora</button>' +
    '<button class="btn-primary" onclick="abrirModalRegra(null)">+ Nova Regra</button>' +
    '</div></div>' +
    '<div class="kpi-grid">' +
    '<div class="kpi-card"><div class="kpi-label">Regras Ativas</div><div class="kpi-value text-gold">'+regrasAtivas+'</div></div>' +
    '<div class="kpi-card"><div class="kpi-label">Enviadas Hoje</div><div class="kpi-value">'+enviadasHoje+'</div></div>' +
    '<div class="kpi-card"><div class="kpi-label">Falhas</div><div class="kpi-value text-alert">'+falhas+'</div></div>' +
    '<div class="kpi-card"><div class="kpi-label">Pendentes</div><div class="kpi-value">'+pendentes+'</div></div>' +
    '</div>' +
    '<div style="margin-top:24px">' +
    '<div style="font-weight:700;font-size:15px;color:var(--navy);margin-bottom:12px">⚙ Regras de Disparo</div>' +
    NOTIF_REGRAS.map(function(r) {
      const canalIcon = r.canal==='whatsapp'?'📱':'📧';
      const isOn = r.ativo;
      return '<div class="notif-regra-card">' +
        '<div class="notif-toggle '+(isOn?'on':'')+'" onclick="toggleRegra(\''+r.id+'\')"></div>' +
        '<div style="font-size:22px">'+canalIcon+'</div>' +
        '<div style="flex:1">' +
        '<div style="font-weight:700;color:var(--navy)">'+esc(r.nome)+'</div>' +
        '<div style="font-size:12px;color:var(--text-muted)">'+
        '<span style="background:'+tipoBg[r.tipo]+'22;color:'+tipoBg[r.tipo]+';padding:1px 7px;border-radius:4px;font-weight:600">'+tipoLabel[r.tipo]+'</span>' +
        ' · Destinatário: '+r.destinatario+' · '+
        (r.diasAntes>0?r.diasAntes+' dia(s) antes':r.diasAntes===0?'No dia':'Após vencimento') +
        '</div></div>' +
        '<button class="btn-sm" onclick="abrirModalRegra(\''+r.id+'\')">✏ Editar</button>' +
        '<button class="btn-sm btn-danger-sm" onclick="_excluirRegra(\''+r.id+'\')">🗑</button>' +
        '</div>';
    }).join('') +
    '</div>' +
    '<div style="margin-top:24px">' +
    '<div style="font-weight:700;font-size:15px;color:var(--navy);margin-bottom:12px">📋 Histórico de Disparos</div>' +
    '<div class="card" style="padding:0;overflow:hidden">' +
    '<table class="data-table"><thead><tr>' +
    '<th>Regra</th><th>Destinatário</th><th>Canal</th><th>Mensagem</th><th>Enviado em</th><th>Status</th>' +
    '</tr></thead><tbody>' +
    [...NOTIF_LOG].reverse().map(function(l) {
      const ok = l.status==='entregue';
      return '<tr>' +
        '<td style="font-weight:600">'+esc(l.regra)+'</td>' +
        '<td>'+esc(l.destinatario)+'</td>' +
        '<td>'+(l.canal==='whatsapp'?'📱 WhatsApp':'📧 E-mail')+'</td>' +
        '<td style="max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="'+esc(l.mensagem)+'">'+esc(l.mensagem.slice(0,60))+(l.mensagem.length>60?'…':'')+'</td>' +
        '<td>'+l.enviado+'</td>' +
        '<td><span style="background:'+(ok?'#dcfce7':'#fee2e2')+';color:'+(ok?'#16a34a':'#dc2626')+';padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700">'+(ok?'✓ Entregue':'✕ Falhou')+'</span></td>' +
        '</tr>';
    }).join('') +
    '</tbody></table></div></div>';
}

function toggleRegra(id) {
  const r = NOTIF_REGRAS.find(function(x){return x.id===id;});
  if (!r) return;
  r.ativo = !r.ativo;
  _salvarDados();
  renderPaginaNotificacoes();
}

function _excluirRegra(id) {
  const idx = NOTIF_REGRAS.findIndex(function(x){return x.id===id;});
  if (idx === -1) return;
  NOTIF_REGRAS.splice(idx,1);
  _salvarDados();
  renderPaginaNotificacoes();
  toast('Regra removida.','success');
}

function _dispararNotificacoes() {
  const ativas = NOTIF_REGRAS.filter(function(r){return r.ativo;});
  if (!ativas.length) { toast('Nenhuma regra ativa.','warn'); return; }
  const agora = new Date().toLocaleString('pt-BR').slice(0,16).replace('T',' ');
  const novos = [];
  ativas.forEach(function(r) {
    novos.push({
      id:          'NL'+Date.now()+Math.random().toString(36).slice(2,6),
      regra:       r.nome,
      destinatario: r.destinatario==='cliente'?'Cliente(s)':'Dr. Klebson Cavalcanti',
      canal:       r.canal,
      mensagem:    'Disparo automático da regra "'+r.nome+'" executado em '+agora+'.',
      enviado:     agora,
      status:      'entregue',
    });
  });
  novos.forEach(function(n){ NOTIF_LOG.push(n); });
  _salvarDados();
  renderPaginaNotificacoes();
  toast('✓ <strong>'+novos.length+'</strong> notificações disparadas.','success');
}

function abrirModalRegra(id) {
  const r = id ? NOTIF_REGRAS.find(function(x){return x.id===id;}) : null;
  document.getElementById('modal-regra')?.remove();
  const m = document.createElement('div');
  m.id = 'modal-regra';
  m.className = 'modal-overlay';
  m.innerHTML = '<div class="modal-box" style="max-width:460px">' +
    '<div class="modal-header"><h3 class="modal-title">'+(r?'✏ Editar Regra':'+ Nova Regra')+'</h3>' +
    '<button class="modal-close" onclick="document.getElementById(\'modal-regra\').remove()">✕</button></div>' +
    '<div style="padding:20px;display:flex;flex-direction:column;gap:14px">' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Nome da regra *</label><input id="reg-nome" class="calc-input" style="margin:4px 0 0" value="'+(r?esc(r.nome):'')+'"></div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Tipo</label><select id="reg-tipo" class="calc-input" style="margin:4px 0 0">' +
    ['prazo','financeiro','agenda'].map(function(t){return '<option value="'+t+'"'+(r&&r.tipo===t?' selected':'')+'>'+{prazo:'Prazo',financeiro:'Financeiro',agenda:'Agenda'}[t]+'</option>';}).join('') +
    '</select></div>' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Canal</label><select id="reg-canal" class="calc-input" style="margin:4px 0 0">' +
    '<option value="whatsapp"'+(r&&r.canal==='whatsapp'?' selected':'')+'>📱 WhatsApp</option>' +
    '<option value="email"'+(r&&r.canal==='email'?' selected':'')+'>📧 E-mail</option>' +
    '</select></div></div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Dias antes (negativo = após)</label><input id="reg-dias" type="number" class="calc-input" style="margin:4px 0 0" value="'+(r?r.diasAntes:1)+'"></div>' +
    '<div><label style="font-size:12px;font-weight:600;color:var(--navy)">Destinatário</label><select id="reg-dest" class="calc-input" style="margin:4px 0 0">' +
    ['advogado','cliente','ambos'].map(function(d){return '<option value="'+d+'"'+(r&&r.destinatario===d?' selected':'')+'>'+{advogado:'Advogado',cliente:'Cliente',ambos:'Ambos'}[d]+'</option>';}).join('') +
    '</select></div></div>' +
    '<div style="display:flex;align-items:center;gap:10px">' +
    '<input type="checkbox" id="reg-ativo" style="width:16px;height:16px" '+(r&&r.ativo!==false?'checked':r?'':'checked')+'>' +
    '<label for="reg-ativo" style="font-size:13px;font-weight:600;color:var(--navy)">Regra ativa</label>' +
    '</div>' +
    '<div style="display:flex;gap:10px;margin-top:4px">' +
    '<button class="btn-outline" style="flex:1" onclick="document.getElementById(\'modal-regra\').remove()">Cancelar</button>' +
    '<button class="btn-primary" style="flex:1" onclick="_salvarRegra(\''+(id||'')+'\')">✓ Salvar</button>' +
    '</div></div></div>';
  document.body.appendChild(m);
}

function _salvarRegra(id) {
  const nome = document.getElementById('reg-nome')?.value?.trim();
  if (!nome) { toast('Informe o nome da regra.','warn'); return; }
  const dados = {
    nome,
    tipo:         document.getElementById('reg-tipo')?.value||'prazo',
    canal:        document.getElementById('reg-canal')?.value||'whatsapp',
    diasAntes:    parseInt(document.getElementById('reg-dias')?.value)||1,
    destinatario: document.getElementById('reg-dest')?.value||'advogado',
    ativo:        document.getElementById('reg-ativo')?.checked!==false,
  };
  if (id) {
    const r = NOTIF_REGRAS.find(function(x){return x.id===id;});
    if (r) Object.assign(r, dados);
  } else {
    NOTIF_REGRAS.push(Object.assign({ id:'NR'+Date.now() }, dados));
  }
  document.getElementById('modal-regra')?.remove();
  _salvarDados();
  renderPaginaNotificacoes();
  toast('✓ Regra salva com sucesso.','success');
}

function _finToggleProcesso(proc) {
  const el = document.getElementById('fin-proc-'+proc);
  if (!el) return;
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function _finAba(abaId) {
  document.querySelectorAll('.fin-aba-conteudo').forEach(el => el.style.display = 'none');
  document.querySelectorAll('[id^="fin-tab-"]').forEach(btn => {
    btn.style.background = 'transparent';
    btn.style.color = 'var(--text-muted)';
    btn.style.fontWeight = '500';
  });
  const sufixo = abaId.replace('fin-tab-','');
  const cont = document.getElementById('fin-conteudo-'+sufixo);
  if (cont) cont.style.display = 'block';
  const btn = document.getElementById(abaId);
  if (btn) { btn.style.background='var(--gold)'; btn.style.color='#fff'; btn.style.fontWeight='700'; }
}

function _finFiltrarProcessos() {
  const busca = (document.getElementById('fin-busca')?.value||'').toLowerCase();
  const tipo  = document.getElementById('fin-filtro-tipo')?.value||'';
  document.querySelectorAll('.fin-processo-card').forEach(card => {
    const txt = card.textContent.toLowerCase();
    const tipoOk = !tipo || card.innerHTML.includes(tipo==='receita'?'RECEITA':'DESPESA');
    card.style.display = (!busca || txt.includes(busca)) && tipoOk ? '' : 'none';
  });
}

function _finFiltrarTodos() {
  const busca  = (document.getElementById('fin-todos-busca')?.value||'').toLowerCase();
  const tipo   = document.getElementById('fin-todos-tipo')?.value||'';
  const status = document.getElementById('fin-todos-status')?.value||'';
  document.querySelectorAll('#fin-tbody-todos tr').forEach(tr => {
    const ok = (!busca || tr.dataset.busca?.includes(busca))
            && (!tipo   || tr.dataset.tipo === tipo)
            && (!status || tr.dataset.status === status);
    tr.style.display = ok ? '' : 'none';
  });
}

function _finRenderCaixa() {
  const meses = {};
  FIN_LANCAMENTOS.forEach(l => {
    const d = new Date(l.data);
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
    if (!meses[key]) meses[key] = { receitas:0, despesas:0 };
    if (l.tipo==='receita') meses[key].receitas += l.valor;
    else                    meses[key].despesas += l.valor;
  });
  const sorted = Object.keys(meses).sort();
  let saldoAcum = 0;
  const linhas = sorted.map(k => {
    const [ano,mes] = k.split('-');
    const nome = new Date(+ano,+mes-1,1).toLocaleDateString('pt-BR',{month:'long',year:'numeric'});
    const { receitas, despesas } = meses[k];
    const resultado = receitas - despesas;
    saldoAcum += resultado;
    return { nome, receitas, despesas, resultado, saldoAcum };
  });
  const totalRec  = linhas.reduce((s,l)=>s+l.receitas,0);
  const totalDesp = linhas.reduce((s,l)=>s+l.despesas,0);
  const totalRes  = totalRec - totalDesp;
  return `
    <div style="margin-top:16px">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:20px">
        <div class="kpi-card" style="padding:14px">
          <div class="kpi-label">Total Receitas</div>
          <div style="font-weight:800;font-size:20px;color:#10b981">${_finFmt(totalRec)}</div>
        </div>
        <div class="kpi-card" style="padding:14px">
          <div class="kpi-label">Total Despesas</div>
          <div style="font-weight:800;font-size:20px;color:#dc2626">${_finFmt(totalDesp)}</div>
        </div>
        <div class="kpi-card" style="padding:14px">
          <div class="kpi-label">Resultado Acumulado</div>
          <div style="font-weight:800;font-size:20px;color:${totalRes>=0?'#10b981':'#dc2626'}">${_finFmt(totalRes)}</div>
        </div>
      </div>
      <div class="card" style="padding:0;overflow:hidden">
        <div class="card-header" style="padding:14px 18px"><h3 class="card-title">📊 Fluxo de Caixa por Mês</h3></div>
        <table class="data-table">
          <thead>
            <tr><th>Mês</th><th style="color:#10b981">Receitas</th><th style="color:#dc2626">Despesas</th><th>Resultado</th><th>Saldo Acumulado</th></tr>
          </thead>
          <tbody>
            ${linhas.map(l=>`
              <tr>
                <td style="font-weight:600;text-transform:capitalize">${l.nome}</td>
                <td style="color:#10b981;font-weight:600">${_finFmt(l.receitas)}</td>
                <td style="color:#dc2626;font-weight:600">${_finFmt(l.despesas)}</td>
                <td style="font-weight:700;color:${l.resultado>=0?'#10b981':'#dc2626'}">${_finFmt(l.resultado)}</td>
                <td>
                  <div style="display:flex;align-items:center;gap:8px">
                    <div style="flex:1;height:8px;background:#e2e8f0;border-radius:4px;overflow:hidden">
                      <div style="height:100%;width:${Math.min(100,Math.max(0,(l.saldoAcum/totalRec)*100))}%;background:${l.saldoAcum>=0?'#10b981':'#dc2626'};border-radius:4px"></div>
                    </div>
                    <span style="font-weight:700;color:${l.saldoAcum>=0?'#10b981':'#dc2626'};min-width:90px;text-align:right">${_finFmt(l.saldoAcum)}</span>
                  </div>
                </td>
              </tr>
            `).join('')}
            <tr style="background:#f1f5f9;font-weight:800">
              <td>TOTAL</td>
              <td style="color:#10b981">${_finFmt(totalRec)}</td>
              <td style="color:#dc2626">${_finFmt(totalDesp)}</td>
              <td style="color:${totalRes>=0?'#10b981':'#dc2626'}">${_finFmt(totalRes)}</td>
              <td style="color:${totalRes>=0?'#10b981':'#dc2626'}">${_finFmt(totalRes)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`;
}

function abrirModalLancamento(processo, cliente) {
  document.getElementById('modal-lancamento')?.remove();
  const ehEscritorio = cliente === 'escritorio';
  const m = document.createElement('div');
  m.id = 'modal-lancamento';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box" style="max-width:520px">
      <div class="modal-header">
        <h3 class="modal-title">+ Novo Lançamento${processo?' — '+processo:ehEscritorio?' — Escritório':''}</h3>
        <button class="modal-close" onclick="document.getElementById('modal-lancamento').remove()">✕</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:14px;padding:20px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          <div>
            <label style="font-size:12px;font-weight:600;color:var(--navy)">Tipo *</label>
            <select id="lanc-tipo" class="calc-input" style="margin:4px 0 0" onchange="_lancTipoChange()">
              <option value="receita">Receita</option>
              <option value="despesa">Despesa</option>
            </select>
          </div>
          <div>
            <label style="font-size:12px;font-weight:600;color:var(--navy)">Categoria *</label>
            <select id="lanc-categoria" class="calc-input" style="margin:4px 0 0">
              <option value="honorarios">Honorários</option>
              <option value="exito">Êxito</option>
              <option value="pericia">Reembolso Perícia</option>
              <option value="outros">Outros</option>
            </select>
          </div>
        </div>
        <div>
          <label style="font-size:12px;font-weight:600;color:var(--navy)">Descrição *</label>
          <input id="lanc-descricao" class="calc-input" style="margin:4px 0 0" placeholder="Descrição do lançamento">
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          <div>
            <label style="font-size:12px;font-weight:600;color:var(--navy)">Processo</label>
            <input id="lanc-processo" class="calc-input" style="margin:4px 0 0" value="${processo||''}" placeholder="Ex: P1">
          </div>
          <div>
            <label style="font-size:12px;font-weight:600;color:var(--navy)">Cliente</label>
            <input id="lanc-cliente" class="calc-input" style="margin:4px 0 0" value="${!ehEscritorio&&cliente?cliente:''}" placeholder="Nome do cliente">
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px">
          <div>
            <label style="font-size:12px;font-weight:600;color:var(--navy)">Valor (R$) *</label>
            <input id="lanc-valor" type="number" class="calc-input" style="margin:4px 0 0" placeholder="0,00" min="0" step="0.01">
          </div>
          <div>
            <label style="font-size:12px;font-weight:600;color:var(--navy)">Data</label>
            <input id="lanc-data" type="date" class="calc-input" style="margin:4px 0 0" value="${new Date().toISOString().slice(0,10)}">
          </div>
          <div>
            <label style="font-size:12px;font-weight:600;color:var(--navy)">Vencimento</label>
            <input id="lanc-vencimento" type="date" class="calc-input" style="margin:4px 0 0">
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          <div>
            <label style="font-size:12px;font-weight:600;color:var(--navy)">Status</label>
            <select id="lanc-status" class="calc-input" style="margin:4px 0 0">
              <option value="em_aberto">Em Aberto</option>
              <option value="recebido">Recebido</option>
              <option value="atrasado">Atrasado</option>
              <option value="pago">Pago</option>
              <option value="a_pagar">A Pagar</option>
            </select>
          </div>
          <div>
            <label style="font-size:12px;font-weight:600;color:var(--navy)">Forma de Pagamento</label>
            <select id="lanc-forma" class="calc-input" style="margin:4px 0 0">
              <option value="boleto">Boleto</option>
              <option value="pix">PIX</option>
              <option value="transferencia">Transferência</option>
              <option value="cartao">Cartão</option>
              <option value="debito">Débito</option>
              <option value="dinheiro">Dinheiro</option>
            </select>
          </div>
        </div>
      </div>
      <div style="display:flex;gap:10px;padding:0 20px 20px">
        <button class="btn-outline" style="flex:1" onclick="document.getElementById('modal-lancamento').remove()">Cancelar</button>
        <button class="btn-primary" style="flex:1" onclick="salvarLancamento()">✓ Salvar lançamento</button>
      </div>
    </div>`;
  document.body.appendChild(m);
}

function _lancTipoChange() {
  const tipo = document.getElementById('lanc-tipo')?.value;
  const sel  = document.getElementById('lanc-categoria');
  if (!sel) return;
  const opts = tipo === 'receita'
    ? [['honorarios','Honorários'],['rpv','RPV'],['precatorio','Precatório'],['pericia','Reembolso Perícia'],['outros','Outros']]
    : [['custas','Custas Processuais'],['pericia','Honorários Perito'],['escritorio','Despesa de Escritório'],['deslocamento','Deslocamento'],['exames','Exames'],['despesas_medicas','Despesas Médicas'],['outros','Outros']];
  sel.innerHTML = opts.map(([v,t])=>`<option value="${v}">${t}</option>`).join('');
}

function salvarLancamento() {
  const tipo      = document.getElementById('lanc-tipo')?.value;
  const categoria = document.getElementById('lanc-categoria')?.value;
  const descricao = document.getElementById('lanc-descricao')?.value?.trim();
  const valor     = parseFloat(document.getElementById('lanc-valor')?.value);
  if (!descricao || !valor || valor <= 0) { toast('Preencha descrição e valor.','warn'); return; }
  const novo = {
    id:         'F'+Date.now(),
    tipo, categoria, descricao, valor,
    processo:   document.getElementById('lanc-processo')?.value?.trim()||null,
    cliente:    document.getElementById('lanc-cliente')?.value?.trim()||null,
    data:       document.getElementById('lanc-data')?.value||new Date().toISOString().slice(0,10),
    vencimento: document.getElementById('lanc-vencimento')?.value||new Date().toISOString().slice(0,10),
    status:     document.getElementById('lanc-status')?.value||'em_aberto',
    formaPgto:  document.getElementById('lanc-forma')?.value||'boleto',
  };
  FIN_LANCAMENTOS.push(novo);
  _salvarDados();
  document.getElementById('modal-lancamento').remove();
  renderPaginaFinanceiro();
  toast(`✓ Lançamento <strong>${esc(descricao)}</strong> salvo com sucesso.`,'success');
}

function editarLancamento(id) {
  const l = FIN_LANCAMENTOS.find(x=>x.id===id);
  if (!l) return;
  abrirModalLancamento(l.processo, l.cliente);
  setTimeout(()=>{
    document.getElementById('lanc-tipo').value      = l.tipo;
    _lancTipoChange();
    document.getElementById('lanc-categoria').value = l.categoria;
    document.getElementById('lanc-descricao').value = l.descricao;
    document.getElementById('lanc-processo').value  = l.processo||'';
    document.getElementById('lanc-cliente').value   = l.cliente||'';
    document.getElementById('lanc-valor').value     = l.valor;
    document.getElementById('lanc-data').value      = l.data;
    document.getElementById('lanc-vencimento').value= l.vencimento;
    document.getElementById('lanc-status').value    = l.status;
    document.getElementById('lanc-forma').value     = l.formaPgto;
    document.querySelector('#modal-lancamento .btn-primary').onclick = ()=>{
      const valor = parseFloat(document.getElementById('lanc-valor')?.value);
      Object.assign(l, {
        tipo:      document.getElementById('lanc-tipo').value,
        categoria: document.getElementById('lanc-categoria').value,
        descricao: document.getElementById('lanc-descricao').value.trim(),
        processo:  document.getElementById('lanc-processo').value.trim()||null,
        cliente:   document.getElementById('lanc-cliente').value.trim()||null,
        valor, data: document.getElementById('lanc-data').value,
        vencimento: document.getElementById('lanc-vencimento').value,
        status:    document.getElementById('lanc-status').value,
        formaPgto: document.getElementById('lanc-forma').value,
      });
      document.getElementById('modal-lancamento').remove();
      renderPaginaFinanceiro();
      toast('✓ Lançamento atualizado.','success');
    };
  }, 50);
}

// ============================================
// SISTEMA CENTRAL DE ALERTAS DE PRAZOS
// Coleta prazos judiciais + GERID/INSS + agenda
// Classifica por criticidade e sincroniza com calendário
// ============================================

// Margens de segurança configuráveis por tipo de prazo.
// diasMargem = quantos dias antes do prazo real o sistema deve alertar e
// classificar como prazo interno. Prazo interno = prazo real - diasMargem.
window.PRAZO_MARGENS = [
  { id:'recurso',         label:'Recurso',                   diasMargem: 5 },
  { id:'contestacao',     label:'Contestação',               diasMargem: 5 },
  { id:'apelacao',        label:'Apelação',                  diasMargem: 5 },
  { id:'embargos',        label:'Embargos de Declaração',    diasMargem: 3 },
  { id:'memoriais',       label:'Memoriais / Razões',        diasMargem: 4 },
  { id:'peticao',         label:'Petição Simples',           diasMargem: 3 },
  { id:'inss_exigencia',  label:'Exigência INSS/GERID',      diasMargem: 5 },
  { id:'inss_recurso',    label:'Recurso INSS/GERID',        diasMargem: 5 },
  { id:'audiencia',       label:'Audiência (preparação)',    diasMargem: 2 },
  { id:'pericia',         label:'Perícia (preparação)',      diasMargem: 2 },
  { id:'prazo_geral',     label:'Prazo Geral (padrão)',      diasMargem: 3 },
];

// Retorna margem configurada para um tipo; fallback = prazo_geral
function _margemParaTipo(tipoEvento) {
  const id = tipoEvento || 'prazo_geral';
  const m  = window.PRAZO_MARGENS.find(m => m.id === id) ||
             window.PRAZO_MARGENS.find(m => m.id === 'prazo_geral');
  return m ? m.diasMargem : 3;
}

const PRAZO_NIVEIS = {
  vencido:  { label:'Vencido',       cor:'#7f1d1d', bg:'#fef2f2', borda:'#fca5a5', icone:'💀', prioridade:0 },
  critico:  { label:'Crítico',       cor:'#dc2626', bg:'#fff1f1', borda:'#fca5a5', icone:'🚨', prioridade:1 },
  urgente:  { label:'Urgente',       cor:'#d97706', bg:'#fffbeb', borda:'#fde68a', icone:'⚠️',  prioridade:2 },
  atencao:  { label:'Atenção',       cor:'#2563eb', bg:'#eff6ff', borda:'#bfdbfe', icone:'📌', prioridade:3 },
  normal:   { label:'Monitorando',   cor:'#059669', bg:'#f0fdf4', borda:'#bbf7d0', icone:'✓',  prioridade:4 },
};

function _diasAte(dataStr) {
  // Aceita formatos dd/MM/yyyy ou yyyy-MM-dd
  if (!dataStr || dataStr === '—') return null;
  let d;
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dataStr)) {
    const [dia, mes, ano] = dataStr.split('/');
    d = new Date(ano, mes - 1, dia);
  } else {
    d = new Date(dataStr);
  }
  if (isNaN(d)) return null;
  const hoje = new Date(); hoje.setHours(0,0,0,0);
  d.setHours(0,0,0,0);
  return Math.round((d - hoje) / 86400000);
}

function _nivelPrazo(dias) {
  if (dias === null) return null;
  if (dias < 0)  return 'vencido';
  if (dias === 0) return 'critico';
  if (dias <= 2)  return 'critico';
  if (dias <= 5)  return 'urgente';
  if (dias <= 10) return 'atencao';
  return 'normal';
}

function _coletarTodosPrazos() {
  const prazos = [];
  const hoje   = new Date(); hoje.setHours(0,0,0,0);

  // 1. Prazos da Agenda (judiciais e INSS)
  (GESTOR.eventos || GESTOR.agenda || []).forEach(ev => {
    if (!['prazo','inss_exigencia','inss_recurso'].includes(ev.tipo)) return;
    if (['cancelado','concluido'].includes(ev.status)) return;
    const dias   = _diasAte(ev.data);
    if (dias === null || dias > 60) return;
    const margem = _margemParaTipo(ev.tipo);
    const diasInterno = dias - margem;
    if (diasInterno > 30) return;
    const nivel = _nivelPrazo(diasInterno);
    prazos.push({
      id:           'ag_' + ev.id,
      fonte:        ev.origem === 'inss' ? 'GERID/INSS' : 'Judicial',
      titulo:       ev.titulo,
      cliente:      ev.cliente || '—',
      responsavel:  ev.responsavel || '—',
      data:         ev.data,
      dias,
      diasInterno,
      margem,
      nivel,
      modulo:       ev.origem === 'inss' ? 'gerid' : 'agenda',
      procId:       ev.procId || null,
      cor:          ev.origem === 'inss' ? '#4b5563' : '#2563eb',
    });
  });

  // 2. Prazos dos requerimentos GERID
  (GESTOR.geridRequerimentos || GESTOR.requerimentos || []).forEach(r => {
    if (!r.prazoResposta) return;
    const dias   = _diasAte(r.prazoResposta);
    if (dias === null || dias > 60) return;
    const margem = _margemParaTipo('inss_exigencia');
    const diasInterno = dias - margem;
    if (diasInterno > 30) return;
    const nivel = _nivelPrazo(diasInterno);
    if (!nivel) return;
    const jaTem = prazos.some(p => p.cliente === r.beneficiario && p.fonte === 'GERID/INSS');
    if (!jaTem) {
      prazos.push({
        id:           'gerid_' + r.nb,
        fonte:        'GERID/INSS',
        titulo:       `Prazo resp. exigência INSS — ${r.beneficiario}`,
        cliente:      r.beneficiario,
        responsavel:  '—',
        data:         r.prazoResposta,
        dias,
        diasInterno,
        margem,
        nivel,
        modulo:       'gerid',
        procId:       null,
        cor:          '#4b5563',
      });
    }
  });

  // 3. Prazos fatais da IA Estratégica (via analisarEstrategia)
  const _estrategias = typeof GESTOR.analisarEstrategia === 'function' ? GESTOR.analisarEstrategia() : (GESTOR.estrategias || []);
  (_estrategias || []).forEach(e => {
    const prazoFatal = e.prazoFatal;
    if (!prazoFatal || prazoFatal === '—') return;
    const dias   = _diasAte(prazoFatal);
    if (dias === null || dias > 60) return;
    const margem = _margemParaTipo('prazo_geral');
    const diasInterno = dias - margem;
    if (diasInterno > 30) return;
    const nivel = _nivelPrazo(diasInterno);
    if (!nivel || nivel === 'normal') return;
    const jaTem = prazos.some(p => p.procId === e.procId && p.fonte === 'Judicial');
    if (!jaTem) {
      prazos.push({
        id:           'ia_' + e.id,
        fonte:        'IA Estratégica',
        titulo:       `${e.pecaRecomendada || e.proximoPasso || 'Ação necessária'} — ${e.cliente}`,
        cliente:      e.cliente || '—',
        responsavel:  e.responsavel || '—',
        data:         prazoFatal,
        dias,
        diasInterno,
        margem,
        nivel,
        modulo:       'estrategia',
        procId:       e.procId || null,
        cor:          '#7c3aed',
      });
    }
  });

  // Ordenar: vencidos → críticos → urgentes → atenção → normal
  prazos.sort((a, b) => {
    const pa = PRAZO_NIVEIS[a.nivel]?.prioridade ?? 99;
    const pb = PRAZO_NIVEIS[b.nivel]?.prioridade ?? 99;
    return pa !== pb ? pa - pb : a.dias - b.dias;
  });

  return prazos;
}

function _sincronizarPrazosAgenda(prazos) {
  // Remove entradas anteriores geradas pelo sistema antes de reinserir — evita acúmulo
  if (GESTOR.eventos) GESTOR.eventos = GESTOR.eventos.filter(e => !e._sinc);
  else if (GESTOR.agenda) GESTOR.agenda = GESTOR.agenda.filter(e => !e._sinc);

  prazos.forEach(p => {
    if (!['critico','vencido','urgente'].includes(p.nivel)) return;
    if (p.fonte === 'IA Estratégica' && p.procId) {
      const _evts = GESTOR.eventos || GESTOR.agenda || [];
      const jaExiste = _evts.some(ev => ev.procId === p.procId && ev.tipo === 'prazo');
      if (!jaExiste) {
        const novoEv = {
          id:          'sync_' + Date.now() + '_' + p.procId,
          data:        p.data,
          hora:        '17:00',
          tipo:        'prazo',
          critico:     p.nivel === 'critico' || p.nivel === 'vencido',
          meet:        false,
          titulo:      p.titulo,
          procId:      p.procId,
          cliente:     p.cliente,
          responsavel: p.responsavel,
          origem:      'sistema',
          _sinc:       true,
        };
        if (GESTOR.eventos) GESTOR.eventos.push(novoEv);
        else if (GESTOR.agenda) GESTOR.agenda.push(novoEv);
      }
    }
  });
}

function _atualizarPainelAlertas() {
  const prazos     = _coletarTodosPrazos();
  _sincronizarPrazosAgenda(prazos);

  // Atualiza badge do sino
  const criticos = prazos.filter(p => ['vencido','critico','urgente'].includes(p.nivel));
  const dot      = document.querySelector('.notif-dot');
  if (dot) dot.classList.toggle('hidden', criticos.length === 0);

  // Badge no topo do sino (contador)
  let badgeSino = document.getElementById('sino-badge');
  if (!badgeSino) {
    const sinoBtn = document.querySelector('.notif-btn');
    if (sinoBtn) {
      badgeSino = document.createElement('span');
      badgeSino.id = 'sino-badge';
      badgeSino.className = 'sino-badge';
      sinoBtn.appendChild(badgeSino);
    }
  }
  if (badgeSino) {
    badgeSino.textContent  = criticos.length || '';
    badgeSino.style.display = criticos.length ? '' : 'none';
  }

  // Injetar alertas de prazos nas notificações do sistema
  // Remove alertas de prazo anteriores e reinjeta atualizados
  GESTOR.notificacoes = (GESTOR.notificacoes || []).filter(n => n._tipoPrazo !== true);
  prazos.filter(p => ['vencido','critico','urgente'].includes(p.nivel)).forEach(p => {
    const niv = PRAZO_NIVEIS[p.nivel];
    GESTOR.notificacoes.unshift({
      id:        p.id,
      tipo:      'prazo',
      critico:   p.nivel === 'critico' || p.nivel === 'vencido',
      texto:     `${niv.icone} ${p.titulo}`,
      tempo:     p.dias < 0  ? `Vencido há ${Math.abs(p.dias)}d`
               : p.dias === 0 ? 'Vence HOJE'
               : `${p.dias}d restantes`,
      modulo:    p.modulo,
      lida:      false,
      _tipoPrazo:true,
    });
  });

  // Atualizar widget de prazos no Dashboard se visível
  _atualizarWidgetPrazosDashboard(prazos);
}

function _atualizarWidgetPrazosDashboard(prazos) {
  const container = document.getElementById('widget-prazos-criticos');
  if (!container) return;
  const criticos = prazos.filter(p => ['vencido','critico','urgente'].includes(p.nivel));
  if (!criticos.length) {
    container.innerHTML = `<div style="padding:16px;text-align:center;color:var(--text-muted);font-size:13px">✅ Nenhum prazo crítico nos próximos 5 dias</div>`;
    return;
  }
  container.innerHTML = criticos.map(p => {
    const niv = PRAZO_NIVEIS[p.nivel];
    const diasLabel = p.dias < 0  ? `Vencido há ${Math.abs(p.dias)}d`
                    : p.dias === 0 ? 'HOJE'
                    : `${p.dias}d`;
    return `
      <div class="prazo-alerta-row" onclick="navegarPara('${p.modulo}')" style="border-left:3px solid ${niv.cor}">
        <div class="prazo-alerta-nivel" style="background:${niv.bg};color:${niv.cor};border:1px solid ${niv.borda}">${niv.icone} ${niv.label}</div>
        <div class="prazo-alerta-corpo">
          <div class="prazo-alerta-titulo">${esc(p.titulo)}</div>
          <div class="prazo-alerta-meta">
            <span>${esc(p.cliente)}</span>
            <span class="prazo-alerta-sep">·</span>
            <span>${esc(p.fonte)}</span>
            <span class="prazo-alerta-sep">·</span>
            <span>${esc(p.responsavel)}</span>
          </div>
        </div>
        <div class="prazo-alerta-dias" style="color:${niv.cor};background:${niv.bg}">${diasLabel}</div>
      </div>
    `;
  }).join('');
}

// Painel dropdown do sino — versão enriquecida com prazos
function _renderNotifDropdown() {
  const prazos  = _coletarTodosPrazos().filter(p => ['vencido','critico','urgente'].includes(p.nivel));
  const outras  = (GESTOR.notificacoes || []).filter(n => !n._tipoPrazo && !n.lida).slice(0, 5);
  let html = '';

  if (prazos.length) {
    html += `<div class="notif-secao-titulo">⏰ Prazos Críticos</div>`;
    html += prazos.map(p => {
      const niv = PRAZO_NIVEIS[p.nivel];
      const diasLabel = p.dias < 0  ? `Vencido há ${Math.abs(p.dias)}d`
                      : p.dias === 0 ? 'HOJE'
                      : `${p.dias}d restantes`;
      return `
        <div class="notif-row ${p.nivel === 'vencido' ? 'critico' : ''}" onclick="navegarPara('${p.modulo}');document.getElementById('notif-panel')?.remove()">
          <span class="notif-row-icon" style="color:${niv.cor}">${niv.icone}</span>
          <div class="notif-row-body">
            <span class="notif-row-text">${esc(p.titulo)}</span>
            <span class="notif-row-time" style="color:${niv.cor};font-weight:700">${diasLabel} · ${esc(p.fonte)}</span>
          </div>
          <span class="prazo-notif-pill" style="background:${niv.bg};color:${niv.cor};border:1px solid ${niv.borda}">${niv.label}</span>
        </div>
      `;
    }).join('');
  }

  if (outras.length) {
    html += `<div class="notif-secao-titulo">🔔 Outras notificações</div>`;
    const icons = {prazo:'⏱',meet:'📹',intimacao:'📨',followup:'🎯',andamento:'⚖',inss:'🏛'};
    html += outras.map(n => `
      <div class="notif-row ${n.critico?'critico':''}" onclick="navegarPara('${n.modulo}');document.getElementById('notif-panel')?.remove()">
        <span class="notif-row-icon">${icons[n.tipo]||'•'}</span>
        <div class="notif-row-body"><span class="notif-row-text">${n.texto}</span><span class="notif-row-time">${n.tempo}</span></div>
        <span class="notif-new-dot"></span>
      </div>
    `).join('');
  }

  if (!prazos.length && !outras.length) {
    html = `<div style="padding:24px;text-align:center;color:var(--text-muted)">✅ Tudo em dia! Nenhum alerta pendente.</div>`;
  }

  return html;
}

const pages = {
  dashboard:'Dashboard', processos:'Processos', prazos:'Prazos',
  agenda:'Agenda', intimacoes:'Intimações', peticoes:'Petições IA',
  workflow:'Workflow', documentos:'Documentos', clientes:'Clientes & CRM',
  financeiro:'Financeiro', horas:'Apontamento de Horas', atendimento:'Atendimento',
  relatorios:'Relatórios & BI', followups:'Follow-ups Inteligentes', configuracoes:'Configurações'
};

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const page = document.getElementById('page-' + id);
  if (page) page.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(item => {
    const oc = item.getAttribute('onclick');
    if (oc && oc.includes("'"+id+"'")) item.classList.add('active');
  });
  const bc = document.getElementById('breadcrumb');
  if (bc) bc.textContent = pages[id] || id;
  if (window.innerWidth <= 900) document.getElementById('sidebar').classList.remove('open');
  const pc = document.querySelector('.page-content');
  if (pc) pc.scrollTop = 0;
  if (id === 'prazos') renderTelaPrazos();
  if (id === 'followups') renderFollowups();
  if (id === 'agenda') renderAgendaEventos();
  if (id === 'andamentos') renderAndamentos();
  if (id === 'workflow') renderKanban();
  if (id === 'kanban-adm') _renderBoardSolo('adm');
  if (id === 'kanban-jud') _renderBoardSolo('jud');
  if (id === 'agentes') renderPaginaAgentes();
  if (id === 'financeiro') renderPaginaFinanceiro();
  if (id === 'documentos') renderPaginaDocumentos();
  if (id === 'notificacoes') renderPaginaNotificacoes();
  if (id === 'estrategia') renderEstrategiaCompleta();
  if (id === 'integracoes') atualizarContadoresInteg();
  if (id === 'relatorios') { renderBiAreas(); renderBiForuns(); }
  if (id === 'clientes') renderTabelaClientes();
  if (id === 'configuracoes') renderUsuariosLista();
  if (id === 'dashboard') {
    _atualizarPainelAlertas();
    const syncEl = document.getElementById('prazos-ultima-sync');
    if (syncEl) syncEl.textContent = 'Sincronizado às ' + new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
  }
}

// ============================================
// SISTEMA DE LOGIN & TROCA DE USUÁRIO
// ============================================

let _loginUsuarioSelecionado = null;

function inicializarLogin() {
  // Carregar nome do escritório na tela de login
  const nomeEsc = getNomeEscritorio();
  document.querySelectorAll('[data-nome-escritorio]').forEach(el => {
    if (el.tagName === 'INPUT') el.value = nomeEsc;
    else el.textContent = nomeEsc;
  });

  // Montar lista de usuários
  const lista = document.getElementById('login-usuarios-lista');
  if (!lista) return;
  lista.innerHTML = USUARIOS_SISTEMA.filter(u => u.ativo).map(u => `
    <div class="login-usuario-card" onclick="selecionarUsuarioLogin('${u.id}')">
      <div class="login-u-avatar" style="background:${u.cor}">${u.iniciais}</div>
      <div class="login-u-info">
        <span class="login-u-nome">${esc(nomeExibicao(u))}</span>
        <span class="login-u-cargo">${esc(u.cargo||'')}</span>
      </div>
      <span class="login-u-seta">›</span>
    </div>`).join('');
}

function selecionarUsuarioLogin(userId) {
  _loginUsuarioSelecionado = USUARIOS_SISTEMA.find(u => u.id === userId);
  if (!_loginUsuarioSelecionado) return;
  document.getElementById('login-usuarios-lista').style.display = 'none';
  const wrap = document.getElementById('login-senha-wrap');
  wrap.style.display = 'flex';
  const u = _loginUsuarioSelecionado;
  document.getElementById('login-usuario-selecionado').innerHTML = `
    <div class="login-u-avatar" style="background:${u.cor};width:42px;height:42px;font-size:15px">${u.iniciais}</div>
    <div><div style="font-weight:800;color:var(--navy)">${esc(nomeExibicao(u))}</div><div style="font-size:11px;color:var(--text-muted)">${esc(u.cargo||'')}</div></div>`;
  document.getElementById('login-senha').focus();
}

function voltarSelecaoUsuario() {
  _loginUsuarioSelecionado = null;
  document.getElementById('login-senha-wrap').style.display = 'none';
  document.getElementById('login-usuarios-lista').style.display = 'grid';
  document.getElementById('login-senha').value = '';
}

function confirmarLogin() {
  if (!_loginUsuarioSelecionado) return;
  setUsuarioAtual(_loginUsuarioSelecionado);

  // Ocultar login, mostrar app
  document.getElementById('tela-login').style.display   = 'none';
  document.getElementById('sidebar').style.display      = '';
  document.getElementById('main-content').style.display = '';

  // Atualizar topbar com usuário logado
  const u = USUARIO_ATUAL;
  const topbarIni  = document.querySelector('.topbar-avatar-iniciais');
  const topbarNome = document.querySelector('.topbar-perfil-nome');
  const topbarCargo= document.querySelector('.topbar-perfil-cargo');
  const dropNome   = document.querySelector('.perfil-drop-nome');
  const dropEmail  = document.querySelector('.perfil-drop-email');
  const dropOab    = document.querySelector('.perfil-drop-oab');
  const dropAva    = document.querySelector('.perfil-drop-avatar');
  const sidebarUser= document.querySelector('.user-name');
  const sidebarRole= document.querySelector('.user-role');
  const sidebarAva = document.querySelector('.user-avatar');
  if (topbarIni)   topbarIni.textContent   = u.iniciais;
  if (topbarNome)  topbarNome.textContent  = nomeExibicao(u);
  if (topbarCargo) topbarCargo.textContent = u.cargo || '';
  if (dropNome)    dropNome.textContent    = nomeExibicao(u);
  if (dropEmail)   dropEmail.textContent   = u.email;
  if (dropOab)     dropOab.textContent     = u.oab;
  if (dropAva)     dropAva.textContent     = u.iniciais;
  if (sidebarUser) sidebarUser.textContent = nomeExibicao(u);
  if (sidebarRole) sidebarRole.textContent = u.cargo || '';
  if (sidebarAva) {
    sidebarAva.textContent = u.iniciais;
    sidebarAva.style.background = u.cor;
    sidebarAva.style.color = 'white';
  }
  // Cor do avatar no topbar
  const avatarFoto = document.querySelector('.topbar-avatar-foto');
  if (avatarFoto) avatarFoto.style.background = `linear-gradient(135deg, ${u.cor}, #C9A84C)`;

  // Saudação personalizada
  const hora = new Date().getHours();
  const period = hora < 12 ? 'Bom dia' : hora < 18 ? 'Boa tarde' : 'Boa noite';
  const saudacao = document.getElementById('dash-saudacao');
  if (saudacao) saudacao.textContent = `${period}, ${nomeExibicao(u)} 👋`;

  aplicarControleAcesso();
  renderMinhasTarefas();
  renderDashCalendario();
  verificarAlertasEventosDia();
  showPage('dashboard');
  toast(`✓ Bem-vindo, <strong>${esc(nomeExibicao(u))}</strong>!`);

  // Sincronizar dados com Supabase
  if (typeof sbSincronizarTudo === 'function') {
    sbPushUsuariosIniciais();
    sbSincronizarTudo().then(() => {
      renderDashCalendario();
      renderMinhasTarefas();
    });
  }
}

function trocarUsuario() {
  fecharMenuPerfil();
  // Ocultar app e mostrar tela de login novamente
  document.getElementById('tela-login').style.display   = 'flex';
  document.getElementById('sidebar').style.display      = 'none';
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('alerta-evento-piscante')?.remove();
  voltarSelecaoUsuario();
}

// ============================================
// PAINEL MINHAS TAREFAS
// ============================================

function renderMinhasTarefas() {
  const lista = document.getElementById('minhas-tarefas-lista');
  const sub   = document.getElementById('minhas-tarefas-sub');
  const titulo = document.getElementById('minhas-tarefas-titulo');
  if (!lista) return;

  const filtroStatus = document.getElementById('mt-filtro-status')?.value || 'pendente';
  const u = USUARIO_ATUAL;

  // Buscar eventos atribuídos ao usuário atual
  const hoje  = new Date();
  const todos = (GESTOR.eventos || []).filter(e => {
    const isAtrib = (e.atribuidoPara || e.responsavel || '') === u.nome;
    if (!isAtrib) return false;
    if (filtroStatus === 'pendente')  return e.status !== 'concluido' && e.status !== 'cancelado';
    if (filtroStatus === 'concluido') return e.status === 'concluido';
    return true;
  }).sort((a, b) => {
    // Ordenar: hoje primeiro, críticos primeiro, depois por data
    const aHoje = a.data === _dataHojeStr();
    const bHoje = b.data === _dataHojeStr();
    if (aHoje !== bHoje) return aHoje ? -1 : 1;
    if (a.critico !== b.critico) return a.critico ? -1 : 1;
    return (a.data || '').localeCompare(b.data || '');
  });

  if (titulo) titulo.textContent = `📋 Minhas Tarefas — ${u.nome.split(' ')[0]}`;
  if (sub) sub.textContent = `${todos.length} ${filtroStatus === 'pendente' ? 'pendente' + (todos.length !== 1 ? 's' : '') : 'registro' + (todos.length !== 1 ? 's' : '')}`;

  if (!todos.length) {
    lista.innerHTML = `<div class="mt-vazio">
      ${filtroStatus === 'pendente' ? '✓ Nenhuma tarefa pendente — tudo em dia!' : 'Nenhum registro encontrado.'}
    </div>`;
    return;
  }

  const TIPO_ICON = {
    audiencia:'⚖', prazo:'⏱', reuniao:'🤝', andamento:'📋',
    inss_exigencia:'🏛', inss_decisao:'🏛', inss_recurso:'🏛', inss_pericia:'🔬',
    intimacao:'📨', interno:'📌',
  };
  const TIPO_COR2 = {
    audiencia:'#2563eb', prazo:'#dc2626', reuniao:'#2563eb',
    inss_exigencia:'#7c3aed', inss_decisao:'#7c3aed', inss_recurso:'#7c3aed', inss_pericia:'#7c3aed',
    andamento:'#64748b', intimacao:'#d97706', interno:'#64748b',
  };

  lista.innerHTML = `<div class="mt-grid">${todos.map(e => {
    const isHoje    = e.data === _dataHojeStr();
    const isConcl   = e.status === 'concluido';
    const isCancel  = e.status === 'cancelado';
    const isCritico = e.critico && !isConcl;
    const cor       = TIPO_COR2[e.tipo] || '#64748b';
    const icon      = TIPO_ICON[e.tipo] || '📌';
    const dataFmt   = e.data ? e.data.split('-').reverse().join('/') : '—';
    const vencido   = !isConcl && !isCancel && e.data && e.data < _dataHojeStr();

    return `<div class="mt-card${isCritico ? ' mt-critico' : ''}${isConcl ? ' mt-concluido' : ''}${vencido ? ' mt-vencido' : ''}" onclick="abrirModalEvento('${e.id}')">
      <div class="mt-card-topo">
        <span class="mt-tipo-badge" style="background:${cor}18;color:${cor}">${icon} ${e.tipo?.replace('inss_','').replace('_',' ') || ''}</span>
        <span class="mt-data${vencido?' mt-data-vencida':isHoje?' mt-data-hoje':''}">${isHoje ? '📅 Hoje' : vencido ? '⚠ ' + dataFmt : dataFmt}${e.hora ? ' · ' + e.hora : ''}</span>
      </div>
      <div class="mt-titulo">${isConcl ? '<s>' : ''}${esc(e.titulo)}${isConcl ? '</s>' : ''}</div>
      ${e.cliente ? `<div class="mt-cliente">👤 ${esc(e.cliente)}</div>` : ''}
      <div class="mt-rodape">
        ${isCritico ? '<span class="mt-badge-critico">🔴 Crítico</span>' : ''}
        ${isConcl   ? '<span class="mt-badge-ok">✓ Concluído</span>' : ''}
        ${isCancel  ? '<span class="mt-badge-cancel">✕ Cancelado</span>' : ''}
        ${vencido   ? '<span class="mt-badge-vencido">⚠ Vencido</span>' : ''}
        <span class="mt-abrir">Abrir →</span>
      </div>
    </div>`;
  }).join('')}</div>`;
}

// ============================================
// CONTROLE DE ACESSO POR PERFIL
// ============================================

// Retorna o nome de exibição com "Dr." para perfis jurídicos
function nomeExibicao(u) {
  const perfisJuridicos = ['admin', 'socio', 'advogado'];
  if (!perfisJuridicos.includes(u.perfil)) return u.nome;
  if (/^Dr[a]?\. /i.test(u.nome)) return u.nome;
  return `Dr. ${u.nome}`;
}

function temPermissao(moduloId, tipo = 'ver') {
  if (!USUARIO_ATUAL) return false;
  // Admin tem acesso total sempre
  if (USUARIO_ATUAL.perfil === 'admin') return true;
  const acesso = USUARIO_ATUAL.acesso?.[moduloId];
  if (!acesso) return false;
  return !!acesso[tipo];
}

function aplicarControleAcesso() {
  // Itens do menu — ocultar o que o usuário não pode ver
  document.querySelectorAll('#sidebar-nav [data-modulo]').forEach(item => {
    const mod = item.getAttribute('data-modulo');
    if (temPermissao(mod, 'ver')) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });

  // Botões com data-modulo + data-tipo — ocultar se não tiver permissão de editar
  document.querySelectorAll('[data-modulo][data-tipo]').forEach(btn => {
    const mod  = btn.getAttribute('data-modulo');
    const tipo = btn.getAttribute('data-tipo');
    btn.style.display = temPermissao(mod, tipo) ? '' : 'none';
  });

  // Ocultar grupos de label que ficaram sem itens visíveis
  document.querySelectorAll('#sidebar-nav .nav-group-label').forEach(label => {
    let proximo = label.nextElementSibling;
    let temVisivel = false;
    while (proximo && !proximo.classList.contains('nav-group-label')) {
      if (proximo.style.display !== 'none' && proximo.classList.contains('nav-item')) temVisivel = true;
      proximo = proximo.nextElementSibling;
    }
    label.style.display = temVisivel ? '' : 'none';
  });
}

function navegarPara(moduloId) {
  if (!temPermissao(moduloId, 'ver')) {
    toast('⛔ Você não tem permissão para acessar este módulo.', 'erro');
    return;
  }
  showPage(moduloId);
}

function _dataHojeStr() {
  const h = new Date();
  return `${h.getFullYear()}-${String(h.getMonth()+1).padStart(2,'0')}-${String(h.getDate()).padStart(2,'0')}`;
}

const NOME_ESCRITORIO_DEFAULT = 'Costa Cavalcanti Advogados';

function getNomeEscritorio() {
  return localStorage.getItem('gestor-nome-escritorio') || NOME_ESCRITORIO_DEFAULT;
}

function atualizarNomeEscritorio(nome) {
  const valor = nome?.trim() || NOME_ESCRITORIO_DEFAULT;
  localStorage.setItem('gestor-nome-escritorio', valor);
  // Atualizar todos os pontos do sistema em tempo real
  document.querySelectorAll('[data-nome-escritorio]').forEach(el => {
    if (el.tagName === 'INPUT') el.value = valor;
    else el.textContent = valor;
  });
}

// Carregar e aplicar o nome salvo assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  const salvo = getNomeEscritorio();
  document.querySelectorAll('[data-nome-escritorio]').forEach(el => {
    if (el.tagName === 'INPUT') el.value = salvo;
    else el.textContent = salvo;
  });
  _carregarPreferencias();
  // Inicializa alertas de prazos e agenda em 500ms (após login)
  setTimeout(() => {
    if (USUARIO_ATUAL) _atualizarPainelAlertas();
  }, 500);
  // Atualiza a cada 5 minutos automaticamente
  setInterval(() => {
    if (USUARIO_ATUAL) _atualizarPainelAlertas();
  }, 5 * 60 * 1000);
});

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ===== TEMA CLARO / ESCURO =====
function alternarTema() {
  const dark = document.body.classList.toggle('dark');
  localStorage.setItem('gestor-tema', dark ? 'dark' : 'light');
  _atualizarIconeTema(dark);
}

function _atualizarIconeTema(dark) {
  const icon     = document.getElementById('tema-icon');
  const iconDrop = document.getElementById('tema-icon-drop');
  const label    = dark ? '☀ Modo claro' : '🌙 Modo escuro';
  if (icon)     icon.textContent     = dark ? '☀️' : '🌙';
  if (iconDrop) iconDrop.textContent = dark ? '☀️' : '🌙';
  const btnDrop = iconDrop?.closest('button');
  if (btnDrop) {
    btnDrop.innerHTML = `<span id="tema-icon-drop">${dark ? '☀️' : '🌙'}</span> ${dark ? 'Modo claro' : 'Modo escuro'}`;
  }
}

(function aplicarTemaInicial() {
  const salvo = localStorage.getItem('gestor-tema');
  if (salvo === 'dark') {
    document.body.classList.add('dark');
    document.addEventListener('DOMContentLoaded', () => _atualizarIconeTema(true));
  }
})();

// ===== MENU DE PERFIL =====
function toggleMenuPerfil() {
  const dd = document.getElementById('perfil-dropdown');
  if (!dd) return;
  const aberto = dd.style.display === 'block';
  dd.style.display = aberto ? 'none' : 'block';
}

function fecharMenuPerfil() {
  const dd = document.getElementById('perfil-dropdown');
  if (dd) dd.style.display = 'none';
}

// Fecha dropdown ao clicar fora
document.addEventListener('click', e => {
  const perfil = document.getElementById('topbar-perfil');
  const dd     = document.getElementById('perfil-dropdown');
  if (dd && perfil && !perfil.contains(e.target) && !dd.contains(e.target)) {
    dd.style.display = 'none';
  }
});

function toast(msg, tipo='ok', duracao=3200) {
  let t = document.getElementById('gestor-toast');
  if (!t) { t = document.createElement('div'); t.id = 'gestor-toast'; document.body.appendChild(t); }
  t.className = 'toast toast-' + tipo + ' show';
  t.innerHTML = msg;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), duracao);
}

function toastAlerta(msg, tipo='erro') {
  let t = document.getElementById('gestor-toast-alerta');
  if (!t) {
    t = document.createElement('div');
    t.id = 'gestor-toast-alerta';
    t.className = 'toast-alerta';
    document.body.appendChild(t);
  }
  t.className = 'toast-alerta toast-alerta-' + tipo + ' show';
  t.innerHTML = `<span style="font-size:20px">${tipo==='erro'?'⛔':'⚠️'}</span><span>${msg}</span>`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 10000);
}

function toggleNotif() {
  let panel = document.getElementById('notif-panel');
  if (panel) { panel.remove(); return; }
  _atualizarPainelAlertas(); // recalcula antes de abrir
  const prazos  = _coletarTodosPrazos().filter(p => ['vencido','critico','urgente'].includes(p.nivel));
  const nNaoLidas = (GESTOR.notificacoes || []).filter(n => !n.lida && !n._tipoPrazo).length;
  const total   = prazos.length + nNaoLidas;
  panel = document.createElement('div');
  panel.id = 'notif-panel';
  panel.className = 'notif-panel';
  panel.innerHTML = `
    <div class="notif-panel-header">
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:16px">🔔</span> Alertas & Prazos
      </div>
      <span>${total} pendente${total !== 1 ? 's' : ''}</span>
    </div>
    ${_renderNotifDropdown()}
    <div class="notif-panel-footer" onclick="marcarTodasLidas()">Marcar todas como lidas</div>
  `;
  document.body.appendChild(panel);
}

function marcarTodasLidas() {
  GESTOR.notificacoes.forEach(n => n.lida = true);
  document.querySelector('.notif-dot')?.classList.add('hidden');
  toggleNotif();
  toast('✓ Todas as notificações foram marcadas como lidas');
}

function tratarIntimacao(btn, procNum, desc, dias) {
  GESTOR.tratarIntimacao(procNum, desc, dias);
  _salvarDados();
  const row = btn.closest('tr');
  if (row) { row.style.opacity = '0.5'; btn.textContent = '✓ Tratada'; btn.disabled = true; }
  toast(`✓ Intimação tratada!<br><small>→ Prazo criado na Agenda · Tarefa criada no Workflow</small>`);
}

function executarFollowup(btn, clienteId, tipo) {
  GESTOR.registrarAtendimento(clienteId);
  _salvarDados();
  const card = btn.closest('.followup-card');
  if (card) {
    card.style.transition = 'all .3s';
    card.style.opacity = '0';
    card.style.transform = 'translateX(40px)';
    setTimeout(() => { card.remove(); renderFollowupCount(); }, 320);
  }
  const msgs = {
    contato:'✓ Atendimento registrado!<br><small>→ CRM atualizado · Cliente reativado</small>',
    financeiro:'✓ Cobrança enviada!<br><small>→ Lançamento no Financeiro · Boleto gerado</small>',
    processo:'✓ Andamento solicitado!<br><small>→ Tarefa criada no Workflow</small>',
    lead:'✓ Lead reativado!<br><small>→ Movido para funil ativo no CRM</small>'
  };
  toast(msgs[tipo] || '✓ Follow-up concluído!');
}

// ============================================
// TELA DE PRAZOS — CONTROLE CENTRALIZADO
// ============================================

let _pzAbaAtiva = 'todos';

function renderTelaPrazos() {
  const todos   = _coletarTodosPrazos();
  const busca   = (document.getElementById('pz-busca')?.value || '').toLowerCase();
  const resp    = document.getElementById('pz-filtro-resp')?.value || '';

  // Popular select de responsáveis
  const respSelect = document.getElementById('pz-filtro-resp');
  if (respSelect && respSelect.options.length <= 1) {
    const resps = [...new Set(todos.map(p => p.responsavel).filter(r => r && r !== '—'))].sort();
    resps.forEach(r => {
      const opt = document.createElement('option');
      opt.value = r; opt.textContent = r;
      respSelect.appendChild(opt);
    });
  }

  // Filtrar por aba
  let lista = todos;
  if (_pzAbaAtiva === 'vencidos') lista = todos.filter(p => p.nivel === 'vencido');
  if (_pzAbaAtiva === 'criticos') lista = todos.filter(p => ['vencido','critico','urgente'].includes(p.nivel));
  if (_pzAbaAtiva === 'judicial') lista = todos.filter(p => p.fonte === 'Judicial');
  if (_pzAbaAtiva === 'inss')     lista = todos.filter(p => p.fonte === 'GERID/INSS');

  // Filtrar por responsável
  if (resp) lista = lista.filter(p => p.responsavel === resp);
  // Filtrar por busca
  if (busca) lista = lista.filter(p =>
    p.titulo.toLowerCase().includes(busca) ||
    p.cliente.toLowerCase().includes(busca) ||
    (p.responsavel || '').toLowerCase().includes(busca)
  );

  // Atualizar subtítulo
  const sub = document.getElementById('prazos-subtitulo');
  if (sub) {
    const v = todos.filter(p=>p.nivel==='vencido').length;
    const c = todos.filter(p=>p.nivel==='critico').length;
    const u = todos.filter(p=>p.nivel==='urgente').length;
    sub.textContent = `${todos.length} prazos monitorados · ${v} vencidos · ${c} críticos · ${u} urgentes`;
  }

  // Contadores
  const contEl = document.getElementById('pz-contadores');
  if (contEl) {
    const grupos = [
      { nivel:'vencido', label:'Vencidos',    count: todos.filter(p=>p.nivel==='vencido').length },
      { nivel:'critico', label:'Críticos',    count: todos.filter(p=>p.nivel==='critico').length },
      { nivel:'urgente', label:'Urgentes',    count: todos.filter(p=>p.nivel==='urgente').length },
      { nivel:'atencao', label:'Atenção',     count: todos.filter(p=>p.nivel==='atencao').length },
      { nivel:'normal',  label:'Monitorando', count: todos.filter(p=>p.nivel==='normal').length },
    ];
    contEl.innerHTML = grupos.map(g => {
      const niv = PRAZO_NIVEIS[g.nivel];
      return `<div class="pz-contador" style="background:${niv.bg};border:1px solid ${niv.borda};color:${niv.cor}" onclick="trocarAbaPrazos('${g.nivel === 'vencido' ? 'vencidos' : g.nivel === 'critico' || g.nivel === 'urgente' ? 'criticos' : 'todos'}', document.getElementById('pz-tab-${g.nivel === 'vencido' ? 'vencidos' : g.nivel === 'critico' || g.nivel === 'urgente' ? 'criticos' : 'todos'}'))">
        <span style="font-size:18px;font-weight:800">${g.count}</span>
        <span style="font-size:11px;font-weight:700">${niv.icone} ${g.label}</span>
      </div>`;
    }).join('');
  }

  // Renderizar lista
  const wrap = document.getElementById('pz-lista-wrap');
  if (!wrap) return;

  if (!lista.length) {
    wrap.innerHTML = `<div style="padding:40px;text-align:center;color:var(--text-muted)">
      <div style="font-size:36px;margin-bottom:8px">✅</div>
      <div style="font-weight:700;color:var(--text-primary)">Nenhum prazo encontrado</div>
      <div style="font-size:13px;margin-top:4px">Tente outro filtro ou busca</div>
    </div>`;
    return;
  }

  // Agrupar por nível para exibição em seções
  const secoes = [
    { key:'vencido', label:'💀 Vencidos',         prazos: lista.filter(p=>p.nivel==='vencido') },
    { key:'critico', label:'🚨 Críticos (≤2 dias)', prazos: lista.filter(p=>p.nivel==='critico') },
    { key:'urgente', label:'⚠️ Urgentes (≤5 dias)', prazos: lista.filter(p=>p.nivel==='urgente') },
    { key:'atencao', label:'📌 Atenção (≤10 dias)', prazos: lista.filter(p=>p.nivel==='atencao') },
    { key:'normal',  label:'✓ Monitorando',         prazos: lista.filter(p=>p.nivel==='normal') },
  ].filter(s => s.prazos.length);

  wrap.innerHTML = secoes.map(sec => {
    const niv = PRAZO_NIVEIS[sec.key];
    return `
      <div style="margin-bottom:20px">
        <div class="pz-secao-header" style="color:${niv.cor};border-bottom:2px solid ${niv.borda}">
          ${sec.label}
          <span style="font-size:11px;font-weight:600;background:${niv.bg};padding:2px 8px;border-radius:20px;border:1px solid ${niv.borda}">${sec.prazos.length}</span>
        </div>
        <div class="pz-cards">
          ${sec.prazos.map(p => _renderCardPrazo(p, niv)).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function _renderCardPrazo(p, niv) {
  const di = p.diasInterno ?? p.dias;
  const internLabel = di < 0  ? `Prazo interno vencido há ${Math.abs(di)} dia${Math.abs(di)>1?'s':''}`
                    : di === 0 ? 'Prazo interno: HOJE'
                    : di === 1 ? 'Prazo interno: AMANHÃ'
                    : `Prazo interno: ${di} dias`;
  const realLabel = p.dias < 0  ? `(real: vencido há ${Math.abs(p.dias)}d)`
                  : p.dias === 0 ? '(real: hoje)'
                  : `(real: ${p.dias} dias — ${p.margem ?? 0}d de folga)`;
  const dataFmt     = p.data ? new Date(p.data + 'T12:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'}) : '—';
  const fonteIcon   = p.fonte === 'GERID/INSS' ? '🏛' : p.fonte === 'IA Estratégica' ? '✦' : '⚖️';
  return `
    <div class="pz-card" style="border-left:4px solid ${niv.cor}">
      <div class="pz-card-topo">
        <div class="pz-card-fonte" style="background:${niv.bg};color:${niv.cor};border:1px solid ${niv.borda}">${fonteIcon} ${esc(p.fonte)}</div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px">
          <div class="pz-card-dias" style="color:${niv.cor}">${internLabel}</div>
          <div style="font-size:11px;color:var(--text-muted)">${realLabel} · 📅 fatal: ${dataFmt}</div>
        </div>
      </div>
      <div class="pz-card-titulo">${esc(p.titulo)}</div>
      <div class="pz-card-meta">
        <span title="Cliente">👤 ${esc(p.cliente)}</span>
        <span title="Responsável">⚖️ ${esc(p.responsavel)}</span>
      </div>
      <div class="pz-card-acoes">
        ${p.fonte !== 'GERID/INSS'
          ? `<button class="btn-sm" onclick="gerarPecaDoPrazo(this)">✦ Gerar Peça</button>`
          : `<button class="btn-sm" onclick="navegarPara('gerid')">🏛 Ver GERID</button>`
        }
        <button class="btn-sm" onclick="navegarPara('agenda')">📅 Ver na Agenda</button>
        ${p.dias < 0 ? `<button class="btn-sm" style="color:#dc2626;border-color:#dc2626" onclick="marcarPrazoResolvido('${p.id}', this)">✓ Marcar resolvido</button>` : ''}
      </div>
    </div>
  `;
}

function trocarAbaPrazos(aba, btn) {
  _pzAbaAtiva = aba;
  document.querySelectorAll('#page-prazos .kb-tab').forEach(b => b.classList.remove('active'));
  btn?.classList.add('active');
  renderTelaPrazos();
}

function toggleCalculadora() {
  const w = document.getElementById('prazos-calculadora-wrap');
  if (w) w.style.display = w.style.display === 'none' ? '' : 'none';
}

// ── Configuração de Margens de Segurança ──────────────────────────────────
function abrirConfigMargens() {
  // Apenas admin ou usuários com permissão de editar prazos internos
  if (!temPermissao('prazos_internos', 'editar')) {
    toast('🔒 Acesso restrito — apenas o administrador ou usuários autorizados podem configurar margens de prazo.', 'warn');
    return;
  }
  document.getElementById('modal-margens')?.remove();

  const linhas = window.PRAZO_MARGENS.map(m => `
    <tr style="border-bottom:1px solid var(--border)">
      <td style="padding:10px 8px;font-size:13px;font-weight:600;color:var(--text-primary)">${esc(m.label)}</td>
      <td style="padding:10px 8px;text-align:center">
        <div style="display:flex;align-items:center;justify-content:center;gap:8px">
          <button onclick="alterarMargem('${m.id}',-1)" style="width:28px;height:28px;border-radius:50%;border:1px solid var(--border);background:#f8fafc;cursor:pointer;font-weight:700;font-size:16px;line-height:1">−</button>
          <span id="marg-val-${m.id}" style="font-size:18px;font-weight:800;color:var(--gold);min-width:28px;text-align:center">${m.diasMargem}</span>
          <button onclick="alterarMargem('${m.id}',+1)" style="width:28px;height:28px;border-radius:50%;border:1px solid var(--border);background:#f8fafc;cursor:pointer;font-weight:700;font-size:16px;line-height:1">+</button>
          <span style="font-size:12px;color:var(--text-muted)">dias antes</span>
        </div>
      </td>
    </tr>
  `).join('');

  const ov = document.createElement('div');
  ov.id = 'modal-margens';
  ov.className = 'modal-overlay';
  ov.innerHTML = `
    <div class="modal-box" style="max-width:560px;max-height:90vh;overflow-y:auto">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px">
        <div>
          <h2 style="font-size:18px;font-weight:800;margin:0 0 4px">⚙ Margens de Segurança</h2>
          <p style="font-size:13px;color:var(--text-muted);margin:0">Define quantos dias antes do prazo real o sistema deve alertar internamente.</p>
        </div>
        <button class="modal-close" onclick="document.getElementById('modal-margens').remove()">✕</button>
      </div>
      <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:12px 14px;margin-bottom:18px;font-size:13px;color:#92400e">
        <strong>💡 Como funciona:</strong> Prazo real 15d com margem 5d → <strong>prazo interno: 10d</strong>.
        Alertas, criticidade e notificações automáticas disparam no prazo interno.
        O prazo judicial real nunca é alterado.
      </div>
      <table style="width:100%;border-collapse:collapse">
        <thead>
          <tr style="border-bottom:2px solid var(--border)">
            <th style="padding:8px;text-align:left;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase">Tipo de Prazo</th>
            <th style="padding:8px;text-align:center;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase">Margem de Segurança</th>
          </tr>
        </thead>
        <tbody>${linhas}</tbody>
      </table>
      <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:20px">
        <button class="btn-secondary" onclick="document.getElementById('modal-margens').remove()">Cancelar</button>
        <button class="btn-primary" onclick="salvarConfigMargens()">✅ Salvar Configuração</button>
      </div>
    </div>
  `;
  document.body.appendChild(ov);
}

function alterarMargem(id, delta) {
  const m = window.PRAZO_MARGENS.find(x => x.id === id);
  if (!m) return;
  m.diasMargem = Math.max(0, Math.min(30, m.diasMargem + delta));
  const el = document.getElementById('marg-val-' + id);
  if (el) el.textContent = m.diasMargem;
}

function salvarConfigMargens() {
  document.getElementById('modal-margens')?.remove();
  toast('✅ Margens salvas — prazos internos recalculados.', 'success');
  if (document.getElementById('page-prazos')?.classList.contains('active')) renderTelaPrazos();
}

function calcularPrazoFatal() {
  const dataPub  = document.getElementById('calc-data-pub')?.value;
  const tipoVal  = document.getElementById('calc-tipo')?.value || '15u';
  if (!dataPub) { toast('Informe a data de publicação.','warn'); return; }

  const feriados2026 = [
    '2026-01-01','2026-04-03','2026-04-21','2026-05-01',
    '2026-09-07','2026-10-12','2026-11-02','2026-11-15','2026-12-25',
  ];
  const isUtil = d => {
    const ds = d.toISOString().slice(0,10);
    const dw = d.getDay();
    return dw !== 0 && dw !== 6 && !feriados2026.includes(ds);
  };

  const match   = tipoVal.match(/^(\d+)([uc])$/);
  const qtd     = match ? parseInt(match[1]) : 15;
  const util    = match ? match[2] === 'u' : true;
  let   base    = new Date(dataPub + 'T12:00:00');
  // Prazos judiciais contam a partir do dia seguinte
  base.setDate(base.getDate() + 1);

  let   contados = 0;
  let   d        = new Date(base);
  if (util) {
    let guard = 0;
    while (contados < qtd && guard < 500) {
      if (isUtil(d)) contados++;
      if (contados < qtd) d.setDate(d.getDate() + 1);
      guard++;
    }
    // Se o último dia não for útil, avança
    guard = 0;
    while (!isUtil(d) && guard < 30) { d.setDate(d.getDate() + 1); guard++; }
  } else {
    d.setDate(d.getDate() + qtd - 1);
    // Se cair em fim de semana, avança para segunda
    while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  }

  const fmtLong = d.toLocaleDateString('pt-BR',{day:'numeric',month:'long',year:'numeric'});
  const diasFaltam = Math.round((d - new Date()) / 86400000);
  const ferConc = feriados2026.filter(f => {
    const fd = new Date(f+'T12:00:00');
    return fd >= new Date(dataPub+'T12:00:00') && fd <= d;
  });

  const resEl   = document.getElementById('calc-resultado');
  const dataEl  = document.getElementById('calc-data-resultado');
  const obsEl   = document.getElementById('calc-obs-resultado');
  if (resEl) resEl.style.display = '';
  if (dataEl) dataEl.textContent = fmtLong;
  if (obsEl) {
    const fStr = ferConc.length ? `Feriados: ${ferConc.map(f=>new Date(f+'T12:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'short'})).join(', ')} excluídos · ` : '';
    obsEl.textContent = `${fStr}${diasFaltam > 0 ? diasFaltam + ' dias restantes' : diasFaltam === 0 ? 'VENCE HOJE' : 'Prazo vencido há ' + Math.abs(diasFaltam) + ' dias'}`;
  }

  // Calcular e exibir prazo interno (com margem de segurança)
  const tipoSel = document.getElementById('calc-tipo-prazo-interno')?.value || 'prazo_geral';
  const margem  = _margemParaTipo(tipoSel);
  const dInterno = new Date(d);
  dInterno.setDate(dInterno.getDate() - margem);
  const diasInternoFaltam = Math.round((dInterno - new Date()) / 86400000);
  const fmtInterno = dInterno.toLocaleDateString('pt-BR', {day:'numeric', month:'long', year:'numeric'});
  const dataInterna = document.getElementById('calc-data-interna');
  const obsInterna  = document.getElementById('calc-obs-interna');
  if (dataInterna) dataInterna.textContent = fmtInterno;
  if (obsInterna) {
    const statusInterno = diasInternoFaltam > 0
      ? `${diasInternoFaltam} dias restantes · ${margem} dia(s) de folga antes do prazo real`
      : diasInternoFaltam === 0 ? `PRAZO INTERNO HOJE · ${margem}d de folga`
      : `Prazo interno vencido há ${Math.abs(diasInternoFaltam)} dia(s)`;
    obsInterna.textContent = statusInterno;
  }
}

function abrirModalNovoPrazo() {
  toast('Em breve — cadastro de prazo manual com vinculação ao processo.');
}

function marcarPrazoResolvido(id, btn) {
  btn.textContent = '✓ Resolvido';
  btn.style.color = '#059669';
  btn.style.borderColor = '#059669';
  btn.disabled = true;
  toast('✓ Prazo marcado como resolvido.');
}

function gerarPecaDoPrazo(btn) {
  toast('✦ Abrindo gerador de peças com IA...');
  setTimeout(() => showPage('peticoes'), 600);
}

function entrarMeet(url) {
  toast('📹 Abrindo Google Meet...<br><small>'+ (url||'meet.google.com') +'</small>');
}

function criarMeet(btn) {
  btn.textContent = '📹 Gerando link do Meet...';
  setTimeout(() => {
    btn.textContent = '✓ Reunião criada! Link do Meet gerado';
    btn.style.background = '#059669';
    toast('✓ Reunião criada na Agenda!<br><small>→ Sincronizado com Google Agenda · Link Meet enviado</small>');
    setTimeout(() => { btn.textContent='📹 Criar reunião com Google Meet'; btn.style.background=''; }, 2800);
  }, 1200);
}

function conectarGoogle(btn) {
  btn.textContent = '🔄 Conectando...';
  setTimeout(() => {
    btn.textContent = '✓ Google Agenda conectado';
    btn.style.background = '#059669'; btn.style.color = 'white'; btn.style.borderColor='#059669';
    toast('✓ Google Agenda sincronizado!<br><small>→ Eventos importados · Sincronização automática ativa</small>');
  }, 1400);
}

function renderFollowups() {
  const cont = document.getElementById('followups-container');
  if (!cont) return;
  const fps = GESTOR.followups;
  if (fps.length === 0) {
    cont.innerHTML = '<div class="empty-state">✓ Tudo em dia! Nenhum follow-up pendente.</div>';
    return;
  }
  cont.innerHTML = fps.map(f => `
    <div class="followup-card prioridade-${f.prioridade}">
      <div class="followup-icon">${f.icon}</div>
      <div class="followup-body">
        <div class="followup-title">${f.titulo}</div>
        <div class="followup-alvo">${f.alvo}</div>
      </div>
      <div class="followup-side">
        <span class="prioridade-tag ${f.prioridade}">${f.prioridade==='alta'?'Alta':'Média'}</span>
        <button class="btn-sm" onclick="executarFollowup(this,'${f.alvoId}','${f.tipo}')">${f.acao}</button>
      </div>
    </div>
  `).join('');
}

function renderFollowupCount() {
  const restantes = document.querySelectorAll('.followup-card').length;
  const badge = document.getElementById('followup-badge');
  if (badge) badge.textContent = restantes;
  const sub = document.getElementById('followup-sub');
  if (sub) sub.textContent = restantes + ' follow-ups pendentes · disparados automaticamente pelo sistema';
}

// ============================================
// CALENDÁRIO CENTRAL ORQUESTRADO
// ============================================

const TIPO_EVENTO = {
  audiencia:      { tag:'⚖ Audiência',        cls:'meet',       origem_icon:'⚖' },
  prazo:          { tag:'⏱ Prazo',             cls:'prazo',      origem_icon:'⏱' },
  andamento:      { tag:'📋 Andamento',        cls:'andamento',  origem_icon:'📋' },
  intimacao:      { tag:'📨 Intimação',        cls:'intimacao',  origem_icon:'📨' },
  inss_exigencia: { tag:'🏛 Exigência INSS',  cls:'inss-exig',  origem_icon:'🏛' },
  inss_decisao:   { tag:'🏛 Decisão INSS',    cls:'inss-dec',   origem_icon:'🏛' },
  inss_recurso:   { tag:'🏛 Recurso INSS',    cls:'inss-rec',   origem_icon:'🏛' },
  inss_pericia:   { tag:'🏛 Perícia INSS',    cls:'inss-per',   origem_icon:'🏛' },
  reuniao:        { tag:'📍 Reunião',          cls:'presencial', origem_icon:'📍' },
  interno:        { tag:'🏢 Interno',          cls:'interno',    origem_icon:'🏢' },
};

const ORIGEM_LABEL = {
  tribunal: '⚖ Tribunal',
  inss:     '🏛 INSS/GERID',
  google:   '📅 Google Agenda',
  sistema:  '🤖 Sistema',
  interno:  '🏢 Interno',
};

let agendaFiltroAtivo = 'todos';
let agendaDataAtiva   = new Date().toISOString().slice(0,10);

function renderAgendaEventos(data, filtro) {
  if (data)   agendaDataAtiva   = data;
  if (filtro) agendaFiltroAtivo = filtro;

  // Renderiza filtros
  renderAgendaFiltros();

  const cont = document.getElementById('agenda-timeline');
  if (!cont) return;

  let eventos = GESTOR.eventos
    .filter(e => e.data === agendaDataAtiva)
    .sort((a,b) => a.hora.localeCompare(b.hora));

  if (agendaFiltroAtivo !== 'todos') {
    const grupos = {
      judicial: ['audiencia','prazo','andamento','intimacao'],
      inss:     ['inss_exigencia','inss_decisao','inss_recurso','inss_pericia'],
      reuniao:  ['reuniao','interno'],
    };
    eventos = eventos.filter(e => (grupos[agendaFiltroAtivo] || []).includes(e.tipo));
  }

  // Atualiza título da data
  const tituloEl = document.querySelector('#page-agenda .card-header .card-title');
  if (tituloEl) {
    const d = new Date(agendaDataAtiva + 'T12:00:00');
    tituloEl.textContent = d.toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long'});
  }

  if (!eventos.length) {
    cont.innerHTML = '<div class="empty-state" style="padding:24px">Nenhum evento nesta data.</div>';
    return;
  }

  cont.innerHTML = eventos.map(e => {
    const t = TIPO_EVENTO[e.tipo] || { tag:e.tipo, cls:'interno' };
    const origemLabel = ORIGEM_LABEL[e.origem] || e.origem;

    let extra = '';
    if (e.meet && e.meetUrl) {
      extra = `<div class="timeline-meet-link">
        <span class="meet-url">${esc(e.meetUrl)}</span>
        <a href="#" class="btn-meet" onclick="entrarMeet('${esc(e.meetUrl)}');return false">Entrar agora</a>
      </div>`;
    }
    if (e.local) {
      extra += `<div class="timeline-extra">📍 ${esc(e.local)}</div>`;
    }
    if (e.nb) {
      extra += `<div class="timeline-extra">🏛 NB: ${esc(e.nb)}${e.protocolo ? ` · Protocolo: ${esc(e.protocolo)}` : ''}</div>`;
    }
    if (e.prazoResposta) {
      extra += `<div class="timeline-extra critico-text">⚠ Responder até: ${esc(e.prazoResposta)}</div>`;
    }
    if (e.tribunal) {
      extra += `<div class="timeline-extra">⚖ ${esc(e.tribunal)}</div>`;
    }

    const clienteInfo = e.cliente ? `${esc(e.cliente)} · ` : '';

    return `<div class="timeline-item">
      <div class="timeline-time">${esc(e.hora)}</div>
      <div class="timeline-card tipo-${t.cls} ${e.critico ? 'critico' : ''}">
        <div class="timeline-tag-row">
          <span class="timeline-tag tag-${t.cls}">${t.tag}</span>
          <span class="timeline-origem">${origemLabel}</span>
        </div>
        <div class="timeline-title">${esc(e.titulo)}</div>
        <div class="timeline-meta">${clienteInfo}${esc(e.responsavel)}</div>
        ${extra}
      </div>
    </div>`;
  }).join('');
}

function renderAgendaFiltros() {
  const el = document.getElementById('agenda-filtros');
  if (!el) return;

  const hoje = new Date().toISOString().slice(0,10);
  const counts = {
    todos:    GESTOR.eventos.filter(e => e.data === agendaDataAtiva).length,
    judicial: GESTOR.eventos.filter(e => e.data === agendaDataAtiva && ['audiencia','prazo','andamento','intimacao'].includes(e.tipo)).length,
    inss:     GESTOR.eventos.filter(e => e.data === agendaDataAtiva && e.tipo.startsWith('inss')).length,
    reuniao:  GESTOR.eventos.filter(e => e.data === agendaDataAtiva && ['reuniao','interno'].includes(e.tipo)).length,
  };

  el.innerHTML = [
    { id:'todos',    label:'Todos',      icon:'⊞' },
    { id:'judicial', label:'Judicial',   icon:'⚖' },
    { id:'inss',     label:'INSS Admin', icon:'🏛' },
    { id:'reuniao',  label:'Reuniões',   icon:'📍' },
  ].map(f => `
    <button class="agenda-filtro-btn ${agendaFiltroAtivo === f.id ? 'ativo' : ''}"
      onclick="renderAgendaEventos(null,'${f.id}')">
      ${f.icon} ${f.label}
      <span class="agenda-filtro-count">${counts[f.id]}</span>
    </button>
  `).join('');
}

// Gerador de alertas unificado para o Dashboard
function gerarAlertasDashboard() {
  const hoje = new Date().toISOString().slice(0,10);
  const eventosHoje = GESTOR.eventos.filter(e => e.data === hoje);
  const alertas = [];

  // Prazos fatais hoje
  eventosHoje.filter(e => e.tipo === 'prazo' && e.critico).forEach(e => {
    alertas.push({ nivel:'danger', icon:'⏱', texto:`<strong>Prazo fatal hoje</strong> — ${e.titulo.replace('PRAZO FATAL: ','')}`, acao:'Ver', modulo:'prazos' });
  });

  // Audiências hoje
  eventosHoje.filter(e => e.tipo === 'audiencia').forEach(e => {
    alertas.push({ nivel:'meet', icon:'📹', texto:`<strong>Audiência hoje</strong> — ${esc(e.titulo || '')}`, acao: e.meet ? 'Entrar no Meet' : 'Ver agenda', modulo:'agenda', meet: e.meetUrl || null });
  });

  // Exigências INSS críticas
  eventosHoje.filter(e => e.tipo === 'inss_exigencia').forEach(e => {
    alertas.push({ nivel:'inss', icon:'🏛', texto:`<strong>Exigência INSS</strong> — ${e.titulo}`, acao:'Ver GERID', modulo:'gerid' });
  });

  // Intimações novas
  const intim = eventosHoje.filter(e => e.tipo === 'intimacao').length;
  if (intim) alertas.push({ nivel:'warning', icon:'📨', texto:`<strong>${intim} intimação(ões) hoje</strong> — aguardando triagem`, acao:'Ver', modulo:'intimacoes' });

  return alertas;
}

function renderAlertasDashboard() {
  const barra = document.querySelector('.alert-bar');
  if (!barra) return;
  const alertas = gerarAlertasDashboard();
  barra.innerHTML = alertas.map(a => `
    <div class="alert-item alert-${a.nivel}">
      <span class="alert-icon">${a.icon}</span>
      <div class="alert-text">${a.texto}</div>
      <a href="#" onclick="showPage('${a.modulo}');return false" class="alert-action ${a.nivel === 'meet' ? 'meet' : ''}">${a.acao}</a>
    </div>
  `).join('') || '<div class="alert-item"><span class="alert-icon">✓</span><div class="alert-text">Nenhum alerta crítico hoje.</div></div>';
}

// Notificações unificadas
function gerarNotificacoesCompletas() {
  GESTOR.notificacoes = [
    { id:'N1', tipo:'prazo',    critico:true,  texto:'Prazo fatal HOJE: Recurso Silva vs Banco Itaú',                    tempo:'há 2h',  lida:false, modulo:'prazos'    },
    { id:'N2', tipo:'meet',     critico:false, texto:'Audiência virtual em 25 min — Costa vs INSS',                      tempo:'há 5min',lida:false, modulo:'agenda'    },
    { id:'N3', tipo:'intimacao',critico:false, texto:'Intimação: Audiência designada — Maria Costa (TRT15)',              tempo:'há 1h',  lida:false, modulo:'intimacoes'},
    { id:'N4', tipo:'inss',     critico:true,  texto:'Exigência INSS: documentos pendentes — Maria Costa (NB: 182.440)', tempo:'há 3h',  lida:false, modulo:'integracoes' },
    { id:'N5', tipo:'inss',     critico:false, texto:'Decisão INSS: BPC deferido — Carlos Rodrigues',                    tempo:'há 1d',  lida:false, modulo:'integracoes' },
    { id:'N6', tipo:'andamento',critico:false, texto:'Andamento capturado: Sentença — Ferreira (TRF3)',                   tempo:'há 2d',  lida:true,  modulo:'andamentos'},
    { id:'N7', tipo:'followup', critico:false, texto:'4 follow-ups inteligentes pendentes',                               tempo:'há 4h',  lida:true,  modulo:'dashboard' },
  ];
}

// ---------- ANDAMENTOS & IA ----------
const STATUS_INFO = {
  capturado:{label:'Capturado',cls:'cap',proximo:'analisando',acao:'▶ Iniciar análise IA'},
  analisando:{label:'IA Analisando',cls:'ana',proximo:'revisao',acao:'Ver análise da IA'},
  revisao:{label:'Aguardando revisão',cls:'rev',proximo:'aprovado',acao:''},
  aprovado:{label:'Aprovado',cls:'apr',proximo:'protocolado',acao:'📤 Protocolar'},
  protocolado:{label:'Protocolado',cls:'pro',proximo:null,acao:''}
};

function renderAndamentos() {
  const cont = document.getElementById('andamentos-container');
  if (!cont) return;
  cont.innerHTML = GESTOR.andamentos.map(a => {
    const si = STATUS_INFO[a.status];
    const urg = a.iaAnalise.urgencia;
    return `<div class="andamento-card" id="and-${a.id}">
      <div class="andamento-head">
        <div class="andamento-head-left">
          <span class="status-pill ${si.cls}">${si.label}</span>
          <span class="and-proc">${a.procNum}</span>
          <span class="area-tag ${a.area}">${a.area==='prev'?'Previdenciário':a.area==='trab'?'Trabalhista':a.area==='civel'?'Cível':'Tributário'}</span>
        </div>
        <span class="and-captura">📡 Capturado ${a.capturadoEm} · ${a.tribunal}</span>
      </div>

      <div class="andamento-teor">
        <span class="teor-label">Teor do andamento:</span>
        <p>${a.teor}</p>
      </div>

      ${a.status==='capturado' ? `
        <div class="ia-pending">
          <span>🤖 Andamento capturado. A IA ainda não analisou.</span>
          <button class="btn-primary" onclick="analisarIA('${a.id}')">▶ Iniciar análise com IA</button>
        </div>
      ` : `
        <div class="ia-box">
          <div class="ia-box-header">🤖 Análise da IA <span class="ia-conf">confiança 94%</span></div>
          <div class="ia-grid">
            <div class="ia-cell"><span class="ia-cell-label">Tipo</span><span class="ia-cell-val">${a.iaAnalise.tipo}</span></div>
            <div class="ia-cell"><span class="ia-cell-label">Prazo</span><span class="ia-cell-val">${a.iaAnalise.prazo}</span></div>
            <div class="ia-cell"><span class="ia-cell-label">Prazo Fatal</span><span class="ia-cell-val ${urg==='alta'?'crit':''}">${a.iaAnalise.prazoFatal}</span></div>
            <div class="ia-cell"><span class="ia-cell-label">Recomendação</span><span class="ia-cell-val">${a.iaAnalise.recomendacao}</span></div>
          </div>
          <p class="ia-resumo">${a.iaAnalise.resumo}</p>
        </div>

        ${a.status==='protocolado' ? `
          <div class="protocolado-box">✓ Peça aprovada e protocolada no tribunal · Tarefa registrada no Workflow</div>
        ` : `
          <div class="pecas-banco">
            <div class="pecas-banco-title">📚 Banco de Petições — peças prontas com fundamentação real <span>(escolha uma para revisar)</span></div>
            ${a.pecasSugeridas.map(p => `
              <div class="peca-banco-card">
                <div class="peca-banco-head">
                  <div>
                    <span class="peca-banco-titulo">${p.titulo}</span>
                    <span class="match-badge">${p.match}% aderência</span>
                  </div>
                  <button class="btn-sm" onclick="togglePeca('${a.id}','${p.id}')">Ver peça</button>
                </div>
                <div class="peca-fundamentos">
                  ${p.fundamentos.map(f=>`<span class="fund-chip">${f}</span>`).join('')}
                </div>
                <div class="peca-preview" id="prev-${a.id}-${p.id}" style="display:none">
                  <div class="peca-juris">⚖ <strong>Jurisprudência:</strong> ${p.jurisprudencia}</div>
                  <pre class="peca-texto">${p.preview}</pre>
                  <div class="peca-actions">
                    <button class="btn-secondary" onclick="toast('✏️ Abrindo editor da peça...')">✏️ Editar peça</button>
                    <button class="btn-primary btn-aprovar" onclick="aprovarPeca('${a.id}','${p.id}','${p.titulo.replace(/'/g,'')}')">✓ Aprovar e Protocolar</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      `}
    </div>`;
  }).join('');
}

function buscarTribunais(btn) {
  btn.textContent = '🔄 Consultando tribunais...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✓ 3 andamentos capturados';
    toast('✓ Busca concluída!<br><small>→ 3 novos andamentos capturados de TJSP, TRT15 e TRF3</small>');
    setTimeout(() => { btn.textContent='🔄 Buscar andamentos nos tribunais'; btn.disabled=false; }, 2500);
  }, 1600);
}

function analisarIA(id) {
  const card = document.getElementById('and-'+id);
  if (card) {
    const pending = card.querySelector('.ia-pending');
    if (pending) pending.innerHTML = '<span>🤖 IA lendo e analisando o andamento...</span><div class="ia-loader"></div>';
  }
  setTimeout(() => {
    GESTOR.avancarAndamento(id, 'revisao');
    _salvarDados();
    renderAndamentos();
    toast('✓ IA concluiu a análise!<br><small>→ Tipo classificado · Prazo calculado · Peças sugeridas do banco</small>');
  }, 1800);
}

function togglePeca(andId, pecaId) {
  const el = document.getElementById('prev-'+andId+'-'+pecaId);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function aprovarPeca(andId, pecaId, titulo) {
  GESTOR.aprovarEProtocolar(andId, pecaId);
  _salvarDados();
  renderAndamentos();
  toast('✓ Peça aprovada e protocolada!<br><small>→ '+titulo+'<br>→ Andamento atualizado · Tarefa no Workflow · Evento na Agenda</small>');
}

// ============================================
// ============================================
// ============================================
// AGENTES DE IA
// ============================================

// Templates pré-configurados
const AGENTES_TEMPLATES = [
  {
    id: 'tpl_prazos',    nome: 'Vigia de Prazos',
    descricao: 'Monitora todos os processos e alerta quando um prazo está próximo de vencer. Envia notificação via WhatsApp ao responsável.',
    icone: '⏰', cor: '#dc2626',
    gatilho: 'agendado', gatilhoLabel: 'Diário às 08:00',
    integracoes: ['agenda','processos','whatsapp'],
    instrucoes: 'Verifique todos os processos com prazo nos próximos 3 dias. Para cada um, notifique o responsável via WhatsApp com o número do processo, a parte contrária e a data fatal.',
    acoes: ['Verificar prazos', 'Notificar responsável via WhatsApp', 'Criar evento na Agenda'],
  },
  {
    id: 'tpl_andamentos', nome: 'Monitor de Andamentos',
    descricao: 'Captura andamentos novos dos tribunais, analisa com IA e determina o próximo passo estratégico automaticamente.',
    icone: '🔎', cor: '#2563eb',
    gatilho: 'agendado', gatilhoLabel: 'A cada 6 horas',
    integracoes: ['processos','andamentos','estrategia'],
    instrucoes: 'Consulte andamentos novos. Para cada andamento capturado, classifique o tipo (decisão, despacho, intimação, sentença), calcule o prazo cabível e registre na estratégia IA.',
    acoes: ['Capturar andamentos', 'Classificar tipo', 'Calcular prazo', 'Atualizar estratégia IA'],
  },
  {
    id: 'tpl_peticao', nome: 'Gerador de Petições',
    descricao: 'Quando a IA Estratégica identifica uma peça necessária, este agente gera o rascunho automaticamente e envia para revisão do advogado.',
    icone: '✍️', cor: '#7c3aed',
    gatilho: 'evento', gatilhoLabel: 'Ao identificar peça necessária',
    integracoes: ['estrategia','peticoes','banco_pecas'],
    instrucoes: 'Ao ser acionado pela IA Estratégica, identifique o tipo de peça, busque o melhor modelo no banco, gere o rascunho e crie uma tarefa de revisão para o advogado responsável.',
    acoes: ['Receber sinal da IA Estratégica', 'Buscar modelo no banco', 'Gerar rascunho', 'Notificar advogado'],
  },
  {
    id: 'tpl_followup', nome: 'Follow-up Automático',
    descricao: 'Envia mensagens de follow-up para clientes com processos parados há mais de 30 dias, mantendo o relacionamento ativo.',
    icone: '🎯', cor: '#059669',
    gatilho: 'agendado', gatilhoLabel: 'Semanal (segunda-feira)',
    integracoes: ['clientes','processos','whatsapp'],
    instrucoes: 'Liste clientes com processos sem movimentação há 30+ dias. Redija uma mensagem personalizada com o nome do cliente e o status do processo. Envie via WhatsApp e registre no CRM.',
    acoes: ['Identificar processos parados', 'Redigir mensagem personalizada', 'Enviar via WhatsApp', 'Registrar no CRM'],
  },
  {
    id: 'tpl_relatorio', nome: 'Relatório Semanal',
    descricao: 'Gera automaticamente um relatório com o resumo da semana: processos movimentados, prazos cumpridos, audiências realizadas e pendências.',
    icone: '📊', cor: '#d97706',
    gatilho: 'agendado', gatilhoLabel: 'Sexta-feira às 17:00',
    integracoes: ['processos','agenda','financeiro','relatorios'],
    instrucoes: 'Compile todos os eventos da semana: audiências, prazos, novos processos, petições enviadas, recebimentos. Gere um relatório em formato resumido e envie ao sócio administrador.',
    acoes: ['Compilar dados da semana', 'Gerar relatório', 'Enviar para administrador'],
  },
  {
    id: 'tpl_novocliente', nome: 'Onboarding de Cliente',
    descricao: 'Quando um novo cliente é cadastrado, envia mensagem de boas-vindas, cria a pasta digital, agenda reunião inicial e configura follow-ups.',
    icone: '👤', cor: '#0ea5e9',
    gatilho: 'evento', gatilhoLabel: 'Ao cadastrar novo cliente',
    integracoes: ['clientes','agenda','whatsapp','kanban_adm'],
    instrucoes: 'Ao detectar novo cadastro, envie mensagem de boas-vindas personalizada via WhatsApp, crie pasta digital do cliente, crie tarefa de reunião inicial na agenda e adicione card no Kanban Administrativo.',
    acoes: ['Detectar novo cadastro', 'Enviar boas-vindas WhatsApp', 'Criar pasta digital', 'Agendar reunião inicial'],
  },
  {
    id: 'tpl_inss', nome: 'Monitor INSS/GERID',
    descricao: 'Monitora o status de requerimentos administrativos no INSS e GERID, notificando quando há mudança de status ou decisão.',
    icone: '🏛', cor: '#4b5563',
    gatilho: 'agendado', gatilhoLabel: 'Diário às 10:00 e 15:00',
    integracoes: ['gerid','processos','whatsapp','agenda'],
    instrucoes: 'Consulte o GERID para todos os requerimentos ativos. Quando houver mudança de status (deferido, indeferido, em exigência), notifique o advogado responsável e o cliente via WhatsApp.',
    acoes: ['Consultar GERID', 'Verificar mudanças de status', 'Notificar advogado', 'Notificar cliente'],
  },
  {
    id: 'tpl_audiencia', nome: 'Preparação de Audiência',
    descricao: 'Um dia antes de cada audiência, o agente envia ao advogado um briefing completo: partes, histórico, pontos chave e documentos necessários.',
    icone: '⚖️', cor: '#7c3aed',
    gatilho: 'evento', gatilhoLabel: '24h antes de audiências',
    integracoes: ['agenda','processos','banco_pecas'],
    instrucoes: 'Detecte audiências marcadas para amanhã. Para cada uma, compile: partes do processo, histórico de andamentos, última petição enviada, pontos de atenção e documentos do banco de peças. Envie briefing ao advogado.',
    acoes: ['Detectar audiências do dia seguinte', 'Compilar histórico do processo', 'Identificar documentos relevantes', 'Enviar briefing ao advogado'],
  },
];

// Dados dos agentes criados pelo usuário
if (!window.AGENTES_ATIVOS)    window.AGENTES_ATIVOS    = [];
if (!window.AGENTES_LOGS)      window.AGENTES_LOGS      = [];
if (!window.PECAS_REVISAO)     window.PECAS_REVISAO     = []; // peças aguardando supervisão do advogado

// Dados de consulta simulada aos tribunais por processo
const TRIBUNAL_DADOS = {
  'P1': { num:'0012345-67.2024.8.26.0100', tribunal:'TJSP', vara:'3ª Vara Cível', juiz:'Dr. Ricardo Alves',
           partes:['João Pedro Silva (Autor)','INSS (Réu)'],
           ultimoAndamento:'Sentença publicada em 27/06/2026 — Improcedente',
           prazoFatal:'18/07/2026', tipoAcao:'Aposentadoria por Tempo de Contribuição',
           documentos:['Petição Inicial','Contestação INSS','Audiência Instrução 15/05/2026','Sentença'] },
  'P2': { num:'0098765-43.2024.5.15.0001', tribunal:'TRT15', vara:'1ª Vara do Trabalho',juiz:'Dra. Carla Menezes',
           partes:['Maria Costa (Reclamante)','Empresa XYZ Ltda (Reclamada)'],
           ultimoAndamento:'Intimação para contestação — prazo 28/06/2026',
           prazoFatal:'28/06/2026', tipoAcao:'Reclamação Trabalhista',
           documentos:['Petição Inicial','Notificação','TRCT'] },
  'P3': { num:'0034521-89.2023.4.03.6100', tribunal:'TRF3', vara:'2ª Vara Federal',juiz:'Dr. Paulo Henrique',
           partes:['Empresa Ferreira Ltda (Autora)','União Federal (Ré)'],
           ultimoAndamento:'Sentença — julgado parcialmente procedente em 20/06/2026',
           prazoFatal:'30/06/2026', tipoAcao:'Tributário',
           documentos:['Petição Inicial','Contestação','Laudo Pericial','Sentença'] },
  'P5': { num:'0011122-33.2024.8.26.0001', tribunal:'TJSP', vara:'5ª Vara Cível',juiz:'Dra. Fernanda Lima',
           partes:['Grupo Empreendimentos SA (Apelante)','Costa Construtora Ltda (Apelada)'],
           ultimoAndamento:'Acórdão publicado em 15/06/2026 — Negado provimento',
           prazoFatal:'02/07/2026', tipoAcao:'Contratos',
           documentos:['Apelação','Contrarrazões Reclamada','Acórdão'] },
};

const INTEG_LABELS = {
  agenda:      { label:'Agenda',          icone:'📅', cor:'#2563eb' },
  processos:   { label:'Processos',       icone:'⚖️', cor:'#7c3aed' },
  whatsapp:    { label:'WhatsApp',        icone:'💬', cor:'#059669' },
  clientes:    { label:'Clientes & CRM',  icone:'👥', cor:'#0ea5e9' },
  peticoes:    { label:'Petições IA',     icone:'✍️', cor:'#d97706' },
  banco_pecas: { label:'Banco de Peças',  icone:'📂', cor:'#6366f1' },
  estrategia:  { label:'IA Estratégica',  icone:'✦',  cor:'#f59e0b' },
  andamentos:  { label:'Andamentos',      icone:'🔎', cor:'#3b82f6' },
  financeiro:  { label:'Financeiro',      icone:'💰', cor:'#10b981' },
  relatorios:  { label:'Relatórios',      icone:'📊', cor:'#8b5cf6' },
  gerid:       { label:'GERID/INSS',      icone:'🏛', cor:'#6b7280' },
  kanban_adm:  { label:'Kanban Adm.',     icone:'🏢', cor:'#f97316' },
};

function renderPaginaAgentes() {
  // Controle de acesso via sistema de permissões
  if (!temPermissao('agentes', 'ver')) {
    document.getElementById('page-agentes').innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:60vh;gap:12px;color:var(--text-muted)">
        <div style="font-size:48px">🔒</div>
        <div style="font-size:18px;font-weight:700;color:var(--text-primary)">Acesso restrito</div>
        <div style="font-size:14px">Apenas administradores e sócios podem gerenciar Agentes de IA.</div>
      </div>`;
    return;
  }
  _renderAgentesAtivos();
  _renderAgentesTemplates();
  _renderAgentesLogs();
  _atualizarBadgeAgentes();
}

function _renderAgentesAtivos() {
  const lista  = document.getElementById('agentes-lista');
  const vazio  = document.getElementById('agentes-vazio');
  if (!lista) return;
  if (!AGENTES_ATIVOS.length) {
    lista.style.display = 'none';
    if (vazio) vazio.style.display = '';
    return;
  }
  lista.style.display = '';
  if (vazio) vazio.style.display = 'none';
  lista.innerHTML = AGENTES_ATIVOS.map(ag => _renderCardAgente(ag)).join('');
}

function _renderCardAgente(ag) {
  const intTags = (ag.integracoes || []).map(k => {
    const i = INTEG_LABELS[k] || { label: k, icone:'🔗', cor:'#6b7280' };
    return `<span class="ag-integ-tag" style="background:${i.cor}18;color:${i.cor};border-color:${i.cor}40">${i.icone} ${i.label}</span>`;
  }).join('');
  const statusCor  = ag.ativo ? '#059669' : '#6b7280';
  const statusTxt  = ag.ativo ? 'Ativo' : 'Inativo';
  const ultimaExec = ag.ultimaExec ? `Última execução: ${ag.ultimaExec}` : 'Nunca executado';
  return `
    <div class="ag-card" style="border-top:3px solid ${ag.cor || '#6366f1'}">
      <div class="ag-card-topo">
        <div class="ag-card-icone" style="background:${ag.cor || '#6366f1'}18;color:${ag.cor || '#6366f1'}">${ag.icone || '🤖'}</div>
        <div style="flex:1">
          <div class="ag-card-nome">${esc(ag.nome)}</div>
          <div class="ag-card-gatilho">⚡ ${esc(ag.gatilhoLabel || ag.gatilho)}</div>
        </div>
        <div class="ag-status" style="background:${statusCor}18;color:${statusCor}">● ${statusTxt}</div>
      </div>
      <div style="display:inline-block;font-size:10px;font-weight:700;background:#fef3c7;color:#92400e;border:1px solid #f59e0b;border-radius:4px;padding:2px 8px;margin-bottom:6px;letter-spacing:.4px">⚠ SIMULAÇÃO — integrações reais não conectadas</div>
      <div class="ag-card-desc">${esc(ag.descricao)}</div>
      <div class="ag-integ-wrap">${intTags}</div>
      <div class="ag-card-footer">
        <span style="font-size:11px;color:var(--text-muted)">${ultimaExec}</span>
        <div style="display:flex;gap:6px">
          <button class="btn-sm" onclick="executarAgente('${ag.id}')">▶ Executar</button>
          <button class="btn-sm" onclick="editarAgente('${ag.id}')">✎ Editar</button>
          <button class="btn-sm" onclick="toggleAgenteAtivo('${ag.id}')">${ag.ativo ? '⏸ Pausar' : '▶ Ativar'}</button>
        </div>
      </div>
    </div>
  `;
}

function _renderAgentesTemplates() {
  const grid = document.getElementById('agentes-templates-grid');
  if (!grid) return;
  grid.innerHTML = AGENTES_TEMPLATES.map(t => {
    const jaInstalado = AGENTES_ATIVOS.some(a => a.tplId === t.id);
    const intTags = (t.integracoes || []).map(k => {
      const i = INTEG_LABELS[k] || { label:k, icone:'🔗', cor:'#6b7280' };
      return `<span class="ag-integ-tag" style="background:${i.cor}18;color:${i.cor};border-color:${i.cor}40">${i.icone} ${i.label}</span>`;
    }).join('');
    return `
      <div class="ag-card ag-card-template" style="border-top:3px solid ${t.cor}">
        <div class="ag-card-topo">
          <div class="ag-card-icone" style="background:${t.cor}18;color:${t.cor}">${t.icone}</div>
          <div style="flex:1">
            <div class="ag-card-nome">${esc(t.nome)}</div>
            <div class="ag-card-gatilho">⚡ ${esc(t.gatilhoLabel)}</div>
          </div>
          ${jaInstalado ? `<span class="ag-status" style="background:#05966918;color:#059669">● Instalado</span>` : ''}
        </div>
        <div class="ag-card-desc">${esc(t.descricao)}</div>
        <div class="ag-integ-wrap">${intTags}</div>
        <div class="ag-acoes-lista">
          ${(t.acoes||[]).map(a=>`<span class="ag-acao-item">→ ${esc(a)}</span>`).join('')}
        </div>
        <div class="ag-card-footer">
          ${jaInstalado
            ? `<button class="btn-secondary" style="flex:1" onclick="editarAgentePorTpl('${t.id}')">✎ Configurar</button>`
            : `<button class="btn-primary" style="flex:1" onclick="instalarTemplate('${t.id}')">⬇ Usar este template</button>`
          }
          <button class="btn-sm" onclick="verDetalheTemplate('${t.id}')">Detalhes</button>
        </div>
      </div>
    `;
  }).join('');
}

function _renderAgentesLogs() {
  const el = document.getElementById('agentes-logs-lista');
  if (!el) return;
  if (!AGENTES_LOGS.length) {
    el.innerHTML = `<div style="padding:32px;text-align:center;color:var(--text-muted)">Nenhuma execução registrada ainda.</div>`;
    return;
  }
  el.innerHTML = AGENTES_LOGS.slice().reverse().map(lg => {
    const corStatus = lg.status === 'sucesso' ? '#059669' : lg.status === 'erro' ? '#dc2626' : '#d97706';
    return `
      <div class="ag-log-row">
        <div class="ag-log-status" style="background:${corStatus}18;color:${corStatus}">${lg.status === 'sucesso' ? '✓' : lg.status === 'erro' ? '✕' : '⚠'}</div>
        <div style="flex:1">
          <div style="font-size:13px;font-weight:600;color:var(--text-primary)">${esc(lg.agNome)}</div>
          <div style="font-size:12px;color:var(--text-muted)">${esc(lg.descricao)}</div>
        </div>
        <div style="font-size:11px;color:var(--text-muted);white-space:nowrap">${esc(lg.dataHora)}</div>
      </div>
    `;
  }).join('');
}

function _atualizarBadgeAgentes() {
  const ativos = AGENTES_ATIVOS.filter(a => a.ativo).length;
  const badge  = document.getElementById('badge-agentes');
  if (badge) badge.textContent = ativos;
}

function trocarAbaAgentes(aba, btn) {
  document.querySelectorAll('#page-agentes .kb-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('ag-tab-ativos').style.display    = aba === 'ativos'    ? '' : 'none';
  document.getElementById('ag-tab-templates').style.display = aba === 'templates' ? '' : 'none';
  document.getElementById('ag-tab-logs').style.display      = aba === 'logs'      ? '' : 'none';
}

function instalarTemplate(tplId) {
  const t = AGENTES_TEMPLATES.find(x => x.id === tplId);
  if (!t) return;
  const ag = {
    id:          'ag_' + Date.now(),
    tplId,
    nome:        t.nome,
    descricao:   t.descricao,
    icone:       t.icone,
    cor:         t.cor,
    gatilho:     t.gatilho,
    gatilhoLabel:t.gatilhoLabel,
    integracoes: [...t.integracoes],
    instrucoes:  t.instrucoes,
    acoes:       [...t.acoes],
    ativo:       true,
    criadoPor:   nomeExibicao(USUARIO_ATUAL),
    criadoEm:    new Date().toLocaleDateString('pt-BR'),
    ultimaExec:  null,
  };
  AGENTES_ATIVOS.push(ag);
  _registrarLog(ag.id, ag.nome, 'sucesso', `Agente instalado a partir do template por ${nomeExibicao(USUARIO_ATUAL)}`);
  toast(`✓ Agente "${t.nome}" instalado e ativo!`, 'success');
  _renderAgentesTemplates();
  _atualizarBadgeAgentes();
  // Vai para aba de ativos
  trocarAbaAgentes('ativos', document.querySelector('#page-agentes .kb-tab'));
  _renderAgentesAtivos();
}

function executarAgente(id) {
  const ag = AGENTES_ATIVOS.find(x => x.id === id);
  if (!ag) return;
  // Agentes de petição têm fluxo especial com busca nos tribunais
  if (['tpl_peticao','tpl_andamentos'].includes(ag.tplId) || (ag.integracoes||[]).includes('peticoes')) {
    _executarAgenteComBuscaTribunal(ag);
  } else {
    const dataHora = new Date().toLocaleString('pt-BR');
    ag.ultimaExec  = dataHora;
    const resultados = _simularExecucaoAgente(ag);
    _registrarLog(id, ag.nome, 'sucesso', resultados);
    _renderAgentesAtivos();
    _abrirModalExecucao(ag, resultados, dataHora);
  }
}

function _executarAgenteComBuscaTribunal(ag) {
  // Escolhe um processo real do sistema para demonstração
  const procId  = Object.keys(TRIBUNAL_DADOS)[Math.floor(Math.random() * 2)]; // P1 ou P2
  const dados   = TRIBUNAL_DADOS[procId] || TRIBUNAL_DADOS['P1'];
  const proc    = (GESTOR.processos || []).find(p => p.id === procId) || { cliente: dados.partes[0].split(' (')[0] };
  const cliente = proc.cliente || dados.partes[0].split(' (')[0];

  const passos = [
    { icone:'🔗', label:'Conectando ao sistema do tribunal',       detalhe: dados.tribunal + ' — autenticação segura via certificado digital' },
    { icone:'📂', label:'Consultando dados do processo',           detalhe: dados.num + ' · ' + dados.vara },
    { icone:'📋', label:'Lendo andamentos e decisões',             detalhe: '"' + dados.ultimoAndamento + '"' },
    { icone:'📄', label:'Baixando documentos processuais',         detalhe: dados.documentos.join(' · ') },
    { icone:'✦',  label:'IA analisando estratégia processual',    detalhe: 'Cruzando jurisprudência · Identificando fundamentos · Selecionando modelo' },
    { icone:'✍️', label:'Elaborando rascunho da peça',             detalhe: 'Preenchendo qualificação · Fundamentação · Pedidos com base nos dados do processo' },
    { icone:'🔒', label:'Aguardando supervisão do advogado',       detalhe: 'Protocolo bloqueado até aprovação de ' + nomeExibicao(USUARIO_ATUAL) },
  ];

  // Modal de progresso
  const m = document.createElement('div');
  m.id = 'modal-execucao-tribunal';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box" style="max-width:560px">
      <div class="modal-header" style="background:#f5f3ff;border-bottom:2px solid #c4b5fd">
        <div>
          <div style="font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.5px">Agente em execução</div>
          <div style="font-size:16px;font-weight:800">${ag.icone} ${esc(ag.nome)}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:2px">Processo: <strong>${dados.num}</strong> · ${esc(cliente)}</div>
        </div>
        <div class="ag-status" style="background:#7c3aed18;color:#7c3aed">⚡ Executando</div>
      </div>
      <div style="padding:20px;display:flex;flex-direction:column;gap:6px" id="tribunal-passos">
        ${passos.map((p,i) => `
          <div class="tribunal-passo" id="tp-${i}" style="opacity:.3">
            <div class="tribunal-passo-icone">${p.icone}</div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:600;color:var(--text-primary)">${p.label}</div>
              <div style="font-size:11px;color:var(--text-muted)">${esc(p.detalhe)}</div>
            </div>
            <div class="tribunal-passo-status" id="tps-${i}">⏳</div>
          </div>
        `).join('')}
      </div>
      <div id="tribunal-footer" style="padding:0 20px 20px;display:none">
        <div style="background:#faf5ff;border:1.5px solid #c4b5fd;border-radius:10px;padding:14px 16px;display:flex;gap:12px;align-items:flex-start">
          <span style="font-size:22px">🔒</span>
          <div>
            <div style="font-weight:700;color:#7c3aed;font-size:13px">Supervisão obrigatória antes do protocolo</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;line-height:1.5">O rascunho foi gerado com dados reais do tribunal. <strong>${esc(nomeExibicao(USUARIO_ATUAL))}</strong> deve revisar, assinar e protocolar. Nenhuma peça é enviada ao tribunal sem aprovação expressa do advogado responsável.</div>
          </div>
        </div>
        <button class="btn-primary" style="width:100%;margin-top:12px;background:#7c3aed" id="btn-abrir-supervisao">✦ Revisar e Aprovar Peça →</button>
      </div>
    </div>
  `;
  document.body.appendChild(m);

  // Animar passos sequencialmente
  let i = 0;
  const delay = [600, 900, 700, 800, 1100, 1000, 500];
  function animarPasso() {
    if (i >= passos.length) {
      // Concluído — registrar
      const dataHora = new Date().toLocaleString('pt-BR');
      ag.ultimaExec  = dataHora;
      _registrarLog(ag.id, ag.nome, 'sucesso', `Dados consultados em ${dados.tribunal} · Rascunho gerado · Aguardando supervisão de ${nomeExibicao(USUARIO_ATUAL)}`);
      _renderAgentesAtivos();
      // Adicionar à fila de revisão
      const pecaRascunho = {
        id:       'PR_' + Date.now(),
        agId:     ag.id, agNome: ag.nome,
        procId, cliente, tribunal: dados.tribunal,
        num:      dados.num,
        tipo:     'Recurso de Apelação',
        geradoEm: dataHora,
        dadosTribunal: dados,
        status:   'aguardando_supervisao',
        advResp:  nomeExibicao(USUARIO_ATUAL),
      };
      PECAS_REVISAO.push(pecaRascunho);
      _atualizarBadgeRevisao();
      document.getElementById('tribunal-footer').style.display = '';
      document.getElementById('btn-abrir-supervisao').onclick = () => {
        m.remove();
        _abrirSupervisaoCompleta(pecaRascunho);
      };
      return;
    }
    const el    = document.getElementById('tp-' + i);
    const stEl  = document.getElementById('tps-' + i);
    if (el)   el.style.opacity   = '1';
    if (stEl) stEl.textContent   = '⟳';
    setTimeout(() => {
      if (stEl) stEl.textContent = i === passos.length - 1 ? '🔒' : '✅';
      i++;
      animarPasso();
    }, delay[i] || 700);
  }
  setTimeout(animarPasso, 300);
}

function _atualizarBadgeRevisao() {
  const pendentes = PECAS_REVISAO.filter(p => p.status === 'aguardando_supervisao').length;
  const badge     = document.getElementById('badge-revisao-pecas');
  if (badge) { badge.textContent = pendentes || ''; badge.style.display = pendentes ? '' : 'none'; }
  // Atualizar badge no menu de petições
  const bPeticoes = document.querySelector('[data-modulo="peticoes"] .badge');
  if (bPeticoes && pendentes > 0) bPeticoes.textContent = pendentes;
}

function _abrirSupervisaoCompleta(peca) {
  const dados = peca.dadosTribunal || {};
  const m = document.createElement('div');
  m.id = 'modal-supervisao-completa';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box" style="max-width:820px;width:95vw;padding:0;overflow:hidden;display:flex;flex-direction:column;max-height:92vh">

      <!-- Header com gate de protocolo -->
      <div class="modal-header" style="background:linear-gradient(135deg,#f5f3ff,#ede9fe);border-bottom:2px solid #c4b5fd">
        <div>
          <div style="font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.5px">✦ Supervisão Obrigatória do Advogado</div>
          <div style="font-size:17px;font-weight:800;color:var(--navy)">${esc(peca.tipo)} — ${esc(peca.cliente)}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${esc(peca.num)} · ${esc(peca.tribunal)} · Gerado por ${esc(peca.agNome)}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
          <div style="background:#fef3c7;color:#92400e;border:1px solid #fde68a;font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px">🔒 PROTOCOLO BLOQUEADO</div>
          <button class="modal-close" onclick="document.getElementById('modal-supervisao-completa').remove()">✕</button>
        </div>
      </div>

      <div style="flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:16px">

        <!-- Dados capturados do tribunal -->
        <div class="sup-secao">
          <div class="sup-secao-titulo">📡 Dados capturados em tempo real — ${esc(dados.tribunal||'Tribunal')}</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px">
            <div class="sup-dado"><span>Número</span><strong>${esc(dados.num||peca.num)}</strong></div>
            <div class="sup-dado"><span>Vara / Turma</span><strong>${esc(dados.vara||'—')}</strong></div>
            <div class="sup-dado"><span>Juiz(a)</span><strong>${esc(dados.juiz||'—')}</strong></div>
            <div class="sup-dado"><span>Tipo de Ação</span><strong>${esc(dados.tipoAcao||'—')}</strong></div>
            <div class="sup-dado" style="grid-column:1/-1"><span>Último Andamento</span><strong>${esc(dados.ultimoAndamento||'—')}</strong></div>
            <div class="sup-dado"><span>Prazo Fatal</span><strong style="color:#dc2626">${esc(dados.prazoFatal||'—')}</strong></div>
            <div class="sup-dado"><span>Partes</span><strong>${(dados.partes||[]).join(' / ')}</strong></div>
          </div>
          <div style="margin-top:10px">
            <div style="font-size:11px;font-weight:700;color:var(--text-muted);margin-bottom:6px">DOCUMENTOS CONSULTADOS</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px">
              ${(dados.documentos||[]).map(d=>`<span style="font-size:11px;background:var(--bg);border:1px solid var(--border);padding:3px 10px;border-radius:6px">${esc(d)}</span>`).join('')}
            </div>
          </div>
        </div>

        <!-- Rascunho gerado -->
        <div class="sup-secao">
          <div class="sup-secao-titulo">✍️ Rascunho gerado pela IA</div>
          <div class="sup-rascunho" id="sup-texto-rascunho">${_gerarRascunhoSimulado(peca, dados)}</div>
          <div style="display:flex;gap:8px;margin-top:10px">
            <button class="btn-sm" onclick="document.getElementById('sup-texto-rascunho').contentEditable='true';this.textContent='✎ Editando...';toast('Clique no texto para editar diretamente.')">✎ Editar rascunho</button>
            <button class="btn-sm" onclick="toast('✦ IA gerando nova versão com suas instruções...')">↺ Gerar nova versão</button>
          </div>
        </div>

        <!-- Instruções finais do advogado -->
        <div class="sup-secao">
          <div class="sup-secao-titulo">📝 Observações e instruções finais</div>
          <textarea class="calc-input" id="sup-obs-final" rows="3"
            placeholder="Ex: Enfatizar a prova rural do item 3 · Incluir a certidão de tempo de serviço anexada · Corrigir valor do benefício..."></textarea>
        </div>

        <!-- Aviso de protocolo -->
        <div style="background:#fffbeb;border:1.5px solid #fde68a;border-radius:10px;padding:14px 16px;font-size:13px;color:#78350f;line-height:1.6">
          ⚠️ <strong>Atenção:</strong> Ao clicar em <strong>"Aprovar e Protocolar"</strong>, o sistema irá enviar a peça ao ${esc(dados.tribunal||'tribunal')} em nome de <strong>${esc(peca.advResp)}</strong> utilizando o certificado digital cadastrado. Esta ação é <strong>irreversível</strong> e o protocolo ficará registrado no sistema do tribunal. Certifique-se de que a peça está correta antes de prosseguir.
        </div>
      </div>

      <!-- Rodapé com ações -->
      <div style="display:grid;grid-template-columns:1fr 1fr 2fr;gap:10px;padding:16px 20px;border-top:2px solid var(--border);background:var(--surface)">
        <button class="btn-secondary" onclick="document.getElementById('modal-supervisao-completa').remove()">Fechar</button>
        <button class="btn-secondary" onclick="toast('📄 Abrindo para impressão/download...')">⬇ Baixar PDF</button>
        <button class="btn-primary" style="background:#059669;font-size:14px;font-weight:700" onclick="_aprovarEProtocolarAgente('${esc(peca.id)}')">
          ✓ Aprovar Peça &amp; Protocolar no ${esc(dados.tribunal||'Tribunal')}
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(m);
  m.addEventListener('click', ev => { if (ev.target === m) m.remove(); });
}

function _gerarRascunhoSimulado(peca, dados) {
  return `<strong>EXCELENTÍSSIMO(A) SENHOR(A) DOUTOR(A) DESEMBARGADOR(A) RELATOR(A) DO ${esc((dados.tribunal||'TRIBUNAL').toUpperCase())}</strong><br><br>
<strong>${esc(peca.cliente)}</strong>, já devidamente qualificado nos autos do processo n.º <strong>${esc(dados.num||peca.num)}</strong>, que tramita perante a <em>${esc(dados.vara||'Vara')}</em>, vem, por seu advogado signatário, com fundamento no art. 1.009 do Código de Processo Civil, interpor o presente:<br><br>
<strong>RECURSO DE APELAÇÃO</strong><br><br>
<strong>I — DA TEMPESTIVIDADE</strong><br>
A r. sentença prolatada foi publicada em <strong>${dados.ultimoAndamento?.match(/\d{2}\/\d{2}\/\d{4}/)?.[0] || '27/06/2026'}</strong>. O prazo para interposição do presente recurso é de <strong>15 (quinze) dias úteis</strong>, nos termos do art. 1.003, § 5º, do CPC, findando em <strong>${esc(dados.prazoFatal||'—')}</strong>. O presente recurso é, portanto, <strong>TEMPESTIVO</strong>.<br><br>
<strong>II — DO MÉRITO</strong><br>
A sentença de primeiro grau merece ser reformada pelos fundamentos que ora se expõem. A IA identificou os seguintes pontos de impugnação com base na análise do processo: <em>[⬅ Revisar e completar com os fundamentos específicos do caso]</em>.<br><br>
<strong>III — DOS PEDIDOS</strong><br>
Ante o exposto, requer-se seja dado <strong>provimento ao presente recurso</strong>, para o fim de reformar a r. sentença recorrida, julgando-se procedente o pedido inicial em todos os seus termos.<br><br>
Termos em que pede deferimento.<br><br>
<em>${new Date().toLocaleDateString('pt-BR',{day:'numeric',month:'long',year:'numeric'})}</em><br><br>
<strong>${esc(nomeExibicao(USUARIO_ATUAL))}</strong><br>
Advogado(a) — OAB/SP 123.456`;
}

function _aprovarEProtocolarAgente(pecaId) {
  const peca  = PECAS_REVISAO.find(p => p.id === pecaId);
  const obs   = document.getElementById('sup-obs-final')?.value || '';
  if (peca) {
    peca.status     = 'protocolada';
    peca.protocoladoPor = nomeExibicao(USUARIO_ATUAL);
    peca.protocoladoEm  = new Date().toLocaleString('pt-BR');
    peca.obs        = obs;
  }
  document.getElementById('modal-supervisao-completa')?.remove();
  if (!peca) { toast('Erro: peça não encontrada.', 'warn'); return; }
  _salvarDados();
  _atualizarBadgeRevisao();
  _registrarLog(peca.agId || '', peca.agNome || 'Agente', 'sucesso',
    `Peça aprovada e protocolada por ${nomeExibicao(USUARIO_ATUAL)} em ${peca?.tribunal || 'tribunal'} · ${new Date().toLocaleString('pt-BR')}`);
  // Adiciona ao banco de peças judiciais
  if (typeof BANCO_PECAS !== 'undefined') {
    BANCO_PECAS.judiciais.unshift({
      id: 'AGP_' + Date.now(),
      titulo: peca?.tipo || 'Recurso de Apelação',
      area: 'Previdenciário', tipo: 'judicial',
      data: new Date().toLocaleDateString('pt-BR'),
      status: 'protocolada',
      geradoPor: nomeExibicao(USUARIO_ATUAL),
      num: peca?.num,
    });
  }
  toast(`✅ <strong>Peça protocolada com sucesso</strong> no ${peca?.tribunal||'tribunal'}!<br><small>Número de protocolo: ${Date.now().toString().slice(-8)} · ${new Date().toLocaleString('pt-BR')}</small>`, 'success');
  renderBancoPecas?.();
}

function _simularExecucaoAgente(ag) {
  const mapa = {
    tpl_prazos:     'Verificados 12 processos · 3 prazos críticos encontrados · Notificações WhatsApp enviadas para Dr. Klebson e Dra. Ana',
    tpl_andamentos: 'Consultados 8 tribunais · 2 novos andamentos capturados · Estratégia IA atualizada para João Pedro Silva e Maria Costa',
    tpl_peticao:    '1 peça identificada pela IA Estratégica · Rascunho de Recurso de Apelação gerado · Tarefa criada para Dr. Klebson revisar',
    tpl_followup:   '4 clientes sem movimentação há 30+ dias identificados · Mensagens personalizadas enviadas via WhatsApp · Registrado no CRM',
    tpl_relatorio:  'Relatório semanal gerado · 6 audiências · 4 prazos cumpridos · 2 novos processos · Enviado ao Sócio Administrador',
    tpl_novocliente:'Boas-vindas enviadas · Pasta digital criada · Reunião agendada para 02/07/2026 às 14:00 · Card criado no Kanban Adm.',
    tpl_inss:       'Consultados 5 requerimentos GERID · 1 mudança de status (deferido) · Cliente e advogado notificados via WhatsApp',
    tpl_audiencia:  '2 audiências amanhã identificadas · Briefings compilados · Documentos do banco de peças anexados · Enviados a Dr. Klebson',
  };
  return mapa[ag.tplId] || 'Agente executado com sucesso · Todas as integrações responderam normalmente';
}

function _abrirModalExecucao(ag, resultado, dataHora) {
  const m = document.createElement('div');
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box" style="max-width:500px">
      <div class="modal-header" style="background:${ag.cor}18;border-bottom:1px solid ${ag.cor}30">
        <h3 style="color:${ag.cor}">${ag.icone} ${esc(ag.nome)} — Execução</h3>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
      </div>
      <div style="padding:20px;display:flex;flex-direction:column;gap:16px">
        <div style="background:#fef3c7;border:1px solid #f59e0b;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px">
          <span style="font-size:16px">⚠️</span>
          <div style="font-size:12px;color:#92400e;font-weight:600">SIMULAÇÃO — Este agente ainda não está conectado a integrações reais. Os resultados abaixo são ilustrativos.</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:12px 16px">
          <span style="font-size:24px">✅</span>
          <div>
            <div style="font-weight:700;color:#15803d">Execução simulada</div>
            <div style="font-size:12px;color:#6b7280">${dataHora}</div>
          </div>
        </div>
        <div>
          <div style="font-size:12px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--text-muted);margin-bottom:8px">Resultado simulado</div>
          <div style="font-size:13px;color:var(--text-primary);line-height:1.7;background:var(--bg);border-radius:8px;padding:12px">
            ${resultado.split(' · ').map(r => `<div>→ ${esc(r)}</div>`).join('')}
          </div>
        </div>
        <div>
          <div style="font-size:12px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--text-muted);margin-bottom:8px">Integrações utilizadas</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px">
            ${(ag.integracoes||[]).map(k => {
              const i = INTEG_LABELS[k] || {label:k,icone:'🔗',cor:'#6b7280'};
              return `<span style="font-size:11px;font-weight:600;padding:3px 10px;border-radius:20px;background:${i.cor}18;color:${i.cor};border:1px solid ${i.cor}30">${i.icone} ${i.label}</span>`;
            }).join('')}
          </div>
        </div>
        <button class="btn-primary" onclick="this.closest('.modal-overlay').remove()">Fechar</button>
      </div>
    </div>
  `;
  document.body.appendChild(m);
  m.addEventListener('click', e => { if (e.target === m) m.remove(); });
}

function toggleAgenteAtivo(id) {
  const ag = AGENTES_ATIVOS.find(x => x.id === id);
  if (!ag) return;
  ag.ativo = !ag.ativo;
  _registrarLog(id, ag.nome, 'aviso', `Agente ${ag.ativo ? 'ativado' : 'pausado'} por ${nomeExibicao(USUARIO_ATUAL)}`);
  _renderAgentesAtivos();
  _atualizarBadgeAgentes();
  toast(`Agente "${ag.nome}" ${ag.ativo ? 'ativado' : 'pausado'}.`);
}

function _registrarLog(agId, agNome, status, descricao) {
  AGENTES_LOGS.push({ agId, agNome, status, descricao, dataHora: new Date().toLocaleString('pt-BR') });
}

function editarAgente(id) {
  const ag = AGENTES_ATIVOS.find(x => x.id === id);
  if (ag) abrirBuilderAgente(ag);
}

function editarAgentePorTpl(tplId) {
  const ag = AGENTES_ATIVOS.find(x => x.tplId === tplId);
  if (ag) abrirBuilderAgente(ag);
}

function verDetalheTemplate(tplId) {
  const t = AGENTES_TEMPLATES.find(x => x.id === tplId);
  if (!t) return;
  const m = document.createElement('div');
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box" style="max-width:520px">
      <div class="modal-header" style="background:${t.cor}18">
        <h3 style="color:${t.cor}">${t.icone} ${esc(t.nome)}</h3>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
      </div>
      <div style="padding:20px;display:flex;flex-direction:column;gap:16px">
        <p style="color:var(--text-secondary);font-size:14px">${esc(t.descricao)}</p>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--text-muted);margin-bottom:8px">Gatilho</div>
          <div style="font-size:13px;font-weight:600">⚡ ${esc(t.gatilhoLabel)}</div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--text-muted);margin-bottom:8px">Ações executadas</div>
          ${t.acoes.map((a,i)=>`<div style="display:flex;gap:8px;align-items:center;padding:7px 0;border-bottom:1px solid var(--border)"><span style="width:20px;height:20px;border-radius:50%;background:${t.cor};color:#fff;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i+1}</span><span style="font-size:13px">${esc(a)}</span></div>`).join('')}
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--text-muted);margin-bottom:8px">Integrações</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px">
            ${(t.integracoes||[]).map(k=>{const i=INTEG_LABELS[k]||{label:k,icone:'🔗',cor:'#6b7280'};return `<span style="font-size:11px;font-weight:600;padding:3px 10px;border-radius:20px;background:${i.cor}18;color:${i.cor};border:1px solid ${i.cor}30">${i.icone} ${i.label}</span>`;}).join('')}
          </div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--text-muted);margin-bottom:8px">Instruções para a IA</div>
          <div style="font-size:12px;color:var(--text-secondary);background:var(--bg);border-radius:8px;padding:12px;line-height:1.6">${esc(t.instrucoes)}</div>
        </div>
        <button class="btn-primary" onclick="instalarTemplate('${t.id}');this.closest('.modal-overlay').remove()">⬇ Usar este template</button>
      </div>
    </div>
  `;
  document.body.appendChild(m);
  m.addEventListener('click', e => { if (e.target === m) m.remove(); });
}

function abrirBuilderAgente(agEditar) {
  const edit = !!agEditar;
  const ag   = agEditar || {};
  const todosModulos = Object.entries(INTEG_LABELS);
  const m = document.createElement('div');
  m.id = 'modal-builder-agente';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box" style="max-width:600px;max-height:90vh;overflow-y:auto">
      <div class="modal-header">
        <h3>${edit ? '✎ Editar Agente' : '✦ Criar Novo Agente de IA'}</h3>
        <button class="modal-close" onclick="document.getElementById('modal-builder-agente').remove()">✕</button>
      </div>
      <div style="padding:0;display:flex;flex-direction:column;gap:18px">

        <!-- Identidade -->
        <div class="ag-builder-secao">
          <div class="ag-builder-titulo">1. Identidade</div>
          <div style="display:grid;grid-template-columns:60px 1fr;gap:10px;align-items:start">
            <div>
              <label class="calc-label">Ícone</label>
              <input class="calc-input" id="ag-icone" value="${esc(ag.icone||'🤖')}" style="text-align:center;font-size:22px" maxlength="2"/>
            </div>
            <div>
              <label class="calc-label">Nome do Agente *</label>
              <input class="calc-input" id="ag-nome" placeholder="Ex: Monitor de Prazos" value="${esc(ag.nome||'')}"/>
            </div>
          </div>
          <label class="calc-label">Descrição</label>
          <input class="calc-input" id="ag-desc" placeholder="O que este agente faz?" value="${esc(ag.descricao||'')}"/>
          <label class="calc-label">Cor do agente</label>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            ${['#2563eb','#7c3aed','#059669','#dc2626','#d97706','#0ea5e9','#f97316','#4b5563'].map(c=>
              `<div onclick="document.getElementById('ag-cor-val').value='${c}';document.querySelectorAll('.ag-cor-opt').forEach(x=>x.classList.remove('sel'));this.classList.add('sel')"
                class="ag-cor-opt ${(ag.cor||'#7c3aed')===c?'sel':''}" style="width:28px;height:28px;border-radius:50%;background:${c};cursor:pointer;border:3px solid ${(ag.cor||'#7c3aed')===c?'#fff':'transparent'};box-shadow:${(ag.cor||'#7c3aed')===c?'0 0 0 2px '+c:'none'}"></div>`
            ).join('')}
            <input type="hidden" id="ag-cor-val" value="${esc(ag.cor||'#7c3aed')}"/>
          </div>
        </div>

        <!-- Gatilho -->
        <div class="ag-builder-secao">
          <div class="ag-builder-titulo">2. Quando executar (Gatilho)</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
            <div>
              <label class="calc-label">Tipo de gatilho</label>
              <select class="calc-input" id="ag-gatilho" onchange="atualizarGatilhoLabel()">
                <option value="manual" ${ag.gatilho==='manual'?'selected':''}>▶ Manual (executar quando quiser)</option>
                <option value="agendado" ${ag.gatilho==='agendado'?'selected':''}>⏰ Agendado (horário fixo)</option>
                <option value="evento" ${ag.gatilho==='evento'?'selected':''}>⚡ Por evento do sistema</option>
              </select>
            </div>
            <div id="ag-gatilho-detalhe-wrap">
              <label class="calc-label">Configuração</label>
              <input class="calc-input" id="ag-gatilho-label" placeholder="Ex: Diário às 08:00" value="${esc(ag.gatilhoLabel||'')}"/>
            </div>
          </div>
        </div>

        <!-- Integrações -->
        <div class="ag-builder-secao">
          <div class="ag-builder-titulo">3. Integrações com o sistema</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
            ${todosModulos.map(([k,i])=>`
              <label class="ag-integ-check ${(ag.integracoes||[]).includes(k)?'ativa':''}">
                <input type="checkbox" value="${k}" ${(ag.integracoes||[]).includes(k)?'checked':''} onchange="this.closest('label').classList.toggle('ativa',this.checked)"/>
                <span>${i.icone} ${i.label}</span>
              </label>
            `).join('')}
          </div>
        </div>

        <!-- Instruções -->
        <div class="ag-builder-secao">
          <div class="ag-builder-titulo">4. Instruções para a IA</div>
          <label class="calc-label">Descreva detalhadamente o que o agente deve fazer, verificar e como deve agir</label>
          <textarea class="calc-input" id="ag-instrucoes" rows="5" style="resize:vertical" placeholder="Ex: Verifique todos os processos com prazo nos próximos 3 dias. Para cada um, notifique o responsável via WhatsApp...">${esc(ag.instrucoes||'')}</textarea>
        </div>

        <!-- Botões -->
        <div style="display:flex;gap:10px;padding-bottom:4px">
          ${edit ? `<button class="btn-secondary" onclick="excluirAgente('${ag.id}')">🗑 Excluir</button>` : ''}
          <button class="btn-primary" style="flex:1" onclick="salvarAgente(${edit?`'${ag.id}'`:null})">${edit ? '💾 Salvar alterações' : '✦ Criar Agente'}</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(m);
  m.addEventListener('click', e => { if (e.target === m) m.remove(); });
  if (!edit) setTimeout(() => document.getElementById('ag-nome').focus(), 100);
}

function atualizarGatilhoLabel() {
  const tipo = document.getElementById('ag-gatilho').value;
  const inp  = document.getElementById('ag-gatilho-label');
  if (!inp) return;
  if (tipo === 'manual')    inp.placeholder = 'Execução manual apenas';
  if (tipo === 'agendado')  inp.placeholder = 'Ex: Diário às 08:00 / Semanal segunda';
  if (tipo === 'evento')    inp.placeholder = 'Ex: Ao cadastrar cliente / Ao vencer prazo';
}

function salvarAgente(idEditar) {
  const nome = document.getElementById('ag-nome').value.trim();
  if (!nome) { toast('Informe o nome do agente.','warn'); return; }
  const integracoes = [...document.querySelectorAll('#modal-builder-agente input[type=checkbox]:checked')].map(c => c.value);
  const dados = {
    nome,
    descricao:   document.getElementById('ag-desc').value,
    icone:       document.getElementById('ag-icone').value || '🤖',
    cor:         document.getElementById('ag-cor-val').value || '#7c3aed',
    gatilho:     document.getElementById('ag-gatilho').value,
    gatilhoLabel:document.getElementById('ag-gatilho-label').value,
    integracoes,
    instrucoes:  document.getElementById('ag-instrucoes').value,
  };
  if (idEditar) {
    const idx = AGENTES_ATIVOS.findIndex(x => x.id === idEditar);
    if (idx >= 0) Object.assign(AGENTES_ATIVOS[idx], dados);
    toast('✓ Agente atualizado!', 'success');
    _registrarLog(idEditar, dados.nome, 'sucesso', `Agente editado por ${nomeExibicao(USUARIO_ATUAL)}`);
  } else {
    const novo = { id:'ag_'+Date.now(), ativo:true, criadoPor:nomeExibicao(USUARIO_ATUAL), criadoEm:new Date().toLocaleDateString('pt-BR'), ultimaExec:null, ...dados };
    AGENTES_ATIVOS.push(novo);
    _registrarLog(novo.id, dados.nome, 'sucesso', `Agente criado por ${nomeExibicao(USUARIO_ATUAL)}`);
    toast('✓ Agente criado e ativo!', 'success');
  }
  document.getElementById('modal-builder-agente').remove();
  _renderAgentesAtivos();
  _atualizarBadgeAgentes();
}

function excluirAgente(id) {
  const ag = AGENTES_ATIVOS.find(x => x.id === id);
  if (!ag) return;
  AGENTES_ATIVOS.splice(AGENTES_ATIVOS.indexOf(ag), 1);
  document.getElementById('modal-builder-agente')?.remove();
  _renderAgentesAtivos();
  _renderAgentesTemplates();
  _atualizarBadgeAgentes();
  toast(`Agente "${ag.nome}" excluído.`, 'warn');
}

// KANBAN — ADMINISTRATIVO + JUDICIAL
// ============================================

function esc(str) {
  return String(str ?? '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

// Colunas por board
const KB_COLUNAS = {
  adm: [
    { id:'adm_backlog',    label:'📋 Backlog',         cor:'#6b7280' },
    { id:'adm_fazendo',    label:'🔄 Em Andamento',    cor:'#2563eb' },
    { id:'adm_aguardando', label:'⏳ Aguardando',       cor:'#d97706' },
    { id:'adm_revisao',    label:'🔍 Revisão',          cor:'#7c3aed' },
    { id:'adm_concluido',  label:'✅ Concluído',        cor:'#059669' },
  ],
  jud: [
    { id:'jud_novo',       label:'📥 Novo Processo',   cor:'#6b7280' },
    { id:'jud_analise',    label:'🔎 Em Análise',       cor:'#2563eb' },
    { id:'jud_peticao',    label:'✍️ Peticionando',     cor:'#7c3aed' },
    { id:'jud_aguardando', label:'⚖️ Aguard. Decisão', cor:'#d97706' },
    { id:'jud_recurso',    label:'📤 Em Recurso',       cor:'#dc2626' },
    { id:'jud_encerrado',  label:'🏁 Encerrado',        cor:'#059669' },
  ],
};

// Dados iniciais
if (!window.KB_CARDS) window.KB_CARDS = {
  adm: [
    { id:'A1', col:'adm_fazendo',    titulo:'Renovação do contrato com cliente Silva',      responsavel:'Dr. Klebson Cavalcanti', prioridade:'alta',   prazo:'30/06/2026', tag:'Contratos',    obs:'' },
    { id:'A2', col:'adm_backlog',    titulo:'Atualizar tabela de honorários 2026',          responsavel:'Dra. Ana Carvalho',      prioridade:'media',  prazo:'15/07/2026', tag:'Financeiro',   obs:'' },
    { id:'A3', col:'adm_aguardando', titulo:'Receber documentos do cliente Carlos Pereira', responsavel:'Juliana Faria',          prioridade:'alta',   prazo:'01/07/2026', tag:'Documentos',   obs:'Cliente informou envio por e-mail' },
    { id:'A4', col:'adm_revisao',    titulo:'Revisão do fluxo de atendimento WhatsApp',     responsavel:'Dr. Marcos Santos',      prioridade:'baixa',  prazo:'',           tag:'Operacional',  obs:'' },
    { id:'A5', col:'adm_backlog',    titulo:'Organizar arquivos físicos — pasta 2024',       responsavel:'Juliana Faria',          prioridade:'baixa',  prazo:'',           tag:'Arquivo',      obs:'' },
    { id:'A6', col:'adm_concluido',  titulo:'Cadastro de novos clientes no sistema',        responsavel:'Juliana Faria',          prioridade:'media',  prazo:'20/06/2026', tag:'CRM',          obs:'' },
  ],
  jud: [
    { id:'J1', col:'jud_analise',    titulo:'Maria Costa vs INSS — Aposentadoria por Idade',   num:'0098765-43.2023.5.15.0001', tribunal:'TRT15', responsavel:'Dr. Klebson Cavalcanti', area:'Previdenciário', prazo:'04/07/2026', prioridade:'alta',  obs:'Audiência designada' },
    { id:'J2', col:'jud_peticao',    titulo:'João Pedro Silva vs Banco Itaú — Recurso',       num:'0076543-21.2024.8.26.0224', tribunal:'TJSP',  responsavel:'Dra. Ana Carvalho',      area:'Cível',          prazo:'05/07/2026', prioridade:'alta',  obs:'Elaborar contrarrazões' },
    { id:'J3', col:'jud_aguardando', titulo:'Ana Lima vs Bradesco Seguros — Sinistro',         num:'0054321-98.2022.8.26.0100', tribunal:'TJSP',  responsavel:'Dr. Marcos Santos',      area:'Cível',          prazo:'',           prioridade:'media', obs:'Aguardando laudo pericial', clienteId:'C6' },
    { id:'J4', col:'jud_novo',       titulo:'Carlos Rodrigues vs TRT — Horas Extras',          num:'0076543-21.2024.8.26.0224', tribunal:'TJSP',  responsavel:'Dr. Klebson Cavalcanti', area:'Trabalhista',    prazo:'',           prioridade:'media', obs:'' },
    { id:'J5', col:'jud_recurso',    titulo:'Roberto Alves vs INSS — Auxílio-Doença',          num:'0034521-12.2023.5.15.0002', tribunal:'TRT15', responsavel:'Dra. Ana Carvalho',      area:'Previdenciário', prazo:'10/07/2026', prioridade:'alta',  obs:'Prazo fatal para agravo' },
    { id:'J6', col:'jud_encerrado',  titulo:'Fernanda Souza vs Bradesco — Plano de Saúde',     num:'0021234-56.2021.8.26.0050', tribunal:'TJSP',  responsavel:'Dr. Marcos Santos',      area:'Cível',          prazo:'',           prioridade:'baixa', obs:'Acordo homologado' },
  ],
};

let _kbAtivo = 'adm';
let _kbDragId = null;
let _kbDragBoard = null;

function trocarKanban(board, btn) {
  _kbAtivo = board;
  document.querySelectorAll('.kb-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('kb-board-adm').style.display = board === 'adm' ? '' : 'none';
  document.getElementById('kb-board-jud').style.display = board === 'jud' ? '' : 'none';
}

function renderKanban() {
  _renderBoard('adm');
  _renderBoard('jud');
  _atualizarContadores();
}

function _renderBoard(board) {
  const el = document.getElementById(`kb-board-${board}`);
  if (!el) return;
  const colunas = KB_COLUNAS[board];
  el.innerHTML = colunas.map(col => {
    const cards = (KB_CARDS[board] || []).filter(c => c.col === col.id);
    return `
      <div class="kanban-col" data-col="${col.id}" data-board="${board}"
           ondragover="kbSobreDrop(event)" ondrop="kbSoltarDrop(event)" ondragleave="kbSairDrop(event)">
        <div class="kanban-col-header" style="border-top:3px solid ${col.cor}">
          <span>${col.label}</span>
          <span class="kanban-count" style="background:${col.cor}20;color:${col.cor}">${cards.length}</span>
        </div>
        <div class="kb-col-cards">
          ${cards.map(c => _renderCard(c, board, col)).join('')}
          <div class="kanban-add-placeholder" onclick="abrirModalKanban('${board}','${col.id}')">＋ Adicionar</div>
        </div>
      </div>
    `;
  }).join('');
}

function _renderCard(c, board, col) {
  const cores = { alta:'#dc2626', media:'#d97706', baixa:'#6b7280' };
  const corP = cores[c.prioridade] || '#6b7280';
  const hoje = new Date(); hoje.setHours(0,0,0,0);
  let prazoHtml = '';
  if (c.prazo) {
    const [d,m,y] = c.prazo.split('/').map(Number);
    const dt = new Date(y, m-1, d);
    const diff = Math.ceil((dt - hoje) / 86400000);
    const corPrazo = diff < 0 ? '#dc2626' : diff <= 3 ? '#d97706' : '#6b7280';
    const labelPrazo = diff < 0 ? `Vencido há ${Math.abs(diff)}d` : diff === 0 ? 'Vence hoje' : `${diff}d restantes`;
    prazoHtml = `<span class="kb-card-prazo" style="color:${corPrazo}">⏰ ${labelPrazo}</span>`;
  }
  const isUlt = col.id === (board === 'adm' ? 'adm_concluido' : 'jud_encerrado');
  // Tag de área/tipo
  const tagHtml = board === 'adm'
    ? `<span class="kb-tag kb-tag-adm">${esc(c.tag || '')}</span>`
    : `<span class="kb-tag kb-tag-${(c.area||'').toLowerCase().replace(/[^a-z]/g,'').substring(0,4)}">${esc(c.area || '')}</span>`;

  return `
    <div class="kb-card ${isUlt ? 'kb-card-done' : ''}" draggable="true"
         data-id="${c.id}" data-board="${board}"
         ondragstart="kbInicioDrag(event)" ondragend="kbFimDrag(event)"
         onclick="abrirCardKanban('${c.id}','${board}')">
      <div class="kb-card-topo">
        ${tagHtml}
        <span class="kb-prioridade" style="background:${corP}20;color:${corP}">${c.prioridade}</span>
      </div>
      <div class="kb-card-titulo">${isUlt ? '✓ ' : ''}${esc(c.titulo)}</div>
      ${board === 'jud' && c.num ? `<div class="kb-card-num">${esc(c.num)} · ${esc(c.tribunal||'')}</div>` : ''}
      <div class="kb-card-footer">
        <span class="kb-card-resp" title="${esc(c.responsavel)}">
          <span class="kb-avatar" style="background:${_corAvatar(c.responsavel)}">${_iniciais(c.responsavel)}</span>
          ${esc(_primeiroNome(c.responsavel))}
        </span>
        ${prazoHtml}
      </div>
    </div>
  `;
}

function _iniciais(nome) {
  return (nome || '').split(' ').filter(Boolean).slice(0,2).map(p => p[0]).join('').toUpperCase();
}
function _primeiroNome(nome) {
  const partes = (nome || '').replace(/^Dr\.\s*|^Dra\.\s*/i, '').split(' ');
  return partes[0] || nome;
}
function _corAvatar(nome) {
  const cores = ['#7c3aed','#2563eb','#059669','#d97706','#dc2626','#0ea5e9'];
  let h = 0; for (const c of nome||'') h = (h * 31 + c.charCodeAt(0)) % cores.length;
  return cores[h];
}

function _atualizarContadores() {
  const adm = (KB_CARDS.adm || []).filter(c => c.col !== 'adm_concluido').length;
  const jud = (KB_CARDS.jud || []).filter(c => c.col !== 'jud_encerrado').length;
  // badges nas abas do workflow
  const ea = document.getElementById('kb-count-adm');
  const ej = document.getElementById('kb-count-jud');
  if (ea) ea.textContent = adm;
  if (ej) ej.textContent = jud;
  // badges na sidebar
  const ba = document.getElementById('badge-kb-adm');
  const bj = document.getElementById('badge-kb-jud');
  if (ba) ba.textContent = adm;
  if (bj) bj.textContent = jud;
}

// Drag & drop
function kbInicioDrag(e) {
  _kbDragId    = e.currentTarget.dataset.id;
  _kbDragBoard = e.currentTarget.dataset.board;
  e.currentTarget.classList.add('dragging');
}
function kbFimDrag(e) {
  e.currentTarget.classList.remove('dragging');
  document.querySelectorAll('.kanban-col').forEach(c => c.classList.remove('drag-over'));
}
function kbSobreDrop(e) {
  e.preventDefault();
  document.querySelectorAll('.kanban-col').forEach(c => c.classList.remove('drag-over'));
  e.currentTarget.classList.add('drag-over');
}
function kbSairDrop(e) { e.currentTarget.classList.remove('drag-over'); }
function kbSoltarDrop(e) {
  e.preventDefault();
  const novaCol   = e.currentTarget.dataset.col;
  const novaBoard = e.currentTarget.dataset.board;
  if (!_kbDragId || !novaCol || novaBoard !== _kbDragBoard) return;
  const card = (KB_CARDS[_kbDragBoard] || []).find(c => c.id === _kbDragId);
  if (card) {
    card.col = novaCol;
    const colLabel = KB_COLUNAS[_kbDragBoard].find(c => c.id === novaCol)?.label || novaCol;
    _salvarDados();
    _renderBoard(_kbDragBoard);
    _atualizarContadores();
    toast(`✓ Movido para <strong>${colLabel}</strong>`);
  }
  _kbDragId = null;
  document.querySelectorAll('.kanban-col').forEach(c => c.classList.remove('drag-over'));
}

// Modal de detalhe do card
function abrirCardKanban(id, board) {
  const c = (KB_CARDS[board] || []).find(x => x.id === id);
  if (!c) return;
  const isJud = board === 'jud';
  const colunas = KB_COLUNAS[board];
  const m = document.createElement('div');
  m.id = 'kb-modal-det';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box" style="max-width:520px">
      <div class="modal-header">
        <h3>${isJud ? '⚖️ Processo Judicial' : '🏢 Tarefa Administrativa'}</h3>
        <button class="modal-close" onclick="document.getElementById('kb-modal-det').remove()">✕</button>
      </div>
      <div class="calc-form" style="padding:0;display:flex;flex-direction:column;gap:14px">
        <div>
          <label class="calc-label">Título</label>
          <input class="calc-input" id="kbdet-titulo" value="${esc(c.titulo)}"/>
        </div>
        ${isJud ? `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label class="calc-label">Nº do Processo</label><input class="calc-input" id="kbdet-num" value="${esc(c.num||'')}"/></div>
          <div><label class="calc-label">Tribunal</label><input class="calc-input" id="kbdet-tribunal" value="${esc(c.tribunal||'')}"/></div>
        </div>
        <div><label class="calc-label">Área</label>
        <select class="calc-input" id="kbdet-area">
          ${['Previdenciário','Trabalhista','Cível','Tributário'].map(a=>`<option ${c.area===a?'selected':''}>${a}</option>`).join('')}
        </select></div>
        ` : `
        <div><label class="calc-label">Categoria</label>
        <select class="calc-input" id="kbdet-tag">
          ${['Contratos','Financeiro','Documentos','Operacional','Arquivo','CRM','RH','Jurídico'].map(t=>`<option ${c.tag===t?'selected':''}>${t}</option>`).join('')}
        </select></div>
        `}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label class="calc-label">Responsável</label>
          <select class="calc-input" id="kbdet-resp">
            ${USUARIOS_SISTEMA.map(u=>`<option ${c.responsavel===nomeExibicao(u)?'selected':''}>${nomeExibicao(u)}</option>`).join('')}
          </select></div>
          <div><label class="calc-label">Prioridade</label>
          <select class="calc-input" id="kbdet-prior">
            ${['alta','media','baixa'].map(p=>`<option ${c.prioridade===p?'selected':''}>${p}</option>`).join('')}
          </select></div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label class="calc-label">Prazo</label>
          <input class="calc-input" id="kbdet-prazo" type="date" value="${c.prazo ? c.prazo.split('/').reverse().join('-') : ''}"/></div>
          <div><label class="calc-label">Coluna / Etapa</label>
          <select class="calc-input" id="kbdet-col">
            ${colunas.map(col=>`<option value="${col.id}" ${c.col===col.id?'selected':''}>${col.label}</option>`).join('')}
          </select></div>
        </div>
        <div><label class="calc-label">Observações</label>
        <textarea class="calc-input" id="kbdet-obs" rows="3" style="resize:vertical">${esc(c.obs||'')}</textarea></div>
        <div style="display:flex;gap:10px;margin-top:4px">
          <button class="btn-secondary" style="flex:1" onclick="excluirCardKanban('${id}','${board}')">🗑 Excluir</button>
          <button class="btn-primary" style="flex:2" onclick="salvarCardKanban('${id}','${board}')">💾 Salvar alterações</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(m);
  m.addEventListener('click', e => { if (e.target === m) m.remove(); });
}

function salvarCardKanban(id, board) {
  const c = (KB_CARDS[board] || []).find(x => x.id === id);
  if (!c) return;
  c.titulo      = document.getElementById('kbdet-titulo').value.trim() || c.titulo;
  c.responsavel = document.getElementById('kbdet-resp').value;
  c.prioridade  = document.getElementById('kbdet-prior').value;
  c.col         = document.getElementById('kbdet-col').value;
  c.obs         = document.getElementById('kbdet-obs').value;
  const prazoVal = document.getElementById('kbdet-prazo').value;
  c.prazo = prazoVal ? new Date(prazoVal + 'T12:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'}) : '';
  if (board === 'jud') {
    c.num      = document.getElementById('kbdet-num')?.value || c.num;
    c.tribunal = document.getElementById('kbdet-tribunal')?.value || c.tribunal;
    c.area     = document.getElementById('kbdet-area')?.value || c.area;
  } else {
    c.tag = document.getElementById('kbdet-tag')?.value || c.tag;
  }
  document.getElementById('kb-modal-det')?.remove();
  _salvarDados();
  _renderBoard(board);
  _atualizarContadores();
  toast('✓ Card atualizado!', 'success');
}

function excluirCardKanban(id, board) {
  if (!['admin','socio'].includes(USUARIO_ATUAL?.perfil)) { toast('Sem permissão para excluir.','warn'); return; }
  KB_CARDS[board] = (KB_CARDS[board] || []).filter(c => c.id !== id);
  document.getElementById('kb-modal-det')?.remove();
  _salvarDados();
  _renderBoard(board);
  _atualizarContadores();
  toast('Card excluído.', 'warn');
}

// Modal novo card
function abrirModalKanban(board, colInicial) {
  board = board || _kbAtivo;
  colInicial = colInicial || KB_COLUNAS[board][0].id;
  const isJud = board === 'jud';
  document.getElementById('kb-modal-det')?.remove();
  const m = document.createElement('div');
  m.id = 'kb-modal-det';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box" style="max-width:480px">
      <div class="modal-header">
        <h3>${isJud ? '⚖️ Novo Processo Judicial' : '🏢 Nova Tarefa Administrativa'}</h3>
        <button class="modal-close" onclick="document.getElementById('kb-modal-det').remove()">✕</button>
      </div>
      <div class="calc-form" style="padding:0;display:flex;flex-direction:column;gap:12px">
        <div>
          <label class="calc-label">Título *</label>
          <input class="calc-input" id="kbnv-titulo" placeholder="${isJud ? 'Ex: João Silva vs INSS — Aposentadoria' : 'Ex: Atualizar contrato cliente'}"/>
        </div>
        ${isJud ? `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label class="calc-label">Nº do Processo</label><input class="calc-input" id="kbnv-num" placeholder="0000000-00.0000.0.00.0000"/></div>
          <div><label class="calc-label">Tribunal</label><input class="calc-input" id="kbnv-tribunal" placeholder="TJSP, TRT15, TRF3..."/></div>
        </div>
        <div><label class="calc-label">Área</label>
        <select class="calc-input" id="kbnv-area">
          <option>Previdenciário</option><option>Trabalhista</option><option>Cível</option><option>Tributário</option>
        </select></div>
        ` : `
        <div><label class="calc-label">Categoria</label>
        <select class="calc-input" id="kbnv-tag">
          <option>Contratos</option><option>Financeiro</option><option>Documentos</option><option>Operacional</option><option>Arquivo</option><option>CRM</option><option>RH</option><option>Jurídico</option>
        </select></div>
        `}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label class="calc-label">Responsável</label>
          <select class="calc-input" id="kbnv-resp">
            ${USUARIOS_SISTEMA.map(u=>`<option>${nomeExibicao(u)}</option>`).join('')}
          </select></div>
          <div><label class="calc-label">Prioridade</label>
          <select class="calc-input" id="kbnv-prior">
            <option value="media">Média</option><option value="alta">Alta</option><option value="baixa">Baixa</option>
          </select></div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label class="calc-label">Prazo</label><input class="calc-input" id="kbnv-prazo" type="date"/></div>
          <div><label class="calc-label">Etapa inicial</label>
          <select class="calc-input" id="kbnv-col">
            ${KB_COLUNAS[board].map(col=>`<option value="${col.id}" ${col.id===colInicial?'selected':''}>${col.label}</option>`).join('')}
          </select></div>
        </div>
        <div><label class="calc-label">Observações</label>
        <textarea class="calc-input" id="kbnv-obs" rows="2" style="resize:vertical"></textarea></div>
        <button class="btn-primary" style="width:100%;margin-top:4px" onclick="confirmarNovoCard('${board}')">+ Criar Card</button>
      </div>
    </div>
  `;
  document.body.appendChild(m);
  m.addEventListener('click', e => { if (e.target === m) m.remove(); });
  document.getElementById('kbnv-titulo').focus();
}

function confirmarNovoCard(board) {
  const titulo = document.getElementById('kbnv-titulo').value.trim();
  if (!titulo) { document.getElementById('kbnv-titulo').focus(); toast('Informe o título.','warn'); return; }
  const prazoVal = document.getElementById('kbnv-prazo').value;
  const prazo = prazoVal ? new Date(prazoVal + 'T12:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'}) : '';
  const isJud = board === 'jud';
  const novo = {
    id: (isJud ? 'J' : 'A') + Date.now(),
    col:         document.getElementById('kbnv-col').value,
    titulo,
    responsavel: document.getElementById('kbnv-resp').value,
    prioridade:  document.getElementById('kbnv-prior').value,
    prazo,
    obs:         document.getElementById('kbnv-obs').value,
    ...(isJud ? {
      num:      document.getElementById('kbnv-num')?.value || '',
      tribunal: document.getElementById('kbnv-tribunal')?.value || '',
      area:     document.getElementById('kbnv-area')?.value || 'Previdenciário',
    } : {
      tag: document.getElementById('kbnv-tag')?.value || 'Operacional',
    }),
  };
  KB_CARDS[board].push(novo);
  _salvarDados();
  document.getElementById('kb-modal-det').remove();
  _renderBoard(board);
  _atualizarContadores();
  toast('✓ Card criado!', 'success');
}

// Renderiza board nas páginas solo (kanban-adm / kanban-jud)
function _renderBoardSolo(board) {
  const elId = `kb-board-${board}-solo`;
  const el = document.getElementById(elId);
  if (!el) return;
  const colunas = KB_COLUNAS[board];
  let filtroArea = '';
  if (board === 'jud') {
    const sel = document.getElementById('kb-jud-filtro-area');
    filtroArea = sel ? sel.value : '';
  }
  el.innerHTML = colunas.map(col => {
    let cards = (KB_CARDS[board] || []).filter(c => c.col === col.id);
    if (filtroArea) cards = cards.filter(c => c.area === filtroArea);
    return `
      <div class="kanban-col" data-col="${col.id}" data-board="${board}"
           ondragover="kbSobreDrop(event)" ondrop="kbSoltarDropSolo(event)" ondragleave="kbSairDrop(event)">
        <div class="kanban-col-header" style="border-top:3px solid ${col.cor}">
          <span>${col.label}</span>
          <span class="kanban-count" style="background:${col.cor}20;color:${col.cor}">${cards.length}</span>
        </div>
        <div class="kb-col-cards">
          ${cards.map(c => _renderCard(c, board, col)).join('')}
          <div class="kanban-add-placeholder" onclick="abrirModalKanban('${board}','${col.id}')">＋ Adicionar</div>
        </div>
      </div>
    `;
  }).join('');
  _atualizarContadores();
}

function kbSoltarDropSolo(e) {
  e.preventDefault();
  const novaCol   = e.currentTarget.dataset.col;
  const novaBoard = e.currentTarget.dataset.board;
  if (!_kbDragId || !novaCol || novaBoard !== _kbDragBoard) return;
  const card = (KB_CARDS[_kbDragBoard] || []).find(c => c.id === _kbDragId);
  if (card) {
    card.col = novaCol;
    const colLabel = KB_COLUNAS[_kbDragBoard].find(c => c.id === novaCol)?.label || novaCol;
    _salvarDados();
    _renderBoardSolo(_kbDragBoard);
    toast(`✓ Movido para <strong>${colLabel}</strong>`);
  }
  _kbDragId = null;
  document.querySelectorAll('.kanban-col').forEach(c => c.classList.remove('drag-over'));
}

function abrirModalTarefa(col) { abrirModalKanban('adm', col ? 'adm_' + col : undefined); }

document.addEventListener('click', function(e) {
  const sb = document.getElementById('sidebar');
  if (window.innerWidth <= 900 && sb.classList.contains('open')) {
    if (!sb.contains(e.target) && !tg.contains(e.target)) sb.classList.remove('open');
  }
  const np = document.getElementById('notif-panel');
  const nb = document.querySelector('.notif-btn');
  if (np && !np.contains(e.target) && nb && !nb.contains(e.target)) np.remove();
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.parentElement.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// ============================================
// GRÁFICO DE ÁREAS CLICÁVEL — RELATÓRIOS
// ============================================

const AREAS_CONFIG = [
  {
    id: 'prev', label: 'Previdenciário', cor: '#C9A84C', pct: 52,
    demandas: [
      { nome:'Aposentadoria por Tempo de Contribuição', total:8,  protocoladas:6 },
      { nome:'Aposentadoria por Invalidez',             total:5,  protocoladas:4 },
      { nome:'Aposentadoria por Idade',                 total:4,  protocoladas:4 },
      { nome:'Aposentadoria Especial',                  total:2,  protocoladas:2 },
      { nome:'Auxílio-Doença (Incapacidade Temporária)',total:9,  protocoladas:7 },
      { nome:'Auxílio-Acidente',                        total:3,  protocoladas:2 },
      { nome:'BPC/LOAS',                                total:6,  protocoladas:5 },
      { nome:'Pensão por Morte',                        total:4,  protocoladas:4 },
      { nome:'Salário-Maternidade',                     total:2,  protocoladas:2 },
      { nome:'Revisão de RMI / Benefício',              total:3,  protocoladas:1 },
    ],
  },
  {
    id: 'trab', label: 'Trabalhista', cor: '#2563eb', pct: 30,
    demandas: [
      { nome:'Rescisão Indireta',           total:5, protocoladas:3 },
      { nome:'Horas Extras',                total:7, protocoladas:5 },
      { nome:'FGTS / Verbas Rescisórias',   total:6, protocoladas:6 },
      { nome:'Assédio Moral / Dano Moral',  total:3, protocoladas:2 },
      { nome:'Reintegração ao Emprego',     total:2, protocoladas:1 },
      { nome:'Equiparação Salarial',        total:2, protocoladas:2 },
      { nome:'Acidente de Trabalho',        total:4, protocoladas:3 },
    ],
  },
  {
    id: 'civel', label: 'Cível', cor: '#7c3aed', pct: 18,
    demandas: [
      { nome:'Tratamento do TEA',                     total:4, protocoladas:3 },
      { nome:'Reajuste de Plano de Saúde',            total:5, protocoladas:4 },
      { nome:'Negativa de Cobertura — Plano',         total:6, protocoladas:5 },
      { nome:'Indenização por Dano Moral',            total:3, protocoladas:2 },
      { nome:'Cobrança / Inadimplência',              total:2, protocoladas:2 },
      { nome:'Revisão Contratual',                    total:2, protocoladas:1 },
    ],
  },
];

function renderBiAreas() {
  const el = document.getElementById('bi-areas');
  if (!el) return;
  const total = AREAS_CONFIG.reduce((s, a) => s + a.pct, 0);
  el.innerHTML = AREAS_CONFIG.map(a => {
    const w   = Math.round((a.pct / total) * 100);
    const qtd = a.demandas.reduce((s, d) => s + d.total, 0);
    return `
      <div class="bi-row bi-row-click">
        <span class="bi-label" onclick="abrirDetalheArea('${a.id}')">${esc(a.label)}</span>
        <div class="bi-bar-wrap" onclick="abrirDetalheArea('${a.id}')" style="cursor:pointer">
          <div class="bi-bar" style="width:${w}%;background:${a.cor}"></div>
          <span class="bi-pct">${qtd} demandas</span>
        </div>
        <button class="btn-editar-area" onclick="abrirEditarArea('${a.id}')" title="Editar demandas">⚙</button>
        <span class="bi-arrow" onclick="abrirDetalheArea('${a.id}')">›</span>
      </div>`;
  }).join('');
}

// ---- EDITAR DEMANDAS DA ÁREA ----
function abrirEditarArea(id) {
  const area = AREAS_CONFIG.find(a => a.id === id);
  if (!area) return;
  document.getElementById('modal-editar-area')?.remove();

  const m = document.createElement('div');
  m.id = 'modal-editar-area';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box" style="max-width:500px">
      <div class="modal-header" style="background:${area.cor}20;border-bottom:2px solid ${area.cor}">
        <span>⚙ Editar demandas — ${esc(area.label)}</span>
        <button class="modal-close" onclick="fecharEditarArea()">✕</button>
      </div>
      <div style="padding:20px">
        <p style="font-size:12px;color:var(--text-muted);margin-bottom:14px">
          Adicione, edite ou remova os tipos de demanda desta área. As alterações refletem nos relatórios imediatamente.
        </p>
        <div id="editar-area-lista-${id}"></div>
        <div class="demanda-add-row" style="margin-top:14px">
          <input id="nova-demanda-area-${id}" class="calc-input" placeholder="Nova demanda..." style="margin:0;flex:1"/>
          <button class="btn-primary" onclick="adicionarDemandaArea('${id}')">+ Adicionar</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(m);
  renderEditarAreaLista(id);
}

function fecharEditarArea() {
  document.getElementById('modal-editar-area')?.remove();
}

function renderEditarAreaLista(id) {
  const area = AREAS_CONFIG.find(a => a.id === id);
  const el   = document.getElementById('editar-area-lista-' + id);
  if (!area || !el) return;
  el.innerHTML = area.demandas.map((d, i) => `
    <div class="demanda-item-modal">
      <input class="calc-input demanda-input-edit" value="${esc(d.nome)}" style="margin:0;flex:1"
        onblur="editarNomeDemandaArea('${id}',${i},this.value)"/>
      <input class="calc-input" type="number" value="${d.total}" min="0" style="margin:0;width:60px;text-align:center"
        onblur="editarTotalDemandaArea('${id}',${i},this.value)" title="Total de ações"/>
      <input class="calc-input" type="number" value="${d.protocoladas}" min="0" style="margin:0;width:60px;text-align:center"
        onblur="editarProtocDemandaArea('${id}',${i},this.value)" title="Protocoladas"/>
      <button class="btn-danger-sm" onclick="removerDemandaArea('${id}',${i})" title="Remover">✕</button>
    </div>`).join('') || '<div class="empty-state" style="padding:12px">Nenhuma demanda cadastrada.</div>';
}

function editarNomeDemandaArea(id, i, val) {
  const area = AREAS_CONFIG.find(a => a.id === id);
  if (area && val.trim()) { area.demandas[i].nome = val.trim(); renderBiAreas(); }
}
function editarTotalDemandaArea(id, i, val) {
  const area = AREAS_CONFIG.find(a => a.id === id);
  if (area) { area.demandas[i].total = parseInt(val) || 0; renderBiAreas(); }
}
function editarProtocDemandaArea(id, i, val) {
  const area = AREAS_CONFIG.find(a => a.id === id);
  if (area) { area.demandas[i].protocoladas = parseInt(val) || 0; renderBiAreas(); }
}
function removerDemandaArea(id, i) {
  const area = AREAS_CONFIG.find(a => a.id === id);
  if (!area) return;
  area.demandas.splice(i, 1);
  renderEditarAreaLista(id);
  renderBiAreas();
  toast('✓ Demanda removida.');
}
function adicionarDemandaArea(id) {
  const area  = AREAS_CONFIG.find(a => a.id === id);
  const input = document.getElementById('nova-demanda-area-' + id);
  const nome  = input?.value.trim();
  if (!area || !nome) { toast('Digite o nome da demanda.','warn'); return; }
  area.demandas.push({ nome, total: 0, protocoladas: 0 });
  input.value = '';
  renderEditarAreaLista(id);
  renderBiAreas();
  toast(`✓ "${esc(nome)}" adicionada.`);
}

// ============================================
// GRÁFICO JUDICIAL POR FÓRUM
// ============================================

const FORUNS_CONFIG = [
  {
    id:'jef',
    label:'JEF — Juizado Especial Federal',
    sigla:'JEF',
    cor:'#0F1E3C',
    acoes: [
      { tipo:'Concessão de Benefício Previdenciário',         total:12, procedentes:8,  pendentes:3, improcedentes:1 },
      { tipo:'Revisão de Benefício / RMI',                   total:6,  procedentes:4,  pendentes:1, improcedentes:1 },
      { tipo:'BPC/LOAS — Deficiência',                       total:5,  procedentes:3,  pendentes:2, improcedentes:0 },
      { tipo:'BPC/LOAS — Idoso',                             total:3,  procedentes:2,  pendentes:1, improcedentes:0 },
      { tipo:'Auxílio-Doença / Incapacidade',                total:8,  procedentes:5,  pendentes:2, improcedentes:1 },
      { tipo:'Aposentadoria Especial',                       total:4,  procedentes:3,  pendentes:1, improcedentes:0 },
    ],
  },
  {
    id:'tjsp',
    label:'TJSP — Tribunal de Justiça de SP',
    sigla:'TJSP',
    cor:'#7c3aed',
    acoes: [
      { tipo:'Negativa de Cobertura — Plano de Saúde',       total:7,  procedentes:5,  pendentes:2, improcedentes:0 },
      { tipo:'Tratamento do TEA',                            total:5,  procedentes:4,  pendentes:1, improcedentes:0 },
      { tipo:'Reajuste Abusivo de Plano de Saúde',           total:4,  procedentes:3,  pendentes:1, improcedentes:0 },
      { tipo:'Indenização por Dano Moral',                   total:3,  procedentes:2,  pendentes:0, improcedentes:1 },
      { tipo:'Revisão Contratual',                           total:2,  procedentes:1,  pendentes:1, improcedentes:0 },
    ],
  },
  {
    id:'trt',
    label:'TRT — Tribunal Regional do Trabalho',
    sigla:'TRT',
    cor:'#2563eb',
    acoes: [
      { tipo:'Horas Extras / Banco de Horas',                total:8,  procedentes:6,  pendentes:1, improcedentes:1 },
      { tipo:'FGTS e Verbas Rescisórias',                    total:7,  procedentes:6,  pendentes:1, improcedentes:0 },
      { tipo:'Rescisão Indireta',                            total:4,  procedentes:3,  pendentes:1, improcedentes:0 },
      { tipo:'Acidente de Trabalho / Doença Ocupacional',    total:5,  procedentes:3,  pendentes:1, improcedentes:1 },
      { tipo:'Assédio Moral / Dano Existencial',             total:3,  procedentes:2,  pendentes:1, improcedentes:0 },
      { tipo:'Equiparação Salarial',                         total:2,  procedentes:1,  pendentes:1, improcedentes:0 },
    ],
  },
  {
    id:'stj',
    label:'STJ / TRF — Instâncias Superiores',
    sigla:'STJ/TRF',
    cor:'#C9A84C',
    acoes: [
      { tipo:'Recurso Especial — Benefício Previdenciário',  total:3,  procedentes:2,  pendentes:1, improcedentes:0 },
      { tipo:'Apelação — Revisão de Benefício',              total:2,  procedentes:1,  pendentes:1, improcedentes:0 },
      { tipo:'Agravo em Recurso Especial',                   total:2,  procedentes:1,  pendentes:0, improcedentes:1 },
    ],
  },
];

function renderBiForuns() {
  const el = document.getElementById('bi-foruns');
  if (!el) return;
  const maxTotal = Math.max(...FORUNS_CONFIG.map(f => f.acoes.reduce((s,a) => s+a.total, 0)));
  el.innerHTML = FORUNS_CONFIG.map(f => {
    const total = f.acoes.reduce((s, a) => s + a.total, 0);
    const proc  = f.acoes.reduce((s, a) => s + a.procedentes, 0);
    const w     = maxTotal ? Math.round((total / maxTotal) * 100) : 0;
    return `
      <div class="bi-row bi-row-click" onclick="abrirDetalheForun('${f.id}')">
        <span class="bi-label">${esc(f.sigla)}</span>
        <div class="bi-bar-wrap">
          <div class="bi-bar" style="width:${w}%;background:${f.cor}"></div>
          <span class="bi-pct">${total} ações · ${proc} proc.</span>
        </div>
        <button class="btn-editar-area" onclick="event.stopPropagation();abrirEditarForun('${f.id}')" title="Editar ações">⚙</button>
        <span class="bi-arrow">›</span>
      </div>`;
  }).join('');
}

function abrirDetalheForun(id) {
  const f = FORUNS_CONFIG.find(x => x.id === id);
  if (!f) return;
  document.getElementById('modal-forum-detalhe')?.remove();

  const totalAcoes = f.acoes.reduce((s, a) => s + a.total, 0);
  const totalProc  = f.acoes.reduce((s, a) => s + a.procedentes, 0);
  const totalPend  = f.acoes.reduce((s, a) => s + a.pendentes, 0);
  const totalImp   = f.acoes.reduce((s, a) => s + a.improcedentes, 0);
  const taxaExito  = totalAcoes ? Math.round((totalProc / totalAcoes) * 100) : 0;

  const linhas = f.acoes.map(a => {
    const w = totalAcoes ? Math.round((a.total / totalAcoes) * 100) : 0;
    return `
      <div class="area-det-row" style="grid-template-columns:1fr 100px auto">
        <div class="area-det-nome">${esc(a.tipo)}</div>
        <div class="area-det-bar-wrap">
          <div class="area-det-bar" style="width:${w}%;background:${f.cor}"></div>
        </div>
        <div class="area-det-nums">
          <span class="area-det-total">${a.total}</span>
          <span class="area-det-prot">✓ ${a.procedentes}</span>
          ${a.pendentes  ? `<span class="area-det-pend">⏳ ${a.pendentes}</span>` : ''}
          ${a.improcedentes ? `<span style="font-size:11px;color:#dc2626;font-weight:600">✗ ${a.improcedentes}</span>` : ''}
        </div>
      </div>`;
  }).join('');

  const m = document.createElement('div');
  m.id = 'modal-forum-detalhe';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box area-det-box">
      <div class="modal-header" style="background:${f.cor}18;border-bottom:2px solid ${f.cor}">
        <div>
          <span class="area-det-titulo">${esc(f.label)}</span>
          <span class="area-det-subtitulo">${totalAcoes} ações judicializadas · Taxa de êxito: ${taxaExito}%</span>
        </div>
        <button class="modal-close" onclick="document.getElementById('modal-forum-detalhe').remove()">✕</button>
      </div>
      <div class="area-det-corpo">
        <div class="area-det-resumo">
          <div class="area-det-kpi">
            <div class="area-det-kpi-val">${totalAcoes}</div>
            <div class="area-det-kpi-lab">Total Ações</div>
          </div>
          <div class="area-det-kpi">
            <div class="area-det-kpi-val" style="color:var(--success)">${totalProc}</div>
            <div class="area-det-kpi-lab">Procedentes</div>
          </div>
          <div class="area-det-kpi">
            <div class="area-det-kpi-val" style="color:#d97706">${totalPend}</div>
            <div class="area-det-kpi-lab">Em Andamento</div>
          </div>
          <div class="area-det-kpi">
            <div class="area-det-kpi-val" style="color:#dc2626">${totalImp}</div>
            <div class="area-det-kpi-lab">Improcedentes</div>
          </div>
        </div>
        <div class="area-det-lista">
          <div class="area-det-lista-titulo">Ações Judicializadas neste Fórum</div>
          ${linhas}
        </div>
        <div style="margin-top:14px;display:flex;justify-content:flex-end">
          <button class="btn-secondary btn-sm" onclick="event.stopPropagation();abrirEditarForun('${f.id}');document.getElementById('modal-forum-detalhe').remove()">⚙ Editar ações</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(m);
}

function abrirEditarForun(id) {
  const f = FORUNS_CONFIG.find(x => x.id === id);
  if (!f) return;
  document.getElementById('modal-editar-forum')?.remove();

  const m = document.createElement('div');
  m.id = 'modal-editar-forum';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box" style="max-width:560px">
      <div class="modal-header" style="background:${f.cor}18;border-bottom:2px solid ${f.cor}">
        <span>⚙ Editar ações — ${esc(f.sigla)}</span>
        <button class="modal-close" onclick="document.getElementById('modal-editar-forum').remove()">✕</button>
      </div>
      <div style="padding:20px">
        <div style="display:grid;grid-template-columns:1fr 60px 60px 60px 30px;gap:6px;font-size:10px;font-weight:700;color:var(--text-muted);text-transform:uppercase;margin-bottom:6px;padding:0 4px">
          <span>Tipo de Ação</span><span style="text-align:center">Total</span><span style="text-align:center">Proc.</span><span style="text-align:center">Pend.</span><span></span>
        </div>
        <div id="editar-forum-lista-${id}"></div>
        <div class="demanda-add-row" style="margin-top:14px">
          <input id="nova-acao-forum-${id}" class="calc-input" placeholder="Nova ação judicializada..." style="margin:0;flex:1"/>
          <button class="btn-primary" onclick="adicionarAcaoForun('${id}')">+ Adicionar</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(m);
  renderEditarForunLista(id);
}

function renderEditarForunLista(id) {
  const f  = FORUNS_CONFIG.find(x => x.id === id);
  const el = document.getElementById('editar-forum-lista-' + id);
  if (!f || !el) return;
  el.innerHTML = f.acoes.map((a, i) => `
    <div class="demanda-item-modal" style="grid-template-columns:1fr 60px 60px 60px 30px;display:grid;gap:6px;align-items:center;padding:6px 4px;border-bottom:1px solid var(--border)">
      <input class="calc-input" value="${esc(a.tipo)}" style="margin:0;font-size:12px"
        onblur="editarAcaoForun('${id}',${i},'tipo',this.value)"/>
      <input class="calc-input" type="number" value="${a.total}" min="0" style="margin:0;text-align:center;padding:6px 4px"
        onblur="editarAcaoForun('${id}',${i},'total',this.value)"/>
      <input class="calc-input" type="number" value="${a.procedentes}" min="0" style="margin:0;text-align:center;padding:6px 4px"
        onblur="editarAcaoForun('${id}',${i},'procedentes',this.value)"/>
      <input class="calc-input" type="number" value="${a.pendentes}" min="0" style="margin:0;text-align:center;padding:6px 4px"
        onblur="editarAcaoForun('${id}',${i},'pendentes',this.value)"/>
      <button class="btn-danger-sm" onclick="removerAcaoForun('${id}',${i})">✕</button>
    </div>`).join('') || '<div style="padding:12px;color:var(--text-muted)">Nenhuma ação cadastrada.</div>';
}

function editarAcaoForun(id, i, campo, val) {
  const f = FORUNS_CONFIG.find(x => x.id === id);
  if (!f) return;
  if (campo === 'tipo') f.acoes[i].tipo = val.trim();
  else f.acoes[i][campo] = parseInt(val) || 0;
  renderBiForuns();
}
function removerAcaoForun(id, i) {
  const f = FORUNS_CONFIG.find(x => x.id === id);
  if (!f) return;
  f.acoes.splice(i, 1);
  renderEditarForunLista(id);
  renderBiForuns();
  toast('✓ Ação removida.');
}
function adicionarAcaoForun(id) {
  const f     = FORUNS_CONFIG.find(x => x.id === id);
  const input = document.getElementById('nova-acao-forum-' + id);
  const nome  = input?.value.trim();
  if (!f || !nome) { toast('Digite o nome da ação.','warn'); return; }
  f.acoes.push({ tipo: nome, total: 0, procedentes: 0, pendentes: 0, improcedentes: 0 });
  input.value = '';
  renderEditarForunLista(id);
  renderBiForuns();
  toast(`✓ "${esc(nome)}" adicionada ao ${esc(f.sigla)}.`);
}

function abrirDetalheArea(id) {
  const area = AREAS_CONFIG.find(a => a.id === id);
  if (!area) return;
  document.getElementById('modal-area-detalhe')?.remove();

  const totalDemandas  = area.demandas.reduce((s, d) => s + d.total, 0);
  const totalProtoc    = area.demandas.reduce((s, d) => s + d.protocoladas, 0);

  const linhas = area.demandas.map(d => {
    const pct = Math.round((d.total / totalDemandas) * 100);
    const pend = d.total - d.protocoladas;
    return `
      <div class="area-det-row">
        <div class="area-det-nome">${esc(d.nome)}</div>
        <div class="area-det-bar-wrap">
          <div class="area-det-bar" style="width:${pct}%;background:${area.cor}"></div>
        </div>
        <div class="area-det-nums">
          <span class="area-det-total">${d.total} ações</span>
          <span class="area-det-prot">✓ ${d.protocoladas} protoc.</span>
          ${pend ? `<span class="area-det-pend">⏳ ${pend} pend.</span>` : ''}
        </div>
      </div>`;
  }).join('');

  const m = document.createElement('div');
  m.id = 'modal-area-detalhe';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box area-det-box">
      <div class="modal-header" style="background:${area.cor}20;border-bottom:2px solid ${area.cor}">
        <div>
          <span class="area-det-titulo">${esc(area.label)}</span>
          <span class="area-det-subtitulo">${totalDemandas} ações · ${totalProtoc} protocoladas</span>
        </div>
        <button class="modal-close" onclick="document.getElementById('modal-area-detalhe').remove()">✕</button>
      </div>
      <div class="area-det-corpo">
        <div class="area-det-resumo">
          <div class="area-det-kpi">
            <div class="area-det-kpi-val">${totalDemandas}</div>
            <div class="area-det-kpi-lab">Total de Ações</div>
          </div>
          <div class="area-det-kpi">
            <div class="area-det-kpi-val" style="color:var(--success)">${totalProtoc}</div>
            <div class="area-det-kpi-lab">Protocoladas</div>
          </div>
          <div class="area-det-kpi">
            <div class="area-det-kpi-val" style="color:#d97706">${totalDemandas - totalProtoc}</div>
            <div class="area-det-kpi-lab">Pendentes</div>
          </div>
          <div class="area-det-kpi">
            <div class="area-det-kpi-val">${area.demandas.length}</div>
            <div class="area-det-kpi-lab">Tipos de Demanda</div>
          </div>
        </div>
        <div class="area-det-lista">
          <div class="area-det-lista-titulo">Separação por Tipo de Demanda</div>
          ${linhas}
        </div>
      </div>
    </div>`;
  document.body.appendChild(m);
}

document.addEventListener('DOMContentLoaded', function() {
  // Ocultar app até o login
  document.getElementById('sidebar').style.display      = 'none';
  document.getElementById('main-content').style.display = 'none';

  inicializarLogin();

  gerarNotificacoesCompletas();
  renderFollowups();
  renderFollowupCount();
  renderAgendaEventos();
  renderAndamentos();
  renderKanban();
  renderAlertasDashboard();
  renderDashboardEstrategia();
  renderBiAreas();
  renderBiForuns();
  renderTabelaClientes();
  // Alertas de prazos integrados
  _atualizarPainelAlertas();
  const syncEl = document.getElementById('prazos-ultima-sync');
  if (syncEl) syncEl.textContent = 'Sincronizado às ' + new Date().toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'});
});

// ============================================
// MINI CALENDÁRIO DO DASHBOARD
// ============================================

const MESES_PT = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

let _dashCalAno  = new Date().getFullYear();
let _dashCalMes  = new Date().getMonth();
let _dashCalDia  = new Date().getDate();

const TIPO_COR_CAL = {
  audiencia:'leg-audiencia', prazo:'leg-prazo', reuniao:'leg-audiencia',
  inss_exigencia:'leg-inss', inss_decisao:'leg-inss', inss_recurso:'leg-inss', inss_pericia:'leg-inss',
  andamento:'leg-interno', interno:'leg-interno',
};

function dashCalMes(delta) {
  _dashCalMes += delta;
  if (_dashCalMes > 11) { _dashCalMes = 0; _dashCalAno++; }
  if (_dashCalMes < 0)  { _dashCalMes = 11; _dashCalAno--; }
  renderDashCalendario();
}

function dashCalHoje() {
  const agora = new Date();
  _dashCalAno = agora.getFullYear();
  _dashCalMes = agora.getMonth();
  _dashCalDia = agora.getDate();
  renderDashCalendario();
}

function renderDashCalendario(diaSelecionado) {
  if (diaSelecionado !== undefined) _dashCalDia = diaSelecionado;
  const grid   = document.getElementById('dash-cal-grid');
  const titulo = document.getElementById('dash-cal-titulo');
  if (!grid || !titulo) return;

  titulo.textContent = MESES_PT[_dashCalMes] + ' ' + _dashCalAno;

  const hoje        = new Date();
  const primeiroDia = new Date(_dashCalAno, _dashCalMes, 1).getDay();
  const diasNoMes   = new Date(_dashCalAno, _dashCalMes + 1, 0).getDate();

  const eventosPorDia = {};
  (GESTOR.eventos || []).forEach(e => {
    if (!e.data) return;
    const [ano, mes, dia] = e.data.split('-').map(Number);
    if (ano === _dashCalAno && mes - 1 === _dashCalMes) {
      if (!eventosPorDia[dia]) eventosPorDia[dia] = [];
      eventosPorDia[dia].push(e);
    }
  });

  const TIPO_LABEL = {
    audiencia:'Audiência', prazo:'Prazo', reuniao:'Reunião',
    inss_exigencia:'Exigência INSS', inss_decisao:'Decisão INSS',
    inss_recurso:'Recurso INSS', inss_pericia:'Perícia INSS',
    andamento:'Andamento', interno:'Interno',
  };

  let html = '';
  for (let i = 0; i < primeiroDia; i++) html += '<div class="dash-cal-cell-g vazio"></div>';

  for (let d = 1; d <= diasNoMes; d++) {
    const isHoje = d === hoje.getDate() && _dashCalMes === hoje.getMonth() && _dashCalAno === hoje.getFullYear();
    const isSel  = d === _dashCalDia;
    const evs    = eventosPorDia[d] || [];
    const temCritico = evs.some(e => e.critico);

    // Até 3 chips de evento visíveis na célula
    const chips = evs.slice(0, 3).map(e => {
      const cor = TIPO_COR_CAL[e.tipo] || 'leg-interno';
      const concluido = e.status === 'concluido';
      const titulo = esc((e.titulo || '').substring(0, 26));
      return `<div class="dash-cal-chip ${cor}${concluido?' chip-concluido':''}" onclick="event.stopPropagation();abrirModalEvento('${e.id}')" title="${esc(e.titulo)}">${concluido?'✓ ':''}${titulo}</div>`;
    }).join('');
    const mais = evs.length > 3 ? `<div class="dash-cal-mais">+${evs.length - 3} mais</div>` : '';

    html += `<div class="dash-cal-cell-g${isHoje ? ' hoje' : ''}${isSel ? ' selecionado' : ''}${temCritico ? ' critico' : ''}" onclick="renderDashCalendario(${d});renderDashEventosDia(${d})">
      <div class="dash-cal-num${isHoje ? ' hoje-num' : ''}">${d}</div>
      <div class="dash-cal-chips">${chips}${mais}</div>
    </div>`;
  }
  grid.innerHTML = html;
  renderDashEventosDia(_dashCalDia);
}

function renderDashEventosDia(dia) {
  _dashCalDia = dia;
  const lista  = document.getElementById('dash-eventos-lista');
  const titulo = document.getElementById('dash-eventos-titulo');
  if (!lista) return;

  const hoje = new Date();
  const isHoje = dia === hoje.getDate() && _dashCalMes === hoje.getMonth() && _dashCalAno === hoje.getFullYear();
  if (titulo) titulo.textContent = isHoje
    ? 'Eventos de hoje — ' + dia + ' de ' + MESES_PT[_dashCalMes]
    : 'Eventos — ' + dia + ' de ' + MESES_PT[_dashCalMes];

  const dataStr = `${_dashCalAno}-${String(_dashCalMes+1).padStart(2,'0')}-${String(dia).padStart(2,'0')}`;
  const evs = (GESTOR.eventos || []).filter(e => e.data === dataStr).sort((a,b) => (a.hora||'').localeCompare(b.hora||''));

  if (!evs.length) {
    lista.innerHTML = '<div class="dash-sem-eventos">Nenhum evento neste dia</div>';
    return;
  }

  const TIPO_ICON = { audiencia:'⚖', prazo:'⏱', reuniao:'🤝', andamento:'📋',
    inss_exigencia:'🏛', inss_decisao:'🏛', inss_recurso:'🏛', inss_pericia:'🏛', interno:'📌' };

  const STATUS_COR  = { concluido:'#059669', cancelado:'#9ca3af', pendente:'' };
  const STATUS_ICN  = { concluido:'✓', cancelado:'✕', pendente:'' };

  lista.innerHTML = evs.map(e => {
    const cor     = TIPO_COR_CAL[e.tipo] || 'leg-interno';
    const icon    = TIPO_ICON[e.tipo]    || '📌';
    const isMeet  = e.meet && e.meetUrl;
    const concluido = e.status === 'concluido';
    const cancelado = e.status === 'cancelado';
    const atrib   = e.atribuidoPara || e.responsavel || '';
    const u       = USUARIOS_SISTEMA.find(x => x.nome === atrib);
    const avatarCor = u?.cor || '#64748b';
    const avatarIni = u?.iniciais || atrib.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase();

    return `<div class="dash-evento-item${concluido?' ev-concluido':''}${cancelado?' ev-cancelado':''}" onclick="abrirModalEvento('${e.id}')">
      <div class="dash-ev-hora">${e.hora || '—'}</div>
      <span class="dash-ev-dot ${cor}"></span>
      <div class="dash-ev-info">
        <span class="dash-ev-titulo${e.critico && !concluido ? ' critico' : ''}">${concluido?'<s>':''
        }${esc(e.titulo)}${concluido?'</s>':''}</span>
        <div style="display:flex;align-items:center;gap:6px;margin-top:3px;flex-wrap:wrap">
          ${e.cliente ? `<span class="dash-ev-meta">${icon} ${esc(e.cliente)}</span>` : ''}
          ${atrib ? `<span class="ev-atrib-mini" style="background:${avatarCor}22;color:${avatarCor}">${avatarIni} ${esc(atrib.split(' ')[0])}</span>` : ''}
          ${concluido ? `<span class="ev-status-mini" style="color:#059669">✓ Concluído</span>` : ''}
          ${cancelado ? `<span class="ev-status-mini" style="color:#9ca3af">✕ Cancelado</span>` : ''}
        </div>
      </div>
      ${isMeet && !concluido ? `<a href="#" class="btn-meet" onclick="event.stopPropagation();entrarMeet('${e.meetUrl}');return false">📹</a>` : ''}
      ${!concluido && !cancelado ? '<span class="ev-abrir-icon">›</span>' : ''}
    </div>`;
  }).join('');
}

// ============================================
// MÓDULO PETIÇÕES IA + INTEGRAÇÃO GERID
// ============================================

// ============================================
// TIPOS DE DEMANDA — editável pelo escritório
// ============================================
const DEMANDAS_ESCRITORIO = {
  lista: [
    { id:'D1',  nome:'Aposentadoria por Tempo de Contribuição' },
    { id:'D2',  nome:'Aposentadoria por Idade' },
    { id:'D3',  nome:'Aposentadoria por Invalidez' },
    { id:'D4',  nome:'Aposentadoria Especial' },
    { id:'D5',  nome:'Auxílio-Doença (Incapacidade Temporária)' },
    { id:'D6',  nome:'Auxílio-Acidente' },
    { id:'D7',  nome:'BPC/LOAS' },
    { id:'D8',  nome:'Pensão por Morte' },
    { id:'D9',  nome:'Salário-Maternidade' },
    { id:'D10', nome:'Reajuste de Plano de Saúde' },
    { id:'D11', nome:'Revisão de RMI / Benefício' },
    { id:'D12', nome:'Recurso Administrativo INSS' },
    { id:'D13', nome:'Recurso ao CRPS' },
  ],

  adicionar(nome) {
    const id = 'D' + Date.now();
    this.lista.push({ id, nome: nome.trim() });
    return id;
  },

  remover(id) {
    this.lista = this.lista.filter(d => d.id !== id);
  },

  renomear(id, novoNome) {
    const d = this.lista.find(x => x.id === id);
    if (d) d.nome = novoNome.trim();
  },
};

// Mapeamento automático: benefício selecionado → tipo de demanda
const BENEFICIO_PARA_DEMANDA = {
  'Aposentadoria por Tempo de Contribuição': 'D1',
  'Aposentadoria por Idade':                 'D2',
  'Aposentadoria por Invalidez':             'D3',
  'Aposentadoria Especial':                  'D4',
  'Auxílio por Incapacidade Temporária (Auxílio-Doença)': 'D5',
  'Auxílio-Acidente':                        'D6',
  'BPC/LOAS — Benefício de Prestação Continuada': 'D7',
  'Pensão por Morte':                        'D8',
  'Salário-Maternidade':                     'D9',
};

function popularSelectDemanda() {
  const grp = document.getElementById('pa-demanda-group');
  const sel = document.getElementById('pa-demanda');
  if (!grp || !sel) return;
  grp.innerHTML = DEMANDAS_ESCRITORIO.lista.map(d =>
    `<option value="${esc(d.id)}">${esc(d.nome)}</option>`
  ).join('');
}

function onChangeDemanda(sel) {
  const custom = document.getElementById('pa-demanda-custom');
  if (custom) custom.style.display = sel.value === 'custom' ? 'block' : 'none';
}

// Quando benefício muda → atualiza demanda automaticamente
function sincronizarDemanda() {
  const beneficio = document.getElementById('pa-beneficio');
  const demanda   = document.getElementById('pa-demanda');
  if (!beneficio || !demanda) return;
  const texto = beneficio.options[beneficio.selectedIndex]?.text || '';
  const id    = BENEFICIO_PARA_DEMANDA[texto];
  if (id) demanda.value = id;
}

// ===== MODAL GERENCIAR DEMANDAS =====
function abrirGerenciarDemandas() {
  fecharModalGerenciarDemandas();
  const m = document.createElement('div');
  m.id = 'modal-demandas';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box" style="max-width:520px">
      <div class="modal-header">
        <span>⚙ Tipos de Demanda do Escritório</span>
        <button class="modal-close" onclick="fecharModalGerenciarDemandas()">✕</button>
      </div>
      <div style="padding:20px">
        <p style="font-size:12px;color:var(--text-muted);margin-bottom:14px">
          Esses tipos aparecem no campo <strong>Tipo de Demanda</strong> e são registrados no relatório de cada protocolo. Adicione, edite ou remova conforme o escritório precisar.
        </p>
        <div id="demandas-lista-modal"></div>
        <div class="demanda-add-row">
          <input id="nova-demanda-input" class="calc-input" placeholder="Nome da nova demanda..." style="margin:0;flex:1"/>
          <button class="btn-primary" onclick="adicionarDemandaModal()">+ Adicionar</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(m);
  renderDemandasModal();
}

function fecharModalGerenciarDemandas() {
  document.getElementById('modal-demandas')?.remove();
}

function renderDemandasModal() {
  const el = document.getElementById('demandas-lista-modal');
  if (!el) return;
  el.innerHTML = DEMANDAS_ESCRITORIO.lista.map(d => `
    <div class="demanda-item-modal" id="dm-${esc(d.id)}">
      <input class="calc-input demanda-input-edit" value="${esc(d.nome)}" id="dm-input-${esc(d.id)}"
        onblur="salvarEdicaoDemanda('${esc(d.id)}')" style="margin:0;flex:1"/>
      <button class="btn-sm btn-danger-sm" onclick="removerDemandaModal('${esc(d.id)}')" title="Remover">✕</button>
    </div>`).join('');
}

function salvarEdicaoDemanda(id) {
  const input = document.getElementById('dm-input-' + id);
  if (input && input.value.trim()) {
    DEMANDAS_ESCRITORIO.renomear(id, input.value);
    popularSelectDemanda();
    toast('✓ Demanda atualizada.');
  }
}

function removerDemandaModal(id) {
  DEMANDAS_ESCRITORIO.remover(id);
  renderDemandasModal();
  popularSelectDemanda();
  toast('✓ Demanda removida.');
}

function adicionarDemandaModal() {
  const input = document.getElementById('nova-demanda-input');
  const nome  = input?.value.trim();
  if (!nome) { toast('Digite o nome da demanda.', 'warn'); return; }
  DEMANDAS_ESCRITORIO.adicionar(nome);
  input.value = '';
  renderDemandasModal();
  popularSelectDemanda();
  toast(`✓ "${esc(nome)}" adicionada à lista de demandas.`);
}

const BANCO_PECAS = {
  judiciais: [
    { id:'PJ1', titulo:'Recurso de Apelação — Silva vs Banco', area:'Previdenciário', tipo:'judicial', data:'26/06/2026', paginas:18, status:'gerada' },
    { id:'PJ2', titulo:'Contestação — Costa vs INSS', area:'Previdenciário', tipo:'judicial', data:'25/06/2026', paginas:12, status:'gerada' },
    { id:'PJ3', titulo:'Razões Finais — Ferreira Trabalhista', area:'Trabalhista', tipo:'judicial', data:'24/06/2026', paginas:8, status:'gerada' },
    { id:'PJ4', titulo:'Petição Inicial — Oliveira Cível', area:'Cível', tipo:'judicial', data:'23/06/2026', paginas:22, status:'gerada' },
  ],
  administrativas: [
    { id:'PA1', titulo:'Requerimento de Aposentadoria por Tempo — João Silva', area:'Previdenciário', tipo:'administrativa', data:'10/03/2026', protocolo:'1.024.987.654-3', status:'protocolada', nb:'182.367.490-5' },
    { id:'PA2', titulo:'Recurso Administrativo — Maria Costa (Invalidez)', area:'Previdenciário', tipo:'administrativa', data:'05/05/2026', protocolo:'1.024.654.321-7', status:'protocolada', nb:'182.440.312-1' },
  ],
};

const PA_DESCRICOES = {
  requerimento_beneficio: 'Requerimento inicial de concessão de benefício previdenciário junto ao INSS, com fundamentos legais e documentação comprobatória.',
  recurso_administrativo: 'Recurso administrativo de 1ª instância contra decisão do INSS — prazo de 30 dias da ciência da decisão (art. 305 do Decreto 3.048/99).',
  recurso_crps: 'Recurso ao Conselho de Recursos da Previdência Social (CRPS) — 2ª instância administrativa — prazo de 30 dias.',
  revisao_rmi: 'Pedido de revisão do valor da Renda Mensal Inicial (RMI), com recálculo do salário de benefício e período básico de cálculo.',
  impugnacao_decadencia: 'Impugnação ao prazo decadencial aplicado pelo INSS — demonstração de que o prazo não pode ser oposto ao segurado no caso concreto.',
  desacumulacao: 'Pedido de análise de acumulação de benefícios previdenciários, com fundamento no art. 124 da Lei 8.213/91.',
  cancelamento: 'Pedido de cancelamento de exigência documental indevida, com comprovação de que o documento já foi apresentado ou é desnecessário.',
  recurso_pericia: 'Recurso contra resultado de perícia médica do INSS, com apresentação de documentação médica complementar e laudo técnico.',
};

function trocarTabPeticao(aba, btn) {
  document.querySelectorAll('.pet-tab-content').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.pet-tab').forEach(el => el.classList.remove('active'));
  document.getElementById('pet-tab-' + aba).style.display = 'block';
  btn.classList.add('active');

  if (aba === 'administrativa') {
    atualizarAvisoGerid();
    renderListaAdmin();
    popularSelectDemanda();
    // conecta evento de mudança do benefício ao sync automático
    const benef = document.getElementById('pa-beneficio');
    if (benef && !benef._syncOk) {
      benef.addEventListener('change', sincronizarDemanda);
      benef._syncOk = true;
    }
    sincronizarDemanda();
  }
  if (aba === 'banco') { renderBancoPecas(); renderModelosUpload(); }
  if (aba === 'modelos') { renderModelos(); renderModelosCats(); }
}

function atualizarAvisoGerid() {
  const aviso = document.getElementById('pet-gerid-aviso');
  if (!aviso) return;
  if (GERID.sessaoAtiva) {
    aviso.className = 'pet-gerid-aviso conectado';
    aviso.innerHTML = `
      <span class="pet-gerid-aviso-icon">✅</span>
      <div><strong>INSS/GERID conectado</strong><br>
      <small>Sessão ativa · Dr. Klebson Cavalcanti — OAB/SP 123.456 · Protocolo direto habilitado.</small></div>
      <span class="gerid-badge conectado" style="flex-shrink:0">● Conectado</span>`;
  } else {
    aviso.className = 'pet-gerid-aviso';
    aviso.innerHTML = `
      <span class="pet-gerid-aviso-icon">🏛</span>
      <div><strong>Conecte ao INSS/GERID para protocolar petições administrativas</strong><br>
      <small>Sem conexão você ainda pode gerar e baixar a peça. Com conexão, protocola direto no INSS.</small></div>
      <button class="btn-primary btn-sm" onclick="showPage('integracoes');setTimeout(abrirPainelGerid,200)">Conectar ao GERID</button>`;
  }
}

function atualizarDescricaoPeticao() {
  const tipo = document.getElementById('pa-tipo').value;
  const box = document.getElementById('pa-desc-box');
  if (box) box.textContent = PA_DESCRICOES[tipo] || '';
}

function gerarPeticaoAdmin(acao) {
  const tipo      = document.getElementById('pa-tipo');
  const cliente   = document.getElementById('pa-cliente');
  const beneficio = document.getElementById('pa-beneficio');
  const nb        = document.getElementById('pa-nb').value.trim();
  const fatos     = document.getElementById('pa-fatos').value.trim();
  const demandaSel = document.getElementById('pa-demanda');
  const demandaCustom = document.getElementById('pa-demanda-custom');

  if (!fatos) {
    toast('Preencha os fundamentos e fatos relevantes.', 'warn');
    document.getElementById('pa-fatos').focus();
    return;
  }

  const tipoLabel    = tipo.options[tipo.selectedIndex].text;
  const clienteLabel = cliente.options[cliente.selectedIndex].text.split(' — ')[0];
  const beneficioLabel = beneficio.options[beneficio.selectedIndex].text;
  const titulo       = `${tipoLabel} — ${clienteLabel}`;

  // Resolve tipo de demanda (automático ou manual)
  let demandaLabel = '';
  if (demandaSel) {
    const selVal = demandaSel.value;
    if (selVal === 'custom' && demandaCustom?.value.trim()) {
      demandaLabel = demandaCustom.value.trim();
    } else if (selVal) {
      const found = DEMANDAS_ESCRITORIO.lista.find(d => d.id === selVal);
      demandaLabel = found ? found.nome : '';
    }
  }
  // Fallback automático se não selecionou
  if (!demandaLabel) {
    const autoId = BENEFICIO_PARA_DEMANDA[beneficioLabel];
    const autoD  = autoId ? DEMANDAS_ESCRITORIO.lista.find(d => d.id === autoId) : null;
    demandaLabel = autoD ? autoD.nome : beneficioLabel;
  }

  if (acao === 'baixar') {
    toast(`📄 Gerando peça com IA...<br><small>→ ${esc(titulo)}</small>`);
    setTimeout(() => {
      BANCO_PECAS.administrativas.push({
        id:'PA'+Date.now(), titulo, area:'Previdenciário', tipo:'administrativa',
        data: dataHoje(), protocolo:null, status:'gerada', nb: nb || null,
        demanda: demandaLabel, beneficio: beneficioLabel,
      });
      toast(`✓ Peça gerada!<br><small>→ Disponível no Banco de Peças para download</small>`);
      renderListaAdmin();
    }, 1800);
    return;
  }

  // Protocolar no INSS
  if (!GERID.sessaoAtiva) {
    toast('⚠️ Conecte ao GERID antes de protocolar.', 'warn');
    showPage('gerid');
    return;
  }

  const btn = document.getElementById('btn-protocolar-inss');
  btn.textContent = '🔄 Protocolando no INSS...';
  btn.disabled = true;

  setTimeout(() => {
    const protocolo = '1.0' + Math.floor(Math.random() * 90000000 + 10000000) + '-' + Math.floor(Math.random()*9);
    const hoje = dataHoje();
    const novaPeca = {
      id:'PA'+Date.now(), titulo, area:'Previdenciário', tipo:'administrativa',
      data: hoje, protocolo, status:'protocolada', nb: nb || '—',
      demanda: demandaLabel, beneficio: beneficioLabel,
    };
    BANCO_PECAS.administrativas.push(novaPeca);

    // Adiciona aos requerimentos do GERID
    GERID.requerimentos.unshift({
      nb: nb || '—', protocolo,
      beneficiario: clienteLabel,
      cpf: '—',
      tipo: demandaLabel,
      dataEntrada: hoje,
      situacao: 'protocolo_gerado',
      atualizacao: hoje,
      procGestor: null,
    });

    btn.textContent = '🏛 Gerar e Protocolar no INSS';
    btn.disabled = false;
    renderListaAdmin();

    toast(`✓ Protocolado no INSS!<br><small>🗂 Demanda: <strong>${esc(demandaLabel)}</strong><br>→ Protocolo: ${protocolo}</small>`);
  }, 2200);
}

function dataHoje() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
}

function renderListaAdmin() {
  const lista = document.getElementById('lista-pecas-admin');
  if (!lista) return;
  const pecas = BANCO_PECAS.administrativas;
  if (!pecas.length) {
    lista.innerHTML = '<div class="empty-state">Nenhuma petição administrativa gerada ainda.</div>';
    return;
  }
  lista.innerHTML = pecas.slice().reverse().map(p => `
    <div class="peca-item peca-admin">
      <div class="peca-icon">🏛</div>
      <div class="peca-info">
        <span class="peca-nome">${esc(p.titulo)}</span>
        ${p.demanda ? `<span class="peca-demanda-tag">🗂 ${esc(p.demanda)}</span>` : ''}
        <span class="peca-meta">
          ${esc(p.data)}
          ${p.protocolo ? `· <strong>Protocolo: ${esc(p.protocolo)}</strong>` : '· Não protocolada'}
          ${p.nb && p.nb !== '—' ? ` · NB: ${esc(p.nb)}` : ''}
        </span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
        <span class="gerid-sit-badge ${p.status === 'protocolada' ? 'gerid-sit-protocolo' : 'gerid-sit-analise'}">
          ${p.status === 'protocolada' ? '✓ Protocolada' : 'Gerada'}
        </span>
        <div style="display:flex;gap:5px;margin-top:4px">
          <button class="btn-sm">Baixar</button>
          ${p.status !== 'protocolada' ? `<button class="btn-sm" onclick="protocolarPecaExistente('${esc(p.id)}')">Protocolar</button>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function protocolarPecaExistente(id) {
  if (!GERID.sessaoAtiva) { toast('⚠️ Conecte ao GERID primeiro.','warn'); showPage('integracoes'); setTimeout(abrirPainelGerid,200); return; }
  const peca = BANCO_PECAS.administrativas.find(p => p.id === id);
  if (!peca) return;
  toast('🔄 Protocolando no INSS...');
  setTimeout(() => {
    peca.protocolo = '1.0' + Math.floor(Math.random()*90000000+10000000) + '-' + Math.floor(Math.random()*9);
    peca.status = 'protocolada';
    renderListaAdmin();
    toast(`✓ Protocolado!<br><small>→ Protocolo: ${peca.protocolo}</small>`);
  }, 1800);
}

function gerarPecaJudicial() {
  const tipo = document.getElementById('pj-tipo').value;
  const area = document.getElementById('pj-area').value;
  toast(`✦ Gerando peça com IA...<br><small>→ ${esc(tipo)} · ${esc(area)}</small>`);
  setTimeout(() => {
    BANCO_PECAS.judiciais.unshift({
      id:'PJ'+Date.now(), titulo:`${tipo} — Novo`,
      area, tipo:'judicial', data:'27/06/2026', paginas:10, status:'gerada',
    });
    toast(`✓ Peça gerada!<br><small>→ Disponível no Banco de Peças</small>`);
    renderListaJudiciais();
  }, 2000);
}

function renderListaJudiciais() {
  const lista = document.getElementById('lista-pecas-judiciais');
  if (!lista) return;
  lista.innerHTML = BANCO_PECAS.judiciais.map(p => `
    <div class="peca-item">
      <div class="peca-icon">📄</div>
      <div class="peca-info">
        <span class="peca-nome">${esc(p.titulo)}</span>
        <span class="peca-meta">${esc(p.area)} · Gerado ${esc(p.data)} · ${p.paginas} págs</span>
      </div>
      <div style="display:flex;gap:6px">
        <button class="btn-sm">Editar</button>
        <button class="btn-sm">Baixar</button>
      </div>
    </div>
  `).join('');
}

// ============================================
// UPLOAD DE MODELOS DE PETIÇÃO
// ============================================
if (!window.MODELOS_UPLOAD) window.MODELOS_UPLOAD = [];
let _arquivosPendentes = [];

function uploadModeloPeca(event) {
  event.preventDefault();
  document.getElementById('upload-modelos-area')?.classList.remove('drag-over');
  const files = Array.from(event.dataTransfer?.files || []);
  _processarArquivosModelo(files);
}

function uploadModeloPecaInput(input) {
  const files = Array.from(input.files || []);
  _processarArquivosModelo(files);
  input.value = '';
}

function _processarArquivosModelo(files) {
  const permitidos = ['.docx','.doc','.pdf','.odt'];
  const validos = files.filter(f => permitidos.some(ext => f.name.toLowerCase().endsWith(ext)));
  if (!validos.length) { toast('⚠️ Formato não suportado. Use .docx, .doc, .pdf ou .odt', 'warn'); return; }
  const grandes = validos.filter(f => f.size > 10 * 1024 * 1024);
  if (grandes.length) { toast(`⚠️ Arquivo(s) acima de 10 MB: ${grandes.map(f=>f.name).join(', ')}`, 'warn'); return; }
  _arquivosPendentes = validos;
  document.getElementById('upload-modelos-form').style.display = 'block';
  _renderArquivosPendentes();
}

function _renderArquivosPendentes() {
  const lista = document.getElementById('upload-modelos-lista');
  if (!lista) return;
  const iconeTipo = n => n.endsWith('.pdf') ? '📕' : n.endsWith('.docx')||n.endsWith('.doc') ? '📘' : '📄';
  lista.innerHTML = `
    <div class="upload-pendentes-titulo">📎 Arquivos selecionados (${_arquivosPendentes.length})</div>
    ${_arquivosPendentes.map((f,i) => `
      <div class="upload-pendente-item">
        <span>${iconeTipo(f.name)} ${esc(f.name)}</span>
        <span style="color:var(--text-muted);font-size:11px">${(f.size/1024).toFixed(0)} KB</span>
        <button class="btn-sm" style="color:var(--danger)" onclick="_removerArquivoPendente(${i})">✕</button>
      </div>`).join('')}`;
}

function _removerArquivoPendente(idx) {
  _arquivosPendentes.splice(idx, 1);
  if (!_arquivosPendentes.length) { cancelarUploadModelo(); return; }
  _renderArquivosPendentes();
}

function cancelarUploadModelo() {
  _arquivosPendentes = [];
  document.getElementById('upload-modelos-form').style.display = 'none';
  document.getElementById('upload-modelos-lista').innerHTML = '';
}

function confirmarUploadModelo() {
  if (!_arquivosPendentes.length) return;
  const tipo = document.getElementById('upload-modelo-tipo')?.value.trim();
  const area = document.getElementById('upload-modelo-area')?.value;
  const cat  = document.getElementById('upload-modelo-cat')?.value;
  if (!tipo) { toast('⚠️ Informe o tipo de peça.', 'warn'); return; }
  const hoje = new Date().toLocaleDateString('pt-BR');
  _arquivosPendentes.forEach(f => {
    MODELOS_UPLOAD.push({
      id:       'MU' + Date.now() + Math.random().toString(36).slice(2,6),
      nome:     f.name,
      tipo,
      area,
      categoria: cat,
      tamanho:  (f.size/1024).toFixed(0) + ' KB',
      data:     hoje,
      envioPor: nomeExibicao(USUARIO_ATUAL),
      _file:    f,
    });
  });
  cancelarUploadModelo();
  renderModelosUpload();
  toast(`✅ ${_arquivosPendentes.length > 1 ? `${MODELOS_UPLOAD.length} modelos salvos` : `"${MODELOS_UPLOAD[MODELOS_UPLOAD.length-1]?.tipo}" salvo`} no Banco de Peças!`);
}

function renderModelosUpload(filtro='') {
  const lista = document.getElementById('upload-modelos-lista');
  if (!lista || _arquivosPendentes.length) return;
  let itens = MODELOS_UPLOAD;
  if (filtro) itens = itens.filter(m => m.nome.toLowerCase().includes(filtro) || m.tipo.toLowerCase().includes(filtro));
  if (!itens.length) { lista.innerHTML = '<div class="empty-state" style="padding:12px">Nenhum modelo enviado ainda.</div>'; return; }
  const iconeTipo = n => n.endsWith('.pdf') ? '📕' : n.endsWith('.docx')||n.endsWith('.doc') ? '📘' : '📄';
  lista.innerHTML = `
    <div class="upload-pendentes-titulo">📁 Modelos Enviados (${itens.length})</div>
    ${itens.map(m => `
      <div class="peca-item">
        <div class="peca-icon" style="font-size:22px">${iconeTipo(m.nome)}</div>
        <div class="peca-info">
          <span class="peca-nome">${esc(m.tipo)}</span>
          <span class="peca-meta">${esc(m.area)} · ${esc(m.categoria)} · ${esc(m.nome)} · ${esc(m.tamanho)} · Enviado por ${esc(m.envioPor)} em ${esc(m.data)}</span>
        </div>
        <div style="display:flex;gap:6px;align-items:center;flex-shrink:0">
          <span class="gerid-sit-badge gerid-sit-analise">${esc(m.categoria)}</span>
          <button class="btn-sm" onclick="_baixarModeloUpload('${m.id}')">⬇ Baixar</button>
          ${['admin','socio'].includes(USUARIO_ATUAL?.perfil) ? `<button class="btn-sm" style="color:var(--danger)" onclick="_excluirModeloUpload('${m.id}')">✕</button>` : ''}
        </div>
      </div>`).join('')}`;
}

function _baixarModeloUpload(id) {
  const m = MODELOS_UPLOAD.find(x => x.id === id);
  if (!m || !m._file) { toast('Arquivo não disponível para download nesta sessão.', 'warn'); return; }
  const url = URL.createObjectURL(m._file);
  const a = document.createElement('a'); a.href = url; a.download = m.nome;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast(`⬇ Baixando "${esc(m.nome)}"...`);
}

function _excluirModeloUpload(id) {
  const idx = MODELOS_UPLOAD.findIndex(x => x.id === id);
  if (idx === -1) return;
  const nome = MODELOS_UPLOAD[idx].tipo;
  MODELOS_UPLOAD.splice(idx, 1);
  renderModelosUpload();
  toast(`🗑 Modelo "${esc(nome)}" removido.`);
}

// ============================================
// IA + BANCO DE MODELOS — SINTONIZAÇÃO
// ============================================

// Mapa de palavras-chave por tipo de peça para pontuação de compatibilidade
const _MAPA_PEÇAS = {
  'Recurso de Apelação':        ['apelação','apelacao','recurso','sentença','improcedente'],
  'Contrarrazões de Apelação':  ['contrarrazoes','contrarrazões','apelação','favorável','procedente'],
  'Agravo de Instrumento':      ['agravo','instrumento','penhora','decisão','interlocutória'],
  'Recurso Administrativo':     ['recurso','administrativo','crps','indeferimento','inss'],
  'Mandado de Segurança':       ['mandado','segurança','ms','omissão','prazo','inss'],
  'Petição Inicial':            ['inicial','petição','requerimento','primeiro','ingresso'],
  'Recurso Ordinário':          ['recurso ordinário','ordinário','trt','trabalhista'],
  'Embargo de Declaração':      ['embargo','declaração','omissão','contradição','obscuridade'],
  'Contestação':                ['contestação','resposta','réu','defesa'],
  'Cumprimento de Sentença':    ['cumprimento','execução','sentença','transitou'],
};

function _buscarModeloIA(estrategia) {
  const alvo = (estrategia.recursoTipo || estrategia.acao || estrategia.proximoPasso || '').toLowerCase();
  if (!alvo) return null;

  // Junta todos os modelos disponíveis: banco gerado + modelos do escritório + uploads
  const bancoPecas   = [...(BANCO_PECAS?.judiciais||[]), ...(BANCO_PECAS?.administrativas||[])];
  const modelosEscr  = window.GESTOR_MODELOS || [];
  const modelosUp    = window.MODELOS_UPLOAD || [];
  const todos        = [
    ...bancoPecas.map(m  => ({...m, _fonte:'sistema'})),
    ...modelosEscr.map(m => ({...m, nome: m.nome||m.titulo, _fonte:'escritorio'})),
    ...modelosUp.map(m   => ({...m, _fonte:'upload'})),
  ];

  if (!todos.length) return null;

  // Encontra palavras-chave do tipo de peça alvo
  let kwsAlvo = [];
  for (const [tipo, kws] of Object.entries(_MAPA_PEÇAS)) {
    if (alvo.includes(tipo.toLowerCase()) || kws.some(k => alvo.includes(k))) {
      kwsAlvo = kws; break;
    }
  }
  if (!kwsAlvo.length) kwsAlvo = alvo.split(' ').filter(w => w.length > 3);

  // Pontua cada modelo
  const pontuados = todos.map(m => {
    const texto = [(m.titulo||''), (m.nome||''), (m.tipo||''), (m.area||''), (m.categoria||'')].join(' ').toLowerCase();
    const hits = kwsAlvo.filter(k => texto.includes(k)).length;
    const score = Math.min(99, Math.round((hits / Math.max(kwsAlvo.length, 1)) * 100) + (m._fonte === 'upload' ? 10 : m._fonte === 'escritorio' ? 5 : 0));
    return {...m, score};
  }).filter(m => m.score > 0).sort((a,b) => b.score - a.score);

  return pontuados[0] || null;
}

function abrirSupervisaoAdvogado(estrategiaId, modeloJson, cliente, tipoPeca) {
  let modelo;
  try { modelo = JSON.parse(modeloJson.replace(/&#39;/g,"'")); } catch { modelo = {}; }

  const m = document.createElement('div');
  m.id = 'modal-supervisao-ia';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box" style="max-width:780px;width:92vw;padding:0;overflow:hidden;display:flex;flex-direction:column;max-height:90vh">
      <div class="modal-header" style="background:#f5f3ff;border-bottom:2px solid #c4b5fd">
        <div>
          <div style="font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">✦ IA Estratégica — Supervisão do Advogado</div>
          <div style="font-size:17px;font-weight:800;color:var(--navy)">${esc(tipoPeca)}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px">Cliente: <strong>${esc(cliente)}</strong> · Modelo: <strong>${esc(modelo.nome||modelo.tipo||modelo.titulo||'—')}</strong> · ${modelo.score||'?'}% compatibilidade</div>
        </div>
        <button class="modal-close" onclick="document.getElementById('modal-supervisao-ia').remove()">✕</button>
      </div>

      <div style="flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:16px">

        <!-- Sugestão da IA -->
        <div class="est-recurso-box" style="border-color:#c4b5fd;background:#faf5ff">
          <div style="font-size:12px;font-weight:700;color:#7c3aed;margin-bottom:8px">✦ Análise e sugestão da IA</div>
          <div style="font-size:13px;color:var(--text);line-height:1.6">
            Com base no estágio atual do processo do cliente <strong>${esc(cliente)}</strong>, a IA identificou que a peça mais adequada é <strong>${esc(tipoPeca)}</strong>.
            O modelo <em>"${esc(modelo.nome||modelo.tipo||modelo.titulo||'')}"</em> (${modelo.score||'?'}% de compatibilidade) foi selecionado do banco de peças como base.
            Revise os campos abaixo antes de aprovar a geração.
          </div>
        </div>

        <!-- Campos de revisão -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          <div>
            <label class="calc-label">Tipo de Peça confirmado</label>
            <input id="sup-tipo" class="calc-input ev-campo-destaque" value="${esc(tipoPeca)}" style="font-size:15px"/>
          </div>
          <div>
            <label class="calc-label">Cliente</label>
            <input id="sup-cliente" class="calc-input" value="${esc(cliente)}" disabled/>
          </div>
          <div>
            <label class="calc-label">Modelo base selecionado</label>
            <input id="sup-modelo" class="calc-input" value="${esc(modelo.nome||modelo.tipo||modelo.titulo||'')}" disabled/>
          </div>
          <div>
            <label class="calc-label">Advogado responsável pela supervisão</label>
            <input id="sup-adv" class="calc-input" value="${esc(nomeExibicao(USUARIO_ATUAL))}" disabled/>
          </div>
        </div>

        <div>
          <label class="calc-label">Instruções adicionais para a IA (opcional)</label>
          <textarea id="sup-instrucoes" class="calc-input" rows="3"
            placeholder="Ex: Enfatizar tempo rural · Incluir laudo médico · Destacar falha processual..."></textarea>
        </div>

        <div class="ev-aviso-data" style="background:#f0fdf4;border-color:#86efac;color:#065f46">
          ✅ Após aprovação, a IA irá preparar o rascunho da peça com base no modelo selecionado e nas instruções acima. O documento final ficará disponível no Banco de Peças para revisão e assinatura.
        </div>
      </div>

      <div style="display:flex;gap:10px;padding:16px 20px;border-top:1.5px solid var(--border);background:var(--surface)">
        <button class="btn-secondary" style="flex:1" onclick="document.getElementById('modal-supervisao-ia').remove()">Cancelar</button>
        <button class="btn-secondary" style="flex:1" onclick="showPage('peticoes');document.getElementById('modal-supervisao-ia').remove()">📂 Ver Banco de Peças</button>
        <button class="btn-primary" style="flex:2;background:#7c3aed" onclick="_aprovarGeracaoIA('${esc(estrategiaId)}')">✦ Aprovar e Gerar Peça</button>
      </div>
    </div>`;
  document.body.appendChild(m);
  m.addEventListener('click', ev => { if (ev.target === m) m.remove(); });
}

function _aprovarGeracaoIA(estrategiaId) {
  const tipo      = document.getElementById('sup-tipo')?.value || '';
  const instrucoes = document.getElementById('sup-instrucoes')?.value || '';
  const adv       = nomeExibicao(USUARIO_ATUAL);
  document.getElementById('modal-supervisao-ia')?.remove();

  // Simula geração (em produção: chamaria a API com o modelo base)
  const novoId  = 'BPG' + Date.now();
  const dataHoje = new Date().toLocaleDateString('pt-BR');
  BANCO_PECAS.judiciais.unshift({
    id: novoId, titulo: tipo,
    area: 'Previdenciário', tipo: 'judicial',
    data: dataHoje, status: 'rascunho',
    geradoPor: adv, instrucoes,
  });

  toast(`✦ Peça <strong>"${esc(tipo)}"</strong> gerada pela IA e disponível no Banco de Peças para revisão final!`);
  renderBancoPecas();
}

function renderBancoPecas(filtro='', tipo='') {
  const lista = document.getElementById('banco-pecas-lista');
  if (!lista) return;
  let todas = [...BANCO_PECAS.judiciais, ...BANCO_PECAS.administrativas];
  if (tipo) todas = todas.filter(p => p.tipo === tipo);
  if (filtro) todas = todas.filter(p => p.titulo.toLowerCase().includes(filtro.toLowerCase()));
  if (!todas.length) { lista.innerHTML = '<div class="empty-state">Nenhuma peça encontrada.</div>'; return; }
  lista.innerHTML = todas.map(p => `
    <div class="peca-item">
      <div class="peca-icon">${p.tipo === 'administrativa' ? '🏛' : '📄'}</div>
      <div class="peca-info">
        <span class="peca-nome">${esc(p.titulo)}</span>
        <span class="peca-meta">
          ${esc(p.area)} · ${p.tipo === 'administrativa' ? 'Administrativa' : 'Judicial'} · ${esc(p.data)}
          ${p.protocolo ? ` · Protocolo: ${esc(p.protocolo)}` : ''}
        </span>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <span class="gerid-sit-badge ${p.tipo==='administrativa' && p.status==='protocolada' ? 'gerid-sit-protocolo' : 'gerid-sit-analise'}" style="align-self:center">
          ${p.tipo==='administrativa' ? (p.status==='protocolada' ? '✓ INSS' : 'Gerada') : 'Judicial'}
        </span>
        <button class="btn-sm">Baixar</button>
      </div>
    </div>
  `).join('');
}

// ============================================
// MOTOR DE ESTRATÉGIA IA
// ============================================

let estrategiaFiltroAtivo = 'todos';

function renderCardEstrategia(e, compacto = false) {
  const urgCls  = { alta:'urg-alta', media:'urg-media', baixa:'urg-baixa' };
  const urgIcon = { alta:'🔴', media:'🟡', baixa:'🟢' };
  const tipoCls = e.tipo === 'judicial' ? 'est-tipo-judicial' : 'est-tipo-inss';
  const tipoLabel = e.tipo === 'judicial' ? '⚖ Judicial' : '🏛 Admin INSS';

  const viabilidadeBar = e.viabilidade != null ? `
    <div class="est-viab-wrap">
      <span class="est-viab-label">Viabilidade estimada</span>
      <div class="est-viab-bar-bg">
        <div class="est-viab-bar" style="width:${e.viabilidade}%;background:${e.viabilidade >= 80 ? 'var(--success)' : e.viabilidade >= 60 ? 'var(--warning)' : '#dc2626'}"></div>
      </div>
      <span class="est-viab-pct">${e.viabilidade}%</span>
    </div>` : '';

  const acaoBtn = e.andamentoId
    ? `onclick="showPage('andamentos');setTimeout(()=>analisarIA('${esc(e.andamentoId)}'),300)"`
    : e.modulo === 'peticoes'
      ? `onclick="showPage('peticoes');setTimeout(()=>trocarTabPeticao('administrativa',document.querySelectorAll('.pet-tab')[1]),300)"`
      : `onclick="showPage('${esc(e.modulo)}')"`  ;

  if (compacto) return `
    <div class="est-card-mini ${urgCls[e.urgencia]}">
      <div class="est-mini-left">
        <span class="est-urg-dot ${urgCls[e.urgencia]}">${urgIcon[e.urgencia]}</span>
        <div>
          <div class="est-mini-cliente">${esc(e.cliente)}</div>
          <div class="est-mini-passo">→ ${esc(e.proximoPasso)}</div>
        </div>
      </div>
      <div class="est-mini-right">
        ${e.viabilidade != null ? `<span class="est-viab-badge" style="background:${e.viabilidade>=80?'#dcfce7':e.viabilidade>=60?'#fef3c7':'#fee2e2'};color:${e.viabilidade>=80?'#059669':e.viabilidade>=60?'#d97706':'#dc2626'}">${e.viabilidade}%</span>` : ''}
        <button class="btn-sm" ${acaoBtn}>Agir</button>
      </div>
    </div>`;

  return `
    <div class="est-card ${urgCls[e.urgencia]}">
      <div class="est-card-header">
        <div class="est-card-header-left">
          <span class="est-tipo-badge ${tipoCls}">${tipoLabel}</span>
          <span class="est-urg-badge ${urgCls[e.urgencia]}">${urgIcon[e.urgencia]} Urgência ${e.urgencia}</span>
          ${e.prazoFatal && e.prazoFatal !== '—' ? `<span class="est-prazo-badge">⏱ ${esc(e.prazoFatal)}</span>` : ''}
        </div>
        <div class="est-card-header-right">
          ${e.procNum ? `<span class="est-proc-num">${esc(e.procNum)}</span>` : ''}
          ${e.nb      ? `<span class="est-proc-num">NB: ${esc(e.nb)}</span>` : ''}
        </div>
      </div>

      <div class="est-cliente-row">
        <strong>${esc(e.cliente)}</strong>
        ${e.tribunal ? `<span>· ${esc(e.tribunal)}</span>` : ''}
        ${e.protocolo ? `<span>· Protocolo: ${esc(e.protocolo)}</span>` : ''}
      </div>

      <div class="est-situacao">
        <span class="est-situ-label">Situação atual</span>
        <span>${esc(e.situacaoAtual)}</span>
      </div>

      <div class="est-proximo">
        <div class="est-proximo-label">✦ Próximo passo recomendado pela IA</div>
        <div class="est-proximo-texto">${esc(e.proximoPasso)}</div>
      </div>

      <div class="est-fund">
        <div class="est-fund-label">Fundamentação</div>
        <div class="est-fund-texto">${esc(e.fundamentacao)}</div>
      </div>

      ${viabilidadeBar}

      ${e.recursoTipo ? `
      <div class="est-recurso-box">
        <div class="est-recurso-tipo">📋 Recurso cabível: <strong>${esc(e.recursoTipo)}</strong></div>
        ${e.pecasSugeridas?.length ? e.pecasSugeridas.slice(0,2).map(p => `
          <div class="est-peca-sugerida">
            <div>
              <span class="est-peca-titulo">${esc(p.titulo)}</span>
              <span class="est-peca-match">${p.match}% aderência</span>
            </div>
            <button class="btn-sm" onclick="gerarRecursoIA('${esc(p.id)}','${esc(e.andamentoId||'')}')">✦ Gerar</button>
          </div>`).join('') : ''}
      </div>` : ''}

      ${(() => { const m = _buscarModeloIA(e); return m ? `
      <div class="est-modelo-banco">
        <div class="est-modelo-badge">📂 Modelo do banco sugerido pela IA</div>
        <div class="est-modelo-info">
          <span class="est-modelo-nome">${esc(m.nome || m.titulo || m.tipo)}</span>
          <span class="est-modelo-meta">${esc(m.area||'')}${m.categoria?' · '+esc(m.categoria):''}${m.usos?' · Usado '+m.usos+'×':''}</span>
        </div>
        <div class="est-modelo-acoes">
          <span class="est-modelo-match">✦ ${m.score}% compatível</span>
          <button class="btn-sm est-btn-supervisao" onclick="abrirSupervisaoAdvogado('${esc(e.id)}', '${esc(JSON.stringify(m).replace(/'/g,"&#39;"))}', '${esc(e.cliente)}', '${esc(e.recursoTipo||e.acao||'')}')">
            👁 Revisar e Preparar
          </button>
        </div>
      </div>` : ''; })()}

      <div class="est-card-actions">
        <button class="btn-primary" ${acaoBtn}>→ ${esc(e.acao)}</button>
        ${e.recursoTipo ? `<button class="btn-secondary" onclick="gerarRecursoIA(null,'${esc(e.andamentoId||'')}')">✦ Gerar ${esc(e.recursoTipo)}</button>` : ''}
        <button class="btn-secondary" onclick="showPage('peticoes')">✦ Banco de Peças</button>
      </div>
    </div>`;
}

function renderEstrategiaCompleta() {
  const lista = document.getElementById('estrategia-lista');
  if (!lista) return;

  lista.innerHTML = '<div class="gerid-loading">✦ IA analisando todos os casos...</div>';

  setTimeout(() => {
    let estrategias = GESTOR.analisarEstrategia();
    if (estrategiaFiltroAtivo === 'judicial') estrategias = estrategias.filter(e => e.tipo === 'judicial');
    else if (estrategiaFiltroAtivo === 'inss') estrategias = estrategias.filter(e => e.tipo === 'inss');
    else if (estrategiaFiltroAtivo === 'alta') estrategias = estrategias.filter(e => e.urgencia === 'alta');

    const badge = document.getElementById('badge-estrategia');
    if (badge) badge.textContent = GESTOR.analisarEstrategia().length;

    if (!estrategias.length) {
      lista.innerHTML = '<div class="empty-state">Nenhum caso encontrado com esse filtro.</div>';
      return;
    }
    lista.innerHTML = estrategias.map(e => renderCardEstrategia(e)).join('');
  }, 900);
}

function filtrarEstrategia(tipo, btn) {
  estrategiaFiltroAtivo = tipo;
  document.querySelectorAll('.est-filtro').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  renderEstrategiaCompleta();
}

function gerarRecursoIA(pecaId, andamentoId) {
  const a = GESTOR.andamentos.find(x => x.id === andamentoId);
  const peca = pecaId ? a?.pecasSugeridas?.find(p => p.id === pecaId) : a?.pecasSugeridas?.[0];

  if (!a) { showPage('peticoes'); return; }

  const titulo = peca?.titulo || 'Recurso';
  toast(`✦ IA gerando: ${esc(titulo)}...`);

  setTimeout(() => {
    showPage('andamentos');
    setTimeout(() => {
      const card = document.getElementById('and-' + andamentoId);
      if (card) {
        card.scrollIntoView({ behavior:'smooth', block:'start' });
        // expande a peça
        if (pecaId) {
          const preview = document.getElementById(`prev-${andamentoId}-${pecaId}`);
          if (preview) preview.style.display = 'block';
        }
      }
      toast(`✓ ${esc(titulo)} pronto para revisão!<br><small>→ Revise, edite se necessário e aprove para protocolar</small>`);
    }, 400);
  }, 1200);
}

function renderDashboardEstrategia() {
  const el = document.getElementById('dashboard-estrategia');
  if (!el) return;
  const top = GESTOR.analisarEstrategia().slice(0, 4);
  if (!top.length) { el.innerHTML = '<div class="empty-state">Todos os casos em dia.</div>'; return; }
  el.innerHTML = top.map(e => renderCardEstrategia(e, true)).join('');
  const badge = document.getElementById('badge-estrategia');
  if (badge) badge.textContent = GESTOR.analisarEstrategia().length;
}

// ============================================
// CADASTRO DE CLIENTES
// ============================================

const AREAS_LABEL = { prev:'Previdenciário', trab:'Trabalhista', civel:'Cível', criminal:'Criminal' };
const STATUS_CLIENTE = { ativo:'ativo', suspenso:'suspenso', lead:'lead', inativo:'inativo' };

function gerarIdCliente() {
  const nums = GESTOR.clientes.map(c => parseInt(c.id.replace('C',''))).filter(n => !isNaN(n));
  return 'C' + (Math.max(0, ...nums) + 1);
}

function gerarNumPasta() {
  const ano = new Date().getFullYear();
  const existentes = GESTOR.clientes
    .filter(c => c.pastaFisica)
    .map(c => parseInt((c.pastaFisica || '').split('/')[0]))
    .filter(n => !isNaN(n));
  const proximo = existentes.length ? Math.max(...existentes) + 1 : 1;
  return String(proximo).padStart(3, '0') + '/' + ano;
}

function abrirFormCliente(clienteId = null) {
  document.getElementById('modal-form-cliente')?.remove();
  const cliente = clienteId ? GESTOR.clientes.find(c => c.id === clienteId) : null;
  const isEdicao = !!cliente;
  const proximaPasta = isEdicao ? (cliente.pastaFisica || '') : gerarNumPasta();

  const m = document.createElement('div');
  m.id = 'modal-form-cliente';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box form-cliente-box">
      <div class="modal-header">
        <span>${isEdicao ? '✏ Editar Cliente' : '+ Novo Cliente'}</span>
        <button class="modal-close" onclick="fecharFormCliente()">✕</button>
      </div>
      <div class="form-cliente-corpo">

        <div class="form-cliente-secao">
          <div class="form-secao-titulo">👤 Dados Pessoais</div>
          <div class="form-grid-2">
            <div class="form-grupo full">
              <label class="calc-label">Nome completo *</label>
              <input id="fc-nome" class="calc-input" placeholder="Nome completo do cliente" value="${esc(cliente?.nome || '')}"/>
            </div>
            <div class="form-grupo">
              <label class="calc-label">Tipo de pessoa *</label>
              <select id="fc-tipo-pessoa" class="calc-input" onchange="toggleCnpj()">
                <option value="fisica" ${!cliente || !cliente.doc?.includes('/')  ? 'selected' : ''}>Pessoa Física</option>
                <option value="juridica" ${cliente?.doc?.includes('/') ? 'selected' : ''}>Pessoa Jurídica</option>
              </select>
            </div>
            <div class="form-grupo">
              <label class="calc-label" id="fc-doc-label">CPF *</label>
              <input id="fc-doc" class="calc-input" placeholder="000.000.000-00" value="${esc(cliente?.doc || '')}"
                oninput="mascararDocumento(this)"/>
            </div>
            <div class="form-grupo">
              <label class="calc-label">Data de Nascimento</label>
              <input id="fc-nascimento" class="calc-input" type="date" value="${esc(cliente?.nascimento || '')}"/>
            </div>
            <div class="form-grupo">
              <label class="calc-label">Telefone / WhatsApp</label>
              <input id="fc-telefone" class="calc-input" placeholder="(00) 00000-0000" value="${esc(cliente?.telefone || '')}"
                oninput="mascararTelefone(this)"/>
            </div>
            <div class="form-grupo">
              <label class="calc-label">E-mail</label>
              <input id="fc-email" class="calc-input" type="email" placeholder="cliente@email.com" value="${esc(cliente?.email || '')}"/>
            </div>
            <div class="form-grupo full">
              <label class="calc-label">Endereço completo</label>
              <input id="fc-endereco" class="calc-input" placeholder="Rua, nº, bairro, cidade — UF" value="${esc(cliente?.endereco || '')}"/>
            </div>
          </div>
        </div>

        <div class="form-cliente-secao">
          <div class="form-secao-titulo">⚖ Dados do Escritório</div>
          <div class="form-grid-2">
            <div class="form-grupo">
              <label class="calc-label">Área Principal *</label>
              <select id="fc-area" class="calc-input">
                <option value="prev"     ${cliente?.area==='prev'     ? 'selected':''}>Previdenciário</option>
                <option value="trab"     ${cliente?.area==='trab'     ? 'selected':''}>Trabalhista</option>
                <option value="civel"    ${cliente?.area==='civel'    ? 'selected':''}>Cível</option>
                <option value="criminal" ${cliente?.area==='criminal' ? 'selected':''}>Criminal</option>
              </select>
            </div>
            <div class="form-grupo">
              <label class="calc-label">Status *</label>
              <select id="fc-status" class="calc-input">
                <option value="lead"     ${cliente?.status==='lead'     ? 'selected':''}>Lead</option>
                <option value="ativo"    ${cliente?.status==='ativo'    ? 'selected':''}>Ativo</option>
                <option value="suspenso" ${cliente?.status==='suspenso' ? 'selected':''}>Suspenso</option>
                <option value="inativo"  ${cliente?.status==='inativo'  ? 'selected':''}>Inativo</option>
              </select>
            </div>
            <div class="form-grupo">
              <label class="calc-label">Honorários (R$)</label>
              <input id="fc-honorarios" class="calc-input" type="number" min="0" placeholder="0,00"
                value="${cliente?.honorarios ?? ''}"/>
            </div>
            <div class="form-grupo">
              <label class="calc-label">Responsável pelo caso</label>
              <select id="fc-responsavel" class="calc-input">
                <option ${cliente?.responsavel==='Dr. Klebson Cavalcanti'    ? 'selected':''}>Dr. Klebson Cavalcanti</option>
                <option ${cliente?.responsavel==='Dra. Ana Carvalho'  ? 'selected':''}>Dra. Ana Carvalho</option>
                <option ${cliente?.responsavel==='Dr. Marcos Santos'  ? 'selected':''}>Dr. Marcos Santos</option>
                <option ${cliente?.responsavel==='Dra. Juliana Faria' ? 'selected':''}>Dra. Juliana Faria</option>
              </select>
            </div>
            <div class="form-grupo">
              <label class="calc-label">Número da Pasta Física
                <span class="campo-info">— gerado automaticamente</span>
              </label>
              <input id="fc-pasta-num" class="calc-input" placeholder="001/2026" value="${esc(proximaPasta)}"/>
            </div>
            <div class="form-grupo">
              <label class="calc-label">Localização da Pasta</label>
              <input id="fc-pasta-loc" class="calc-input" placeholder="Arquivo A · Gaveta 1"
                value="${esc(cliente?.localizacaoPasta || '')}"/>
            </div>
            <div class="form-grupo full">
              <label class="calc-label">Observações iniciais</label>
              <textarea id="fc-obs" class="calc-input" rows="3"
                placeholder="Resumo do caso, como chegou ao escritório, urgências...">${esc(cliente?.obs || '')}</textarea>
            </div>
          </div>
        </div>

        <div class="form-cliente-rodape">
          <button class="btn-secondary" onclick="fecharFormCliente()">Cancelar</button>
          <button class="btn-primary" onclick="salvarCliente('${clienteId || ''}')">
            ${isEdicao ? '💾 Salvar alterações' : '✓ Cadastrar cliente'}
          </button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(m);
  document.getElementById('fc-nome')?.focus();
  toggleCnpj();
}

function fecharFormCliente() {
  document.getElementById('modal-form-cliente')?.remove();
}

function toggleCnpj() {
  const tipo  = document.getElementById('fc-tipo-pessoa')?.value;
  const label = document.getElementById('fc-doc-label');
  const input = document.getElementById('fc-doc');
  if (!label || !input) return;
  label.textContent = tipo === 'juridica' ? 'CNPJ *' : 'CPF *';
  input.placeholder = tipo === 'juridica' ? '00.000.000/0001-00' : '000.000.000-00';
}

function mascararDocumento(input) {
  const tipo = document.getElementById('fc-tipo-pessoa')?.value;
  let v = input.value.replace(/\D/g,'');
  if (tipo === 'juridica') {
    v = v.slice(0,14);
    v = v.replace(/^(\d{2})(\d)/,'$1.$2')
         .replace(/^(\d{2})\.(\d{3})(\d)/,'$1.$2.$3')
         .replace(/\.(\d{3})(\d)/,'.$1/$2')
         .replace(/(\d{4})(\d)/,'$1-$2');
  } else {
    v = v.slice(0,11);
    v = v.replace(/(\d{3})(\d)/,'$1.$2')
         .replace(/(\d{3})\.(\d{3})(\d)/,'$1.$2.$3')
         .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/,'$1.$2.$3-$4');
  }
  input.value = v;
}

function mascararTelefone(input) {
  let v = input.value.replace(/\D/g,'').slice(0,11);
  v = v.length > 10
    ? v.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3')
    : v.replace(/(\d{2})(\d{4})(\d{4})/,'($1) $2-$3');
  input.value = v;
}

function salvarCliente(clienteId) {
  const nome      = document.getElementById('fc-nome')?.value.trim();
  const doc       = document.getElementById('fc-doc')?.value.trim();
  const area      = document.getElementById('fc-area')?.value;
  const status    = document.getElementById('fc-status')?.value;
  const telefone  = document.getElementById('fc-telefone')?.value.trim();
  const email     = document.getElementById('fc-email')?.value.trim();
  const endereco  = document.getElementById('fc-endereco')?.value.trim();
  const nascimento= document.getElementById('fc-nascimento')?.value;
  const honorarios= parseFloat(document.getElementById('fc-honorarios')?.value) || 0;
  const responsavel= document.getElementById('fc-responsavel')?.value;
  const pastaNum  = document.getElementById('fc-pasta-num')?.value.trim();
  const pastaLoc  = document.getElementById('fc-pasta-loc')?.value.trim();
  const obs       = document.getElementById('fc-obs')?.value.trim();

  if (!nome) { toast('Informe o nome do cliente.', 'warn'); document.getElementById('fc-nome').focus(); return; }
  if (!doc)  { toast('Informe CPF ou CNPJ.', 'warn'); document.getElementById('fc-doc').focus(); return; }

  const hoje = dataHoje();

  if (clienteId) {
    // EDIÇÃO
    const c = GESTOR.clientes.find(x => x.id === clienteId);
    if (!c) return;
    Object.assign(c, { nome, doc, area, status, telefone, email, endereco, nascimento,
      honorarios, responsavel, pastaFisica: pastaNum || null,
      localizacaoPasta: pastaLoc || null, obs });
    fecharFormCliente();
    renderTabelaClientes();
    toast(`✓ Cliente <strong>${esc(nome)}</strong> atualizado!`);

  } else {
    // NOVO CADASTRO
    const id = gerarIdCliente();
    const novoCliente = {
      id, nome, doc, area, status, telefone, email, endereco, nascimento,
      honorarios, responsavel, tipo: status === 'lead' ? 'lead' : 'cliente',
      pastaFisica: pastaNum || null, localizacaoPasta: pastaLoc || null,
      ultimoContato: hoje, diasSemContato: 0, obs,
    };
    GESTOR.clientes.push(novoCliente);
    GESTOR.pastaClientes[id] = [];
    _salvarDados();
    fecharFormCliente();
    renderTabelaClientes();
    toast(`✓ Cliente <strong>${esc(nome)}</strong> cadastrado!<br><small>→ Pasta ${esc(pastaNum || 'sem número')} criada</small>`);
  }
}

function renderTabelaClientes(lista) {
  const tbody = document.getElementById('clientes-tbody');
  if (!tbody) return;
  const clientes = lista || GESTOR.clientes;

  tbody.innerHTML = clientes.map(c => {
    const iniciais = c.nome.split(' ').map(n=>n[0]).slice(0,2).join('').toUpperCase();
    const areaCls  = { prev:'prev', trab:'trab', civel:'civel', criminal:'civel' }[c.area] || 'prev';
    const areaLabel= AREAS_LABEL[c.area] || c.area;
    const statusCls= { ativo:'ativo', suspenso:'suspenso', lead:'suspenso', inativo:'suspenso' }[c.status] || 'suspenso';
    const pastaInfo= c.pastaFisica
      ? `📂 ${esc(c.pastaFisica)}${c.localizacaoPasta ? ' · ' + esc(c.localizacaoPasta) : ''}`
      : '📂 Pasta não cadastrada';
    const procs = GESTOR.processos.filter(p => p.clienteId === c.id).length;
    return `
      <tr id="row-${c.id}">
        <td>
          <div class="cliente-nome-cell" onclick="abrirPastaCliente('${c.id}')">
            <div class="cliente-avatar-mini">${iniciais}</div>
            <div class="cliente-nome-info">
              <span class="cliente-nome-link">${esc(c.nome)}</span>
              <span class="cliente-pasta-num ${c.pastaFisica ? '' : 'sem-pasta'}">${pastaInfo}</span>
            </div>
          </div>
        </td>
        <td>${esc(c.doc)}</td>
        <td>${procs}</td>
        <td><span class="area-tag ${areaCls}">${areaLabel}</span></td>
        <td class="valor-positivo">R$ ${(c.honorarios||0).toLocaleString('pt-BR')}</td>
        <td><span class="status-tag ${statusCls}">${c.status.charAt(0).toUpperCase()+c.status.slice(1)}</span></td>
        <td>
          <div style="display:flex;gap:4px">
            <button class="btn-sm" onclick="abrirFormCliente('${c.id}')" title="Editar">✏</button>
            <button class="btn-sm btn-danger-sm" onclick="confirmarExcluirCliente('${c.id}','${esc(c.nome)}')" title="Excluir">✕</button>
          </div>
        </td>
      </tr>`;
  }).join('');

  // Atualiza subtítulo
  const ativos = GESTOR.clientes.filter(c => c.status === 'ativo').length;
  const sub = document.querySelector('#page-clientes .page-subtitle');
  if (sub) sub.textContent = `${ativos} clientes ativos · ${GESTOR.clientes.length} total`;

  // Atualiza thead para incluir coluna Ações
  const thead = tbody.closest('table')?.querySelector('thead tr');
  if (thead && thead.querySelectorAll('th').length === 6) {
    thead.innerHTML += '<th>Ações</th>';
  }
}

function filtrarTabelaClientes(busca) {
  const status = document.getElementById('clientes-filtro-status')?.value || '';
  const termo  = (busca || '').toLowerCase();
  const filtrado = GESTOR.clientes.filter(c => {
    const matchBusca  = !termo || c.nome.toLowerCase().includes(termo) || (c.doc||'').includes(termo) || (c.email||'').toLowerCase().includes(termo);
    const matchStatus = !status || c.status === status;
    return matchBusca && matchStatus;
  });
  renderTabelaClientes(filtrado);
}

function confirmarExcluirCliente(id, nome) {
  const m = document.createElement('div');
  m.id = 'modal-excluir-cliente';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box" style="max-width:420px;text-align:center;padding:32px 24px">
      <div style="font-size:40px;margin-bottom:12px">⚠️</div>
      <div style="font-size:16px;font-weight:800;color:var(--navy);margin-bottom:8px">Excluir cliente?</div>
      <div style="font-size:13px;color:var(--text-secondary);margin-bottom:24px">
        <strong>${esc(nome)}</strong> será removido permanentemente junto com toda a sua pasta de documentos. Esta ação não pode ser desfeita.
      </div>
      <div style="display:flex;gap:10px;justify-content:center">
        <button class="btn-secondary" onclick="document.getElementById('modal-excluir-cliente').remove()">Cancelar</button>
        <button class="btn-primary" style="background:#dc2626" onclick="excluirCliente('${id}')">Sim, excluir</button>
      </div>
    </div>`;
  document.body.appendChild(m);
}

function excluirCliente(id) {
  const c = GESTOR.clientes.find(x => x.id === id);
  if (!c) return;
  GESTOR.clientes = GESTOR.clientes.filter(x => x.id !== id);
  delete GESTOR.pastaClientes[id];
  document.getElementById('modal-excluir-cliente')?.remove();
  renderTabelaClientes();
  toast(`✓ Cliente removido.`);
}

// ============================================
// BANCO DE MODELOS DO ESCRITÓRIO
// ============================================

const MODELOS_ESCRITORIO = [
  {
    id:'M1', titulo:'Recurso Ordinário — Previdenciário (Tempo Rural)',
    categoria:'judicial-prev', tipo:'Recurso Ordinário', tribunal:'TRT 15',
    tags:['recurso ordinário','tempo rural','previdenciário','TRT'],
    obs:'Usar quando a sentença de 1ª instância negar tempo rural por falta de início de prova material.',
    conteudo:`EXCELENTÍSSIMO SENHOR DOUTOR JUIZ PRESIDENTE DA [VARA] VARA DO TRABALHO

[NOME_CLIENTE], já qualificado nos autos, vem interpor RECURSO ORDINÁRIO em face da r. sentença proferida às fls., nos seguintes termos:

DA TEMPESTIVIDADE
O prazo recursal é de 8 (oito) dias (art. 895 da CLT)...

DO MÉRITO
A r. sentença merece reforma pelos seguintes fundamentos...`,
    data:'15/03/2026', usos:12,
  },
  {
    id:'M2', titulo:'Requerimento de Aposentadoria por Tempo de Contribuição — INSS',
    categoria:'admin-requerimento', tipo:'Requerimento de Benefício', tribunal:'INSS (Administrativo)',
    tags:['aposentadoria','tempo de contribuição','INSS','requerimento'],
    obs:'Modelo padrão para requerimento inicial. Adaptar conforme CNIS do cliente.',
    conteudo:`Ao INSS — Instituto Nacional do Seguro Social
Agência: [AGENCIA]

REQUERIMENTO DE APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO

[NOME_CLIENTE], portador(a) do CPF [CPF] e NIT [NIT], vem requerer a concessão de Aposentadoria por Tempo de Contribuição, com fundamento no art. 52 da Lei 8.213/91...`,
    data:'20/01/2026', usos:34,
  },
  {
    id:'M3', titulo:'Recurso Administrativo — Indeferimento de Benefício',
    categoria:'admin-recurso', tipo:'Recurso Administrativo', tribunal:'INSS (Administrativo)',
    tags:['recurso administrativo','indeferimento','INSS','1ª instância'],
    obs:'Prazo de 30 dias da ciência do indeferimento. Verificar data da carta/despacho.',
    conteudo:`Ao Conselho de Recursos da Previdência Social
1ª Instância — Junta de Recursos

RECURSO ADMINISTRATIVO

[NOME_CLIENTE], CPF [CPF], NB [NB], inconformado(a) com a decisão de indeferimento de [DATA_DECISAO], vem, tempestivamente, interpor RECURSO ADMINISTRATIVO, nos termos do art. 305 do Decreto 3.048/99...`,
    data:'10/02/2026', usos:8,
  },
  {
    id:'M4', titulo:'Contrato de Honorários — Êxito Previdenciário',
    categoria:'contrato-honorarios', tipo:'Contrato de Honorários', tribunal:'',
    tags:['honorários','contrato','êxito','previdenciário'],
    obs:'30% sobre o montante atrasado (retroativo) + mensalidade. Revisar com cliente.',
    conteudo:`CONTRATO DE PRESTAÇÃO DE SERVIÇOS ADVOCATÍCIOS

Pelo presente instrumento, de um lado [NOME_CLIENTE], CPF [CPF], e de outro Costa Cavalcanti Advogados, OAB/SP [OAB]...

DOS HONORÁRIOS
Fica ajustado o percentual de 30% (trinta por cento) sobre os valores atrasados eventualmente deferidos...`,
    data:'05/01/2026', usos:21,
  },
  {
    id:'M5', titulo:'Petição Inicial — Concessão de BPC/LOAS',
    categoria:'judicial-prev', tipo:'Petição Inicial', tribunal:'TJSP',
    tags:['BPC','LOAS','petição inicial','previdenciário'],
    obs:'Verificar miserabilidade e incapacidade. Juntar laudo médico atualizado.',
    conteudo:`EXCELENTÍSSIMO SENHOR DOUTOR JUIZ FEDERAL DA [VARA] VARA FEDERAL

[NOME_CLIENTE], CPF [CPF], por seu advogado que esta subscreve, vem propor AÇÃO DE CONCESSÃO DE BENEFÍCIO DE PRESTAÇÃO CONTINUADA (BPC/LOAS), com fundamento no art. 203, V, da CF e art. 20 da Lei 8.742/93...`,
    data:'18/04/2026', usos:6,
  },
];

let modelosFiltro = { texto:'', categoria:'' };

function salvarModelo() {
  const titulo    = document.getElementById('nm-titulo').value.trim();
  const conteudo  = document.getElementById('nm-conteudo').value.trim();
  if (!titulo)   { toast('Informe o nome do modelo.','warn'); document.getElementById('nm-titulo').focus(); return; }
  if (!conteudo) { toast('O conteúdo do modelo não pode estar vazio.','warn'); document.getElementById('nm-conteudo').focus(); return; }

  const catEl = document.getElementById('nm-categoria');
  MODELOS_ESCRITORIO.unshift({
    id: 'M'+Date.now(),
    titulo,
    categoria: catEl.value,
    tipo:      document.getElementById('nm-tipo').value.trim() || '—',
    tribunal:  document.getElementById('nm-tribunal').value,
    tags:      document.getElementById('nm-tags').value.split(',').map(t=>t.trim()).filter(Boolean),
    obs:       document.getElementById('nm-obs').value.trim(),
    conteudo,
    data:      '27/06/2026',
    usos:      0,
  });

  // limpar form
  ['nm-titulo','nm-tipo','nm-tags','nm-obs','nm-conteudo'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  renderModelos();
  renderModelosCats();
  toast('✓ Modelo salvo no Banco do Escritório!');
}

function renderModelos() {
  const lista = document.getElementById('modelos-lista');
  if (!lista) return;

  let modelos = [...MODELOS_ESCRITORIO];
  if (modelosFiltro.texto) {
    const t = modelosFiltro.texto.toLowerCase();
    modelos = modelos.filter(m =>
      m.titulo.toLowerCase().includes(t) ||
      m.tags.some(tag => tag.toLowerCase().includes(t)) ||
      m.tipo.toLowerCase().includes(t)
    );
  }
  if (modelosFiltro.categoria) {
    modelos = modelos.filter(m => m.categoria.startsWith(modelosFiltro.categoria));
  }

  if (!modelos.length) {
    lista.innerHTML = '<div class="empty-state">Nenhum modelo encontrado.</div>';
    return;
  }

  const catLabel = {
    'judicial-prev':'Judicial · Previdenciário','judicial-trab':'Judicial · Trabalhista',
    'judicial-civel':'Judicial · Cível','judicial-trib':'Judicial · Tributário',
    'admin-requerimento':'Admin · Requerimento','admin-recurso':'Admin · Recurso',
    'admin-revisao':'Admin · Revisão','admin-outros':'Admin · Outros INSS',
    'contrato-honorarios':'Contrato de Honorários','procuracao':'Procuração',
    'declaracao':'Declaração','notificacao':'Notificação',
  };
  const catIcon = {
    'judicial':'⚖','admin':'🏛','contrato':'📋','procuracao':'📜','declaracao':'📄','notificacao':'✉',
  };

  lista.innerHTML = modelos.map(m => {
    const icon = catIcon[m.categoria.split('-')[0]] || '📄';
    const label = catLabel[m.categoria] || m.categoria;
    return `
    <div class="modelo-card" id="modelo-${esc(m.id)}">
      <div class="modelo-card-top">
        <div class="modelo-icon">${icon}</div>
        <div class="modelo-body">
          <div class="modelo-titulo">${esc(m.titulo)}</div>
          <div class="modelo-meta">
            <span class="modelo-cat-tag">${esc(label)}</span>
            ${m.tribunal ? `<span class="modelo-tribunal">${esc(m.tribunal)}</span>` : ''}
            <span class="modelo-usos">Usado ${m.usos}×</span>
            <span class="modelo-data">${esc(m.data)}</span>
          </div>
          <div class="modelo-tags">${m.tags.map(t=>`<span class="modelo-tag">${esc(t)}</span>`).join('')}</div>
          ${m.obs ? `<div class="modelo-obs">💡 ${esc(m.obs)}</div>` : ''}
        </div>
        <div class="modelo-acoes">
          <button class="btn-sm" onclick="verModelo('${esc(m.id)}')">Ver</button>
          <button class="btn-primary btn-sm" onclick="usarModelo('${esc(m.id)}')">Usar</button>
          <button class="btn-danger-sm" onclick="excluirModelo('${esc(m.id)}')">✕</button>
        </div>
      </div>
      <div class="modelo-preview" id="prev-modelo-${esc(m.id)}" style="display:none">
        <pre class="peca-texto">${esc(m.conteudo)}</pre>
        <div class="modelo-variaveis">
          <span class="modelo-var-label">Variáveis detectadas:</span>
          ${extrairVariaveis(m.conteudo).map(v=>`<span class="modelo-var-chip">${esc(v)}</span>`).join('') || '<span style="color:var(--text-muted);font-size:11px">Nenhuma</span>'}
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderModelosCats() {
  const el = document.getElementById('modelos-cats');
  if (!el) return;
  const grupos = {
    'judicial': { label:'Judiciais', icon:'⚖', count:0 },
    'admin':    { label:'Admin INSS', icon:'🏛', count:0 },
    'contrato': { label:'Contratos', icon:'📋', count:0 },
  };
  MODELOS_ESCRITORIO.forEach(m => {
    const g = m.categoria.split('-')[0];
    if (grupos[g]) grupos[g].count++;
  });
  el.innerHTML = Object.entries(grupos).map(([k,g]) => `
    <div class="modelo-cat-chip ${modelosFiltro.categoria === k ? 'ativo' : ''}" onclick="toggleFiltroCategoria('${k}')">
      ${g.icon} ${g.label} <span class="modelo-cat-num">${g.count}</span>
    </div>
  `).join('');
}

function toggleFiltroCategoria(cat) {
  modelosFiltro.categoria = modelosFiltro.categoria === cat ? '' : cat;
  renderModelosCats();
  renderModelos();
}

function filtrarModelos(v) {
  modelosFiltro.texto = v;
  renderModelos();
}
function filtrarModelosCategoria(v) {
  modelosFiltro.categoria = v;
  renderModelosCats();
  renderModelos();
}

function verModelo(id) {
  const el = document.getElementById('prev-modelo-'+id);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function usarModelo(id) {
  const m = MODELOS_ESCRITORIO.find(x => x.id === id);
  if (!m) return;
  m.usos++;
  const isAdmin = m.categoria.startsWith('admin');
  trocarTabPeticao(isAdmin ? 'administrativa' : 'judicial', document.querySelector('.pet-tab'));
  if (isAdmin) {
    document.getElementById('pa-fatos').value = m.conteudo;
  } else {
    document.getElementById('pj-tese').value = m.conteudo;
    document.getElementById('pj-tipo').value = m.tipo;
  }
  renderModelos();
  toast(`✓ Modelo carregado!<br><small>→ ${esc(m.titulo)}</small>`);
}

function excluirModelo(id) {
  const idx = MODELOS_ESCRITORIO.findIndex(m => m.id === id);
  if (idx !== -1) MODELOS_ESCRITORIO.splice(idx, 1);
  renderModelos();
  renderModelosCats();
  toast('Modelo removido.');
}

function extrairVariaveis(texto) {
  const matches = texto.match(/\[[A-Z_]+\]/g);
  return matches ? [...new Set(matches)] : [];
}

function filtrarBancoPecas(v) {
  const tipo = document.querySelector('#pet-tab-banco .filter-select')?.value || '';
  renderBancoPecas(v, tipo);
}
function filtrarBancoPecasTipo(v) {
  const filtro = document.querySelector('#pet-tab-banco .filter-input')?.value || '';
  renderBancoPecas(filtro, v);
}

// ============================================
// PASTA DE DOCUMENTOS POR CLIENTE
// ============================================

const TIPO_DOC = {
  contrato:   { icon:'📋', label:'Contrato',       cor:'#2563eb' },
  procuracao: { icon:'📜', label:'Procuração',      cor:'#7c3aed' },
  peca:       { icon:'⚖',  label:'Peça Judicial',   cor:'#0F1E3C' },
  admin:      { icon:'🏛', label:'Petição INSS',    cor:'#059669' },
  cnis:       { icon:'📊', label:'CNIS',            cor:'#d97706' },
  medico:     { icon:'🩺', label:'Documento Médico', cor:'#dc2626' },
  pessoal:    { icon:'👤', label:'Doc. Pessoal',    cor:'#5a6885' },
  declaracao: { icon:'📄', label:'Declaração',      cor:'#0369a1' },
  outro:      { icon:'📎', label:'Outro',            cor:'#8a96ad' },
};

function abrirPastaCliente(clienteId) {
  fecharPastaCliente();
  const cliente = GESTOR.clientes.find(c => c.id === clienteId);
  if (!cliente) return;

  if (!GESTOR.pastaClientes[clienteId]) GESTOR.pastaClientes[clienteId] = [];

  const modal = document.createElement('div');
  modal.id = 'modal-pasta-cliente';
  modal.className = 'modal-overlay pasta-overlay';

  const pastaFisica = cliente.pastaFisica || null;
  const localizacao = cliente.localizacaoPasta || null;

  modal.innerHTML = `
    <div class="modal-box pasta-box">
      <div class="pasta-header">
        <div class="pasta-header-left">
          <div class="pasta-avatar">${esc(cliente.nome.split(' ').map(n=>n[0]).slice(0,2).join(''))}</div>
          <div>
            <div class="pasta-cliente-nome">${esc(cliente.nome)}</div>
            <div class="pasta-cliente-meta">CPF/CNPJ: ${esc(cliente.doc)} · ${AREA_LABEL[cliente.area] || cliente.area}</div>
          </div>
        </div>
        <div class="pasta-header-right">
          <button class="btn-secondary btn-sm" onclick="adicionarDocumentoCliente('${clienteId}')">+ Adicionar</button>
          <button class="modal-close" onclick="fecharPastaCliente()">✕</button>
        </div>
      </div>

      <!-- PASTA FÍSICA DO ESCRITÓRIO -->
      <div class="pasta-fisica-row" id="pasta-fisica-row-${clienteId}">
        <div class="pasta-fisica-info">
          <span class="pasta-fisica-icon">🗂</span>
          <div>
            <span class="pasta-fisica-label">Pasta Física do Escritório</span>
            ${pastaFisica
              ? `<span class="pasta-fisica-num" id="pf-num-${clienteId}">${esc(pastaFisica)}</span>
                 <span class="pasta-fisica-loc" id="pf-loc-${clienteId}">${esc(localizacao || '—')}</span>`
              : `<span class="pasta-fisica-vazia" id="pf-num-${clienteId}">Não cadastrada</span>`
            }
          </div>
        </div>
        <button class="btn-sm" onclick="editarPastaFisicaModal('${clienteId}')">✏ Editar</button>
      </div>

      <!-- FORMULÁRIO DE EDIÇÃO (oculto por padrão) -->
      <div id="pasta-fisica-form-${clienteId}" class="pasta-fisica-form" style="display:none">
        <input id="pf-input-num-${clienteId}"  class="calc-input" placeholder="Numeração (ex: 001/2026)" value="${esc(pastaFisica || '')}"/>
        <input id="pf-input-loc-${clienteId}"  class="calc-input" placeholder="Localização (ex: Arquivo A · Gaveta 1)" value="${esc(localizacao || '')}"/>
        <div style="display:flex;gap:8px;margin-top:6px">
          <button class="btn-primary" style="flex:1" onclick="salvarPastaFisica('${clienteId}')">💾 Salvar</button>
          <button class="btn-secondary" onclick="document.getElementById('pasta-fisica-form-${clienteId}').style.display='none'">Cancelar</button>
        </div>
      </div>

      <!-- Tabs de categoria -->
      <div class="pasta-tabs" id="pasta-tabs-${clienteId}"></div>

      <!-- Busca -->
      <div class="pasta-busca">
        <input class="filter-input" type="text" placeholder="🔍 Buscar documento..."
          oninput="filtrarDocsPasta('${clienteId}', this.value)" style="width:100%"/>
      </div>

      <!-- Lista de documentos -->
      <div class="pasta-lista" id="pasta-lista-${clienteId}"></div>

      <!-- Drop zone -->
      <div class="pasta-dropzone" id="dropzone-${clienteId}"
        ondragover="event.preventDefault();this.classList.add('drag-over')"
        ondragleave="this.classList.remove('drag-over')"
        ondrop="droparDocumento(event,'${clienteId}')">
        📎 Arraste arquivos aqui para adicionar à pasta do cliente
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) fecharPastaCliente(); });

  renderPastaTabs(clienteId);
  renderPastaLista(clienteId);
}

function editarPastaFisicaModal(clienteId) {
  const form = document.getElementById('pasta-fisica-form-' + clienteId);
  if (form) form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function editarPastaFisica(clienteId) {
  abrirPastaCliente(clienteId);
  setTimeout(() => editarPastaFisicaModal(clienteId), 200);
}

function salvarPastaFisica(clienteId) {
  const num = document.getElementById('pf-input-num-' + clienteId)?.value.trim();
  const loc = document.getElementById('pf-input-loc-' + clienteId)?.value.trim();

  const cliente = GESTOR.clientes.find(c => c.id === clienteId);
  if (cliente) {
    cliente.pastaFisica     = num || null;
    cliente.localizacaoPasta = loc || null;
  }
  _salvarDados();

  // Atualiza exibição no modal
  const numEl = document.getElementById('pf-num-' + clienteId);
  const locEl = document.getElementById('pf-loc-' + clienteId);
  if (numEl) {
    numEl.textContent = num || 'Não cadastrada';
    numEl.className = num ? 'pasta-fisica-num' : 'pasta-fisica-vazia';
  }
  if (locEl) {
    locEl.textContent = loc || '—';
  } else if (numEl && loc) {
    // pf-loc não existe quando cliente não tinha pasta — cria o elemento ao lado
    const span = document.createElement('span');
    span.id = 'pf-loc-' + clienteId;
    span.className = 'pasta-fisica-loc';
    span.textContent = loc;
    numEl.insertAdjacentElement('afterend', span);
  }

  const formEl = document.getElementById('pasta-fisica-form-' + clienteId);
  if (formEl) formEl.style.display = 'none';

  // Atualiza badge na tabela
  atualizarBadgePastaFisica(clienteId, num, loc);
  toast(`✓ Pasta física salva!<br><small>→ ${num || '—'} · ${loc || '—'}</small>`);
}

function atualizarBadgePastaFisica(clienteId, num, loc) {
  const tbody = document.getElementById('clientes-tbody');
  if (!tbody) return;
  tbody.querySelectorAll('.cliente-nome-cell').forEach(cell => {
    if (cell.getAttribute('onclick')?.includes(clienteId)) {
      const badge = cell.querySelector('.cliente-pasta-num');
      if (!badge) return;
      if (num) {
        badge.textContent = `📂 ${num}${loc ? ' · ' + loc : ''}`;
        badge.classList.remove('sem-pasta');
      } else {
        badge.textContent = '📂 Pasta não cadastrada — clique para cadastrar';
        badge.classList.add('sem-pasta');
      }
    }
  });
}

function fecharPastaCliente() {
  const m = document.getElementById('modal-pasta-cliente');
  if (m) m.remove();
}

const pastaFiltros = {};

function renderPastaTabs(clienteId) {
  const docs = GESTOR.pastaClientes[clienteId] || [];
  const el = document.getElementById('pasta-tabs-' + clienteId);
  if (!el) return;

  const grupos = {};
  docs.forEach(d => { grupos[d.tipo] = (grupos[d.tipo] || 0) + 1; });
  const filtroAtivo = pastaFiltros[clienteId] || '';

  let html = `<div class="pasta-tab ${!filtroAtivo ? 'active' : ''}" onclick="setPastaFiltro('${clienteId}','')">
    Todos <span class="pasta-tab-count">${docs.length}</span></div>`;
  Object.entries(grupos).forEach(([tipo, qtd]) => {
    const t = TIPO_DOC[tipo] || TIPO_DOC.outro;
    html += `<div class="pasta-tab ${filtroAtivo === tipo ? 'active' : ''}"
      onclick="setPastaFiltro('${clienteId}','${tipo}')">
      ${t.icon} ${t.label} <span class="pasta-tab-count">${qtd}</span></div>`;
  });
  el.innerHTML = html;
}

function setPastaFiltro(clienteId, tipo) {
  pastaFiltros[clienteId] = tipo;
  renderPastaTabs(clienteId);
  renderPastaLista(clienteId);
}

function filtrarDocsPasta(clienteId, texto) {
  pastaFiltros[clienteId + '_texto'] = texto.toLowerCase();
  renderPastaLista(clienteId);
}

function renderPastaLista(clienteId) {
  let docs = [...(GESTOR.pastaClientes[clienteId] || [])];
  const filtroTipo  = pastaFiltros[clienteId] || '';
  const filtroTexto = pastaFiltros[clienteId + '_texto'] || '';

  if (filtroTipo)  docs = docs.filter(d => d.tipo === filtroTipo);
  if (filtroTexto) docs = docs.filter(d => d.nome.toLowerCase().includes(filtroTexto));

  const lista = document.getElementById('pasta-lista-' + clienteId);
  if (!lista) return;

  if (!docs.length) {
    lista.innerHTML = '<div class="empty-state" style="padding:24px">Nenhum documento encontrado.</div>';
    return;
  }

  lista.innerHTML = docs.map(d => {
    const t = TIPO_DOC[d.tipo] || TIPO_DOC.outro;
    return `
    <div class="pasta-doc-row">
      <div class="pasta-doc-icon" style="background:${t.cor}20;color:${t.cor}">${t.icon}</div>
      <div class="pasta-doc-info">
        <span class="pasta-doc-nome">${esc(d.nome)}</span>
        <span class="pasta-doc-meta">
          <span class="pasta-tipo-chip" style="background:${t.cor}20;color:${t.cor}">${t.label}</span>
          ${esc(d.tamanho)} · ${esc(d.data)}
          ${d.protocolo ? `· <strong>Protocolo: ${esc(d.protocolo)}</strong>` : ''}
        </span>
      </div>
      <div class="pasta-doc-acoes">
        ${d.reutilizavel ? `<button class="btn-sm" title="Usar como base para nova peça" onclick="reutilizarDocumento('${esc(d.id)}','${clienteId}')">♻ Reutilizar</button>` : ''}
        <button class="btn-sm">⬇ Baixar</button>
        <button class="btn-danger-sm" onclick="removerDocPasta('${esc(d.id)}','${clienteId}')">✕</button>
      </div>
    </div>`;
  }).join('');
}

function adicionarDocumentoCliente(clienteId) {
  const nome  = prompt('Nome do arquivo (ex: Procuração — João Silva.pdf):');
  if (!nome) return;
  const tipos = Object.keys(TIPO_DOC);
  const tipo  = prompt(`Tipo (${tipos.join(', ')}):`) || 'outro';
  if (!GESTOR.pastaClientes[clienteId]) GESTOR.pastaClientes[clienteId] = [];
  GESTOR.pastaClientes[clienteId].push({
    id: 'D-'+clienteId+'-'+Date.now(),
    nome: nome.trim(),
    tipo: tipos.includes(tipo) ? tipo : 'outro',
    tamanho: '—', data: '27/06/2026',
    reutilizavel: ['peca','admin','contrato','declaracao'].includes(tipo),
    modeloId: null,
  });
  renderPastaTabs(clienteId);
  renderPastaLista(clienteId);
  toast(`✓ Documento adicionado à pasta do cliente!`);
}

function droparDocumento(event, clienteId) {
  event.preventDefault();
  document.getElementById('dropzone-'+clienteId)?.classList.remove('drag-over');
  const files = event.dataTransfer.files;
  if (!files.length) return;
  if (!GESTOR.pastaClientes[clienteId]) GESTOR.pastaClientes[clienteId] = [];
  Array.from(files).forEach(f => {
    GESTOR.pastaClientes[clienteId].push({
      id: 'D-'+clienteId+'-'+Date.now()+Math.random(),
      nome: f.name, tipo: 'outro',
      tamanho: (f.size / 1048576).toFixed(1) + ' MB',
      data: '27/06/2026', reutilizavel: false, modeloId: null,
    });
  });
  renderPastaTabs(clienteId);
  renderPastaLista(clienteId);
  toast(`✓ ${files.length} arquivo(s) adicionado(s) à pasta!`);
}

function removerDocPasta(docId, clienteId) {
  const pasta = GESTOR.pastaClientes[clienteId];
  if (!pasta) return;
  const idx = pasta.findIndex(d => d.id === docId);
  if (idx !== -1) pasta.splice(idx, 1);
  renderPastaTabs(clienteId);
  renderPastaLista(clienteId);
  toast('Documento removido da pasta.');
}

function reutilizarDocumento(docId, clienteId) {
  const doc = (GESTOR.pastaClientes[clienteId] || []).find(d => d.id === docId);
  if (!doc) return;
  fecharPastaCliente();
  showPage('peticoes');
  const isAdmin = doc.tipo === 'admin';
  setTimeout(() => {
    trocarTabPeticao(isAdmin ? 'administrativa' : 'judicial',
      document.querySelectorAll('.pet-tab')[isAdmin ? 1 : 0]);
    toast(`♻ Documento carregado como base!<br><small>→ ${esc(doc.nome)}</small>`);
  }, 200);
}

// Salvar doc na pasta ao protocolar petição administrativa
const _gerarPeticaoAdminOrig = window.gerarPeticaoAdmin;

// ============================================
// MÓDULO INTEGRAÇÕES
// ============================================

const INTEGRACOES_ESTADO = {};

function toggleDetalhe(id) {
  const el = document.getElementById('integ-detalhe-' + id);
  if (!el) return;
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

// ============================================
// WHATSAPP — CONFIGURAÇÃO OFICIAL E NÃO OFICIAL
// ============================================

function abrirConfigWhatsapp(tipo) {
  document.getElementById('modal-wpp')?.remove();
  const m = document.createElement('div');
  m.id = 'modal-wpp';
  m.className = 'modal-overlay';
  m.innerHTML = tipo === 'oficial' ? _htmlWppOficial() : _htmlWppNoficial();
  document.body.appendChild(m);
}

function fecharWpp() { document.getElementById('modal-wpp')?.remove(); }

function _htmlWppOficial() { return `
  <div class="modal-box wpp-box">
    <div class="modal-header" style="background:#e7fce8;border-bottom:2px solid #25d366">
      <div>
        <span style="font-size:16px;font-weight:800;color:#128c7e">💬 WhatsApp Oficial — Meta Business API</span>
        <span style="display:block;font-size:11px;color:var(--text-muted);margin-top:2px">Conexão via API oficial da Meta Platform</span>
      </div>
      <button class="modal-close" onclick="fecharWpp()">✕</button>
    </div>
    <div class="wpp-config-corpo">

      <div class="wpp-aviso oficial">
        <strong>✓ API Oficial Meta</strong> — Requer conta verificada no Meta Business Manager. Alta confiabilidade, suporte oficial e sem risco de bloqueio.
      </div>

      <div class="wpp-steps">
        <div class="wpp-step done"><span class="wpp-step-num">1</span><div><strong>Criar conta no Meta Business Manager</strong><br><small>business.facebook.com → Configurações → WhatsApp</small></div></div>
        <div class="wpp-step done"><span class="wpp-step-num">2</span><div><strong>Adicionar número verificado</strong><br><small>Número exclusivo para o escritório — não pode estar em uso no app</small></div></div>
        <div class="wpp-step"><span class="wpp-step-num">3</span><div><strong>Criar app no Meta Developers</strong><br><small>developers.facebook.com → Criar App → WhatsApp Business</small></div></div>
      </div>

      <div class="calc-form" style="margin-top:18px">
        <label class="calc-label">Phone Number ID <span class="campo-info">— obtido no painel Meta Developers</span></label>
        <input id="wpp-phone-id" class="calc-input" placeholder="Ex: 123456789012345"/>

        <label class="calc-label">WhatsApp Business Account ID (WABA ID)</label>
        <input id="wpp-waba-id" class="calc-input" placeholder="Ex: 987654321098765"/>

        <label class="calc-label">Token de Acesso Permanente <span class="campo-info">— System User Token</span></label>
        <input id="wpp-token" class="calc-input" type="password" placeholder="EAAxxxxxxxxxxxxxxxxxx..."/>

        <label class="calc-label">Webhook Verify Token <span class="campo-info">— string que você define</span></label>
        <input id="wpp-webhook-token" class="calc-input" placeholder="Ex: gestor_wpp_2026"/>

        <label class="calc-label">URL do Webhook <span class="campo-info">— configure no painel Meta</span></label>
        <div class="wpp-url-copy">
          <input class="calc-input" value="https://gestor-server.railway.app/webhook/whatsapp" readonly style="margin:0;flex:1;background:#f8faff"/>
          <button class="btn-sm" onclick="navigator.clipboard.writeText('https://gestor-server.railway.app/webhook/whatsapp');toast('✓ Copiado!')">Copiar</button>
        </div>

        <div class="wpp-config-btns">
          <button class="btn-secondary" onclick="fecharWpp()">Cancelar</button>
          <button class="btn-primary" onclick="salvarConfigWpp('oficial')">💾 Salvar e Conectar</button>
        </div>
      </div>
    </div>
  </div>`; }

function _htmlWppNoficial() {
  const qrAtivo = INTEGRACOES_ESTADO['wpp-noficial-qr'];
  return `
  <div class="modal-box wpp-box">
    <div class="modal-header" style="background:#e8f4f2;border-bottom:2px solid #128c7e">
      <div>
        <span style="font-size:16px;font-weight:800;color:#128c7e">💬 WhatsApp Não Oficial — Evolution API</span>
        <span style="display:block;font-size:11px;color:var(--text-muted);margin-top:2px">Conexão via QR Code · Qualquer número · Sem aprovação da Meta</span>
      </div>
      <button class="modal-close" onclick="fecharWpp()">✕</button>
    </div>
    <div class="wpp-config-corpo">

      <div class="wpp-aviso noficial">
        <strong>⚠ API Não Oficial</strong> — Usa o protocolo do WhatsApp Web (Baileys). Ativação por QR Code, sem aprovação da Meta. Funciona bem para volumes baixos/médios, mas há risco de bloqueio em envios em massa.
      </div>

      <div class="wpp-tabs-tipo">
        <button class="wpp-tab-tipo ativo" onclick="wppTabTipo('servidor',this)">Servidor Evolution API</button>
        <button class="wpp-tab-tipo" onclick="wppTabTipo('nuvem',this)">Evolution Cloud (Externo)</button>
      </div>

      <!-- ABA SERVIDOR PRÓPRIO -->
      <div id="wpp-tab-servidor" class="calc-form" style="margin-top:16px">
        <label class="calc-label">URL do servidor Evolution API <span class="campo-info">— seu Railway ou VPS</span></label>
        <input id="wpp-evo-url" class="calc-input" placeholder="Ex: https://evolution.seudominio.com.br"/>

        <label class="calc-label">API Key Global <span class="campo-info">— definida na instalação do Evolution</span></label>
        <input id="wpp-evo-key" class="calc-input" type="password" placeholder="Ex: B6D711FCDE4D4FD5936544120E713976"/>

        <label class="calc-label">Nome da Instância <span class="campo-info">— identificador da conexão</span></label>
        <input id="wpp-evo-instancia" class="calc-input" placeholder="Ex: costa-cavalcanti-adv"/>

        <div class="wpp-config-btns">
          <button class="btn-secondary" onclick="fecharWpp()">Cancelar</button>
          <button class="btn-primary" onclick="gerarQrCodeWpp()">📱 Gerar QR Code</button>
        </div>
      </div>

      <!-- ABA NUVEM -->
      <div id="wpp-tab-nuvem" style="display:none" class="calc-form" style="margin-top:16px">
        <label class="calc-label">Provedor</label>
        <select class="calc-input">
          <option>Evolution Cloud (evolution.co)</option>
          <option>Z-API</option>
          <option>UltraMsg</option>
          <option>WPPConnect</option>
        </select>
        <label class="calc-label">Instance ID / Token</label>
        <input class="calc-input" placeholder="Token do provedor..."/>
        <div class="wpp-config-btns">
          <button class="btn-secondary" onclick="fecharWpp()">Cancelar</button>
          <button class="btn-primary" onclick="salvarConfigWpp('noficial')">💾 Salvar e Conectar</button>
        </div>
      </div>

      <!-- QR CODE (mostrado após clicar Gerar) -->
      <div id="wpp-qr-area" style="display:none;text-align:center;padding:20px 0">
        <div class="wpp-qr-box">
          <div class="wpp-qr-simulado" id="wpp-qr-img">
            <div class="qr-grid"></div>
            <span>QR Code</span>
          </div>
          <p style="font-size:12px;color:var(--text-muted);margin-top:10px">Abra o WhatsApp no celular → <strong>Dispositivos Conectados</strong> → <strong>Conectar dispositivo</strong> → aponte para o QR</p>
          <div id="wpp-qr-status" class="wpp-qr-status aguardando">⏳ Aguardando leitura do QR Code...</div>
          <button class="btn-sm" onclick="simularConexaoWpp()" style="margin-top:10px">Simular conexão</button>
        </div>
      </div>

    </div>
  </div>`; }

function wppTabTipo(aba, btn) {
  document.querySelectorAll('.wpp-tab-tipo').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  document.getElementById('wpp-tab-servidor').style.display = aba === 'servidor' ? 'block' : 'none';
  document.getElementById('wpp-tab-nuvem').style.display    = aba === 'nuvem'    ? 'block' : 'none';
}

function gerarQrCodeWpp() {
  const url  = document.getElementById('wpp-evo-url')?.value.trim();
  const key  = document.getElementById('wpp-evo-key')?.value.trim();
  const inst = document.getElementById('wpp-evo-instancia')?.value.trim();
  if (!url || !key || !inst) { toast('Preencha URL, API Key e nome da instância.','warn'); return; }

  const qrArea = document.getElementById('wpp-qr-area');
  qrArea.style.display = 'block';
  qrArea.scrollIntoView({ behavior:'smooth', block:'center' });

  // Simula geração do QR (no backend real faria POST /instance/create)
  const grid = document.querySelector('.qr-grid');
  if (grid) {
    grid.innerHTML = Array.from({length:625}, () =>
      `<div style="background:${Math.random()>.5?'#000':'#fff'}"></div>`).join('');
  }
  toast('📱 QR Code gerado! Escaneie com o WhatsApp.');
}

function simularConexaoWpp() {
  const statusEl = document.getElementById('wpp-qr-status');
  if (statusEl) { statusEl.textContent = '🔄 Lendo QR Code...'; statusEl.className = 'wpp-qr-status aguardando'; }
  setTimeout(() => {
    if (statusEl) { statusEl.textContent = '✓ WhatsApp conectado com sucesso!'; statusEl.className = 'wpp-qr-status conectado'; }
    INTEGRACOES_ESTADO['wpp-noficial-qr'] = true;
    const card = document.getElementById('integ-whatsapp-noficial');
    if (card) {
      card.classList.remove('desativada');
      const st = card.querySelector('.integ-status');
      if (st) { st.textContent = '● Ativa'; st.className = 'integ-status ativa'; }
      const btn = card.querySelector('.btn-primary');
      if (btn) { btn.textContent = 'Gerenciar'; btn.className = 'btn-sm'; }
    }
    atualizarContadoresInteg();
    setTimeout(() => { fecharWpp(); toast('✓ WhatsApp não oficial ativo!<br><small>→ Envios automáticos habilitados via Evolution API</small>'); }, 1200);
  }, 2000);
}

function salvarConfigWpp(tipo) {
  const id   = tipo === 'oficial' ? 'wpp-token' : null;
  const val  = id ? document.getElementById(id)?.value.trim() : '—';
  if (tipo === 'oficial' && !val) { toast('Informe o Token de Acesso.','warn'); return; }

  toast(`🔄 Conectando WhatsApp ${tipo === 'oficial' ? 'Oficial' : 'Não Oficial'}...`);
  setTimeout(() => {
    const cardId = tipo === 'oficial' ? 'integ-whatsapp-oficial' : 'integ-whatsapp-noficial';
    const card   = document.getElementById(cardId);
    if (card) {
      card.classList.remove('desativada');
      const st  = card.querySelector('.integ-status');
      if (st) { st.textContent = '● Ativa'; st.className = 'integ-status ativa'; }
      const btn = card.querySelector('.btn-primary');
      if (btn) { btn.textContent = 'Gerenciar'; btn.className = 'btn-sm'; btn.setAttribute('onclick', `abrirConfigWhatsapp('${tipo}')`); }
    }
    atualizarContadoresInteg();
    fecharWpp();
    toast(`✓ WhatsApp ${tipo === 'oficial' ? 'Oficial (Meta)' : 'Não Oficial (Evolution)'} configurado!`);
  }, 1800);
}

function ativarIntegracao(id, nome) {
  const card = document.getElementById('integ-' + id);
  const btn = card ? card.querySelector('.btn-primary') : null;
  if (btn) { btn.textContent = '🔄 Configurando...'; btn.disabled = true; }

  setTimeout(() => {
    INTEGRACOES_ESTADO[id] = 'ativa';
    if (card) {
      card.classList.remove('desativada');
      const statusEl = card.querySelector('.integ-status');
      if (statusEl) { statusEl.textContent = '● Ativa'; statusEl.className = 'integ-status ativa'; }
      if (btn) { btn.textContent = 'Configurar'; btn.disabled = false; btn.className = 'btn-sm'; }
    }
    atualizarContadoresInteg();
    toast(`✓ ${nome} ativado com sucesso!<br><small>→ Integração conectada ao GESTOR</small>`);
  }, 1600);
}

// ===== MIGRAÇÃO DE DADOS =====

const MIGRACAO_SISTEMAS = {
  projuris:   { nome:'ProJuris',             formatos:['CSV','XML'],          cor:'#1a3a6e' },
  advwin:     { nome:'AdvWin',               formatos:['Excel (.xlsx)','.bak'],cor:'#c0392b' },
  saj:        { nome:'SAJ ADV',              formatos:['CSV','XML'],          cor:'#2980b9' },
  themis:     { nome:'Themis',               formatos:['CSV','XML'],          cor:'#6c3483' },
  legalcloud: { nome:'Legal Cloud / Astrea', formatos:['JSON','CSV'],         cor:'#16a085' },
  planilha:   { nome:'Planilha genérica',    formatos:['Excel (.xlsx)','CSV'],cor:'#1d6f42' },
};

const MIGRACAO_CAMPOS = [
  { id:'clientes',  label:'Clientes',    icone:'👥', desc:'Nome, CPF/CNPJ, telefone, e-mail, endereço' },
  { id:'processos', label:'Processos',   icone:'⚖',  desc:'Número, vara, tribunal, partes, tipo de ação' },
  { id:'prazos',    label:'Prazos',      icone:'⏱',  desc:'Datas fatais, andamentos, alertas' },
  { id:'documentos',label:'Documentos',  icone:'📁',  desc:'Arquivos PDF, Word, contratos, petições' },
  { id:'financeiro',label:'Financeiro',  icone:'💰',  desc:'Honorários, pagamentos, contratos financeiros' },
  { id:'agenda',    label:'Agenda',      icone:'📅',  desc:'Audiências, reuniões, tarefas agendadas' },
];

let _migracaoSistema = null;
let _migracaoPassoAtual = 1;
let _migracaoSelecoes = {};
let _migracaoArquivo = null;

function abrirWizardPlanilha(tipo) {
  const labels = { clientes:'Clientes', processos:'Processos', documentos:'Documentos', financeiro:'Financeiro' };
  _migracaoSistema = 'planilha';
  _migracaoPassoAtual = 1;
  _migracaoSelecoes = { [tipo]: true };
  _migracaoArquivo = null;
  abrirWizardMigracao('planilha');
}

function ativarZapSign() {
  const key = document.getElementById('zapsign-api-key')?.value?.trim();
  if (!key) { toast('Informe a chave de API do ZapSign.','warn'); return; }
  const card = document.getElementById('integ-zapsign');
  const status = card?.querySelector('.integ-status');
  if (card) card.classList.remove('desativada');
  if (status) { status.textContent = '● Ativa'; status.className = 'integ-status ativa'; }
  atualizarContadoresInteg();
  toast('✓ ZapSign ativado! Assinaturas digitais habilitadas nos Documentos.','success');
}

function ativarTramitacao() {
  const token = document.getElementById('tramitacao-token')?.value?.trim();
  if (!token) { toast('Informe o token de acesso do CNJ.','warn'); return; }
  const card = document.getElementById('integ-tramitacao');
  const status = card?.querySelector('.integ-status');
  if (card) card.classList.remove('desativada');
  if (status) { status.textContent = '● Ativa'; status.className = 'integ-status ativa'; }
  atualizarContadoresInteg();
  toast('✓ Tramitação Inteligente ativada! Processos serão monitorados automaticamente.','success');
}

function abrirWizardMigracao(sistema) {
  // garante que não abre duplicado
  document.getElementById('modal-migracao')?.remove();
  _migracaoSistema = sistema;
  _migracaoPassoAtual = sistema ? 1 : 0; // passo 0 = escolher sistema
  _migracaoSelecoes = {};
  _migracaoArquivo = null;

  const sys = sistema ? MIGRACAO_SISTEMAS[sistema] : { nome:'Sistema externo', cor:'var(--gold)' };
  const modal = document.createElement('div');
  modal.id = 'modal-migracao';
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-box" style="max-width:680px;width:95%">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
        <div style="width:40px;height:40px;border-radius:8px;background:${sys.cor};color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">📥</div>
        <div>
          <div style="font-size:16px;font-weight:700;color:var(--text)">Importar dados de ${sys.nome}</div>
          <div style="font-size:12px;color:var(--text-muted)">Assistente de migração — siga os passos abaixo</div>
        </div>
        <button onclick="fecharWizardMigracao()" style="margin-left:auto;background:none;border:none;font-size:20px;cursor:pointer;color:var(--text-muted)">✕</button>
      </div>

      <!-- STEPPER -->
      <div class="mig-stepper" id="mig-stepper">
        ${[
          { n:1, l:'O que importar' },
          { n:2, l:'Enviar arquivo' },
          { n:3, l:'Mapear campos' },
          { n:4, l:'Revisar' },
          { n:5, l:'Importando' },
        ].map(s => `
          <div class="mig-step ${s.n === 1 ? 'ativo' : ''}" id="mig-step-ind-${s.n}">
            <div class="mig-step-num">${s.n}</div>
            <div class="mig-step-label">${s.l}</div>
          </div>
          ${s.n < 5 ? '<div class="mig-step-linha" id="mig-linha-'+s.n+'"></div>' : ''}
        `).join('')}
      </div>

      <!-- CONTEÚDO DO PASSO -->
      <div id="mig-conteudo"></div>

      <!-- RODAPÉ -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:24px;padding-top:16px;border-top:1px solid var(--border)" id="mig-footer">
        <button class="btn-outline" id="mig-btn-voltar" onclick="migPasso(-1)" style="display:none">← Voltar</button>
        <span style="flex:1"></span>
        <button class="btn-primary" id="mig-btn-avancar" onclick="migPasso(1)">Próximo →</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  _migRenderPasso(_migracaoPassoAtual);
}

function fecharWizardMigracao() {
  document.getElementById('modal-migracao')?.remove();
}

function migPasso(dir) {
  const novo = _migracaoPassoAtual + dir;
  if (novo < 0 || novo > 5) return;
  if (dir > 0 && _migracaoPassoAtual === 1 && Object.keys(_migracaoSelecoes).length === 0) {
    toast('Selecione ao menos um tipo de dado para importar.', 'warn'); return;
  }
  if (dir > 0 && _migracaoPassoAtual === 2 && !_migracaoArquivo) {
    toast('Envie o arquivo de exportação antes de continuar.', 'warn'); return;
  }
  _migracaoPassoAtual = novo;
  _migRenderPasso(novo);
}

function _migRenderPasso(passo) {
  // atualiza stepper visual
  for (let i = 1; i <= 5; i++) {
    const el = document.getElementById('mig-step-ind-' + i);
    if (!el) continue;
    el.className = 'mig-step' + (i === passo ? ' ativo' : i < passo ? ' concluido' : '');
    const num = el.querySelector('.mig-step-num');
    if (num) num.textContent = i < passo ? '✓' : i;
    const linha = document.getElementById('mig-linha-' + i);
    if (linha) linha.style.background = i < passo ? 'var(--gold)' : 'var(--border)';
  }

  const btnVoltar  = document.getElementById('mig-btn-voltar');
  const btnAvancar = document.getElementById('mig-btn-avancar');
  if (btnVoltar)  btnVoltar.style.display  = passo > 1 && passo < 5 ? '' : 'none';
  if (btnAvancar) btnAvancar.style.display = passo < 4 ? '' : 'none';

  const cont = document.getElementById('mig-conteudo');
  if (!cont) return;

  const sys = _migracaoSistema ? MIGRACAO_SISTEMAS[_migracaoSistema] : { nome:'', cor:'var(--gold)' };

  if (passo === 0) {
    // Seleção do sistema de origem
    if (btnVoltar)  btnVoltar.style.display = 'none';
    if (btnAvancar) btnAvancar.style.display = 'none';
    cont.innerHTML = `
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:16px">Selecione o sistema de onde deseja importar os dados:</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${Object.entries(MIGRACAO_SISTEMAS).map(([k,s]) => `
          <button onclick="_migEscolherSistema('${k}')"
            style="display:flex;align-items:center;gap:12px;padding:14px 16px;border:2px solid var(--border);border-radius:10px;background:var(--surface);cursor:pointer;text-align:left;transition:all 0.2s"
            onmouseover="this.style.borderColor='var(--gold)'" onmouseout="this.style.borderColor='var(--border)'">
            <div style="width:36px;height:36px;border-radius:8px;background:${s.cor};color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0">
              ${k === 'planilha' ? '📊' : k.slice(0,2).toUpperCase()}
            </div>
            <div>
              <div style="font-weight:600;font-size:13px;color:var(--text)">${s.nome}</div>
              <div style="font-size:11px;color:var(--text-muted)">${s.formatos.join(' / ')}</div>
            </div>
          </button>
        `).join('')}
      </div>`;
    return;
  }

  if (passo === 1) {
    cont.innerHTML = `
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:16px">
        ${sys.nome ? `Sistema: <strong>${sys.nome}</strong> — s` : 'S'}elecione o que deseja importar:
      </p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${MIGRACAO_CAMPOS.map(c => `
          <label class="mig-campo-check ${_migracaoSelecoes[c.id] ? 'selecionado' : ''}" id="mig-campo-${c.id}" onclick="_migToggleCampo('${c.id}')">
            <span style="font-size:20px">${c.icone}</span>
            <div>
              <div style="font-weight:600;font-size:13px">${c.label}</div>
              <div style="font-size:11px;color:var(--text-muted)">${c.desc}</div>
            </div>
            <span class="mig-check-mark">${_migracaoSelecoes[c.id] ? '✓' : ''}</span>
          </label>
        `).join('')}
      </div>`;
  } else if (passo === 2) {
    const selecionados = Object.keys(_migracaoSelecoes).map(k => MIGRACAO_CAMPOS.find(c => c.id === k)?.label).join(', ');
    cont.innerHTML = `
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:4px">Importando: <strong>${selecionados}</strong></p>
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:16px">Formatos aceitos do ${sys.nome}: <strong>${sys.formatos.join(', ')}</strong></p>
      <div class="mig-upload-area" id="mig-upload-area" onclick="document.getElementById('mig-file-input').click()">
        <div style="font-size:36px">📂</div>
        <div style="font-weight:600;margin:8px 0 4px">Clique para selecionar o arquivo</div>
        <div style="font-size:12px;color:var(--text-muted)" id="mig-file-nome">${_migracaoArquivo ? _migracaoArquivo.name : 'Ou arraste o arquivo aqui'}</div>
      </div>
      <input type="file" id="mig-file-input" style="display:none"
        accept=".csv,.xml,.xlsx,.json,.bak"
        onchange="_migSelecionarArquivo(this)">
      <div style="margin-top:12px;padding:10px 14px;background:var(--surface);border-radius:8px;border:1px solid var(--border);font-size:12px;color:var(--text-muted)">
        ℹ️ <strong>Como exportar do ${sys.nome}?</strong>
        ${_migInstrucaoExportacao(_migracaoSistema)}
      </div>`;
  } else if (passo === 3) {
    cont.innerHTML = `
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:16px">
        Confirme o mapeamento de colunas detectado automaticamente. Você pode ajustar se necessário.
      </p>
      <div style="border:1px solid var(--border);border-radius:8px;overflow:hidden">
        <div style="display:grid;grid-template-columns:1fr 1fr;background:var(--surface);padding:10px 16px;font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;gap:8px">
          <span>Campo no ${sys.nome}</span><span>Campo no GESTOR</span>
        </div>
        ${_migMapeamentoLinhas().map(linha => `
          <div style="display:grid;grid-template-columns:1fr 1fr;padding:10px 16px;font-size:13px;border-top:1px solid var(--border);gap:8px;align-items:center">
            <span style="color:var(--text-muted);font-family:monospace">${linha.origem}</span>
            <select class="input-field" style="padding:6px 8px;font-size:12px">
              <option value="${linha.destino}" selected>${linha.label}</option>
              <option value="ignorar">— Ignorar campo —</option>
            </select>
          </div>
        `).join('')}
      </div>`;
  } else if (passo === 4) {
    const selecionados = Object.keys(_migracaoSelecoes);
    const totalEstimado = selecionados.length * 23 + Math.floor(Math.random() * 40);
    cont.innerHTML = `
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:16px">Revise o resumo antes de iniciar a importação:</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px">
        <div class="sup-dado"><span>Sistema de origem</span><span>${sys.nome}</span></div>
        <div class="sup-dado"><span>Arquivo</span><span>${_migracaoArquivo?.name || 'exportacao.csv'}</span></div>
        <div class="sup-dado"><span>Dados selecionados</span><span>${selecionados.map(k => MIGRACAO_CAMPOS.find(c=>c.id===k)?.icone+' '+MIGRACAO_CAMPOS.find(c=>c.id===k)?.label).join(' · ')}</span></div>
        <div class="sup-dado"><span>Registros estimados</span><span>~${totalEstimado} registros</span></div>
        <div class="sup-dado"><span>Conflitos</span><span style="color:var(--gold)">⚠ Registros duplicados serão ignorados automaticamente</span></div>
      </div>
      <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px 16px;font-size:13px;color:#166534">
        ✅ Nenhum dado existente no GESTOR será sobrescrito ou apagado. A importação é aditiva.
      </div>
      <div style="margin-top:12px">
        <button class="btn-primary" style="width:100%;padding:14px;font-size:15px" onclick="_migIniciarImportacao()">
          🚀 Iniciar importação agora
        </button>
      </div>`;
    if (btnAvancar) btnAvancar.style.display = 'none';
  } else if (passo === 5) {
    if (btnVoltar)  btnVoltar.style.display  = 'none';
    if (btnAvancar) btnAvancar.style.display = 'none';
    cont.innerHTML = `<div id="mig-progresso-wrap"></div>`;
    _migAnimarImportacao();
  }
}

function _migEscolherSistema(sistema) {
  _migracaoSistema = sistema;
  _migracaoPassoAtual = 1;
  const sys = MIGRACAO_SISTEMAS[sistema];
  // Atualiza título e ícone do modal
  const tituloEl = document.querySelector('#modal-migracao .modal-box > div:first-child div div:first-child');
  const iconeEl  = document.querySelector('#modal-migracao .modal-box > div:first-child > div:first-child');
  if (tituloEl) tituloEl.textContent = `Importar dados de ${sys.nome}`;
  if (iconeEl) iconeEl.style.background = sys.cor;
  _migRenderPasso(1);
}

function _migToggleCampo(id) {
  if (_migracaoSelecoes[id]) {
    delete _migracaoSelecoes[id];
  } else {
    _migracaoSelecoes[id] = true;
  }
  const el = document.getElementById('mig-campo-' + id);
  if (!el) return;
  const mark = el.querySelector('.mig-check-mark');
  if (_migracaoSelecoes[id]) {
    el.classList.add('selecionado');
    if (mark) mark.textContent = '✓';
  } else {
    el.classList.remove('selecionado');
    if (mark) mark.textContent = '';
  }
}

function _migSelecionarArquivo(input) {
  if (!input.files || !input.files[0]) return;
  _migracaoArquivo = input.files[0];
  const nomeEl = document.getElementById('mig-file-nome');
  const area = document.getElementById('mig-upload-area');
  if (nomeEl) nomeEl.textContent = `✓ ${_migracaoArquivo.name} (${(_migracaoArquivo.size/1024).toFixed(1)} KB)`;
  if (area)   area.style.borderColor = 'var(--gold)';
}

function _migInstrucaoExportacao(sistema) {
  const inst = {
    projuris:   ' Acesse <b>Configurações → Exportar dados → CSV</b> no ProJuris e baixe o arquivo completo.',
    advwin:     ' No AdvWin, vá em <b>Utilitários → Exportar → Excel</b> e salve o arquivo .xlsx.',
    saj:        ' No SAJ ADV, use <b>Relatórios → Exportar → CSV</b> para gerar o arquivo.',
    themis:     ' No Themis, acesse <b>Ferramentas → Exportação de dados → Formato CSV</b>.',
    legalcloud: ' No Legal Cloud/Astrea, vá em <b>Configurações → Exportar base de dados → JSON</b>.',
    planilha:   ' Organize sua planilha com cabeçalhos na primeira linha e salve em .xlsx ou .csv.',
  };
  return inst[sistema] || ' Consulte o manual do sistema para exportar os dados em CSV ou XML.';
}

function _migMapeamentoLinhas() {
  const sys = _migracaoSistema;
  const mapas = {
    projuris: [
      { origem:'cliente_nome',    destino:'nome',     label:'Nome do cliente' },
      { origem:'cliente_cpf',     destino:'cpf',      label:'CPF / CNPJ' },
      { origem:'cliente_telefone',destino:'telefone', label:'Telefone' },
      { origem:'processo_numero', destino:'numero',   label:'Número do processo' },
      { origem:'processo_vara',   destino:'vara',     label:'Vara / Tribunal' },
      { origem:'processo_status', destino:'status',   label:'Status do processo' },
      { origem:'prazo_data',      destino:'prazo',    label:'Data do prazo' },
    ],
    advwin: [
      { origem:'NomeCliente',   destino:'nome',    label:'Nome do cliente' },
      { origem:'CPF_CNPJ',      destino:'cpf',     label:'CPF / CNPJ' },
      { origem:'NumProcesso',   destino:'numero',  label:'Número do processo' },
      { origem:'Tribunal',      destino:'vara',    label:'Vara / Tribunal' },
      { origem:'DataPrazo',     destino:'prazo',   label:'Data do prazo' },
    ],
    planilha: [
      { origem:'Coluna A',  destino:'nome',     label:'Nome do cliente' },
      { origem:'Coluna B',  destino:'cpf',      label:'CPF / CNPJ' },
      { origem:'Coluna C',  destino:'telefone', label:'Telefone' },
      { origem:'Coluna D',  destino:'numero',   label:'Número do processo' },
      { origem:'Coluna E',  destino:'vara',     label:'Vara / Tribunal' },
    ],
  };
  return mapas[sys] || mapas.planilha;
}

function _migIniciarImportacao() {
  _migracaoPassoAtual = 5;
  _migRenderPasso(5);
}

function _migAnimarImportacao() {
  const sys = MIGRACAO_SISTEMAS[_migracaoSistema];
  const selecionados = Object.keys(_migracaoSelecoes);
  const wrap = document.getElementById('mig-progresso-wrap');
  if (!wrap) return;

  const totais = {};
  selecionados.forEach(k => { totais[k] = 10 + Math.floor(Math.random() * 60); });

  wrap.innerHTML = `
    <div style="text-align:center;padding:8px 0 20px">
      <div style="font-size:28px;margin-bottom:8px">⚙️</div>
      <div style="font-weight:700;font-size:15px">Importando dados do ${sys.nome}...</div>
      <div style="font-size:12px;color:var(--text-muted);margin-top:4px">Não feche esta janela</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:12px" id="mig-barras">
      ${selecionados.map(k => {
        const c = MIGRACAO_CAMPOS.find(f => f.id === k);
        return `
          <div>
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
              <span>${c?.icone} ${c?.label}</span>
              <span id="mig-pct-${k}" style="color:var(--text-muted)">0%</span>
            </div>
            <div style="background:var(--border);border-radius:4px;height:6px;overflow:hidden">
              <div id="mig-bar-${k}" style="height:100%;width:0%;background:var(--gold);transition:width 0.3s"></div>
            </div>
          </div>`;
      }).join('')}
    </div>
    <div id="mig-resultado" style="display:none"></div>`;

  let idx = 0;
  function avancarBarra() {
    if (idx >= selecionados.length) {
      _migConcluir(totais);
      return;
    }
    const k = selecionados[idx];
    let pct = 0;
    const intervalo = setInterval(() => {
      pct += 8 + Math.floor(Math.random() * 12);
      if (pct >= 100) pct = 100;
      const bar = document.getElementById('mig-bar-' + k);
      const pctEl = document.getElementById('mig-pct-' + k);
      if (bar)   bar.style.width = pct + '%';
      if (pctEl) pctEl.textContent = pct + '%';
      if (pct >= 100) {
        clearInterval(intervalo);
        idx++;
        setTimeout(avancarBarra, 300);
      }
    }, 180);
  }
  avancarBarra();
}

function _migConcluir(totais) {
  const sys = MIGRACAO_SISTEMAS[_migracaoSistema];
  const total = Object.values(totais).reduce((a,b) => a+b, 0);
  const resultado = document.getElementById('mig-resultado');
  if (resultado) {
    resultado.style.display = '';
    resultado.innerHTML = `
      <div style="margin-top:20px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:16px 20px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <span style="font-size:24px">🎉</span>
          <div>
            <div style="font-weight:700;color:#166534">Importação concluída com sucesso!</div>
            <div style="font-size:12px;color:#16a34a">${total} registros importados do ${sys.nome}</div>
          </div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          ${Object.entries(totais).map(([k,v]) => {
            const c = MIGRACAO_CAMPOS.find(f => f.id === k);
            return `<span style="background:#dcfce7;color:#166534;padding:4px 10px;border-radius:20px;font-size:12px">${c?.icone} ${v} ${c?.label}</span>`;
          }).join('')}
        </div>
        <div style="display:flex;gap:8px;margin-top:14px">
          <button class="btn-primary btn-sm" onclick="fecharWizardMigracao();showPage('clientes')">👥 Ver Clientes</button>
          <button class="btn-primary btn-sm" onclick="fecharWizardMigracao();showPage('processos')">⚖ Ver Processos</button>
          <button class="btn-outline btn-sm" onclick="fecharWizardMigracao()">Fechar</button>
        </div>
      </div>`;
  }
}

function atualizarContadoresInteg() {
  const ativas    = document.querySelectorAll('.integ-status.ativa').length;
  const pendentes = document.querySelectorAll('.integ-status.pendente').length;
  const disponiveis = document.querySelectorAll('.integ-status.disponivel').length;
  const ea = document.getElementById('integ-count-ativas');
  const ep = document.getElementById('integ-count-pendentes');
  const ed = document.getElementById('integ-count-disponiveis');
  if (ea) ea.textContent = ativas;
  if (ep) ep.textContent = pendentes;
  if (ed) ed.textContent = disponiveis;
}

// ============================================
// MÓDULO GERID / INSS DIGITAL DO ADVOGADO
// ============================================

const GERID = {
  sessaoAtiva: false,
  timerInterval: null,
  segundosRestantes: 30 * 60,

  requerimentos: [
    { nb:'182.367.490-5', protocolo:'1.024.987.654-3', beneficiario:'João Pedro Silva', cpf:'123.456.789-00', tipo:'Aposentadoria por Tempo de Contribuição', dataEntrada:'10/03/2026', situacao:'em_analise', atualizacao:'27/06/2026', procGestor:'P1' },
    { nb:'182.440.312-1', protocolo:'1.024.654.321-7', beneficiario:'Maria Costa', cpf:'987.654.321-00', tipo:'Aposentadoria por Invalidez', dataEntrada:'05/05/2026', situacao:'exigencia', atualizacao:'25/06/2026', procGestor:'P2' },
    { nb:'182.501.774-0', protocolo:'1.024.111.999-2', beneficiario:'Carlos Rodrigues', cpf:'456.789.123-00', tipo:'Benefício de Prestação Continuada (BPC)', dataEntrada:'18/04/2026', situacao:'deferido', atualizacao:'20/06/2026', procGestor:'P4' },
    { nb:'—', protocolo:'1.024.888.555-9', beneficiario:'Ana Lima', cpf:'321.654.987-00', tipo:'Salário-Maternidade', dataEntrada:'01/06/2026', situacao:'aguardando_pericia', atualizacao:'15/06/2026', procGestor:null },
    { nb:'—', protocolo:'1.024.777.333-1', beneficiario:'Pedro Souza', cpf:'741.852.963-00', tipo:'Aposentadoria por Tempo de Contribuição', dataEntrada:'22/06/2026', situacao:'protocolo_gerado', atualizacao:'22/06/2026', procGestor:null },
  ],

  dadosCPF: {
    '123.456.789-00': {
      nome:'João Pedro Silva', nascimento:'15/04/1965', cpf:'123.456.789-00',
      situacao:'Ativo — Aposentado', nb:'182.367.490-5',
      tipo:'Aposentadoria por Tempo de Contribuição', dib:'01/02/2026',
      valorBeneficio:'R$ 2.847,00', carencia:300, tempoApurado:'35a 2m 14d',
      cnis:[
        { empresa:'Construtora ABC Ltda', inicio:'01/03/1988', fim:'15/07/2005', tempo:'17a 4m' },
        { empresa:'Prefeitura Municipal SP', inicio:'01/08/2005', fim:'31/12/2020', tempo:'15a 5m' },
        { empresa:'Cooperativa Rural Boa Vista', inicio:'01/01/1985', fim:'28/02/1988', tempo:'3a 2m' },
      ]
    },
    '987.654.321-00': {
      nome:'Maria Costa', nascimento:'22/09/1978', cpf:'987.654.321-00',
      situacao:'Em análise — Requerimento pendente', nb:'182.440.312-1',
      tipo:'Aposentadoria por Invalidez', dib:'—',
      valorBeneficio:'Aguardando perícia', carencia:120, tempoApurado:'18a 7m',
      cnis:[
        { empresa:'Indústria Têxtil Norte', inicio:'01/06/2005', fim:'30/09/2023', tempo:'18a 4m' },
      ]
    },
    '456.789.123-00': {
      nome:'Carlos Rodrigues', nascimento:'03/11/1958', cpf:'456.789.123-00',
      situacao:'Deferido — Benefício concedido', nb:'182.501.774-0',
      tipo:'BPC — Benefício de Prestação Continuada', dib:'01/06/2026',
      valorBeneficio:'R$ 1.412,00 (1 SM)', carencia:0, tempoApurado:'—',
      cnis:[]
    },
  },

  situacaoInfo(s) {
    const map = {
      em_analise:       { label:'Em análise',         cls:'gerid-sit-analise' },
      exigencia:        { label:'Exigência pendente',  cls:'gerid-sit-exigencia' },
      deferido:         { label:'Deferido ✓',          cls:'gerid-sit-deferido' },
      indeferido:       { label:'Indeferido',          cls:'gerid-sit-indeferido' },
      aguardando_pericia:{ label:'Aguard. perícia',    cls:'gerid-sit-pericia' },
      protocolo_gerado: { label:'Protocolado',         cls:'gerid-sit-protocolo' },
    };
    return map[s] || { label:s, cls:'' };
  },
};

function abrirPainelGerid() {
  const painel = document.getElementById('gerid-inline-painel');
  if (!painel) return;

  // toggle — fecha se já aberto
  if (painel.style.display === 'block') {
    painel.style.display = 'none';
    return;
  }

  painel.style.display = 'block';
  painel.innerHTML = `
    <!-- Cabeçalho GERID inline -->
    <div class="gerid-inline-header">
      <div style="display:flex;align-items:center;gap:12px">
        <span style="font-size:22px">🏛</span>
        <div>
          <div style="font-weight:800;color:var(--navy)">INSS / GERID — Digital do Advogado</div>
          <div style="font-size:11px;color:var(--text-muted)">Certificado A1 · Consulta e protocolo de requerimentos</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <span id="gerid-status-badge" class="gerid-badge ${GERID.sessaoAtiva ? 'conectado' : 'desconectado'}">
          ${GERID.sessaoAtiva ? '● Conectado' : '● Desconectado'}
        </span>
        <button class="btn-primary btn-sm" id="btn-gerid-login" onclick="geridLogin()"
          ${GERID.sessaoAtiva ? 'style="background:var(--success)"' : ''}>
          ${GERID.sessaoAtiva ? '🔐 Conectado' : '🔐 Conectar com Certificado A1'}
        </button>
        <button class="btn-sm" onclick="document.getElementById('gerid-inline-painel').style.display='none'">✕ Fechar</button>
      </div>
    </div>

    <!-- Painel login (antes de autenticar) -->
    <div id="gerid-painel-login" ${GERID.sessaoAtiva ? 'style="display:none"' : ''} class="gerid-login-painel" style="margin:0;background:transparent">
      <div class="gerid-login-box">
        <div class="gerid-login-logo">🏛</div>
        <h2>INSS Digital do Advogado</h2>
        <p>Conecte seu certificado digital A1 para acessar o GERID e consultar benefícios, protocolos e requerimentos dos seus clientes.</p>
        <div class="gerid-cert-info">
          <div class="gerid-cert-row"><span class="gerid-cert-label">Certificado</span><span class="gerid-cert-val" id="gerid-cert-nome">Nenhum carregado</span></div>
          <div class="gerid-cert-row"><span class="gerid-cert-label">Tipo</span><span class="gerid-cert-val">A1 — ICP-Brasil</span></div>
          <div class="gerid-cert-row"><span class="gerid-cert-label">OAB</span><span class="gerid-cert-val">OAB/SP 123.456</span></div>
        </div>
        <button class="btn-primary" style="width:100%" onclick="geridLogin()">🔐 Autenticar no INSS</button>
        <p class="gerid-aviso">Seus dados trafegam com criptografia SSL · O certificado não é armazenado</p>
      </div>
    </div>

    <!-- Painel principal (após autenticar) -->
    <div id="gerid-painel-principal" ${GERID.sessaoAtiva ? '' : 'style="display:none"'}>
      <div class="gerid-sessao-bar">
        <span>🔐 Sessão ativa · Dr. Klebson Cavalcanti — OAB/SP 123.456</span>
        <span class="gerid-timer" id="gerid-timer">⏱ Sessão expira em 29:59</span>
        <button class="btn-sm" onclick="geridLogout()">Encerrar sessão</button>
      </div>
      <div class="card" style="margin:16px 0 12px">
        <div class="card-header"><h3 class="card-title">Consultar Beneficiário por CPF</h3></div>
        <div class="gerid-busca-form">
          <input id="gerid-cpf" class="calc-input" type="text" placeholder="000.000.000-00" maxlength="14"
            oninput="mascararCPF(this)" style="flex:1"/>
          <select id="gerid-tipo-consulta" class="calc-input" style="width:220px">
            <option value="beneficios">Benefícios Concedidos</option>
            <option value="requerimentos">Requerimentos em Andamento</option>
            <option value="cnis">Extrato CNIS</option>
            <option value="carencia">Carência e Tempo</option>
          </select>
          <button class="btn-primary" onclick="geridBuscar()">🔍 Consultar</button>
        </div>
      </div>
      <div id="gerid-resultado" style="display:none"></div>
      <div class="card" style="margin-top:12px">
        <div class="card-header">
          <h3 class="card-title">Requerimentos do Escritório no INSS</h3>
          <button class="btn-sm" onclick="geridAtualizar()">🔄 Atualizar</button>
        </div>
        <div style="padding:0;overflow:hidden;border:1px solid var(--border);border-radius:8px;margin-top:8px">
          <table class="data-table" id="gerid-tabela-req">
            <thead><tr>
              <th>NB / Protocolo</th><th>Beneficiário</th><th>Tipo de Benefício</th>
              <th>Data Entrada</th><th>Situação</th><th>Última Atualização</th><th>Ações</th>
            </tr></thead>
            <tbody id="gerid-req-tbody"></tbody>
          </table>
        </div>
      </div>
    </div>`;

  if (GERID.sessaoAtiva) {
    geridRenderRequerimentos();
  }
}

function geridLogin() {
  const btn = document.getElementById('btn-gerid-login');
  if (!btn) return;
  btn.textContent = '🔄 Autenticando...';
  btn.disabled = true;

  setTimeout(() => {
    GERID.sessaoAtiva = true;
    const loginEl = document.getElementById('gerid-painel-login');
    const principalEl = document.getElementById('gerid-painel-principal');
    const badgeEl = document.getElementById('gerid-status-badge');
    if (loginEl) loginEl.style.display = 'none';
    if (principalEl) principalEl.style.display = 'block';
    if (badgeEl) { badgeEl.textContent = '● Conectado'; badgeEl.className = 'gerid-badge conectado'; }
    btn.textContent = '🔐 Conectado';
    btn.style.background = 'var(--success)';
    btn.disabled = false;
    geridRenderRequerimentos();
    geridIniciarTimer();
    // Atualiza card na lista de integrações
    const cardStatus = document.querySelector('#integ-gerid .integ-status');
    if (cardStatus) { cardStatus.textContent = '● Ativa'; cardStatus.className = 'integ-status ativa'; }
    toast('✓ Autenticado no INSS GERID!<br><small>→ Certificado A1 validado · Sessão de 30 min iniciada</small>');
  }, 2000);
}

function geridLogout() {
  GERID.sessaoAtiva = false;
  clearInterval(GERID.timerInterval);
  const loginEl = document.getElementById('gerid-painel-login');
  const principalEl = document.getElementById('gerid-painel-principal');
  const badgeEl = document.getElementById('gerid-status-badge');
  const btn = document.getElementById('btn-gerid-login');
  const resEl = document.getElementById('gerid-resultado');
  if (loginEl) loginEl.style.display = 'block';
  if (principalEl) principalEl.style.display = 'none';
  if (badgeEl) { badgeEl.textContent = '● Desconectado'; badgeEl.className = 'gerid-badge desconectado'; }
  if (btn) { btn.textContent = '🔐 Conectar com Certificado A1'; btn.disabled = false; btn.style.background = ''; }
  if (resEl) resEl.style.display = 'none';
  toast('Sessão INSS encerrada.');
}

function geridIniciarTimer() {
  GERID.segundosRestantes = 30 * 60;
  clearInterval(GERID.timerInterval);
  GERID.timerInterval = setInterval(() => {
    GERID.segundosRestantes--;
    const m = String(Math.floor(GERID.segundosRestantes / 60)).padStart(2,'0');
    const s = String(GERID.segundosRestantes % 60).padStart(2,'0');
    const el = document.getElementById('gerid-timer');
    if (el) el.textContent = `⏱ Sessão expira em ${m}:${s}`;
    if (GERID.segundosRestantes <= 0) { clearInterval(GERID.timerInterval); geridLogout(); toast('⚠️ Sessão INSS expirada. Reconecte.','warn'); }
  }, 1000);
}

function mascararCPF(input) {
  let v = input.value.replace(/\D/g,'');
  if (v.length > 11) v = v.slice(0,11);
  v = v.replace(/(\d{3})(\d)/,'$1.$2')
       .replace(/(\d{3})\.(\d{3})(\d)/,'$1.$2.$3')
       .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/,'$1.$2.$3-$4');
  input.value = v;
}

function geridBuscar() {
  const cpf = document.getElementById('gerid-cpf').value.trim();
  const tipo = document.getElementById('gerid-tipo-consulta').value;
  const res = document.getElementById('gerid-resultado');

  if (cpf.length < 14) { toast('Informe um CPF válido.','warn'); return; }

  res.style.display = 'block';
  res.innerHTML = '<div class="gerid-loading">🔍 Consultando INSS...</div>';

  setTimeout(() => {
    const dados = GERID.dadosCPF[cpf];
    if (!dados) {
      res.innerHTML = `<div class="card gerid-nao-encontrado">
        <span class="gerid-nao-icon">⚠️</span>
        <div><strong>CPF não encontrado no INSS</strong><br>
        <small>O CPF ${esc(cpf)} não possui registros vinculados a este escritório no GERID.</small></div>
      </div>`;
      return;
    }

    const jaImportado = GESTOR.clientes.find(c => c.doc === cpf);

    if (tipo === 'cnis') {
      res.innerHTML = geridRenderCNIS(dados, jaImportado);
    } else if (tipo === 'carencia') {
      res.innerHTML = geridRenderCarencia(dados, jaImportado);
    } else {
      res.innerHTML = geridRenderBeneficio(dados, jaImportado);
    }
  }, 1500);
}

function geridRenderBeneficio(d, jaImportado) {
  return `<div class="card gerid-resultado-card">
    <div class="gerid-res-header">
      <div>
        <div class="gerid-res-nome">${esc(d.nome)}</div>
        <div class="gerid-res-cpf">CPF ${esc(d.cpf)} · Nascimento ${esc(d.nascimento)}</div>
      </div>
      <span class="gerid-sit-badge ${d.nb !== '—' ? 'gerid-sit-deferido' : 'gerid-sit-analise'}">${esc(d.situacao)}</span>
    </div>
    <div class="gerid-res-grid">
      <div class="gerid-res-cell"><span class="gerid-res-label">NB</span><span class="gerid-res-val">${esc(d.nb)}</span></div>
      <div class="gerid-res-cell"><span class="gerid-res-label">Tipo de Benefício</span><span class="gerid-res-val">${esc(d.tipo)}</span></div>
      <div class="gerid-res-cell"><span class="gerid-res-label">DIB</span><span class="gerid-res-val">${esc(d.dib)}</span></div>
      <div class="gerid-res-cell"><span class="gerid-res-label">Valor do Benefício</span><span class="gerid-res-val gerid-valor">${esc(d.valorBeneficio)}</span></div>
    </div>
    <div class="gerid-res-actions">
      ${jaImportado
        ? `<span class="gerid-ja-importado">✓ Cliente já cadastrado no GESTOR</span>`
        : `<button class="btn-primary" onclick="geridImportarCliente('${esc(d.cpf)}')">⊕ Importar para o GESTOR</button>`
      }
      <button class="btn-secondary" onclick="geridProtocolar('${esc(d.cpf)}')">📋 Novo Requerimento</button>
    </div>
  </div>`;
}

function geridRenderCNIS(d, jaImportado) {
  const linhas = d.cnis.length
    ? d.cnis.map(c => `<tr>
        <td>${esc(c.empresa)}</td>
        <td>${esc(c.inicio)}</td>
        <td>${esc(c.fim || 'atual')}</td>
        <td><strong>${esc(c.tempo)}</strong></td>
      </tr>`).join('')
    : '<tr><td colspan="4" style="text-align:center;color:var(--text-muted)">Nenhum vínculo no CNIS</td></tr>';

  return `<div class="card gerid-resultado-card">
    <div class="gerid-res-header">
      <div>
        <div class="gerid-res-nome">${esc(d.nome)}</div>
        <div class="gerid-res-cpf">Extrato CNIS · CPF ${esc(d.cpf)}</div>
      </div>
    </div>
    <div class="card" style="padding:0;overflow:hidden;box-shadow:none;border:1px solid var(--border);margin-top:12px">
      <table class="data-table">
        <thead><tr><th>Empresa / Vínculo</th><th>Início</th><th>Fim</th><th>Tempo</th></tr></thead>
        <tbody>${linhas}</tbody>
      </table>
    </div>
    <div class="gerid-res-actions" style="margin-top:12px">
      ${jaImportado ? `<span class="gerid-ja-importado">✓ Cliente já no GESTOR</span>` : `<button class="btn-primary" onclick="geridImportarCliente('${esc(d.cpf)}')">⊕ Importar para o GESTOR</button>`}
    </div>
  </div>`;
}

function geridRenderCarencia(d, jaImportado) {
  const pct = Math.min(100, Math.round((d.carencia / 180) * 100));
  return `<div class="card gerid-resultado-card">
    <div class="gerid-res-header">
      <div>
        <div class="gerid-res-nome">${esc(d.nome)}</div>
        <div class="gerid-res-cpf">Carência e Tempo · CPF ${esc(d.cpf)}</div>
      </div>
    </div>
    <div class="gerid-res-grid">
      <div class="gerid-res-cell"><span class="gerid-res-label">Tempo Apurado</span><span class="gerid-res-val gerid-valor">${esc(d.tempoApurado)}</span></div>
      <div class="gerid-res-cell"><span class="gerid-res-label">Carência (contrib.)</span><span class="gerid-res-val">${d.carencia} meses</span></div>
      <div class="gerid-res-cell"><span class="gerid-res-label">Mínimo Necessário</span><span class="gerid-res-val">180 meses</span></div>
      <div class="gerid-res-cell"><span class="gerid-res-label">Situação</span><span class="gerid-res-val">${d.carencia >= 180 ? '✅ Carência cumprida' : '⚠️ Carência insuficiente'}</span></div>
    </div>
    <div class="gerid-carencia-bar-wrap">
      <div class="gerid-carencia-bar" style="width:${pct}%" title="${d.carencia} de 180 meses"></div>
      <span class="gerid-carencia-pct">${pct}%</span>
    </div>
    <div class="gerid-res-actions" style="margin-top:12px">
      ${jaImportado ? `<span class="gerid-ja-importado">✓ Cliente já no GESTOR</span>` : `<button class="btn-primary" onclick="geridImportarCliente('${esc(d.cpf)}')">⊕ Importar para o GESTOR</button>`}
    </div>
  </div>`;
}

function geridImportarCliente(cpf) {
  const dados = GERID.dadosCPF[cpf];
  if (!dados) return;
  const novoId = 'C' + Date.now();
  GESTOR.clientes.push({
    id: novoId, nome: dados.nome, doc: dados.cpf,
    area:'prev', honorarios:0, status:'ativo',
    ultimoContato:new Date().toISOString().slice(0,10), diasSemContato:0, tipo:'cliente',
    origemGerid: true, nb: dados.nb
  });
  GESTOR.processos.push({
    id:'P'+Date.now(), num:'GERID-'+dados.nb, cliente:dados.nome,
    clienteId:novoId, area:'prev', responsavel:'Dr. Klebson Cavalcanti',
    tribunal:'INSS', status:'ativo', ultimoAndamento:new Date().toISOString().slice(0,10), diasParado:0
  });
  _salvarDados();
  toast(`✓ ${dados.nome} importado para o GESTOR!<br><small>→ Cliente e processo criados · NB ${dados.nb}</small>`);
  geridBuscar();
}

function geridProtocolar(cpf) {
  const dados = GERID.dadosCPF[cpf];
  toast(`📋 Abrindo formulário de requerimento...<br><small>→ ${dados ? dados.nome : cpf} · INSS Digital</small>`);
}

function geridRenderRequerimentos() {
  const tbody = document.getElementById('gerid-req-tbody');
  if (!tbody) return;
  tbody.innerHTML = GERID.requerimentos.map(r => {
    const sit = GERID.situacaoInfo(r.situacao);
    const vinculado = r.procGestor
      ? `<button class="btn-sm" onclick="showPage('processos')">Ver no GESTOR</button>`
      : `<button class="btn-sm" onclick="toast('Processo não vinculado.')">Vincular</button>`;
    return `<tr>
      <td class="proc-num">${esc(r.protocolo)}</td>
      <td><strong>${esc(r.beneficiario)}</strong><br><small class="text-muted">${esc(r.cpf)}</small></td>
      <td>${esc(r.tipo)}</td>
      <td>${esc(r.dataEntrada)}</td>
      <td><span class="gerid-sit-badge ${sit.cls}">${sit.label}</span></td>
      <td>${esc(r.atualizacao)}</td>
      <td style="display:flex;gap:6px">${vinculado}</td>
    </tr>`;
  }).join('');
}

function geridAtualizar() {
  toast('🔄 Atualizando requerimentos do INSS...');
  setTimeout(() => { geridRenderRequerimentos(); toast('✓ Requerimentos atualizados!'); }, 1200);
}

// ============================================
// SISTEMA DE USUÁRIOS & PERMISSÕES
// ============================================

const MODULOS_SISTEMA = [
  { id:'dashboard',       label:'Dashboard',                  icon:'▣', grupo:'Principal' },
  { id:'clientes',        label:'Clientes & CRM',             icon:'👥', grupo:'Principal' },
  { id:'processos',       label:'Processos',                  icon:'⚖', grupo:'Principal' },
  { id:'prazos',          label:'Prazos',                     icon:'⏱', grupo:'Principal' },
  { id:'prazos_internos', label:'Configurar Prazos Internos', icon:'⚙', grupo:'Principal' },
  { id:'agenda',       label:'Agenda',               icon:'📅', grupo:'Principal' },
  { id:'intimacoes',   label:'Intimações',           icon:'📨', grupo:'Principal' },
  { id:'andamentos',   label:'Andamentos & IA',      icon:'🤖', grupo:'Principal' },
  { id:'kanban-adm',   label:'Kanban Administrativo', icon:'🏢', grupo:'Principal' },
  { id:'kanban-jud',   label:'Kanban Judicial',      icon:'⚖', grupo:'Principal' },
  { id:'estrategia',   label:'IA Estratégica',       icon:'✦',  grupo:'Inteligência' },
  { id:'agentes',      label:'Agentes de IA',        icon:'🤖', grupo:'Inteligência' },
  { id:'followups',    label:'Follow-ups',           icon:'📞', grupo:'Inteligência' },
  { id:'peticoes',     label:'Petições IA',          icon:'📄', grupo:'Inteligência' },
  { id:'workflow',     label:'Workflow / Kanban',    icon:'▤',  grupo:'Inteligência' },
  { id:'documentos',   label:'Documentos',           icon:'📁', grupo:'Inteligência' },
  { id:'financeiro',   label:'Financeiro',           icon:'💰', grupo:'Gestão' },
  { id:'horas',        label:'Horas',                icon:'⏰', grupo:'Gestão' },
  { id:'atendimento',  label:'Atendimento',          icon:'📞', grupo:'Gestão' },
  { id:'relatorios',   label:'Relatórios & BI',      icon:'▤',  grupo:'Gestão' },
  { id:'integracoes',  label:'Integrações / GERID',  icon:'🔌', grupo:'Sistema' },
  { id:'configuracoes',label:'Configurações',        icon:'⚙',  grupo:'Sistema' },
];

const PERFIS_PADRAO = {
  admin: {
    label: 'Sócio Administrador',
    cor: '#C9A84C',
    acesso: Object.fromEntries(MODULOS_SISTEMA.map(m => [m.id, { ver: true, editar: true, excluir: true }])),
  },
  socio: {
    label: 'Sócio',
    cor: '#2563eb',
    // Sócio vê tudo mas NÃO edita configurações nem gerencia permissões/prazos internos — apenas o admin faz isso
    acesso: Object.fromEntries(MODULOS_SISTEMA.map(m => [m.id, {
      ver:    true,
      editar: !['configuracoes','prazos_internos'].includes(m.id),
      excluir: !['configuracoes','prazos_internos'].includes(m.id),
    }])),
  },
  advogado: {
    label: 'Advogado',
    cor: '#7c3aed',
    acesso: Object.fromEntries(MODULOS_SISTEMA.map(m => [m.id, {
      ver:    !['configuracoes','prazos_internos'].includes(m.id),
      editar: !['configuracoes','financeiro','prazos_internos'].includes(m.id),
      excluir: ['processos','documentos','peticoes'].includes(m.id),
    }])),
  },
  advogado_associado: {
    label: 'Advogado Associado',
    cor: '#6d28d9',
    acesso: Object.fromEntries(MODULOS_SISTEMA.map(m => [m.id, {
      ver:    !['financeiro','configuracoes','prazos_internos'].includes(m.id),
      editar: !['financeiro','configuracoes','relatorios','prazos_internos'].includes(m.id),
      excluir: false,
    }])),
  },
  estagiario: {
    label: 'Estagiário',
    cor: '#059669',
    acesso: Object.fromEntries(MODULOS_SISTEMA.map(m => [m.id, {
      ver:    ['dashboard','processos','prazos','agenda','intimacoes','andamentos','peticoes','workflow','documentos','clientes','kanban-adm','kanban-jud'].includes(m.id),
      editar: ['workflow','documentos'].includes(m.id),
      excluir: false,
    }])),
  },
  secretaria: {
    label: 'Secretária / Administrativo',
    cor: '#d97706',
    acesso: Object.fromEntries(MODULOS_SISTEMA.map(m => [m.id, {
      ver:    ['dashboard','clientes','agenda','prazos','atendimento','followups','kanban-adm'].includes(m.id),
      editar: ['clientes','agenda','atendimento'].includes(m.id),
      excluir: false,
    }])),
  },
  recepcionista: {
    label: 'Recepcionista',
    cor: '#db2777',
    acesso: Object.fromEntries(MODULOS_SISTEMA.map(m => [m.id, {
      ver:    ['dashboard','clientes','agenda','atendimento','followups'].includes(m.id),
      editar: ['clientes','agenda','atendimento'].includes(m.id),
      excluir: false,
    }])),
  },
  atendente: {
    label: 'Atendente',
    cor: '#7c3aed',
    acesso: Object.fromEntries(MODULOS_SISTEMA.map(m => [m.id, {
      ver:    ['dashboard','clientes','agenda','atendimento','followups','prazos'].includes(m.id),
      editar: ['atendimento','followups'].includes(m.id),
      excluir: false,
    }])),
  },
  colaborador: {
    label: 'Colaborador',
    cor: '#0891b2',
    acesso: Object.fromEntries(MODULOS_SISTEMA.map(m => [m.id, {
      ver:    ['dashboard','clientes','agenda','prazos','followups','kanban-adm','atendimento'].includes(m.id),
      editar: ['agenda','atendimento','followups'].includes(m.id),
      excluir: false,
    }])),
  },
};

const USUARIOS_SISTEMA = [
  { id:'U1',  nome:'Dr. Klebson Cavalcanti', email:'klebson@costacavalcanti.adv.br', oab:'OAB/SP 123.456', perfil:'admin',     cargo:'Sócio Administrador', ativo:true, iniciais:'KC', cor:'#C9A84C', acesso: JSON.parse(JSON.stringify(PERFIS_PADRAO.admin.acesso))     },
  { id:'U2',  nome:'Dra. Ana Carvalho',      email:'ana@costacavalcanti.adv.br',      oab:'OAB/SP 234.567', perfil:'socio',     cargo:'Sócia',               ativo:true, iniciais:'AC', cor:'#2563eb', acesso: JSON.parse(JSON.stringify(PERFIS_PADRAO.socio.acesso))     },
  { id:'U3',  nome:'Dr. Marcos Santos',      email:'marcos@costacavalcanti.adv.br',   oab:'OAB/SP 345.678', perfil:'advogado_associado',  cargo:'Advogado Associado',  ativo:true, iniciais:'MS', cor:'#6d28d9', acesso: JSON.parse(JSON.stringify(PERFIS_PADRAO.advogado_associado.acesso))  },
  { id:'U4',  nome:'Dra. Juliana Faria',     email:'juliana@costacavalcanti.adv.br',  oab:'OAB/SP 456.789', perfil:'advogado_associado',  cargo:'Advogada Associada',  ativo:true, iniciais:'JF', cor:'#6d28d9', acesso: JSON.parse(JSON.stringify(PERFIS_PADRAO.advogado_associado.acesso))  },
  { id:'U5',  nome:'Lucas Oliveira',         email:'lucas@costacavalcanti.adv.br',    oab:'Estágio',        perfil:'estagiario',cargo:'Estagiário',           ativo:true, iniciais:'LO', cor:'#059669', acesso: JSON.parse(JSON.stringify(PERFIS_PADRAO.estagiario.acesso)) },
  { id:'U6',  nome:'Gabriele Recepção',      email:'gabriele@costacavalcanti.adv.br', oab:'Recepção',       perfil:'recepcionista',cargo:'Recepcionista',        ativo:true, iniciais:'GR', cor:'#db2777', acesso: JSON.parse(JSON.stringify(PERFIS_PADRAO.recepcionista.acesso)) },
  { id:'U7',  nome:'Daniel',                 email:'daniel@costacavalcanti.adv.br',   oab:'Administrativo', perfil:'secretaria',cargo:'Administrativo',       ativo:true, iniciais:'DA', cor:'#0891b2', acesso: JSON.parse(JSON.stringify(PERFIS_PADRAO.secretaria.acesso)) },
  { id:'U8',  nome:'Maysa',                  email:'maysa@costacavalcanti.adv.br',    oab:'Colaboradora',   perfil:'colaborador',cargo:'Colaboradora',         ativo:true, iniciais:'MA', cor:'#0891b2', acesso: JSON.parse(JSON.stringify(PERFIS_PADRAO.colaborador.acesso)) },
  { id:'U9',  nome:'Amikel',                 email:'amikel@costacavalcanti.adv.br',   oab:'Colaborador',    perfil:'colaborador',cargo:'Colaborador',          ativo:true, iniciais:'AM', cor:'#0891b2', acesso: JSON.parse(JSON.stringify(PERFIS_PADRAO.colaborador.acesso)) },
];

// Usuário logado atual — usar setUsuarioAtual() para trocar; nunca atribuir diretamente
let USUARIO_ATUAL = USUARIOS_SISTEMA[0];

function setUsuarioAtual(u) {
  USUARIO_ATUAL = u;
  // Atualiza topbar, sidebar e dropdown com os mesmos seletores usados no login
  const topbarIni  = document.querySelector('.topbar-avatar-iniciais');
  const topbarNome = document.querySelector('.topbar-perfil-nome');
  const topbarCargo= document.querySelector('.topbar-perfil-cargo');
  const dropNome   = document.querySelector('.perfil-drop-nome');
  const dropEmail  = document.querySelector('.perfil-drop-email');
  const dropOab    = document.querySelector('.perfil-drop-oab');
  const dropAva    = document.querySelector('.perfil-drop-avatar');
  const sidebarUser= document.querySelector('.user-name');
  const sidebarRole= document.querySelector('.user-role');
  const sidebarAva = document.querySelector('.user-avatar');
  const avatarFoto = document.querySelector('.topbar-avatar-foto');
  if (topbarIni)   topbarIni.textContent   = u.iniciais;
  if (topbarNome)  topbarNome.textContent  = nomeExibicao(u);
  if (topbarCargo) topbarCargo.textContent = u.cargo || '';
  if (dropNome)    dropNome.textContent    = nomeExibicao(u);
  if (dropEmail)   dropEmail.textContent   = u.email || '';
  if (dropOab)     dropOab.textContent     = u.oab || '';
  if (dropAva)     dropAva.textContent     = u.iniciais;
  if (sidebarUser) sidebarUser.textContent = nomeExibicao(u);
  if (sidebarRole) sidebarRole.textContent = u.cargo || '';
  if (sidebarAva)  { sidebarAva.textContent = u.iniciais; sidebarAva.style.background = u.cor; }
  if (avatarFoto)  avatarFoto.style.background = `linear-gradient(135deg, ${u.cor}, #C9A84C)`;
  // Atualiza saudação do dashboard
  const hora = new Date().getHours();
  const period = hora < 12 ? 'Bom dia' : hora < 18 ? 'Boa tarde' : 'Boa noite';
  const saudacao = document.getElementById('dash-saudacao');
  if (saudacao) saudacao.textContent = `${period}, ${nomeExibicao(u)} 👋`;
  aplicarControleAcesso();
}

function trocarCfgTab(aba, btn) {
  document.querySelectorAll('.cfg-tab-content').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.cfg-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('cfg-tab-' + aba).style.display = 'block';
  btn.classList.add('active');
  if (aba === 'usuarios') renderUsuariosLista();
  if (aba === 'aparencia') iniciarPainelAparencia();
}

// ===== APARÊNCIA / TEMAS =====

// Paletas refinadas — cada tema testado para contraste e harmonia visual
const TEMAS_PRESET = [
  {
    id: 'classico', nome: 'Clássico Jurídico', desc: 'Azul marinho + dourado',
    navy: '#0F1E3C', navyMid: '#1a2f54', navyLight: '#243a66',
    gold: '#B8860B', goldLight: '#d4a017',
    bg: '#F4F6FA', surface: '#FFFFFF', border: '#DDE3EE',
    textPrimary: '#0F1E3C', textSecondary: '#4a5878', textMuted: '#8a96ad',
    accent: '#B8860B', accentHover: '#9a7009',
    swatches: ['#0F1E3C','#1a2f54','#B8860B','#F4F6FA'],
  },
  {
    id: 'executivo', nome: 'Executivo', desc: 'Cinza chumbo + esmeralda',
    navy: '#1B2631', navyMid: '#2C3E50', navyLight: '#34495E',
    gold: '#1ABC9C', goldLight: '#2ecc71',
    bg: '#F2F3F4', surface: '#FFFFFF', border: '#D5D8DC',
    textPrimary: '#1B2631', textSecondary: '#52616B', textMuted: '#95A5A6',
    accent: '#1ABC9C', accentHover: '#17a589',
    swatches: ['#1B2631','#2C3E50','#1ABC9C','#F2F3F4'],
  },
  {
    id: 'royal', nome: 'Royal Blue', desc: 'Azul profundo + ouro',
    navy: '#1A237E', navyMid: '#283593', navyLight: '#3949AB',
    gold: '#F9A825', goldLight: '#FBC02D',
    bg: '#F3F4FF', surface: '#FFFFFF', border: '#C5CAE9',
    textPrimary: '#1A237E', textSecondary: '#3949AB', textMuted: '#7986CB',
    accent: '#F9A825', accentHover: '#F57F17',
    swatches: ['#1A237E','#283593','#F9A825','#F3F4FF'],
  },
  {
    id: 'slatepurple', nome: 'Violeta', desc: 'Índigo escuro + lilás',
    navy: '#2E1065', navyMid: '#4C1D95', navyLight: '#6D28D9',
    gold: '#8B5CF6', goldLight: '#A78BFA',
    bg: '#F5F3FF', surface: '#FFFFFF', border: '#DDD6FE',
    textPrimary: '#2E1065', textSecondary: '#5B21B6', textMuted: '#8B5CF6',
    accent: '#7C3AED', accentHover: '#6D28D9',
    swatches: ['#2E1065','#4C1D95','#7C3AED','#F5F3FF'],
  },
  {
    id: 'floresta', nome: 'Floresta', desc: 'Verde musgo + menta',
    navy: '#14532D', navyMid: '#166534', navyLight: '#15803D',
    gold: '#16A34A', goldLight: '#4ADE80',
    bg: '#F0FDF4', surface: '#FFFFFF', border: '#BBF7D0',
    textPrimary: '#14532D', textSecondary: '#15803D', textMuted: '#4ADE80',
    accent: '#16A34A', accentHover: '#15803D',
    swatches: ['#14532D','#166534','#16A34A','#F0FDF4'],
  },
  {
    id: 'oceano', nome: 'Oceano', desc: 'Petróleo + ciano',
    navy: '#0C4A6E', navyMid: '#075985', navyLight: '#0369A1',
    gold: '#0EA5E9', goldLight: '#38BDF8',
    bg: '#F0F9FF', surface: '#FFFFFF', border: '#BAE6FD',
    textPrimary: '#0C4A6E', textSecondary: '#0369A1', textMuted: '#38BDF8',
    accent: '#0EA5E9', accentHover: '#0284C7',
    swatches: ['#0C4A6E','#075985','#0EA5E9','#F0F9FF'],
  },
  {
    id: 'rubi', nome: 'Rubi', desc: 'Vinho escuro + coral',
    navy: '#7F1D1D', navyMid: '#991B1B', navyLight: '#B91C1C',
    gold: '#EF4444', goldLight: '#F87171',
    bg: '#FFF5F5', surface: '#FFFFFF', border: '#FECACA',
    textPrimary: '#7F1D1D', textSecondary: '#B91C1C', textMuted: '#F87171',
    accent: '#DC2626', accentHover: '#B91C1C',
    swatches: ['#7F1D1D','#991B1B','#DC2626','#FFF5F5'],
  },
  {
    id: 'titanio', nome: 'Titânio', desc: 'Preto fosco + prata',
    navy: '#111827', navyMid: '#1F2937', navyLight: '#374151',
    gold: '#6B7280', goldLight: '#9CA3AF',
    bg: '#F9FAFB', surface: '#FFFFFF', border: '#E5E7EB',
    textPrimary: '#111827', textSecondary: '#374151', textMuted: '#9CA3AF',
    accent: '#4B5563', accentHover: '#374151',
    swatches: ['#111827','#1F2937','#4B5563','#F9FAFB'],
  },
  {
    id: 'ambar', nome: 'Âmbar', desc: 'Marrom quente + laranja',
    navy: '#451A03', navyMid: '#7C2D12', navyLight: '#9A3412',
    gold: '#EA580C', goldLight: '#FB923C',
    bg: '#FFF7ED', surface: '#FFFFFF', border: '#FED7AA',
    textPrimary: '#451A03', textSecondary: '#9A3412', textMuted: '#FB923C',
    accent: '#EA580C', accentHover: '#C2410C',
    swatches: ['#451A03','#7C2D12','#EA580C','#FFF7ED'],
  },
  {
    id: 'midnight', nome: 'Midnight', desc: 'Azul meia-noite + índigo',
    navy: '#020617', navyMid: '#0F172A', navyLight: '#1E293B',
    gold: '#6366F1', goldLight: '#818CF8',
    bg: '#F8FAFC', surface: '#FFFFFF', border: '#E2E8F0',
    textPrimary: '#020617', textSecondary: '#334155', textMuted: '#94A3B8',
    accent: '#6366F1', accentHover: '#4F46E5',
    swatches: ['#020617','#0F172A','#6366F1','#F8FAFC'],
  },
];

// Catálogo de fontes
const FONTES_PRESET = [
  { id: 'inter',       nome: 'Inter',         desc: 'Moderna e legível',       categoria: 'Moderno',       url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',       stack: "'Inter', system-ui, sans-serif" },
  { id: 'poppins',     nome: 'Poppins',       desc: 'Geométrica e amigável',   categoria: 'Moderno',       url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap',     stack: "'Poppins', sans-serif" },
  { id: 'outfit',      nome: 'Outfit',        desc: 'Clean e contemporânea',   categoria: 'Contemporâneo', url: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap',       stack: "'Outfit', sans-serif" },
  { id: 'plusjakarta', nome: 'Plus Jakarta',  desc: 'Elegante e profissional', categoria: 'Contemporâneo', url: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap', stack: "'Plus Jakarta Sans', sans-serif" },
  { id: 'lato',        nome: 'Lato',          desc: 'Equilibrada e neutra',    categoria: 'Clássico',      url: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap',               stack: "'Lato', sans-serif" },
  { id: 'merriweather',nome: 'Merriweather',  desc: 'Serifada e formal',       categoria: 'Clássico',      url: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap',        stack: "'Merriweather', Georgia, serif" },
  { id: 'playfair',    nome: 'Playfair',      desc: 'Elegância editorial',     categoria: 'Clássico',      url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap', stack: "'Playfair Display', Georgia, serif" },
  { id: 'dm',          nome: 'DM Sans',       desc: 'Minimalista e precisa',   categoria: 'Moderno',       url: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap',     stack: "'DM Sans', sans-serif" },
];

function iniciarPainelAparencia() {
  renderTemasGrid();
  renderFontesGrid();
  sincronizarPickersCores();
  marcarModoAtivo();
  marcarFonteAtiva();
}

function renderTemasGrid() {
  const grid = document.getElementById('temas-grid');
  if (!grid) return;
  const temaAtual = localStorage.getItem('gestor-tema') || 'classico';
  grid.innerHTML = TEMAS_PRESET.map(t => `
    <div class="tema-card ${t.id === temaAtual ? 'tema-card-ativo' : ''}" onclick="aplicarTema('${t.id}')" title="${t.desc}">
      <div class="tema-card-paleta">
        ${t.swatches.map((c,i) => `<div class="tema-swatch ts-${i}" style="background:${c}"></div>`).join('')}
      </div>
      <div class="tema-card-info">
        <span class="tema-card-nome">${t.nome}</span>
        <span class="tema-card-desc">${t.desc}</span>
        ${t.id === temaAtual ? '<span class="tema-ativo-badge">✓ Ativo</span>' : ''}
      </div>
    </div>
  `).join('');
}

function aplicarTema(id) {
  const t = TEMAS_PRESET.find(x => x.id === id);
  if (!t) return;
  const r = document.documentElement;
  r.style.setProperty('--navy',           t.navy);
  r.style.setProperty('--navy-mid',       t.navyMid);
  r.style.setProperty('--navy-light',     t.navyLight);
  r.style.setProperty('--gold',           t.gold);
  r.style.setProperty('--gold-light',     t.goldLight);
  r.style.setProperty('--bg',             t.bg);
  r.style.setProperty('--surface',        t.surface);
  r.style.setProperty('--border',         t.border);
  r.style.setProperty('--text-primary',   t.textPrimary);
  r.style.setProperty('--text-secondary', t.textSecondary);
  r.style.setProperty('--text-muted',     t.textMuted || '#8a96ad');
  r.style.setProperty('--primary',        t.accent);
  r.style.setProperty('--primary-dark',   t.accentHover);
  localStorage.setItem('gestor-tema', id);
  localStorage.setItem('gestor-tema-obj', JSON.stringify(t));
  sincronizarPickersCores();
  renderTemasGrid();
  toast(`🎨 Tema "${t.nome}" aplicado!`, 'success');
}

function renderFontesGrid() {
  const grid = document.getElementById('fontes-grid');
  if (!grid) return;
  const fonteAtual = localStorage.getItem('gestor-fonte') || 'inter';
  const categorias = [...new Set(FONTES_PRESET.map(f => f.categoria))];
  grid.innerHTML = categorias.map(cat => `
    <div class="fonte-categoria-label">${cat}</div>
    <div class="fontes-row">
      ${FONTES_PRESET.filter(f => f.categoria === cat).map(f => `
        <div class="fonte-card ${f.id === fonteAtual ? 'fonte-card-ativa' : ''}" onclick="aplicarFonte('${f.id}')">
          <div class="fonte-card-preview" style="font-family:${f.stack}">
            <div class="fonte-card-big">Aa</div>
            <div class="fonte-card-frase">Direito Previdenciário</div>
            <div class="fonte-card-num">0123 — Prazo</div>
          </div>
          <div class="fonte-card-rodape">
            <div>
              <span class="fonte-card-nome">${f.nome}</span>
              <span class="fonte-card-desc">${f.desc}</span>
            </div>
            ${f.id === fonteAtual ? '<span class="tema-ativo-badge">✓ Ativa</span>' : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function aplicarFonte(id) {
  const f = FONTES_PRESET.find(x => x.id === id);
  if (!f) return;
  let link = document.getElementById('gestor-fonte-link');
  if (!link) {
    link = document.createElement('link');
    link.id = 'gestor-fonte-link';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  link.href = f.url;
  document.documentElement.style.setProperty('--fonte-principal', f.stack);
  document.body.style.fontFamily = f.stack;
  localStorage.setItem('gestor-fonte', id);
  localStorage.setItem('gestor-fonte-stack', f.stack);
  renderFontesGrid();
  toast(`🔤 Fonte "${f.nome}" aplicada!`, 'success');
}

function marcarFonteAtiva() {
  const id = localStorage.getItem('gestor-fonte') || 'inter';
  document.querySelectorAll('.fonte-card').forEach(c => c.classList.remove('fonte-card-ativa'));
  const el = document.querySelector(`.fonte-card[onclick*="${id}"]`);
  if (el) el.classList.add('fonte-card-ativa');
}

function aplicarCorCustom(variavel, valor) {
  const map = { navy: ['--navy','--primary-dark'], gold: ['--gold','--primary'], bg: ['--bg'], surface: ['--surface'] };
  (map[variavel] || []).forEach(v => document.documentElement.style.setProperty(v, valor));
  const hexInput = document.getElementById(`cor-${variavel}-hex`);
  if (hexInput) hexInput.value = valor;
}

function aplicarCorCustomHex(variavel, valor) {
  if (/^#[0-9A-Fa-f]{6}$/.test(valor)) {
    aplicarCorCustom(variavel, valor);
    const picker = document.getElementById(`cor-${variavel}`);
    if (picker) picker.value = valor;
  }
}

function sincronizarPickersCores() {
  const s = getComputedStyle(document.documentElement);
  [['navy','--navy'],['gold','--gold'],['bg','--bg'],['surface','--surface']].forEach(([id, v]) => {
    const val = s.getPropertyValue(v).trim();
    const hex = hexNormalize(val);
    const picker = document.getElementById(`cor-${id}`);
    const inp    = document.getElementById(`cor-${id}-hex`);
    if (picker) picker.value = hex;
    if (inp)    inp.value    = hex;
  });
}

function hexNormalize(cor) {
  cor = cor.trim();
  if (/^#[0-9A-Fa-f]{6}$/.test(cor)) return cor;
  const d = document.createElement('div');
  d.style.color = cor;
  document.body.appendChild(d);
  const rgb = getComputedStyle(d).color;
  document.body.removeChild(d);
  const m = rgb.match(/\d+/g);
  if (!m) return '#000000';
  return '#' + m.slice(0,3).map(n => parseInt(n).toString(16).padStart(2,'0')).join('');
}

function salvarTemaCustom() {
  const s = getComputedStyle(document.documentElement);
  const custom = { navy: s.getPropertyValue('--navy').trim(), gold: s.getPropertyValue('--gold').trim(), bg: s.getPropertyValue('--bg').trim(), surface: s.getPropertyValue('--surface').trim() };
  localStorage.setItem('gestor-tema-obj', JSON.stringify(custom));
  localStorage.setItem('gestor-tema', 'custom');
  toast('✓ Cores personalizadas salvas!', 'success');
}

function restaurarTemaOriginal() {
  localStorage.removeItem('gestor-tema');
  localStorage.removeItem('gestor-tema-obj');
  localStorage.removeItem('gestor-fonte');
  aplicarTema('classico');
  aplicarFonte('inter');
  toast('↺ Aparência restaurada ao padrão', 'success');
}

function aplicarModo(modo) {
  if (modo === 'escuro') document.body.classList.add('dark');
  else if (modo === 'claro') document.body.classList.remove('dark');
  else window.matchMedia('(prefers-color-scheme: dark)').matches ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  localStorage.setItem('gestor-modo', modo);
  marcarModoAtivo();
  toast(`🌓 Modo ${modo === 'claro' ? 'Claro' : modo === 'escuro' ? 'Escuro' : 'Automático'} ativado`, 'success');
}

function marcarModoAtivo() {
  const modo = localStorage.getItem('gestor-modo') || 'claro';
  document.querySelectorAll('.tema-modo-btn').forEach(b => b.classList.remove('tema-modo-ativo'));
  const btn = document.getElementById(`modo-${modo}`);
  if (btn) btn.classList.add('tema-modo-ativo');
}

function _carregarPreferencias() {
  const modo = localStorage.getItem('gestor-modo');
  if (modo === 'escuro') document.body.classList.add('dark');
  else if (modo === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) document.body.classList.add('dark');

  const temaId = localStorage.getItem('gestor-tema');
  if (temaId && temaId !== 'custom') {
    const t = TEMAS_PRESET.find(x => x.id === temaId);
    if (t) aplicarTema(temaId);
  } else if (temaId === 'custom') {
    try {
      const c = JSON.parse(localStorage.getItem('gestor-tema-obj') || '{}');
      if (c.navy) {
        document.documentElement.style.setProperty('--navy', c.navy);
        document.documentElement.style.setProperty('--gold', c.gold);
        document.documentElement.style.setProperty('--bg', c.bg);
        document.documentElement.style.setProperty('--surface', c.surface);
      }
    } catch(e) {}
  }

  const fonteStack = localStorage.getItem('gestor-fonte-stack');
  const fonteId    = localStorage.getItem('gestor-fonte');
  if (fonteId) {
    const f = FONTES_PRESET.find(x => x.id === fonteId);
    if (f) {
      let link = document.getElementById('gestor-fonte-link');
      if (!link) { link = document.createElement('link'); link.id = 'gestor-fonte-link'; link.rel = 'stylesheet'; document.head.appendChild(link); }
      link.href = f.url;
      document.body.style.fontFamily = fonteStack || f.stack;
    }
  }
}

function renderUsuariosLista() {
  const el = document.getElementById('usuarios-lista');
  if (!el) return;
  el.innerHTML = USUARIOS_SISTEMA.map(u => {
    const perfil = PERFIS_PADRAO[u.perfil];
    const totalAcesso = Object.values(u.acesso).filter(a => a.ver).length;
    return `
      <div class="usuario-card" id="ucard-${u.id}">
        <div class="usuario-card-left">
          <div class="usuario-avatar" style="background:${u.cor}">${esc(u.iniciais)}</div>
          <div class="usuario-info">
            <div class="usuario-nome">${esc(u.nome)}</div>
            <div class="usuario-meta">${esc(u.email)} · ${esc(u.oab)}</div>
            <div style="margin-top:4px;display:flex;gap:6px;align-items:center">
              <span class="usuario-perfil-badge" style="background:${u.cor}22;color:${u.cor}">${perfil?.label || u.perfil}</span>
              <span class="usuario-acesso-count">${totalAcesso}/${MODULOS_SISTEMA.length} módulos visíveis</span>
              <span class="usuario-status ${u.ativo ? 'ativo' : 'inativo'}">${u.ativo ? '● Ativo' : '○ Inativo'}</span>
            </div>
          </div>
        </div>
        <div class="usuario-card-acoes">
          ${USUARIO_ATUAL?.perfil === 'admin' ? `
          <div class="acoes-linha">
            <button class="btn-sm" onclick="abrirPermissoes('${u.id}')">🔐 Permissões</button>
            <button class="btn-sm" onclick="abrirFormUsuario('${u.id}')">✏ Editar</button>
          </div>
          ${u.id !== 'U1' ? `
          <div class="acoes-linha">
            <button class="btn-sm btn-danger-sm" onclick="toggleAtivoUsuario('${u.id}')">${u.ativo ? '⏸ Desativar' : '▶ Ativar'}</button>
            <button class="btn-sm btn-danger-sm" onclick="confirmarExcluirUsuario('${u.id}')">🗑 Excluir</button>
          </div>` : ''}
          ` : '<span style="font-size:12px;color:var(--text-muted);padding:8px">Somente o administrador pode editar</span>'}
        </div>
      </div>`;
  }).join('');
}

function confirmarExcluirUsuario(userId) {
  const u = USUARIOS_SISTEMA.find(x => x.id === userId);
  if (!u) return;
  if (u.id === 'U1') { toast('O Sócio Administrador não pode ser excluído.', 'warn'); return; }

  document.getElementById('modal-excluir-usuario')?.remove();
  const modal = document.createElement('div');
  modal.id = 'modal-excluir-usuario';
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-box" style="max-width:420px">
      <div style="text-align:center;padding:8px 0 16px">
        <div style="font-size:40px;margin-bottom:12px">⚠️</div>
        <div style="font-weight:700;font-size:16px;color:var(--text);margin-bottom:8px">Excluir usuário?</div>
        <div style="font-size:13px;color:var(--text-muted);line-height:1.6">
          Você está prestes a excluir <strong>${esc(u.nome)}</strong> (${esc(u.cargo)}).
          <br>Esta ação não pode ser desfeita.
        </div>
      </div>
      <div style="display:flex;gap:10px;margin-top:8px">
        <button class="btn-outline" style="flex:1" onclick="document.getElementById('modal-excluir-usuario').remove()">Cancelar</button>
        <button class="btn-primary" style="flex:1;background:#dc2626;border-color:#dc2626" onclick="excluirUsuario('${u.id}')">🗑 Confirmar exclusão</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
}

function excluirUsuario(userId) {
  const idx = USUARIOS_SISTEMA.findIndex(x => x.id === userId);
  if (idx === -1) return;
  const nome = USUARIOS_SISTEMA[idx].nome;
  USUARIOS_SISTEMA.splice(idx, 1);
  document.getElementById('modal-excluir-usuario')?.remove();
  renderUsuariosLista();
  atualizarContadoresInteg?.();
  toast(`✓ Usuário <strong>${esc(nome)}</strong> excluído com sucesso.`);
}

function abrirPermissoes(userId) {
  if (USUARIO_ATUAL?.perfil !== 'admin') {
    toast('🔒 Somente o Sócio Administrador pode configurar permissões.', 'warn');
    return;
  }
  document.getElementById('modal-permissoes')?.remove();
  const u = USUARIOS_SISTEMA.find(x => x.id === userId);
  if (!u) return;
  const perfil = PERFIS_PADRAO[u.perfil];

  const grupos = [...new Set(MODULOS_SISTEMA.map(m => m.grupo))];

  const linhas = grupos.map(grupo => {
    const mods = MODULOS_SISTEMA.filter(m => m.grupo === grupo);
    return `
      <div class="perm-grupo">
        <div class="perm-grupo-label">${grupo}</div>
        ${mods.map(m => {
          const a = u.acesso[m.id] || { ver:false, editar:false, excluir:false };
          return `
            <div class="perm-row" id="prow-${userId}-${m.id}">
              <div class="perm-modulo">
                <span class="perm-modulo-icon">${m.icon}</span>
                <span class="perm-modulo-nome">${esc(m.label)}</span>
              </div>
              <div class="perm-checks">
                <label class="perm-check">
                  <input type="checkbox" ${a.ver ? 'checked' : ''} onchange="setPermissao('${userId}','${m.id}','ver',this.checked)"/>
                  <span>Ver</span>
                </label>
                <label class="perm-check">
                  <input type="checkbox" ${a.editar ? 'checked' : ''} onchange="setPermissao('${userId}','${m.id}','editar',this.checked)"/>
                  <span>Editar</span>
                </label>
                <label class="perm-check">
                  <input type="checkbox" ${a.excluir ? 'checked' : ''} onchange="setPermissao('${userId}','${m.id}','excluir',this.checked)"/>
                  <span>Excluir</span>
                </label>
              </div>
            </div>`;
        }).join('')}
      </div>`;
  }).join('');

  const m = document.createElement('div');
  m.id = 'modal-permissoes';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box perm-box">
      <div class="modal-header" style="background:${u.cor}18;border-bottom:2px solid ${u.cor}">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="usuario-avatar" style="background:${u.cor};width:40px;height:40px;font-size:14px">${esc(u.iniciais)}</div>
          <div>
            <div style="font-weight:800;color:var(--navy)">${esc(u.nome)}</div>
            <div style="font-size:11px;color:var(--text-muted)">${perfil?.label || u.perfil} · ${esc(u.email)}</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;align-items:center">
          <select class="calc-input" style="margin:0;font-size:12px;width:200px" onchange="aplicarPerfilPadrao('${userId}',this.value)">
            <option value="">↺ Aplicar perfil padrão...</option>
            ${Object.entries(PERFIS_PADRAO).map(([k,v]) => `<option value="${k}">${v.label}</option>`).join('')}
          </select>
          <button class="modal-close" onclick="document.getElementById('modal-permissoes').remove()">✕</button>
        </div>
      </div>
      <div class="perm-legenda">
        <span><strong>Ver</strong> — acessa o módulo</span>
        <span><strong>Editar</strong> — cria e altera registros</span>
        <span><strong>Excluir</strong> — remove registros permanentemente</span>
      </div>
      <div class="perm-corpo">
        ${linhas}
      </div>
      <div style="padding:14px 20px;border-top:1px solid var(--border);display:flex;justify-content:flex-end;gap:8px">
        <button class="btn-secondary" onclick="document.getElementById('modal-permissoes').remove()">Fechar</button>
        <button class="btn-primary" onclick="salvarPermissoes('${userId}')">💾 Salvar permissões</button>
      </div>
    </div>`;
  document.body.appendChild(m);
}

function setPermissao(userId, moduloId, tipo, valor) {
  const u = USUARIOS_SISTEMA.find(x => x.id === userId);
  if (!u) return;
  if (!u.acesso[moduloId]) u.acesso[moduloId] = { ver:false, editar:false, excluir:false };
  u.acesso[moduloId][tipo] = valor;
  // Se desmarcar "ver", desmarca também editar e excluir
  if (tipo === 'ver' && !valor) {
    u.acesso[moduloId].editar  = false;
    u.acesso[moduloId].excluir = false;
    const row = document.getElementById(`prow-${userId}-${moduloId}`);
    if (row) row.querySelectorAll('input[type=checkbox]').forEach((cb,i) => { if(i>0) cb.checked = false; });
  }
  // Se marcar editar ou excluir, marca "ver" automaticamente
  if ((tipo === 'editar' || tipo === 'excluir') && valor) {
    u.acesso[moduloId].ver = true;
    const row = document.getElementById(`prow-${userId}-${moduloId}`);
    if (row) { const cb = row.querySelector('input'); if(cb) cb.checked = true; }
  }
}

function aplicarPerfilPadrao(userId, perfilKey) {
  if (!perfilKey) return;
  const u = USUARIOS_SISTEMA.find(x => x.id === userId);
  const padrao = PERFIS_PADRAO[perfilKey];
  if (!u || !padrao) return;
  u.acesso = JSON.parse(JSON.stringify(padrao.acesso));
  u.perfil = perfilKey;
  // Atualiza checkboxes no modal aberto
  MODULOS_SISTEMA.forEach(m => {
    const a = u.acesso[m.id] || { ver:false, editar:false, excluir:false };
    const row = document.getElementById(`prow-${userId}-${m.id}`);
    if (!row) return;
    const cbs = row.querySelectorAll('input[type=checkbox]');
    if (cbs[0]) cbs[0].checked = a.ver;
    if (cbs[1]) cbs[1].checked = a.editar;
    if (cbs[2]) cbs[2].checked = a.excluir;
  });
  toast(`✓ Perfil "${padrao.label}" aplicado — revise e salve.`);
}

function salvarPermissoes(userId) {
  document.getElementById('modal-permissoes').remove();
  renderUsuariosLista();
  toast('✓ Permissões salvas com sucesso!');
}

function toggleAtivoUsuario(userId) {
  const u = USUARIOS_SISTEMA.find(x => x.id === userId);
  if (!u) return;
  u.ativo = !u.ativo;
  renderUsuariosLista();
  toast(`✓ Usuário ${u.ativo ? 'ativado' : 'desativado'}.`);
}

function abrirFormUsuario(userId = null) {
  if (USUARIO_ATUAL?.perfil !== 'admin') {
    toast('🔒 Somente o Sócio Administrador pode criar ou editar usuários.', 'warn');
    return;
  }
  document.getElementById('modal-form-usuario')?.remove();
  const u = userId ? USUARIOS_SISTEMA.find(x => x.id === userId) : null;
  const isEdicao = !!u;

  const m = document.createElement('div');
  m.id = 'modal-form-usuario';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box" style="max-width:480px">
      <div class="modal-header">
        <span>${isEdicao ? '✏ Editar Usuário' : '+ Novo Usuário'}</span>
        <button class="modal-close" onclick="document.getElementById('modal-form-usuario').remove()">✕</button>
      </div>
      <div class="calc-form" style="padding:20px 24px">
        <label class="calc-label">Nome completo *</label>
        <input id="fu-nome" class="calc-input" placeholder="Dr. Nome Sobrenome" value="${esc(u?.nome||'')}"/>
        <label class="calc-label">E-mail *</label>
        <input id="fu-email" class="calc-input" type="email" placeholder="nome@escritorio.adv.br" value="${esc(u?.email||'')}"/>
        <label class="calc-label">OAB / Registro</label>
        <input id="fu-oab" class="calc-input" placeholder="OAB/SP 000.000 ou Estágio" value="${esc(u?.oab||'')}"/>
        <label class="calc-label">Perfil de acesso *</label>
        <select id="fu-perfil" class="calc-input">
          ${Object.entries(PERFIS_PADRAO).map(([k,v]) =>
            `<option value="${k}" ${u?.perfil===k?'selected':''}>${v.label}</option>`
          ).join('')}
        </select>
        <label class="calc-label">Iniciais (aparece no avatar)</label>
        <input id="fu-iniciais" class="calc-input" maxlength="2" placeholder="Ex: KC" value="${esc(u?.iniciais||'')}"/>
        ${!isEdicao ? `
        <label class="calc-label">Senha inicial *</label>
        <input id="fu-senha" class="calc-input" type="password" placeholder="Mínimo 8 caracteres"/>` : ''}
        <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px">
          <button class="btn-secondary" onclick="document.getElementById('modal-form-usuario').remove()">Cancelar</button>
          <button class="btn-primary" onclick="salvarUsuario('${userId||''}')">
            ${isEdicao ? '💾 Salvar' : '✓ Criar usuário'}
          </button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(m);
  document.getElementById('fu-nome')?.focus();
}

function salvarUsuario(userId) {
  const nome    = document.getElementById('fu-nome')?.value.trim();
  const email   = document.getElementById('fu-email')?.value.trim();
  const oab     = document.getElementById('fu-oab')?.value.trim();
  const perfil  = document.getElementById('fu-perfil')?.value;
  const iniciais= document.getElementById('fu-iniciais')?.value.trim().toUpperCase() || nome.split(' ').map(n=>n[0]).slice(0,2).join('');

  if (!nome || !email) { toast('Preencha nome e e-mail.','warn'); return; }

  if (userId) {
    const u = USUARIOS_SISTEMA.find(x => x.id === userId);
    if (u) Object.assign(u, { nome, email, oab, perfil, iniciais, cor: PERFIS_PADRAO[perfil]?.cor || u.cor });
  } else {
    const id = 'U' + (USUARIOS_SISTEMA.length + 1);
    const padrao = PERFIS_PADRAO[perfil];
    USUARIOS_SISTEMA.push({
      id, nome, email, oab, perfil, iniciais, ativo: true,
      cor: padrao?.cor || '#666',
      acesso: JSON.parse(JSON.stringify(padrao?.acesso || {})),
    });
  }
  document.getElementById('modal-form-usuario').remove();
  renderUsuariosLista();
  toast(`✓ Usuário <strong>${esc(nome)}</strong> ${userId ? 'atualizado' : 'criado'}!<br><small>→ Configure as permissões individuais clicando em 🔐</small>`);
}

// ============================================
// SISTEMA DE EVENTOS — ATRIBUIÇÃO, CONCLUSÃO, HISTÓRICO E ALERTAS
// ============================================

// Histórico global de ações em eventos
if (!window.HISTORICO_EVENTOS) window.HISTORICO_EVENTOS = [];

// Garantir campos essenciais em todos os eventos ao iniciar
(function inicializarEventos() {
  (GESTOR.eventos || []).forEach(e => {
    if (!e.status)        e.status = 'pendente';
    if (!e.historico)     e.historico = [];
    if (!e.atribuidoPara) e.atribuidoPara = e.responsavel || null;
  });
})();

// Alerta piscante para eventos do dia não concluídos
function verificarAlertasEventosDia() {
  const dataHoje  = _dataHojeStr();
  const hoje      = new Date();
  const horaAtual = hoje.getHours() * 60 + hoje.getMinutes();
  const nomeUser  = USUARIO_ATUAL?.nome;

  // Só eventos atribuídos ao usuário logado, do dia, pendentes (excluir concluídos, cancelados e reagendados)
  const vencidos = (GESTOR.eventos || []).filter(e => {
    if (e.status === 'concluido' || e.status === 'cancelado' || e.status === 'reagendado') return false;
    if (e.data !== dataHoje) return false;
    const isAtrib = (e.atribuidoPara || e.responsavel || '') === nomeUser;
    if (!isAtrib) return false;
    if (!e.hora) return true;
    const [h, m] = e.hora.split(':').map(Number);
    return (h * 60 + m) <= horaAtual;
  });

  let alerta = document.getElementById('alerta-evento-piscante');
  if (!vencidos.length) { if (alerta) alerta.remove(); return; }

  if (!alerta) {
    alerta = document.createElement('div');
    alerta.id = 'alerta-evento-piscante';
    alerta.className = 'alerta-piscante';
    document.body.appendChild(alerta);
  }

  // Guardar IDs dos eventos no alerta para acesso no clique
  alerta._eventoIds = vencidos.map(e => e.id);

  const primeiro = vencidos[0];
  const nomes    = vencidos.slice(0, 2).map(e => e.titulo.substring(0, 38)).join(' · ');
  const mais     = vencidos.length > 2 ? ` +${vencidos.length - 2}` : '';
  const label    = vencidos.length === 1 ? 'Abrir →' : 'Ver todas →';

  alerta.innerHTML = `
    <span class="alerta-pisc-icon">🔔</span>
    <div class="alerta-pisc-texto">
      <strong>${vencidos.length} tarefa${vencidos.length > 1 ? 's' : ''} sua${vencidos.length > 1 ? 's' : ''} pendente${vencidos.length > 1 ? 's' : ''} hoje</strong>
      <span>${nomes}${mais}</span>
    </div>
    <button class="alerta-pisc-btn" id="alerta-pisc-btn-abrir">${label}</button>
    <button class="alerta-pisc-fechar" id="alerta-pisc-fechar">✕</button>`;

  document.getElementById('alerta-pisc-btn-abrir').addEventListener('click', function(ev) {
    ev.stopPropagation();
    irParaEventoAlerta(alerta._eventoIds);
  });
  document.getElementById('alerta-pisc-fechar').addEventListener('click', function(ev) {
    ev.stopPropagation();
    alerta.remove();
  });
  alerta.addEventListener('click', function() {
    irParaEventoAlerta(alerta._eventoIds);
  });
}

function irParaEventoAlerta(ids) {
  // Primeiro navega para o dashboard, depois abre o modal com pequeno delay
  navegarPara('dashboard');
  setTimeout(() => {
    if (ids.length === 1) {
      abrirModalEvento(ids[0]);
    } else {
      // Rolar para o painel Minhas Tarefas e destacá-lo
      const painel = document.getElementById('painel-minhas-tarefas');
      if (painel) {
        painel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        painel.classList.add('painel-destaque');
        setTimeout(() => painel.classList.remove('painel-destaque'), 2000);
      }
    }
  }, 120);
}

// Verificar a cada 60 segundos
setInterval(verificarAlertasEventosDia, 60000);
document.addEventListener('DOMContentLoaded', () => setTimeout(verificarAlertasEventosDia, 2000));

// Abrir modal de detalhe/edição de evento
function abrirModalEvento(eventoId) {
  document.getElementById('modal-evento-det')?.remove();
  const e = (GESTOR.eventos || []).find(x => x.id === eventoId);
  if (!e) return;

  const TIPO_LABEL = {
    audiencia:'⚖ Audiência', prazo:'⏱ Prazo', reuniao:'🤝 Reunião',
    inss_exigencia:'🏛 Exigência INSS', inss_decisao:'🏛 Decisão INSS',
    inss_recurso:'🏛 Recurso INSS', inss_pericia:'🏛 Perícia INSS',
    andamento:'📋 Andamento', intimacao:'📨 Intimação', interno:'📌 Interno',
  };

  const statusCor = { pendente:'#d97706', concluido:'#059669', cancelado:'#6b7280' };
  const statusLabel = { pendente:'Pendente', concluido:'Concluído', cancelado:'Cancelado' };

  const opcoesUsuarios = USUARIOS_SISTEMA.filter(u => u.ativo)
    .map(u => `<option value="${u.nome}" ${e.atribuidoPara === u.nome ? 'selected' : ''}>${u.nome} — ${u.cargo}</option>`)
    .join('');

  const historico = (e.historico || []).slice().reverse().map(h => `
    <div class="ev-hist-item">
      <div class="ev-hist-avatar" style="background:${h.cor||'#666'}">${h.iniciais||'?'}</div>
      <div class="ev-hist-info">
        <span class="ev-hist-acao">${esc(h.acao)}</span>
        <span class="ev-hist-meta">${esc(h.usuario)} · ${esc(h.data)}</span>
      </div>
    </div>`).join('') || '<div class="ev-hist-vazio">Sem histórico ainda</div>';

  const jaConcluido = e.status === 'concluido';

  const m = document.createElement('div');
  m.id = 'modal-evento-det';
  m.className = 'modal-overlay';
  m.innerHTML = `
    <div class="modal-box ev-det-box">
      <div class="modal-header ev-det-header" style="background:${jaConcluido ? '#f0fdf4' : (e.critico ? '#fff1f2' : 'var(--bg)')}">
        <div>
          <div class="ev-det-tipo">${TIPO_LABEL[e.tipo] || e.tipo}</div>
          <div class="ev-det-titulo">${esc(e.titulo)}</div>
          <div style="margin-top:6px;display:flex;gap:8px;flex-wrap:wrap;align-items:center">
            <span class="ev-status-badge" style="background:${statusCor[e.status]||'#666'}22;color:${statusCor[e.status]||'#666'}">
              ● ${statusLabel[e.status]||e.status}
            </span>
            ${e.critico ? '<span class="ev-status-badge" style="background:#fee2e2;color:#b91c1c">⚠ Crítico</span>' : ''}
            ${e.data ? `<span class="ev-status-badge" style="background:#f1f5f9;color:#475569">📅 ${e.data.split('-').reverse().join('/')} ${e.hora||''}</span>` : ''}
          </div>
        </div>
        <button class="modal-close" onclick="document.getElementById('modal-evento-det').remove()">✕</button>
      </div>

      <div class="ev-det-corpo">

        <!-- BLOCO SUPERIOR: campos em grade compacta -->
        <div class="ev-det-campos-topo">

          <!-- Linha 1: Título (largura total) -->
          <div class="ev-campo-grupo ev-campo-full">
            <label class="calc-label">Título</label>
            <input id="ev-ed-titulo" class="calc-input" value="${esc(e.titulo)}" ${jaConcluido?'disabled':''}/>
          </div>

          <!-- Linha 2: Data · Hora · Tipo -->
          <div class="ev-campo-grupo">
            <label class="calc-label">Data</label>
            <input id="ev-ed-data" class="calc-input ev-campo-destaque" type="date" value="${e.data||''}" data-original="${e.data||''}"
              ${jaConcluido?'disabled':''} oninput="verificarMudancaData('${e.id}', this.value, '${e.data||''}')"/>
          </div>
          <div class="ev-campo-grupo">
            <label class="calc-label">Hora</label>
            <input id="ev-ed-hora" class="calc-input ev-campo-destaque" type="time" value="${e.hora||''}" ${jaConcluido?'disabled':''}/>
          </div>
          <div class="ev-campo-grupo">
            <label class="calc-label">Tipo</label>
            <select id="ev-ed-tipo" class="calc-input" ${jaConcluido?'disabled':''}>
              ${Object.entries(TIPO_LABEL).map(([k,v]) => `<option value="${k}" ${e.tipo===k?'selected':''}>${v}</option>`).join('')}
            </select>
          </div>

          <!-- Linha 3: Cliente · Local (se houver) -->
          ${e.cliente ? `<div class="ev-campo-grupo"><label class="calc-label">Cliente</label><input class="calc-input" value="${esc(e.cliente)}" disabled/></div>` : ''}
          ${e.local   ? `<div class="ev-campo-grupo"><label class="calc-label">Local</label><input id="ev-ed-local" class="calc-input" value="${esc(e.local)}" ${jaConcluido?'disabled':''}/></div>` : ''}

          <!-- Responsável · Prioridade -->
          <div class="ev-campo-grupo">
            <label class="calc-label">Atribuído para</label>
            <select id="ev-ed-atribuido" class="calc-input" ${jaConcluido?'disabled':''}>
              <option value="">— Selecione —</option>
              ${opcoesUsuarios}
            </select>
          </div>
          <div class="ev-campo-grupo">
            <label class="calc-label">Prioridade</label>
            <select id="ev-ed-prioridade" class="calc-input" ${jaConcluido?'disabled':''}>
              <option value="normal"  ${(e.prioridade||'normal')==='normal' ?'selected':''}>Normal</option>
              <option value="alta"    ${e.prioridade==='alta'   ?'selected':''}>Alta</option>
              <option value="critica" ${e.prioridade==='critica'?'selected':''}>Crítica</option>
            </select>
          </div>

          ${e.meetUrl ? `
          <div class="ev-campo-grupo ev-campo-full">
            <label class="calc-label">Link Meet</label>
            <div style="display:flex;gap:6px">
              <input id="ev-ed-meet" class="calc-input" value="${esc(e.meetUrl)}" ${jaConcluido?'disabled':''}/>
              <button class="btn-primary" style="white-space:nowrap" onclick="entrarMeet(document.getElementById('ev-ed-meet').value)">📹 Entrar</button>
            </div>
          </div>` : ''}

        </div>

        <!-- BLOCO INFERIOR: Anotações (largura total) + Histórico lado a lado -->
        <div class="ev-det-rodape-info">

          <!-- Anotações (2/3) -->
          <div class="ev-anotacoes-bloco">
            <div class="ev-det-sec-titulo" style="margin-bottom:6px">📝 Anotações</div>
            <textarea id="ev-anotacoes-${e.id}" class="calc-input ev-anotacoes-area"
              placeholder="Registre observações, atualizações ou qualquer informação relevante sobre este evento..."
              ${jaConcluido ? 'disabled' : ''}>${esc(e.anotacoes || e.obs || '')}</textarea>
            ${!jaConcluido ? `
            <button class="btn-sm" style="margin-top:6px;width:100%;background:var(--gold);color:#fff;border:none;border-radius:6px;padding:6px 0;font-size:13px;font-weight:700;cursor:pointer"
              onclick="salvarAnotacaoEvento('${e.id}')">💾 Salvar anotação</button>` : ''}
          </div>

          <!-- Histórico (1/3) -->
          <div class="ev-historico-bloco">
            <div class="ev-det-sec-titulo" style="margin-bottom:6px">🕐 Histórico de Ações</div>
            <div id="ev-hist-lista" class="ev-hist-scroll">${historico}</div>
          </div>

        </div>

      </div>

      <!-- Painel de cancelamento (oculto por padrão) -->
      <div id="ev-cancelar-painel-${e.id}" class="ev-reagendar-painel" style="display:none;background:#fff5f5;border-top-color:#fecaca">
        <div class="ev-reagendar-titulo" style="color:#dc2626">✕ Cancelar evento — informe o motivo obrigatoriamente</div>
        <textarea id="ev-cancelar-motivo-${e.id}" class="calc-input ev-reagendar-motivo" rows="3"
          placeholder="Descreva o motivo pelo qual o evento está sendo cancelado..."></textarea>
        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="btn-secondary" style="flex:1" onclick="document.getElementById('ev-cancelar-painel-${e.id}').style.display='none';document.getElementById('ev-det-footer-${e.id}').style.display='flex'">← Voltar</button>
          <button class="btn-primary" style="flex:1;background:#dc2626" onclick="confirmarCancelamento('${e.id}')">✕ Confirmar Cancelamento</button>
        </div>
      </div>

      <!-- Painel de reagendamento (oculto por padrão) -->
      <div id="ev-reagendar-painel-${e.id}" class="ev-reagendar-painel" style="display:none">
        <div class="ev-reagendar-titulo">📅 Reagendar tarefa — informe o motivo e a nova data</div>
        <div id="ev-reagendar-aviso-limite-${e.id}" class="ev-aviso-data" style="display:none;margin-bottom:8px">
          ⏳ Limite: máximo <strong>15 dias</strong> a partir de hoje. Para datas além disso, solicite ao <strong>Administrador</strong>.
        </div>
        <textarea id="ev-reagendar-motivo-${e.id}" class="calc-input ev-reagendar-motivo" rows="3"
          placeholder="Descreva o motivo pelo qual a tarefa não pôde ser realizada..."></textarea>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px">
          <div style="flex:1;min-width:140px">
            <label class="calc-label">Nova data</label>
            <input id="ev-reagendar-data-${e.id}" class="calc-input ev-campo-destaque" type="date"/>
          </div>
          <div style="flex:1;min-width:160px">
            <label class="calc-label">Novo horário</label>
            <input id="ev-reagendar-hora-${e.id}" class="calc-input ev-campo-destaque" type="time"
              min="08:00" max="16:00"
              value="${['interno','tarefa','ligacao','follow_up','pendencia'].includes(e.tipo) ? '08:00' : (e.hora||'08:00')}"/>
            <small style="color:var(--text-muted);font-size:11px;margin-top:3px">🕐 Expediente: 08:00–12:00 e 13:00–16:00</small>
            ${!['interno','tarefa','ligacao','follow_up','pendencia'].includes(e.tipo) ? `
            <div style="display:flex;gap:6px;margin-top:5px">
              <button type="button" class="btn-turno" onclick="document.getElementById('ev-reagendar-hora-${e.id}').value='08:00'">🌅 Manhã 08:00</button>
              <button type="button" class="btn-turno" onclick="document.getElementById('ev-reagendar-hora-${e.id}').value='14:00'">🌇 Tarde 14:00</button>
            </div>` : ''}
          </div>
        </div>
        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="btn-secondary" style="flex:1" onclick="document.getElementById('ev-reagendar-painel-${e.id}').style.display='none'">← Voltar</button>
          <button class="btn-primary" style="flex:1;background:#7c3aed" onclick="confirmarReagendamento('${e.id}')">📅 Confirmar Reagendamento</button>
        </div>
      </div>

      <!-- Rodapé fixo sempre visível -->
      <div class="ev-det-footer" id="ev-det-footer-${e.id}">
        ${jaConcluido ? `
          <div class="ev-concluido-msg">✅ Concluído por <strong>${esc(e.concluidoPor||'')}</strong>${e.concluidoPerfil ? ` <span style="font-weight:400;opacity:.75">(${esc(e.concluidoPerfil)})</span>` : ''} em ${esc(e.concluidoEm||'')}</div>
        ` : e.status === 'reagendado' ? `
          <div class="ev-concluido-msg" style="background:#f5f3ff;border-color:#c4b5fd;color:#7c3aed;flex-direction:column;align-items:flex-start;gap:4px">
            <span style="font-size:12px;opacity:.8">📅 Reagendado — novo evento criado na agenda</span>
            <span style="font-size:22px;font-weight:800;letter-spacing:.5px;color:#7c3aed">
              ${e.reagendadoPara ? e.reagendadoPara.split('-').reverse().join('/') : ''}
              ${e.reagendadoHora ? `<span style="font-size:16px;font-weight:600;opacity:.8"> às ${e.reagendadoHora}</span>` : ''}
            </span>
          </div>
        ` : `
          ${['admin','socio'].includes(USUARIO_ATUAL?.perfil) ? `<button class="btn-secondary" onclick="cancelarEvento('${e.id}')" style="color:var(--danger);white-space:nowrap">✕ Cancelar</button>` : ''}
          <div style="display:flex;gap:8px;flex:1" id="ev-footer-acoes-${e.id}">
            <button id="ev-btn-salvar-${e.id}" class="btn-primary" style="flex:1" onclick="salvarEdicaoEvento('${e.id}')">💾 Salvar</button>
            <button class="btn-reagendar-ev" onclick="abrirPainelReagendar('${e.id}')">📅 Reagendar</button>
            <button class="btn-concluir-ev" onclick="concluirEvento('${e.id}')">✅ Concluída</button>
          </div>
          <div id="ev-aviso-data-${e.id}" class="ev-aviso-data" style="display:none">
            ⚠️ Data alterada — use <strong>Reagendar</strong> para mudar a data com registro do motivo.
          </div>
        `}
      </div>
    </div>`;
  document.body.appendChild(m);
}

function _registrarHistoricoEvento(eventoId, acao) {
  const e = (GESTOR.eventos || []).find(x => x.id === eventoId);
  if (!e) return;
  if (!e.historico) e.historico = [];
  const u = USUARIO_ATUAL;
  const agora = new Date();
  e.historico.push({
    acao,
    usuario:  u.nome,
    iniciais: u.iniciais,
    cor:      u.cor,
    data:     agora.toLocaleDateString('pt-BR') + ' ' + agora.toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'}),
  });
  // Também no histórico global
  window.HISTORICO_EVENTOS.unshift({ eventoId, eventoTitulo: e.titulo, acao, usuario: u.nome, iniciais: u.iniciais, cor: u.cor, data: e.historico[e.historico.length-1].data });
}

function salvarEdicaoEvento(eventoId) {
  const e = (GESTOR.eventos || []).find(x => x.id === eventoId);
  if (!e) return;
  const titulo     = document.getElementById('ev-ed-titulo')?.value.trim();
  const data       = document.getElementById('ev-ed-data')?.value;

  // Bloquear: Salvar não permite mudança de data — use Reagendar
  if (data && data !== e.data) {
    toast('⚠️ Para alterar a data use o botão <strong>📅 Reagendar</strong> com registro do motivo.', 'warn');
    return;
  }
  const hora       = document.getElementById('ev-ed-hora')?.value;
  const tipo       = document.getElementById('ev-ed-tipo')?.value;
  const atribuido  = document.getElementById('ev-ed-atribuido')?.value;
  const prioridade = document.getElementById('ev-ed-prioridade')?.value;
  const obs        = document.getElementById('ev-ed-obs')?.value;
  const local      = document.getElementById('ev-ed-local')?.value;
  const meetUrl    = document.getElementById('ev-ed-meet')?.value;

  // Detecta o que foi alterado para registrar no histórico
  const alteracoes = [];
  if (titulo  && titulo  !== e.titulo)           alteracoes.push(`Título: "${e.titulo}" → "${titulo}"`);
  if (hora    && hora    !== e.hora)             alteracoes.push(`Horário: ${e.hora} → ${hora}`);
  if (tipo    && tipo    !== e.tipo)             alteracoes.push(`Tipo alterado para ${tipo}`);
  if (atribuido && atribuido !== e.atribuidoPara) alteracoes.push(`Responsável: ${e.atribuidoPara||'(nenhum)'} → ${atribuido}`);
  if (prioridade && prioridade !== (e.prioridade||'normal')) alteracoes.push(`Prioridade: ${prioridade}`);
  if (local   && local   !== e.local)            alteracoes.push(`Local atualizado`);
  if (meetUrl && meetUrl !== e.meetUrl)          alteracoes.push(`Link Meet atualizado`);

  Object.assign(e, { titulo: titulo||e.titulo, data: data||e.data, hora: hora||e.hora, tipo: tipo||e.tipo,
    atribuidoPara: atribuido||e.atribuidoPara, prioridade: prioridade||e.prioridade,
    critico: prioridade === 'critica' });
  if (local   !== undefined) e.local   = local;
  if (meetUrl !== undefined) e.meetUrl = meetUrl;

  const descHistorico = alteracoes.length
    ? `Editado por ${nomeExibicao(USUARIO_ATUAL)} · ${alteracoes.join(' | ')}`
    : `Revisado por ${nomeExibicao(USUARIO_ATUAL)} (sem alterações)`;
  _registrarHistoricoEvento(eventoId, descHistorico);

  document.getElementById('modal-evento-det')?.remove();
  renderDashCalendario();
  const msg = alteracoes.length
    ? `✓ Salvo! Alterações: ${alteracoes.map(a => `<em>${a}</em>`).join(', ')}`
    : `✓ Evento revisado — sem alterações detectadas`;
  _salvarDados();
  toast(msg);
}

function verificarMudancaData(eventoId, novaData, dataOriginal) {
  const btnSalvar = document.getElementById(`ev-btn-salvar-${eventoId}`);
  const aviso     = document.getElementById(`ev-aviso-data-${eventoId}`);
  const acoesDiv  = document.getElementById(`ev-footer-acoes-${eventoId}`);
  const mudou = novaData && novaData !== dataOriginal;
  if (mudou) {
    if (btnSalvar) btnSalvar.style.display = 'none';
    if (aviso)    { aviso.style.display = 'flex'; }
    if (acoesDiv) acoesDiv.style.flexWrap = 'wrap';
  } else {
    if (btnSalvar) btnSalvar.style.display = '';
    if (aviso)    aviso.style.display = 'none';
  }
}

function salvarAnotacaoEvento(eventoId) {
  const e = (GESTOR.eventos || []).find(x => x.id === eventoId);
  if (!e) return;
  const texto = document.getElementById(`ev-anotacoes-${eventoId}`)?.value.trim();
  e.anotacoes = texto || '';
  _registrarHistoricoEvento(eventoId, `Anotação atualizada por ${nomeExibicao(USUARIO_ATUAL)}`);
  // Atualiza o histórico no modal sem fechar
  const histLista = document.getElementById('ev-hist-lista');
  if (histLista) {
    const novo = (e.historico || []).slice().reverse().map(h => `
      <div class="ev-hist-item">
        <div class="ev-hist-avatar" style="background:${h.cor||'#666'}">${h.iniciais||'?'}</div>
        <div class="ev-hist-info">
          <span class="ev-hist-acao">${esc(h.acao)}</span>
          <span class="ev-hist-meta">${esc(h.usuario)} · ${esc(h.data)}</span>
        </div>
      </div>`).join('') || '<div class="ev-hist-vazio">Sem histórico ainda</div>';
    histLista.innerHTML = novo;
  }
  toast('📝 Anotação salva!');
}

function abrirPainelReagendar(eventoId) {
  const e = (GESTOR.eventos || []).find(x => x.id === eventoId);
  if (!e) return;

  // Regra: colaboradores só podem reagendar 2x; 3ª requer admin
  const perfisLimitados = ['estagiario', 'secretaria'];
  const totalReagendamentos = e.totalReagendamentos || 0;
  const isColaborador = perfisLimitados.includes(USUARIO_ATUAL.perfil);
  const isAdmin = ['admin', 'socio'].includes(USUARIO_ATUAL.perfil);
  if (isColaborador && totalReagendamentos >= 2) {
    toastAlerta('Limite atingido! Este evento já foi reagendado <strong>2 vezes</strong>. Apenas o <strong>Administrador</strong> pode autorizar um novo reagendamento.');
    return;
  }
  // Avisa admin que está na 2ª tentativa (última permitida para colaborador)
  if (isColaborador && totalReagendamentos === 1) {
    toast('⚠️ Atenção: este é o último reagendamento permitido para colaboradores.', 'warn');
  }

  const painel = document.getElementById(`ev-reagendar-painel-${eventoId}`);
  const footer = document.getElementById(`ev-det-footer-${eventoId}`);
  if (painel) painel.style.display = 'block';
  if (footer) footer.style.display = 'none';
  // Pré-preencher data sugerida: próximo dia útil ou até 7 dias (dentro do limite)
  const hoje = new Date();
  const amanha = new Date(hoje); amanha.setDate(hoje.getDate() + 1);
  // Sugestão: 3 dias a partir de amanhã (prazo padrão razoável), respeitando limite
  const sugestao = new Date(hoje);
  sugestao.setDate(hoje.getDate() + (isAdmin ? 7 : Math.min(7, 14)));
  const dataInput = document.getElementById(`ev-reagendar-data-${eventoId}`);
  if (dataInput) {
    dataInput.value = sugestao.toISOString().slice(0, 10);
    dataInput.min   = amanha.toISOString().slice(0, 10);
    if (isAdmin) {
      dataInput.max = ''; // admin: sem limite
    } else {
      const maxData = new Date(hoje); maxData.setDate(hoje.getDate() + 15);
      dataInput.max = maxData.toISOString().slice(0, 10);
    }
  }
  // Mostrar aviso de limite no painel conforme perfil
  const avisoLimite = document.getElementById(`ev-reagendar-aviso-limite-${eventoId}`);
  if (avisoLimite) {
    avisoLimite.style.display = isAdmin ? 'none' : 'block';
  }
}

function confirmarReagendamento(eventoId) {
  const e = (GESTOR.eventos || []).find(x => x.id === eventoId);
  if (!e) return;
  const motivo = document.getElementById(`ev-reagendar-motivo-${eventoId}`)?.value.trim();
  const novaData = document.getElementById(`ev-reagendar-data-${eventoId}`)?.value;
  const novaHora = document.getElementById(`ev-reagendar-hora-${eventoId}`)?.value;

  if (!motivo) { toast('⚠️ Informe o motivo do reagendamento.', 'warn'); return; }
  if (!novaData) { toast('⚠️ Selecione a nova data.', 'warn'); return; }

  // Validação de horário comercial: 08:00–12:00 e 13:00–16:00
  if (novaHora) {
    const [h, m] = novaHora.split(':').map(Number);
    const minutos = h * 60 + m;
    const manha = minutos >= 8*60 && minutos <= 12*60;
    const tarde  = minutos >= 13*60 && minutos <= 16*60;
    if (!manha && !tarde) {
      toastAlerta('Horário fora do expediente.<br>Permitido: <strong>08:00 às 12:00</strong> (manhã) ou <strong>13:00 às 16:00</strong> (tarde).', 'warn');
      return;
    }
  }

  // Validação de data
  const hoje = new Date(); hoje.setHours(0,0,0,0);
  const dataSelecionada = new Date(novaData + 'T00:00:00');
  const diffDias = Math.round((dataSelecionada - hoje) / 86400000);
  if (diffDias < 1) { toast('⚠️ A nova data deve ser a partir de amanhã.', 'warn'); return; }

  // Limite de 15 dias — somente para não-administradores
  const isAdmin = ['admin', 'socio'].includes(USUARIO_ATUAL?.perfil);
  if (!isAdmin && diffDias > 15) {
    toastAlerta('Reagendamento acima de 15 dias não é permitido para colaboradores. Solicite ao <strong>Administrador</strong> para datas além deste prazo.');
    return;
  }

  // Marca evento original como reagendado e incrementa contador
  e.status = 'reagendado';
  e.totalReagendamentos = (e.totalReagendamentos || 0) + 1;
  _registrarHistoricoEvento(eventoId, `Reagendado por ${nomeExibicao(USUARIO_ATUAL)} · Motivo: ${motivo}`);

  // Se colaborador atingiu 2 reagendamentos, criar alerta supercrítico para todos
  const perfisLimitados = ['estagiario', 'secretaria'];
  if (perfisLimitados.includes(USUARIO_ATUAL.perfil) && e.totalReagendamentos >= 2) {
    _emitirAlertaSupercritico(e, USUARIO_ATUAL, motivo);
  }

  // Salva a nova data no evento original para exibir na mensagem do modal
  e.reagendadoPara = novaData;
  e.reagendadoHora = novaHora || e.hora || '08:00';

  // Cria novo evento na agenda
  const novoId = 'EV' + Date.now();
  const novoEvento = {
    id:            novoId,
    titulo:        e.titulo,
    tipo:          e.tipo,
    data:          novaData,
    hora:          novaHora || e.hora || '09:00',
    status:        'pendente',
    atribuidoPara: e.atribuidoPara,
    responsavel:   e.responsavel,
    cliente:       e.cliente,
    local:         e.local,
    meetUrl:       e.meetUrl,
    critico:       e.critico,
    prioridade:    e.prioridade || 'normal',
    obs:           `Reagendado de ${(e.data||'').split('-').reverse().join('/')}. Motivo: ${motivo}`,
    historico:     [{
      acao:     `Criado por reagendamento · Motivo: ${motivo}`,
      usuario:  nomeExibicao(USUARIO_ATUAL),
      iniciais: USUARIO_ATUAL.iniciais,
      cor:      USUARIO_ATUAL.cor,
      data:     new Date().toLocaleDateString('pt-BR') + ' ' + new Date().toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'}),
    }],
    reagendadoDe: eventoId,
  };
  GESTOR.eventos.push(novoEvento);
  _salvarDados();
  document.getElementById('modal-evento-det')?.remove();
  renderDashCalendario();
  renderMinhasTarefas();
  verificarAlertasEventosDia();
  const dataFormatada = novaData.split('-').reverse().join('/');
  toast(`📅 Reagendado para <strong>${dataFormatada}</strong>! Novo evento criado na agenda.`);
}

function concluirEvento(eventoId) {
  const e = (GESTOR.eventos || []).find(x => x.id === eventoId);
  if (!e) return;
  const agora = new Date();
  const dataHora = agora.toLocaleDateString('pt-BR') + ' às ' + agora.toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'});
  const perfil = USUARIO_ATUAL.perfil === 'estagiario' ? 'Estagiário'
    : USUARIO_ATUAL.perfil === 'secretaria' ? 'Secretária'
    : USUARIO_ATUAL.perfil === 'admin' ? 'Administrador'
    : USUARIO_ATUAL.perfil === 'socio' ? 'Sócio'
    : USUARIO_ATUAL.perfil === 'advogado' ? 'Advogado'
    : 'Colaborador';
  e.status         = 'concluido';
  e.concluidoPor   = nomeExibicao(USUARIO_ATUAL);
  e.concluidoPerfil = perfil;
  e.concluidoEm    = dataHora;
  _registrarHistoricoEvento(eventoId,
    `✅ Concluído por ${nomeExibicao(USUARIO_ATUAL)} (${perfil}) em ${dataHora}`);
  document.getElementById('modal-evento-det')?.remove();
  renderDashCalendario();
  renderMinhasTarefas();
  verificarAlertasEventosDia();
  toast(`✅ Tarefa <strong>"${esc(e.titulo)}"</strong> concluída por <strong>${nomeExibicao(USUARIO_ATUAL)}</strong>!`);
}

function _emitirAlertaSupercritico(eventoOriginal, usuarioResponsavel, motivo) {
  // Cria evento supercrítico na agenda visível para todos
  const novoId = 'EV_SC_' + Date.now();
  const agora = new Date();
  const dataHoje = agora.toISOString().slice(0, 10);
  const horaAgora = agora.toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit'});

  const eventoSupercritico = {
    id:            novoId,
    titulo:        `🚨 SUPERCRÍTICO: "${eventoOriginal.titulo}" — 2º reagendamento atingido`,
    tipo:          'interno',
    data:          dataHoje,
    hora:          horaAgora,
    status:        'pendente',
    critico:       true,
    supercritico:  true,
    prioridade:    'critica',
    atribuidoPara: '', // visível a todos
    responsavel:   '',
    cliente:       eventoOriginal.cliente || '',
    obs:           `Evento reagendado 2x por ${nomeExibicao(usuarioResponsavel)}. Motivo do último reagendamento: ${motivo}. Requer ação do Administrador para autorizar novo reagendamento ou concluir.`,
    historico: [{
      acao:     `Alerta supercrítico gerado automaticamente — limite de reagendamentos atingido`,
      usuario:  'Sistema',
      iniciais: '!',
      cor:      '#dc2626',
      data:     agora.toLocaleDateString('pt-BR') + ' ' + horaAgora,
    }],
  };
  GESTOR.eventos.push(eventoSupercritico);
  _salvarDados();

  // Exibe banner de alerta supercrítico na tela
  document.getElementById('alerta-supercritico-banner')?.remove();
  const banner = document.createElement('div');
  banner.id = 'alerta-supercritico-banner';
  banner.className = 'alerta-supercritico-banner';
  banner.innerHTML = `
    <div class="asc-icone">🚨</div>
    <div class="asc-texto">
      <strong>ALERTA SUPERCRÍTICO</strong>
      <span>"${esc(eventoOriginal.titulo)}" atingiu o limite de reagendamentos por ${esc(nomeExibicao(usuarioResponsavel))}. Ação do Administrador necessária!</span>
    </div>
    <button class="asc-fechar" onclick="document.getElementById('alerta-supercritico-banner').remove()">✕</button>
  `;
  document.body.appendChild(banner);
}

function cancelarEvento(eventoId) {
  // Abre painel de motivo de cancelamento em vez de cancelar direto
  const footer = document.getElementById(`ev-det-footer-${eventoId}`);
  const painelCanc = document.getElementById(`ev-cancelar-painel-${eventoId}`);
  if (painelCanc) { painelCanc.style.display = 'block'; }
  if (footer) footer.style.display = 'none';
}

function confirmarCancelamento(eventoId) {
  const e = (GESTOR.eventos || []).find(x => x.id === eventoId);
  if (!e) return;
  const motivo = document.getElementById(`ev-cancelar-motivo-${eventoId}`)?.value.trim();
  if (!motivo) { toast('⚠️ Informe o motivo do cancelamento.', 'warn'); return; }
  e.status = 'cancelado';
  e.motivoCancelamento = motivo;
  _registrarHistoricoEvento(eventoId, `Cancelado por ${nomeExibicao(USUARIO_ATUAL)} · Motivo: ${motivo}`);
  document.getElementById('modal-evento-det')?.remove();
  renderDashCalendario();
  renderMinhasTarefas();
  verificarAlertasEventosDia();
  toast(`✕ Evento cancelado. Motivo registrado no histórico.`);
}

// ===== PERSISTÊNCIA LOCAL (localStorage) =====

const _STORAGE_KEY = 'gestor_dados_v1';

function _salvarDados() {
  try {
    const snapshot = {
      eventos:           GESTOR.eventos || [],
      clientes:          GESTOR.clientes || [],
      processos:         GESTOR.processos || [],
      andamentos:        GESTOR.andamentos || [],
      tarefas:           GESTOR.tarefas || [],
      geridRequerimentos:GESTOR.geridRequerimentos || [],
      pastaClientes:     GESTOR.pastaClientes || {},
      kbCards:           window.KB_CARDS || {},
      finLancamentos:    window.FIN_LANCAMENTOS || [],
      finCobrancas:      window.FIN_COBRANCAS || [],
      documentos:        window.DOCUMENTOS || [],
      notifRegras:       window.NOTIF_REGRAS || [],
      notifLog:          window.NOTIF_LOG || [],
      agentesAtivos:     window.AGENTES_ATIVOS || [],
      prazoMargens:      window.PRAZO_MARGENS || [],
      ts: Date.now(),
    };
    localStorage.setItem(_STORAGE_KEY, JSON.stringify(snapshot));
  } catch(e) {
    console.warn('GESTOR: falha ao salvar dados locais. Armazenamento pode estar cheio.', e);
    toast('⚠ Não foi possível salvar os dados localmente. Exporte um backup agora.', 'warn');
  }
}

function _restaurarDados() {
  try {
    const raw = localStorage.getItem(_STORAGE_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    if (d.eventos)            GESTOR.eventos            = d.eventos;
    if (d.clientes)           GESTOR.clientes           = d.clientes;
    if (d.processos)          GESTOR.processos          = d.processos;
    if (d.andamentos)         GESTOR.andamentos         = d.andamentos;
    if (d.tarefas)            GESTOR.tarefas            = d.tarefas;
    if (d.geridRequerimentos) GESTOR.geridRequerimentos = d.geridRequerimentos;
    if (d.pastaClientes)      GESTOR.pastaClientes      = d.pastaClientes;
    if (d.kbCards)            window.KB_CARDS           = d.kbCards;
    if (d.finLancamentos)     window.FIN_LANCAMENTOS    = d.finLancamentos;
    if (d.finCobrancas)       window.FIN_COBRANCAS      = d.finCobrancas;
    // compatibilidade com snapshot antigo (chave com acento)
    else if (d.finCobranças)  window.FIN_COBRANCAS      = d.finCobranças;
    if (d.documentos)         window.DOCUMENTOS         = d.documentos;
    if (d.notifRegras)        window.NOTIF_REGRAS       = d.notifRegras;
    if (d.notifLog)           window.NOTIF_LOG          = d.notifLog;
    if (d.agentesAtivos)      window.AGENTES_ATIVOS     = d.agentesAtivos;
    if (d.prazoMargens)       window.PRAZO_MARGENS      = d.prazoMargens;
  } catch(e) { console.warn('GESTOR: erro ao restaurar dados locais', e); }
}

// Salva automaticamente a cada 60 segundos e após ações do usuário
setInterval(_salvarDados, 60000);

// Ponto de extensão: funções que modificam dados chamam _salvarDados()
// A função é exportada globalmente para uso inline nos handlers
window._salvarDados = _salvarDados;

// ===== INICIALIZAÇÃO =====

_restaurarDados();

// Inicializa aba usuários quando navegar para configurações
const _origShowPage = showPage;

showPage('dashboard');
console.log('%c GESTOR v2.0 ','background:#0F1E3C;color:#C9A84C;font-weight:bold;font-size:14px;padding:4px 8px;border-radius:4px;');
console.log('%cSistema integrado · Módulos comunicando.','color:#5a6885;');
