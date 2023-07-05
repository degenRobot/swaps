import { formatUnits } from 'npm:viem'
import { type EventHandlerFor } from 'https://deno.land/x/robo_arkiver@v0.4.15/mod.ts'
import { camelotSwaps } from './entities.ts'
import camelotLP from './camelotLP.ts'

// Alternatively, you can pull this from the chain
const TOKEN_0_DECIMALS = 18
const TOKEN_1_DECIMALS = 18


// deno-lint-ignore require-await
export const onSwapCamelot: EventHandlerFor<typeof camelotLP, 'Swap'> = async (
  { event, client, store },
) => {
  //console.log(event.args)
  const { sender, to, amount0In, amount1In, amount0Out, amount1Out} = event.args;
  const block = Number(event.blockNumber)
  const record = new camelotSwaps({
    block,
    sender,
    to,
    amount0In : formatUnits(amount0In, TOKEN_0_DECIMALS),
    amount0Out : formatUnits(amount0Out, TOKEN_0_DECIMALS),
    amount1In : formatUnits(amount1In, TOKEN_1_DECIMALS),
    amount1Out : formatUnits(amount1Out,TOKEN_1_DECIMALS),  

  })
  record.save()
}

