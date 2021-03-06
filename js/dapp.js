const web3 = new Web3(window.ethereum);

const ABIFARM = [{"inputs":[{"internalType":"address","name":"_ao","type":"address"},{"internalType":"address","name":"_bpt","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountClaimed","type":"uint256"}],"name":"Rewarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"ao","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aoRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bpt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"difficulty12","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"difficulty3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"difficulty6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getPooledBalance12","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getPooledBalance3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getPooledBalance6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pooled","outputs":[{"internalType":"uint256","name":"lastBlockChecked","type":"uint256"},{"internalType":"uint256","name":"rewards","type":"uint256"},{"internalType":"uint256","name":"pooledBalance3","type":"uint256"},{"internalType":"uint256","name":"pooledBalance6","type":"uint256"},{"internalType":"uint256","name":"pooledBalance12","type":"uint256"},{"internalType":"uint256","name":"lastStake3","type":"uint256"},{"internalType":"uint256","name":"lastStake6","type":"uint256"},{"internalType":"uint256","name":"lastStake12","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pooledBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount3","type":"uint256"},{"internalType":"uint256","name":"amount6","type":"uint256"},{"internalType":"uint256","name":"amount12","type":"uint256"}],"name":"setDifficulty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakePool12","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakePool3","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakePool6","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPoolSum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPooledBPT12","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPooledBPT3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPooledBPT6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawPool12","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawPool3","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawPool6","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const ABIAO = [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
const ABIBPT = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"amt","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LOG_CALL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"tokenOut","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAmountOut","type":"uint256"}],"name":"LOG_EXIT","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"tokenIn","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAmountIn","type":"uint256"}],"name":"LOG_JOIN","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"tokenIn","type":"address"},{"indexed":true,"internalType":"address","name":"tokenOut","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAmountIn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenAmountOut","type":"uint256"}],"name":"LOG_SWAP","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"amt","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"BONE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BPOW_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"EXIT_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INIT_POOL_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_BOUND_TOKENS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_BPOW_BASE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_IN_RATIO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_OUT_RATIO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_TOTAL_WEIGHT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_WEIGHT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_BALANCE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_BOUND_TOKENS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_BPOW_BASE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_WEIGHT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"whom","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"denorm","type":"uint256"}],"name":"bind","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenBalanceIn","type":"uint256"},{"internalType":"uint256","name":"tokenWeightIn","type":"uint256"},{"internalType":"uint256","name":"tokenBalanceOut","type":"uint256"},{"internalType":"uint256","name":"tokenWeightOut","type":"uint256"},{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"},{"internalType":"uint256","name":"swapFee","type":"uint256"}],"name":"calcInGivenOut","outputs":[{"internalType":"uint256","name":"tokenAmountIn","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenBalanceIn","type":"uint256"},{"internalType":"uint256","name":"tokenWeightIn","type":"uint256"},{"internalType":"uint256","name":"tokenBalanceOut","type":"uint256"},{"internalType":"uint256","name":"tokenWeightOut","type":"uint256"},{"internalType":"uint256","name":"tokenAmountIn","type":"uint256"},{"internalType":"uint256","name":"swapFee","type":"uint256"}],"name":"calcOutGivenIn","outputs":[{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenBalanceOut","type":"uint256"},{"internalType":"uint256","name":"tokenWeightOut","type":"uint256"},{"internalType":"uint256","name":"poolSupply","type":"uint256"},{"internalType":"uint256","name":"totalWeight","type":"uint256"},{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"},{"internalType":"uint256","name":"swapFee","type":"uint256"}],"name":"calcPoolInGivenSingleOut","outputs":[{"internalType":"uint256","name":"poolAmountIn","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenBalanceIn","type":"uint256"},{"internalType":"uint256","name":"tokenWeightIn","type":"uint256"},{"internalType":"uint256","name":"poolSupply","type":"uint256"},{"internalType":"uint256","name":"totalWeight","type":"uint256"},{"internalType":"uint256","name":"tokenAmountIn","type":"uint256"},{"internalType":"uint256","name":"swapFee","type":"uint256"}],"name":"calcPoolOutGivenSingleIn","outputs":[{"internalType":"uint256","name":"poolAmountOut","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenBalanceIn","type":"uint256"},{"internalType":"uint256","name":"tokenWeightIn","type":"uint256"},{"internalType":"uint256","name":"poolSupply","type":"uint256"},{"internalType":"uint256","name":"totalWeight","type":"uint256"},{"internalType":"uint256","name":"poolAmountOut","type":"uint256"},{"internalType":"uint256","name":"swapFee","type":"uint256"}],"name":"calcSingleInGivenPoolOut","outputs":[{"internalType":"uint256","name":"tokenAmountIn","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenBalanceOut","type":"uint256"},{"internalType":"uint256","name":"tokenWeightOut","type":"uint256"},{"internalType":"uint256","name":"poolSupply","type":"uint256"},{"internalType":"uint256","name":"totalWeight","type":"uint256"},{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"uint256","name":"swapFee","type":"uint256"}],"name":"calcSingleOutGivenPoolIn","outputs":[{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenBalanceIn","type":"uint256"},{"internalType":"uint256","name":"tokenWeightIn","type":"uint256"},{"internalType":"uint256","name":"tokenBalanceOut","type":"uint256"},{"internalType":"uint256","name":"tokenWeightOut","type":"uint256"},{"internalType":"uint256","name":"swapFee","type":"uint256"}],"name":"calcSpotPrice","outputs":[{"internalType":"uint256","name":"spotPrice","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"decreaseApproval","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"uint256[]","name":"minAmountsOut","type":"uint256[]"}],"name":"exitPool","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxPoolAmountIn","type":"uint256"}],"name":"exitswapExternAmountOut","outputs":[{"internalType":"uint256","name":"poolAmountIn","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"}],"name":"exitswapPoolAmountIn","outputs":[{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getColor","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getController","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentTokens","outputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getDenormalizedWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getFinalTokens","outputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getNormalizedWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNumTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"}],"name":"getSpotPrice","outputs":[{"internalType":"uint256","name":"spotPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"}],"name":"getSpotPriceSansFee","outputs":[{"internalType":"uint256","name":"spotPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSwapFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalDenormalizedWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"gulp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"increaseApproval","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"t","type":"address"}],"name":"isBound","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isFinalized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isPublicSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"poolAmountOut","type":"uint256"},{"internalType":"uint256[]","name":"maxAmountsIn","type":"uint256[]"}],"name":"joinPool","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"tokenAmountIn","type":"uint256"},{"internalType":"uint256","name":"minPoolAmountOut","type":"uint256"}],"name":"joinswapExternAmountIn","outputs":[{"internalType":"uint256","name":"poolAmountOut","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"poolAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxAmountIn","type":"uint256"}],"name":"joinswapPoolAmountOut","outputs":[{"internalType":"uint256","name":"tokenAmountIn","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"denorm","type":"uint256"}],"name":"rebind","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"manager","type":"address"}],"name":"setController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"public_","type":"bool"}],"name":"setPublicSwap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"swapFee","type":"uint256"}],"name":"setSwapFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"tokenAmountIn","type":"uint256"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"name":"swapExactAmountIn","outputs":[{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"},{"internalType":"uint256","name":"spotPriceAfter","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"maxAmountIn","type":"uint256"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"name":"swapExactAmountOut","outputs":[{"internalType":"uint256","name":"tokenAmountIn","type":"uint256"},{"internalType":"uint256","name":"spotPriceAfter","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"unbind","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]


const aoAddress = '0x022057c3ef9166433750165bfda21d52988e0756';
const bptAddress = '0x03b3195eb046fdfa88aa75dabae5829d8b99c9ed';
const farmAddress = '0x8DCf79Ba47788e00Fd48Abac866CD03e8d18A1eD';


var ao = new web3.eth.Contract(ABIAO, aoAddress);
var bpt = new web3.eth.Contract(ABIBPT, bptAddress);
var farm = new web3.eth.Contract(ABIFARM, farmAddress);

var allowance;
var balanceAO;
var balanceBPT;
var staked3;
var staked6;
var staked12;
var last3;
var last6;
var last12;
var perday3;
var perday6;
var perday12;
var perdayTotal;




async function startWeb3() {
    await window.ethereum.enable();

    checkAllowance(ethereum.selectedAddress, farmAddress);
    aoBalance();
    bptBalance();
    pending();
    pool3();
    pool6();
    pool12();
    totalPooled();
    pooled3();
    pooled6();
    pooled12();
    /*pooledBalance();*/
    earned3();
    earned6();
    earned12();
    /*time3();
    time6();
    time12();*/

    var stakeButton = document.getElementById('stake_button');


}

async function checkAllowance(owner, spender) {

    await bpt.methods.allowance(owner, spender).call().then(r => {
        allowance = Number(r);
        if (allowance == 0) {
            document.getElementById('approve_button').style.display = "block";
            document.getElementById('stake_button').style.display = "none";
            //stakeButton.innerHTML = 'Approve';
        } else if (allowance > 0) {
            document.getElementById('approve_button').style.display = "none";
            document.getElementById('stake_button').style.display = "block";
            //stakeButton.innerHTML = 'Stake';
        }
    });
}

async function stake() {
    var timeToStake = $("#timeToStake").val();

    if(timeToStake == 3)
        stake3();
    else if (timeToStake == 6)
        stake6();
    else if (timeToStake == 12)
        stake12();
    else
        alert("Invalid time to stake value")
}

async function unstake() {
    var timeToUnstake = $("#timeToUnstake").val();

    if(timeToUnstake == 3)
        withdraw3();
    else if (timeToUnstake == 6)
        withdraw6();
    else if (timeToUnstake == 12)
        withdraw12();
    else
        alert("Invalid time to unstake value")
}

async function claim() {
    await farm.methods.getReward().send( {from: web3.givenProvider.selectedAddress, gas: 100000}).on('receipt', function(receipt) {
        console.log(receipt);
    });
}

async function stake3() {
    var amount = await document.getElementById("deposit_amount").value;
    await farm.methods.stakePool3(convert(amount, "ether", "wei")).send( {from: web3.givenProvider.selectedAddress, gas: 160000}).on('receipt', function(receipt) {
        console.log(receipt);
    });
}

async function stake6() {
    var amount = await document.getElementById("deposit_amount").value;
    await farm.methods.stakePool6(convert(amount, "ether", "wei")).send( {from: web3.givenProvider.selectedAddress, gas: 160000}).on('receipt', function(receipt) {
        console.log(receipt);
    });
}

async function stake12() {
    var amount = await document.getElementById("deposit_amount").value;
    await farm.methods.stakePool12(convert(amount, "ether", "wei")).send( {from: web3.givenProvider.selectedAddress, gas: 160000}).on('receipt', function(receipt) {
        console.log(receipt);
    });
}

async function withdraw3() {
    var amount = await document.getElementById("withdraw_amount").value;
    await farm.methods.withdrawPool3(convert(amount, "ether", "wei")).send( {from: web3.givenProvider.selectedAddress, gas: 133333}).on('receipt', function(receipt) {
        console.log(receipt);
    });
}

async function withdraw6() {
    var amount = await document.getElementById("withdraw_amount").value;
    await farm.methods.withdrawPool6(convert(amount, "ether", "wei")).send( {from: web3.givenProvider.selectedAddress, gas: 133333}).on('receipt', function(receipt) {
        console.log(receipt);
    });
}

async function withdraw12() {
    var amount = await document.getElementById("withdraw_amount").value;
    await farm.methods.withdrawPool12(convert(amount, "ether", "wei")).send( {from: web3.givenProvider.selectedAddress, gas: 133333}).on('receipt', function(receipt) {
        console.log(receipt);
    });
}



async function aoBalance() {

    await ao.methods.balanceOf(ethereum.selectedAddress).call().then(r => {
        document.getElementById("ao_balance").innerHTML = Number(web3.utils.fromWei(r)).toFixed(7);
    });
}

async function bptBalance() {

    await bpt.methods.balanceOf(ethereum.selectedAddress).call().then(r => {
        balanceBPT = Number(web3.utils.fromWei(r)).toFixed(7);
        document.getElementById("maxBalanceBTP").innerHTML = balanceBPT;
        document.getElementById("aof_balance").innerHTML = balanceBPT;
    });
}
/*
async function pooledBalance() {

    await farm.methods.pooledBalance().call().then(r => {
        document.getElementById("pool_balance").innerHTML = Number(web3.utils.fromWei(r)).toFixed(7);
    });
}
*/
async function pending() {

    await farm.methods.pendingReward(ethereum.selectedAddress).call().then(r => {
        document.getElementById("pending_reward").innerHTML = Number(web3.utils.fromWei(r)).toFixed(13);
    });
}


async function approve() {

    var amount = "9999999999999999999999999999999";
    await bpt.methods.approve(farmAddress, amount).send( {from: web3.givenProvider.selectedAddress, gas: 160000}).on('receipt', function(receipt) {
        console.log(receipt);
    });
}

async function pool3() {

    await farm.methods.getPooledBalance3(ethereum.selectedAddress).call().then(r => {
        staked3 = Number(web3.utils.fromWei(r)).toFixed(2);
        document.getElementById("staked_balance3").innerHTML = staked3;

        stakedTotal();
    });
}

async function pool6() {

    await farm.methods.getPooledBalance6(ethereum.selectedAddress).call().then(r => {
        staked6 = Number(web3.utils.fromWei(r)).toFixed(2);
        document.getElementById("staked_balance6").innerHTML = staked6;

        stakedTotal();
    });
}

async function pool12() {

    await farm.methods.getPooledBalance12(ethereum.selectedAddress).call().then(r => {
        staked12 = Number(web3.utils.fromWei(r)).toFixed(2);
        document.getElementById("staked_balance12").innerHTML = staked12;

        stakedTotal();
    });
}


async function totalPooled() {

    await farm.methods.totalPoolSum().call().then(r => {
        document.getElementById("total_pooled").innerHTML = Number(web3.utils.fromWei(r)).toFixed(2);
    });
}

async function pooled3() {

    await farm.methods.totalPooledBPT3().call().then(r => {
        document.getElementById("pooled3").innerHTML = Number(web3.utils.fromWei(r)).toFixed(2);
    });
}

async function pooled6() {

    await farm.methods.totalPooledBPT6().call().then(r => {
        document.getElementById("pooled6").innerHTML = Number(web3.utils.fromWei(r)).toFixed(2);
    });
}

async function pooled12() {

    await farm.methods.totalPooledBPT12().call().then(r => {
        document.getElementById("pooled12").innerHTML = Number(web3.utils.fromWei(r)).toFixed(2);
    });
}


async function time3() {

    await farm.methods.getLast3().call().then(r => {
    });
}

async function time6() {

    await farm.methods.getLast6().call().then(r => {
    });
}

async function time12() {

    await farm.methods.getLast12().call().then(r => {
    });
}

/* Aquí se calcula qué mostrar, esto sería para el pool 3, faltan 6 y 12
async function calcularTiempo() {
    var month = 60;

    if (timeSinceLastStake < month)
    //locked
    else if (timeSinceLastStake < month*2)
        //fee 15
        var a;
        else if (timeSinceLastStake >= month*2 && timeSinceLastStake < month*3)
         // fee 10
        else if (timeSinceLastStake >= month.mul(3)) {
        // fee 0
        }
} */

//Aquí se muestra en pantalla según el onchange del select, está puesto solo el balance como prueba
async function withdrawtime() {

    var timeToUnstake = $("#timeToUnstake").val();


    if(timeToUnstake == 3)
        document.getElementById("canMaxWith").innerHTML = document.getElementById("staked_balance3").innerHTML;
    else if (timeToUnstake == 6)
        document.getElementById("canMaxWith").innerHTML = document.getElementById("staked_balance6").innerHTML;
    else if (timeToUnstake == 12)
        document.getElementById("canMaxWith").innerHTML = document.getElementById("staked_balance12").innerHTML;
    else
        alert("Invalid time to unstake value")
}


async function earned3() {

    await farm.methods.getPooledBalance3(ethereum.selectedAddress).call().then(r => {
        perday3 = Number(web3.utils.fromWei(r)*6500/500000000000).toFixed(9);
        document.getElementById("earned3").innerHTML = perday3;

        earnedTotal();
    });
}

async function earned6() {

    await farm.methods.getPooledBalance6(ethereum.selectedAddress).call().then(r => {
        perday6 = Number(web3.utils.fromWei(r)*6500/400000000000).toFixed(9);
        document.getElementById("earned6").innerHTML = perday6;

        earnedTotal();
    });
}

async function earned12() {

    await farm.methods.getPooledBalance12(ethereum.selectedAddress).call().then(r => {
        perday12 = Number(web3.utils.fromWei(r)*6500/333333333333).toFixed(9);
        document.getElementById("earned12").innerHTML = perday12;

        earnedTotal();
    });
}

async function earnedTotal() {

    if(perday3 && perday6 && perday12){
        perdayTotal = parseFloat(perday3) + parseFloat(perday6) +parseFloat(perday12);
        document.getElementById("earnedTotal").innerHTML = perdayTotal.toFixed(9);
    }
}

async function stakedTotal() {

    if(staked3 && staked6 && staked12){
        stakeYouTotal = parseFloat(staked3) + parseFloat(staked6) +parseFloat(staked12);
        document.getElementById("staked_balance").innerHTML = stakeYouTotal.toFixed(9);
    }
}

async function maxdeposit() {
    document.getElementById("deposit_amount").value = balanceBPT;
}

async function maxwithdraw() {

    var timeToUnstake = $("#timeToUnstake").val();

    if(timeToUnstake == 3)
        document.getElementById("withdraw_amount").value = document.getElementById("staked_balance3").innerHTML;
    else if (timeToUnstake == 6)
        document.getElementById("withdraw_amount").value = document.getElementById("staked_balance6").innerHTML;
    else if (timeToUnstake == 12)
        document.getElementById("withdraw_amount").value =document.getElementById("staked_balance12").innerHTML;
    else
        alert("Invalid time to unstake value")
}








//https://github.com/ethereumjs/ethereumjs-units
//https://eth-converter.com/extended-converter.html
BigNumber.config({EXPONENTIAL_AT: 31})

var toEther = {
    wei: "0.000000000000000001",
    kwei: "0.000000000000001",
    mwei: "0.000000000001",
    gwei: "0.000000001",
    szabo: "0.000001",
    finney: "0.001",
    ether: "1",
    kether: "1000",
    mether: "1000000",
    gether: "1000000000",
    tether: "1000000000000"
};

var scale = {
    wei: "1000000000000000000",
    kwei: "1000000000000000",
    mwei: "1000000000000",
    gwei: "1000000000",
    szabo: "1000000",
    finney: "1000",
    ether: "1",
    kether: "0.001",
    mether: "0.000001",
    gether: "0.000000001",
    tether: "0.000000000001"
};



function update() {

    startWeb3();

}

function convert(e, t, n) {
    var i = new BigNumber(e);
    return (i = i.times(new BigNumber(toEther[t]))).times(new BigNumber(scale[n]));
}

//Format a bignumber to display correctly
function format(bignumber) {
    fmt = {
        decimalSeparator: '.',
        groupSeparator: ','
    }

    if (bignumber.isGreaterThanOrEqualTo(1000000)) {
        return bignumber.div(1000000).toFormat(2, fmt).replace('.00', '') + 'M';
    } else if (bignumber.isGreaterThanOrEqualTo(1000)) {
        return bignumber.div(1000).toFormat(2, fmt).replace('.00', '') + 'm';
    } else {
        return bignumber.toFormat(2, fmt).replace('.00', '');
    }
}


window.onload = update();
