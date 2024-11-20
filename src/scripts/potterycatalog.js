let forSale = []

export const toSellOrNotToSell = (potteryObj) => {
    if(potteryObj.weight >= 6 && potteryObj.cracked === false){
        potteryObj.price = 40;
        forSale.push(potteryObj)
    } else if (potteryObj.cracked === false){
        potteryObj.price = 20;
        forSale.push(potteryObj)
    }

    return potteryObj;
}

export const usePottery = () =>{
    const potteryForSale =  forSale.slice()
    return potteryForSale
}
