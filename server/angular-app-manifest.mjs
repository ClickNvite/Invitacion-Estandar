
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 79285, hash: '25434ec9c4d8074f7ba3be3b0ab2ac029543c7ceff11990fa39ee4ff809b3924', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 78016, hash: '967c689f6d0a6befa2b2afca962ec321e404c10bf50fc7845381c6f8e6993127', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GP2IQNUC.css': {size: 7793, hash: 'oYuIwrXMym4', text: () => import('./assets-chunks/styles-GP2IQNUC_css.mjs').then(m => m.default)}
  },
};
