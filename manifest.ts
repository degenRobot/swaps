import { Manifest } from 'https://deno.land/x/robo_arkiver@v0.4.15/mod.ts'
import erc20 from './erc20.ts'
import { Approval, Transfer } from './entities.ts'
import { onApproval, onTransfer } from './handlers.ts'
import camelotLP from './camelotLP.ts'

const manifest = new Manifest('weth-events')

manifest
  .addEntities([Transfer, Approval])
  .addChain('arbitrum', { blockRange: 500n })
  .addContract('camelotLP', camelotLP)
  .addSources({ '0xBfCa4230115DE8341F3A3d5e8845fFb3337B2Be3': 60157878n })
  .addEventHandlers({ 'Transfer': onTransfer })

export default manifest.build()
