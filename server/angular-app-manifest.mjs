
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/invitacion-estandar/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 79305, hash: 'd171a696310fe7cb3ebf36e811c3aa1345b4cff26d5100bc0017f1f79de44876', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 78036, hash: '65190f2d48f9cc633f84fc05d99f68f4ff7e7dc982e02ee82251e067a42223d1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GP2IQNUC.css': {size: 7793, hash: 'oYuIwrXMym4', text: () => import('./assets-chunks/styles-GP2IQNUC_css.mjs').then(m => m.default)}
  },
};
