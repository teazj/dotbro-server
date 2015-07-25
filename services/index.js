/**
 * Created by trigged on 7/25/15.
 */

const WYMusic = require("./wymusic")
  , BaseMusic = require("./music")
  , Song = require("../models/song")
const hanlders = [WYMusic]

function *getHnadler(url,orderer) {
  let hand = hanlders.find(function (handler) {
    return handler.match(url,orderer)
  })
  if (hand) {
    return new Song(yield hand.analysis(url,orderer))
  } else {
    throw BaseMusic.SupportError();
  }
}
module.exports = getHnadler;