let potteryKey = 1;

export const makePottery = (potteryShape, potteryweight, potteryheight) => {
    const pottery = {
        shape: potteryShape,
        weight: potteryweight,
        height: potteryheight,
        id: potteryKey
    }
    potteryKey++;
    return pottery
}
