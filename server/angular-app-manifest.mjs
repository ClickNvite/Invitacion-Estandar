
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Invitacion-Estandar/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 79305, hash: 'b78c9b5ad2aeb4a14cceac1c9409a521bac354e14eb0fcf480d0e09d6ebf5fee', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 78036, hash: 'c5d93fb5544a8f0004e23cbef3da5eb107a4182139cecfcef003d8eb6e41a3fb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GP2IQNUC.css': {size: 7793, hash: 'oYuIwrXMym4', text: () => import('./assets-chunks/styles-GP2IQNUC_css.mjs').then(m => m.default)}
  },
};
