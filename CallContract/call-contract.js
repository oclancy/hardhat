
require("dotenv").config();
const ethers = require('ethers')

const API_KEY = process.env.API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

const contract = require("../MyToken/artifacts/contracts/Token.sol/Token.json")

// Provider
const infuriaProvider = new ethers.providers.InfuriaProvider(
    (network = "ropsten"),
    API_KEY
  )
  
  // Signer
  const signer = new ethers.Wallet(PRIVATE_KEY, infuriaProvider)
  
  // Contract
  const tokenContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contract.abi,
    signer
  )

  async function main() {
    const result = await tokenContract.getTotalSupply()
    console.log("The message is: " + result)
  }
  main()
  