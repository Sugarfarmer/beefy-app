export const polygonPools = [
  {
    id: 'quick-eth-usdt',
    logo: 'polygon/ETH-USDT.png',
    name: 'ETH-USDT LP',
    token: 'ETH-USDT QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xF6422B997c7F54D1c6a6e103bcb1499EeA0a7046',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickETH-USDT',
    earnedTokenAddress: '0xC422261EdC5dB679CAd9BC403e886351De540e77',
    earnContractAddress: '0xC422261EdC5dB679CAd9BC403e886351De540e77',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-eth-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['ETH', 'USDT'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/ETH/0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=ETH&outputCurrency=0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  },
  {
    id: 'quick-eth-matic',
    logo: 'polygon/ETH-MATIC.png',
    name: 'ETH-MATIC LP',
    token: 'ETH-MATIC QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xadbF1854e5883eB8aa7BAf50705338739e558E5b',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickETH-MATIC',
    earnedTokenAddress: '0x8b89477dFde285849E1B07947E25012206F4D674',
    earnContractAddress: '0x8b89477dFde285849E1B07947E25012206F4D674',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-eth-matic',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['ETH', 'MATIC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/ETH/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=ETH',
  },
  {
    id: 'quick-quick-matic',
    logo: 'polygon/QUICK-MATIC.png',
    name: 'QUICK-MATIC LP',
    token: 'QUICK-MATIC QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x019ba0325f1988213D448b3472fA1cf8D07618d7',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickQUICK-MATIC',
    earnedTokenAddress: '0xa008B727ddBa283Ddb178b47BB227Cdbea5C1bfD',
    earnContractAddress: '0xa008B727ddBa283Ddb178b47BB227Cdbea5C1bfD',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-quick-matic',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['QUICK', 'MATIC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x831753dd7087cac61ab5644b308642cc1c33dc13',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0x831753dd7087cac61ab5644b308642cc1c33dc13',
  },
  {
      id: 'cometh-eth-matic',
      logo: 'polygon/ETH-MATIC.png',
      name: 'ETH-MATIC LP',
      token: 'ETH-MATIC LP',
      tokenDescription: 'Cometh',
      tokenAddress: '0x462390EA53F70F7570EEB2002c0150aF519f93A9',
      tokenDecimals: 18,
      tokenDescriptionUrl: '#',
      earnedToken: 'mooComethETH-MATIC',
      earnedTokenAddress: '0xa5aaE3a55cA356C62b5425AA4bFC212542B17777',
      earnContractAddress: '0xa5aaE3a55cA356C62b5425AA4bFC212542B17777',
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'lps',
      oracleId: 'cometh-eth-matic',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'Cometh',
      assets: ['ETH', 'MATIC'],
      callFee: 0.5,
      addLiquidityUrl:
        'https://swap.cometh.io/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
      buyTokenUrl:
        'https://swap.cometh.io/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    },
    {
        id: 'cometh-matic-must',
        logo: 'polygon/MUST-MATIC.png',
        name: 'MUST-MATIC LP',
        token: 'MUST-MATIC LP',
        tokenDescription: 'Cometh',
        tokenAddress: '0x80676b414a905De269D0ac593322Af821b683B92',
        tokenDecimals: 18,
        tokenDescriptionUrl: '#',
        earnedToken: 'mooComethMUST-MATIC',
        earnedTokenAddress: '0x7f6fE34C51d5352A0CF375C0Fbe03bD19eCD8460',
        earnContractAddress: '0x7f6fE34C51d5352A0CF375C0Fbe03bD19eCD8460',
        pricePerFullShare: 1,
        tvl: 0,
        oracle: 'lps',
        oracleId: 'cometh-matic-must',
        oraclePrice: 0,
        depositsPaused: false,
        status: 'active',
        platform: 'Cometh',
        assets: ['MUST', 'MATIC'],
        callFee: 0.5,
        addLiquidityUrl:
          'https://swap.cometh.io/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
        buyTokenUrl:
          'https://swap.cometh.io/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
      },
      {
        id: 'cometh-usdc-must',
        logo: 'polygon/USDC-MUST.png',
        name: 'USDC-MUST LP',
        token: 'USDC-MUST LP',
        tokenDescription: 'Cometh',
        tokenAddress: '0x12A2aBcFcADc04681929F0c199bDf812967207E4',
        tokenDecimals: 18,
        tokenDescriptionUrl: '#',
        earnedToken: 'mooComethUSDC-MUST',
        earnedTokenAddress: '0x8a198BCbF313A5565c64A7Ed61FaA413eB4E0931',
        earnContractAddress: '0x8a198BCbF313A5565c64A7Ed61FaA413eB4E0931',
        pricePerFullShare: 1,
        tvl: 0,
        oracle: 'lps',
        oracleId: 'cometh-usdc-must',
        oraclePrice: 0,
        depositsPaused: false,
        status: 'active',
        platform: 'Cometh',
        assets: ['USDC', 'MUST'],
        callFee: 0.5,
        addLiquidityUrl:
          'https://swap.cometh.io/#/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
        buyTokenUrl:
          'https://swap.cometh.io/#/swap?inputCurrency=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&outputCurrency=0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
      },
];