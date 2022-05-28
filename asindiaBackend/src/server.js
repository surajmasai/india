const app = require('./index');

const connect = require('./configs/db');

const port = 4000

app.listen(port, async function () {
    await connect();

    console.log(`listening on port ${port}`);
})