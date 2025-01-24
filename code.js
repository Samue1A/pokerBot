class Player {
    constructor(valueA, suitA, valueB, suitB) {
      this.valueA = valueA;
      this.suitA = suitA;
      this.valueB = valueB;
      this.suitB = suitB;
      this.cardA = [valueA, suitA]
      this.cardB = [valueB, this.cardB]
      this.stack = 10000
    }
    get cards() {
      return [this.cardA, this.cardB];
    }

    bet(money_in=0, AllIn=false) {
        if (AllIn || money_in > this.stack) {
            return this.bet(this.stack)
        }
        this.stack = this.stack - money_in
        return [money_in, this.stack];
        // returns bet amount, stack after bet
    }
    best_hand(nonHole) {
        const allCards = nonHole.concat(self.cards())
    }


  }
const a = new Player(10, 'H', 11, 'D');
console.log(a.bet(10000000))
console.log(a.cards)
  