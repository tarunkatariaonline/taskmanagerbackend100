"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./graphql/index");
async function init() {
    const app = await (0, index_1.initServer)();
    app.get('/', (req, res) => {
        res.send('Hello World Server is working');
    });
    app.listen(8000, () => {
        console.log('Server is running on port 8000');
    });
}
init();
