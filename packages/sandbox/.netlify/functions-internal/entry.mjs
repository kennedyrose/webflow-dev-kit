import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { d as server_default, e as deserializeManifest } from './chunks/astro.2b2cbf76.mjs';
import { _ as _page0 } from './chunks/pages/all.df00194e.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'html-escaper';
import 'string-width';
import 'cheerio';

const pageMap = new Map([["src/pages/[...path].astro", _page0],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"console.log(\"Hello from Webflow!\");\n"}],"routeData":{"route":"/[...path]","type":"page","pattern":"^(?:\\/(.*?))?\\/?$","segments":[[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"src/pages/[...path].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/kennedyrose/Desktop/repo/webflow-dev/src/pages/[...path].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/astro/hoisted.js?q=0":"_custom/hoisted.46c1d395.js","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
