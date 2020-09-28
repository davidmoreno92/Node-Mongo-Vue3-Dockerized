import app from './app';
import * as dotenv from "dotenv";
const bodyParser = require('body-parser');

dotenv.config();
const PORT = process.env.API_PORT || 8080;

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})