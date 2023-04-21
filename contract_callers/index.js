import { ethers } from "ethers"

const testnetRpcUrl = 'https://network.ambrosus-test.io'
const mainnetRpcUrl = 'https://network.ambrosus.io'

const provider = new ethers.JsonRpcProvider(testnetRpcUrl)

const factoryAddress = '0x603Db5Bf865DBBB4778c353930e795823e095b36'
const factoryAbi = [
  "function INIT_CODE_HASH() external view returns (bytes32)",
  "function allPairsLength() external view returns (uint)"
]

const main = async () => {
  const factoryContract = new ethers.Contract(factoryAddress, factoryAbi, provider)
  const result = await factoryContract.INIT_CODE_HASH()
  console.log(result)
}

main()