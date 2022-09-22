import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://app.sushi.com/swap?tokens=0xb7a4F3E9097C08dA09517b5aB877F7a917224ede&tokens=0x98378d47F93333CfEa1Fc0a6DD4e3d364DFAC8c4&chainId=42',
      },
      {
        label: 'Liquidity',
        href: 'https://app.sushi.com/legacy/add/0xb7a4F3E9097C08dA09517b5aB877F7a917224ede/0x98378d47F93333CfEa1Fc0a6DD4e3d364DFAC8c4?chainId=42',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'NFT Farm',
    icon: 'VaultsIcon',
    href: '/nftfarm',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap',
        href: 'https://quickswap.exchange/#/swap',
      },
      {
        label: 'Opensea',
        href: 'https://opensea.io/collection/inu-kings-club',
      },
      {
        label: 'DexScreener',
        href: 'https://dexscreener.com',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: 'Docs',
        href: 'https://gitbook.io/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com',
      },
    ],
  },
]

export default config
