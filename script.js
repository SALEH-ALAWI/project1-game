console.log("JS working")

const cards = document.querySelectorAll(".card")
let cardFlipped = false
let cardOne, cardTwo
let lockBoard = false

const flipCard = (event) => {
  if (lockBoard) return
  const clickedCard = event.currentTarget

  if (clickedCard === cardOne) return

  clickedCard.classList.add("flip")

  if (!cardFlipped) {
    cardFlipped = true
    cardOne = clickedCard
    return
  }

  cardTwo = clickedCard
  checkForMatch()
}

const checkForMatch = () => {
  const Match = cardOne === cardTwo

  Match ? disableCards() : unflipCards()
}

const disableCards = () => {
  cardOne.removeEventListener("click", flipCard)
  cardTwo.removeEventListener("click", flipCard)
  resetBoard()
}

const unflipCards = () => {
  lockBoard = true
  setTimeout(() => {
    cardOne.classList.remove("flip")
    cardTwo.classList.remove("flip")
    resetBoard()
  }, 500)
}

const resetBoard = () => {
  ;[cardFlipped, lockBoard] = [false, false]
  ;[cardOne, cardTwo] = [null, null]
}

cards.forEach((card) => card.addEventListener("click", flipCard))
