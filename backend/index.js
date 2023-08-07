const express = require("express"); // runs http server
const cors = require("cors"); // call server from any other origin
const { default: axios } = require("axios");
require("dotenv").config(); // read .env file

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// check if user exists
// if not, create user
// generate secret
// store secret
// send secret to user

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": '1a82ad50-0220-45c7-b135-934fd7cf8709'}}
    )
    return res.status(r.status).json(r.data)
    } catch (e) {
       return res.status(e.response.status).json(e.response.data)
}
});



app.listen(3001); // start server on port 3001