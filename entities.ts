import { createEntity } from 'https://deno.land/x/robo_arkiver@v0.4.15/mod.ts'

export const camelotSwaps = createEntity('camelotSwaps', {
  block: { type: Number, index: true },
  from: String,
  to: String,
  amount0In: Number,
  amount0Out: Number,
  amount1In: Number,
  amount1Out: Number,
})


// @note: "Index: true" enhances graphql queries
/*
export const swapUniV3 = createEntity('swapUniV3', {
  block: { type: Number, index: true },
  from: String,
  to: String,
  amount0: Number,
  amount1: Number,
})
*/

