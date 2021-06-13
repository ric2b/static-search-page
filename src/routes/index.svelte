<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script>
  // https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/
  // https://www.npmjs.com/package/sql.js-httpvfs

  // import { createDbWorker } from "sql.js-httpvfs";
  import pkg from "sql.js-httpvfs";
  const { createDbWorker } = pkg;
  // import wasmUrl from "sql.js-httpvfs/dist/sql-wasm.wasm";
  // import workerUrl from "sql.js-httpvfs/dist/sqlite.worker.js";

  const wasmUrl = 'sql-wasm.wasm';
  const workerUrl = 'sqlite.worker.js';

  console.log('starting')

  // init().then((exports) => {
  //   exports.test()
  // })
  
  // console.log(wasmUrl.toString())

  const config = {
    from: "inline",
    config: {
      serverMode: "full", // file is just a plain old full sqlite database
      requestChunkSize: 4096, // the page size of the  sqlite database (by default 4096)
      url: "example.sqlite3" // url to the database (relative or full)
    }
  };

  async function start() {
    const worker = await createDbWorker([config], workerUrl.toString(), wasmUrl.toString());
    const result = await worker.db.exec(`select * from documents where title = ?`, ['10 years']);
    console.log(result);
    console.log('started');
  }

  start();

</script>
