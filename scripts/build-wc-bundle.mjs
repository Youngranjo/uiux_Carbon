// Bundles the real @carbon/web-components source (from node_modules) into a single
// offline-usable ESM file. The currently published @carbon/web-components 2.x still
// imports old per-size icon paths (16.js/20.js/24.js) but @carbon/icons 11.83+ ships an
// inconsistent mix of files per icon (some only "index.js", some only "32.js", some only
// "24.js"...). This plugin resolves each broken import to whatever file actually exists
// in that icon's real installed folder, so the bundle is built from real source, not stubs.
import { build } from 'esbuild';
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const iconsPkgRoot = path.dirname(
  fileURLToPath(await import.meta.resolve('@carbon/icons/package.json'))
);

const iconSizeRedirect = {
  name: 'carbon-icon-size-redirect',
  setup(b) {
    b.onResolve({ filter: /@carbon\/icons\/es\/.+\/(16|20|24|32)\.js$/ }, (args) => {
      const m = args.path.match(/@carbon\/icons\/es\/(.+)\/(16|20|24|32)\.js$/);
      const [, iconName, requestedSize] = m;
      const iconDir = path.join(iconsPkgRoot, 'es', iconName);
      if (!existsSync(iconDir)) return null;
      const files = readdirSync(iconDir);
      const preferredOrder = [`${requestedSize}.js`, 'index.js', '32.js', '24.js', '20.js', '16.js'];
      const pick = preferredOrder.find((f) => files.includes(f));
      if (!pick) return null;
      return { path: path.join(iconDir, pick) };
    });
  },
};

await build({
  entryPoints: ['node_modules/@carbon/web-components/es/index.js'],
  bundle: true,
  // IIFE (not 'esm') so this can be loaded with a plain <script src="...">, not
  // <script type="module">. Module scripts are fetched under CORS rules that Chrome/Edge
  // refuse for file:// URLs ("Cross origin requests are only supported for HTTP"), so
  // double-clicking index.html instead of running a server left every custom element
  // undefined and rendering as plain inline text — this is what fixes that.
  format: 'iife',
  outfile: 'assets/carbon-web-components.bundle.js',
  minify: true,
  plugins: [iconSizeRedirect],
  logLevel: 'info',
});

console.log('carbon-web-components bundle written to assets/carbon-web-components.bundle.js');
