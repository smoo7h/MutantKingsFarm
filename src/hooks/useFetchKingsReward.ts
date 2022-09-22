import { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import multicall from 'utils/multicall'
import { getKingsAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import { farmsConfig } from 'config/constants'
import getReward from 'utils/getReward'
import useRefresh from './useRefresh'


const useFetchKingsReward = () => {
  const [balances, setBalance] = useState('0')
  const { account }: { account: string } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchKingsRewardBalance = async () => {
      

      const returnData  = await getReward(account)
      
      setBalance(returnData)
    }

    if (account) {
      fetchKingsRewardBalance()
    }
  }, [account, fastRefresh])

  return balances
}

export default useFetchKingsReward
