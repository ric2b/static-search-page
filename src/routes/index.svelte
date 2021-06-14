<p>Title: {title}</p>
<p>Description: {description}</p>

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

  let title = 'loading';
  let description = 'loading';

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
    const result = await worker.db.exec(`select title, description from documents where title = ?`, ['10 Years']);


    [title, description] = result[0].values[0]
    console.log(result);
    console.log('started');
  }

  start();

</script>
