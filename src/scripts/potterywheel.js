let potteryKey = 1;

export const makePottery = (shape, weight, height) => {
    const pottery = {
        potteryShape: shape,
        potteryweight: weight,
        potteryheight: height,
        potteryid: potteryKey
    }
    potteryKey++;
    return pottery;
}
