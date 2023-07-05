import { Manifest } from 'https://deno.land/x/robo_arkiver@v0.4.15/mod.ts'
//import erc20 from './erc20.ts'
import { swapCamelotEnt } from './entities.ts'
import { onSwapCamelot } from './handlers.ts'
import camelotLP from './camelotLP.ts'

const manifest = new Manifest('weth-events')

manifest
  .addEntities([swapCamelotEnt])
  .addChain('arbitrum', { blockRange: 500n })
  .addContract('camelotLP', camelotLP)
  .addSources({ '0xBfCa4230115DE8341F3A3d5e8845fFb3337B2Be3': 60157878n })
  .addEventHandlers({ 'Swap': onSwapCamelot })

export default manifest.build()
