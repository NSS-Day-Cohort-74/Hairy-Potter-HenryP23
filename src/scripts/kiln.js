debugger
export const firePottery = (potteryPiece, kilnTemp) => {
    potteryPiece["fired"] = true
    potteryPiece["cracked"] = null
    //return potteryPiece
    if (kilnTemp > 2200) {
        potteryPiece.cracked = true;
    } else {
        potteryPiece.cracked = false;
    }
    return potteryPiece;
}
