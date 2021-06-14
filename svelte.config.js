import adapter_static from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
        adapter: adapter_static(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        // files: {
        //     serviceWorker: 'node_modules/sql.js-httpvfs/dist/sqlite.worker.js',
        // },
        paths: {
            base: '/static-search-page',
        },
	},
};

export default config;
