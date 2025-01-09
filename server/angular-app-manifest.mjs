
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Invitacion-Estandar/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 79305, hash: '696dd90e212c15b82288730d856cba0de4e56279e9cdf9da67a681ef5f98b1f9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 78036, hash: 'fbbc96a079299d2d76a1c70e2f7dadc1759af7e467b411c9f8c2229ecd29fedb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GP2IQNUC.css': {size: 7793, hash: 'oYuIwrXMym4', text: () => import('./assets-chunks/styles-GP2IQNUC_css.mjs').then(m => m.default)}
  },
};
