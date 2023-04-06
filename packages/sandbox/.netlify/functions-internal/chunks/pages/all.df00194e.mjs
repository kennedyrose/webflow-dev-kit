import { c as createAstro, a as createComponent, r as renderTemplate, s as spreadAttributes, u as unescapeHTML, b as renderHead } from '../astro.2b2cbf76.mjs';
import cheerio from 'cheerio';

const $$Astro = createAstro();
async function getStaticPaths() {
  return [
    { params: { path: `index` } }
  ];
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  let site = `https://sl4.webflow.io`;
  if (site.endsWith(`/`))
    site = site.slice(0, -1);
  let { path } = Astro2.params;
  if (!path)
    path = ``;
  const proxyPath = `${site}/${path}`;
  const res = await fetch(proxyPath);
  const html = await res.text();
  const $ = cheerio.load(html);
  const bodyHtml = $(`body`).html();
  const bodyAttrs = $(`body`).attr();
  const headHtml = $(`head`).html();
  const headAttrs = $(`head`).attr();
  return renderTemplate`<html lang="en">
	<head${spreadAttributes(headAttrs)}>${unescapeHTML(headHtml)}${renderHead($$result)}</head>
	
	<body${spreadAttributes(bodyAttrs)}>
	${unescapeHTML(bodyHtml)}</body>
</html>`;
}, "/Users/kennedyrose/Desktop/repo/webflow-dev/src/pages/[...path].astro");

const $$file = "/Users/kennedyrose/Desktop/repo/webflow-dev/src/pages/[...path].astro";
const $$url = "/[...path]";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
