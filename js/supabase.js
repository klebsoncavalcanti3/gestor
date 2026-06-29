// Integração Supabase — GESTOR
const SUPABASE_URL  = 'https://ctjkbujgyxhdaypyefgg.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0amtidWpneXhoZGF5cHllZmdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2ODg4MjksImV4cCI6MjA5ODI2NDgyOX0.tGU7XLo57BxHGRHrScAmyQFSghQlA7GF2oMtXUX-sn4';

const _sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

// ── Usuários ──────────────────────────────────────────────────────────────────
async function sbSalvarUsuarios(lista) {
  const rows = lista.map(u => ({
    id: u.id, nome: u.nome, cargo: u.cargo, perfil: u.perfil,
    email: u.email || null, oab: u.oab || null,
    iniciais: u.iniciais || null, cor: u.cor || '#6366f1', ativo: u.ativo !== false
  }));
  const { error } = await _sb.from('usuarios').upsert(rows, { onConflict: 'id' });
  if (error) console.error('[SB] usuarios:', error.message);
}

// ── Clientes ──────────────────────────────────────────────────────────────────
async function sbSalvarCliente(c) {
  const { error } = await _sb.from('clientes').upsert({
    id: c.id, nome: c.nome, doc: c.doc || null, area: c.area || null,
    honorarios: c.honorarios || 0, status: c.status || 'ativo',
    ultimo_contato: c.ultimoContato || null,
    dias_sem_contato: c.diasSemContato || 0,
    tipo: c.tipo || 'cliente', pasta_fisica: c.pastaFisica || null,
    localizacao_pasta: c.localizacaoPasta || null, obs: c.obs || null,
    updated_at: new Date().toISOString()
  }, { onConflict: 'id' });
  if (error) console.error('[SB] cliente:', error.message);
}

async function sbCarregarClientes() {
  const { data, error } = await _sb.from('clientes').select('*').order('nome');
  if (error) { console.error('[SB] clientes:', error.message); return null; }
  return data.map(r => ({
    id: r.id, nome: r.nome, doc: r.doc, area: r.area,
    honorarios: r.honorarios, status: r.status,
    ultimoContato: r.ultimo_contato, diasSemContato: r.dias_sem_contato,
    tipo: r.tipo, pastaFisica: r.pasta_fisica,
    localizacaoPasta: r.localizacao_pasta, obs: r.obs
  }));
}

// ── Eventos / Agenda ──────────────────────────────────────────────────────────
async function sbSalvarEvento(e) {
  const { error } = await _sb.from('eventos').upsert({
    id: e.id, titulo: e.titulo, data: e.data, hora: e.hora || null,
    tipo: e.tipo || null, status: e.status || 'pendente',
    proc_id: e.procId || null, cliente: e.cliente || null,
    atribuido: e.atribuido || null, local: e.local || null,
    meet_url: e.meetUrl || null, prioridade: e.prioridade || 'media',
    obs: e.obs || null, anotacoes: e.anotacoes || null,
    origem: e.origem || 'manual', _sinc: e._sinc || false,
    historico: e.historico || [],
    updated_at: new Date().toISOString()
  }, { onConflict: 'id' });
  if (error) console.error('[SB] evento:', error.message);
}

async function sbCarregarEventos() {
  const { data, error } = await _sb.from('eventos').select('*').order('data');
  if (error) { console.error('[SB] eventos:', error.message); return null; }
  return data.map(r => ({
    id: r.id, titulo: r.titulo, data: r.data, hora: r.hora,
    tipo: r.tipo, status: r.status, procId: r.proc_id,
    cliente: r.cliente, atribuido: r.atribuido, local: r.local,
    meetUrl: r.meet_url, prioridade: r.prioridade, obs: r.obs,
    anotacoes: r.anotacoes, origem: r.origem, _sinc: r._sinc,
    historico: r.historico || []
  }));
}

// ── Kanban ────────────────────────────────────────────────────────────────────
async function sbSalvarKanbanCard(card, board) {
  const { error } = await _sb.from('kanban_cards').upsert({
    id: card.id, board: board, col: card.col || 'backlog',
    titulo: card.titulo, prioridade: card.prioridade || 'media',
    categoria: card.categoria || null, prazo: card.prazo || null,
    responsavel: card.responsavel || null, descricao: card.desc || null,
    tags: card.tags || [],
    updated_at: new Date().toISOString()
  }, { onConflict: 'id' });
  if (error) console.error('[SB] kanban_card:', error.message);
}

async function sbCarregarKanban() {
  const { data, error } = await _sb.from('kanban_cards').select('*');
  if (error) { console.error('[SB] kanban:', error.message); return null; }
  return data;
}

// ── Financeiro ────────────────────────────────────────────────────────────────
async function sbSalvarLancamento(l) {
  const { error } = await _sb.from('fin_lancamentos').upsert({
    id: l.id, tipo: l.tipo, categoria: l.categoria || null,
    descricao: l.descricao, valor: l.valor, data: l.data,
    proc_id: l.procId || null, cliente_id: l.clienteId || null,
    status: l.status || 'em_aberto', forma_pgto: l.formaPgto || null
  }, { onConflict: 'id' });
  if (error) console.error('[SB] lancamento:', error.message);
}

async function sbCarregarLancamentos() {
  const { data, error } = await _sb.from('fin_lancamentos').select('*').order('data', { ascending: false });
  if (error) { console.error('[SB] lancamentos:', error.message); return null; }
  return data.map(r => ({
    id: r.id, tipo: r.tipo, categoria: r.categoria,
    descricao: r.descricao, valor: r.valor, data: r.data,
    procId: r.proc_id, clienteId: r.cliente_id,
    status: r.status, formaPgto: r.forma_pgto
  }));
}

// ── Sync inicial ──────────────────────────────────────────────────────────────
async function sbSincronizarTudo() {
  console.log('[SB] sincronizando...');

  const [clientes, eventos, kanban, lancamentos] = await Promise.all([
    sbCarregarClientes(),
    sbCarregarEventos(),
    sbCarregarKanban(),
    sbCarregarLancamentos()
  ]);

  if (clientes && clientes.length > 0)    GESTOR.clientes  = clientes;
  if (eventos  && eventos.length  > 0)    GESTOR.eventos   = eventos;
  if (lancamentos && lancamentos.length > 0) FIN_LANCAMENTOS  = lancamentos;

  if (kanban && kanban.length > 0) {
    kanban.forEach(c => {
      const b = c.board;
      if (!KB_CARDS[b]) KB_CARDS[b] = [];
      if (!KB_CARDS[b].find(x => x.id === c.id)) {
        KB_CARDS[b].push({ id: c.id, col: c.col, titulo: c.titulo,
          prioridade: c.prioridade, categoria: c.categoria,
          prazo: c.prazo, responsavel: c.responsavel,
          desc: c.descricao, tags: c.tags || [] });
      }
    });
  }

  console.log('[SB] sync concluído — clientes:', clientes?.length, 'eventos:', eventos?.length);
}

// ── Push dos usuários de dados.js ─────────────────────────────────────────────
async function sbPushUsuariosIniciais() {
  if (typeof USUARIOS !== 'undefined' && USUARIOS.length > 0) {
    await sbSalvarUsuarios(USUARIOS);
  }
}
