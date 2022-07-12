document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'Quynh1',
      img: 'images/Quynh1.jpg'  
    },
    {
      name: '0btten',
      img: 'images/Khongbtten.jpg'  
    },
    {
      name: 'Quynh',
      img: 'images/Quynh.jpg'  
    },
    {
      name: 'Phamdang',
      img: 'images/Phamdang.jpg'  
    },
    {
      name: 'Phucthinh',
      img: 'images/Phucthinh.jpg'  
    },
    {
      name: 'Xuyen1',
      img: 'images/Xuyen1.jpg'  
    },
    {
      name: 'NhuAnh1',
      img: 'images/NhuAnh1.jpg'
    },
    {
      name: 'Phat',
      img: 'images/Phat.jpg'
    },
    {
      name: 'NhuAnh',
      img: 'images/NhuAnh.jpg'
    },
    {
      name: 'Hoai Thu',
      img: 'images/HoaiThu.jpg'
    },
//     {
//       name: 'Trong',
//       img: 'images/CaoTrong1.jpg'
//     },
    {
      name: 'fries',
      img: 'images/ChauVanNghi.jpg'
    },
    {
      name: 'cheeseburger',
      img: 'images/CaoTrong.jpg'
    },
    {
      name: 'ice-cream',
      img: 'images/TrungHau.jpg'
    },
    {
      name: 'pizza',
      img: 'images/DiemXuyen.jpg'
    },
    {
      name: 'milkshake',
      img: 'images/LeNgan.jpg'
    },
    {
      name: 'hotdog',
      img: 'images/DuyPhuc.jpg'
    },
    {
      name: 'Quynh1',
      img: 'images/Quynh1.jpg'  
    },
    {
      name: '0btten',
      img: 'images/Khongbtten.jpg'  
    },
    {
      name: 'Quynh',
      img: 'images/Quynh.jpg'  
    },
    {
      name: 'Phamdang',
      img: 'images/Phamdang.jpg'  
    },
    {
      name: 'Phucthinh',
      img: 'images/Phucthinh.jpg'  
    },
    {
      name: 'Xuyen1',
      img: 'images/Xuyen1.jpg'  
    },
    {
      name: 'NhuAnh1',
      img: 'images/NhuAnh1.jpg'
    },
    {
      name: 'Phat',
      img: 'images/Phat.jpg'
    },
    {
      name: 'NhuAnh',
      img: 'images/NhuAnh.jpg'
    },
    {
      name: 'Hoai Thu',
      img: 'images/HoaiThu.jpg'
    },
//     {
//       name: 'Trong',
//       img: 'images/CaoTrong1.jpg'
//     },
    {
      name: 'fries',
      img: 'images/ChauVanNghi.jpg'
     },
    {
      name: 'cheeseburger',
      img: 'images/CaoTrong.jpg'
    },
    {
      name: 'ice-cream',
      img: 'images/TrungHau.jpg'
    },
    {
      name: 'pizza',
      img: 'images/DiemXuyen.jpg'
    },
    {
      name: 'milkshake',
      img: 'images/LeNgan.jpg'
    },
    {
      name: 'hotdog',
      img: 'images/DuyPhuc.jpg'
    }
  ]
  cardArray.sort(() => 0.5 - Math.random())
  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }
  
  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Không được nhấn 1 ảnh 2 lần đấu nhé!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Adu hay đấy')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sai rồi nhé hihi')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Không được nhấn 1 ảnh 2 lần đấu nhé!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
