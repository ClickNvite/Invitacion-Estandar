
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 79286, hash: '8e580117cee6fef13994f63d5f421671e7f02654d13b4beb9a551c929970dd90', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 78017, hash: 'd763ee3c3fb49db6f02cf3615a65629772dbaf9be1ada95e66eedb566581c541', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GP2IQNUC.css': {size: 7793, hash: 'oYuIwrXMym4', text: () => import('./assets-chunks/styles-GP2IQNUC_css.mjs').then(m => m.default)}
  },
};
