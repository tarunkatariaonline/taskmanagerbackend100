"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./app/index");
async function init() {
    const app = await (0, index_1.initServer)();
    const PORT = process.env.PORT || 8000;
    app.get('/', (req, res) => {
        res.send('Hello World Server is working');
    });
    app.listen(PORT, () => {
        console.log('Server is running on port 8000');
    });
}
init();
