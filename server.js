const Web3 = require("web3");
const axios = require("axios");
const web3 = new Web3(
  new Web3.providers.WebsocketProvider("ws://127.0.0.1:9005")
);

web3.eth.subscribe("newBlockHeaders", async (error, result) => {
  if (!error) {
    const newBlock = await axios.post(
      "http://localhost:4001/api/block/newBlock",
      result
    );
  }
});
