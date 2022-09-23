import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'CROWN',
    lpAddresses: {
      97: '',
      42: '0xEfcF4b62762D7513B80Fb7aBcF8FA1457E9936D2', // CROWN-BUSD LP
    },
    tokenSymbol: 'CROWN',
    tokenAddresses: {
      97: '',
      42: '0x98378d47F93333CfEa1Fc0a6DD4e3d364DFAC8c4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'CROWN-USDC LP',
    lpAddresses: {
      97: '',
      42: '0xEfcF4b62762D7513B80Fb7aBcF8FA1457E9936D2',
    },
    tokenSymbol: 'CROWN',
    tokenAddresses: {
      97: '',
      42: '0x98378d47F93333CfEa1Fc0a6DD4e3d364DFAC8c4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'CROWN-MATIC LP',
    lpAddresses: {
      97: '',
      42: '0x9619eCD3CC8B74d3D3CB3B60Ef924742f3c0373A',
    },
    tokenSymbol: 'CROWN',
    tokenAddresses: {
      97: '',
      42: '0x98378d47F93333CfEa1Fc0a6DD4e3d364DFAC8c4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'KINGS-USDC LP',
    lpAddresses: {
      97: '',
      42: '0x44A1CAfbe5EB163E1AAd0bC8B135683BF8471799',
    },
    tokenSymbol: 'KINGS',
    tokenAddresses: {
      97: '',
      42: '0x6207C9B872055822CC646dF590a273d152410d9e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'KINGS-MATIC LP',
    lpAddresses: {
      97: '',
      42: '0xEF9E50aAe5F74CbDA175163A8833b6109c9D74e3',
    },
    tokenSymbol: 'KINGS',
    tokenAddresses: {
      97: '',
      42: '0x6207C9B872055822CC646dF590a273d152410d9e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 3,
    lpSymbol: 'KINGS-CROWN LP',
    lpAddresses: {
      97: '',
      42: '0xEF9E50aAe5F74CbDA175163A8833b6109c9D74e3',
    },
    tokenSymbol: 'KINGS',
    tokenAddresses: {
      97: '',
      42: '0x6207C9B872055822CC646dF590a273d152410d9e',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 6,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      42: '0xc20cf81dfF14ce8C9b454e6Cd4B2145d81535849',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      42: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'KINGS',
    lpAddresses: {
      97: '',
      42: '0x44A1CAfbe5EB163E1AAd0bC8B135683BF8471799', // kings-usdc
    },
    tokenSymbol: 'KINGS',
    tokenAddresses: {
      97: '',
      42: '0x6207C9B872055822CC646dF590a273d152410d9e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
