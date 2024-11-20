// Imports go first
import { makePottery } from "./potterywheel.js"
import {firePottery} from "./kiln.js"
import {toSellOrNotToSell, usePottery} from "./potterycatalog.js"
import { potteryList } from "./potterylist.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 4)
let bowl= makePottery("bowl", 4, 6)
let vase = makePottery("vase", 7, 10)
let plate = makePottery("plate", 10, 1)
let jar = makePottery("jar", 4, 12)
// Fire each piece of pottery in the kiln
firePottery(mug, 2300)
firePottery(bowl, 2000)
firePottery(vase, 1900)
firePottery(plate, 800)
firePottery(jar, 4000)
// Determine which ones should be sold, and their price
toSellOrNotToSell(mug)
toSellOrNotToSell(bowl)
toSellOrNotToSell(vase)
toSellOrNotToSell(plate)
let allPottery = usePottery()
console.log(usePottery())
// Invoke the component function that renders the HTML list
document.querySelector(".potteryList").innerHTML = potteryList(allPottery)
