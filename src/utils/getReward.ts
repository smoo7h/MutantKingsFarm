/* eslint-disable import/no-unresolved */
import { AbiItem } from 'web3-utils'
import { Interface } from '@ethersproject/abi'
import { getWeb3 } from 'utils/web3'
import MultiCallAbi from 'config/abi/Multicall.json'
import YieldHubAbi from 'config/abi/yieldhub.json'
import { getCakeAddress, getMulticallAddress, getKingsAddress, getYieldHubAddress } from 'utils/addressHelpers'

interface Call {
  address: string // Address of the contract
  name: string // Function name on the contract (exemple: balanceOf)
  params?: any[] // Function params
}

const getReward = async (account: string) => {
  const web3 = getWeb3()
  const yieldhub = new web3.eth.Contract((YieldHubAbi as unknown) as AbiItem, getYieldHubAddress())

  

  const balance: string = await yieldhub.methods.getTotalClaimable(account, getKingsAddress()).call()
    

  return balance
}

export default getReward
