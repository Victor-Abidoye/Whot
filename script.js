$('#staticBackdrop').modal('show')
// available card contains the number of cards available in the deck of card at any specific time
var availableCard = [
    {
        number: 1,
        shape: "circle"
    },
    {
        number: 1,
        shape: "triangle"
    },
    {
        number: 1,
        shape: "cross"
    },
    {
        number: 1,
        shape: "square"
    },
    {
        number: 1,
        shape: "star"
    },
    {
        number: 2,
        shape: "circle"
    },
    {
        number: 2,
        shape: "triangle"
    },
    {
        number: 2,
        shape: "cross"
    },
    {
        number: 2,
        shape: "square"
    },
    {
        number: 2,
        shape: "star"
    },
    {
        number: 3,
        shape: "circle"
    },
    {
        number: 3,
        shape: "triangle"
    },
    {
        number: 3,
        shape: "cross"
    },
    {
        number: 3,
        shape: "square"
    },
    {
        number: 3,
        shape: "star"
    },
    {
        number: 4,
        shape: "circle"
    },
    {
        number: 4,
        shape: "triangle"
    },
    {
        number: 4,
        shape: "star"
    },
    {
        number: 5,
        shape: "circle"
    },
    {
        number: 5,
        shape: "triangle"
    },
    {
        number: 5,
        shape: "cross"
    },
    {
        number: 5,
        shape: "square"
    },
    {
        number: 5,
        shape: "star"
    },
    {
        number: 7,
        shape: "circle"
    },
    {
        number: 7,
        shape: "triangle"
    },
    {
        number: 7,
        shape: "cross"
    },
    {
        number: 7,
        shape: "square"
    },
    {
        number: 7,
        shape: "star"
    },
    {
        number: 8,
        shape: "circle"
    },
    {
        number: 8,
        shape: "triangle"
    },
    {
        number: 8,
        shape: "star"
    },
    {
        number: 10,
        shape: "circle"
    },
    {
        number: 10,
        shape: "triangle"
    },
    {
        number: 10,
        shape: "cross"
    },
    {
        number: 10,
        shape: "square"
    },
    {
        number: 11,
        shape: "circle"
    },
    {
        number: 11,
        shape: "triangle"
    },
    {
        number: 11,
        shape: "cross"
    },
    {
        number: 11,
        shape: "square"
    },
    {
        number: 12,
        shape: "circle"
    },
    {
        number: 12,
        shape: "triangle"
    },
    {
        number: 13,
        shape: "circle"
    },
    {
        number: 13,
        shape: "triangle"
    },
    {
        number: 13,
        shape: "cross"
    },
    {
        number: 13,
        shape: "square"
    },
    {
        number: 14,
        shape: "circle"
    },
    {
        number: 14,
        shape: "triangle"
    },
    {
        number: 14,
        shape: "cross"
    },
    {
        number: 14,
        shape: "square"
    },
    {
        number: 20,
        shape: "whot"
    },
    {
        number: 20,
        shape: "whot"
    },
    {
        number: 20,
        shape: "whot"
    },
    {
        number: 20,
        shape: "whot"
    }
]
// Cards already played
var played = []
// current player 1 for player, 0 for computer
var currentPlayer = 1
// keeps record of the card the computer has
var computerCAS = []
// keeps count of the number of cards the player has
var playerCAS = 0
// creaes a copy of the total deck of cards to replaced when playing again
let myDeck = [...availableCard]
// fiveCount is set to false to show that a 5 card is not active
var fiveCount = false
// Holds the required whot shape by the computer of player
var whotShape;
// Holds the player's name
let playerName;
let backgroundSound = new Audio
// card intended to be played by the computer
var compCard;
// holds the game song to be played
var playerHasPlayed = false
// an array of messages to be displayed
var mes = ["Player 1's turn", "Computer is playing", "You picked a card", "You Picked ", "You picked ", "Computer picked a card", "computer picked ", "Computer picked ", "General market for you", "LAST CARD", "Computer picked a card"]

// The dashCards functions calls on the pick function 'number' number of times to dash out cards to a particulay player
function dashCards (number, player) {
    for (i = 0; i < number; i++) {
        pick(player)
    }
}


// The pick function picks a random card from the availableCard array
function pick (n) {
    if (availableCard.length == 0) {
        availableCard = played
        played = []
    }
        var randomCard  = Math.floor(Math.random() * availableCard.length)
        render(randomCard, n)
}


// The render function takes in the index number of the random generated number and the currentPlayer and display cards for each player
function render (re, z) {
    if (availableCard[re] == undefined) {
        pick(z)
    } else {
        let cardNum = availableCard[re]['number']
        let cardShape = availableCard[re]['shape']
        var div;
        var placer;
        var s = 'fas fa-square'
        var t = 'fas fa-play'
        var c = 'fas fa-circle'
        var st = 'fas fa-star'
        var w = 'fas fa-whot'
        var cr = 'fas fa-cross'
        var shapes;

        if (cardShape == 'square') {
            shapes = s
        } else if (cardShape == 'triangle') {
            shapes = t
        } else if (cardShape == 'circle') {
            shapes = c
        } else if (cardShape == 'star') {
            shapes = st
        } else if (cardShape == 'cross') {
            shapes = cr
        } else {
            shapes = w
        }

        if (z == 0) {
            placer = '#computer'
            computerCAS.push(availableCard[re])
            div = `<div class="ndraggable" style="height: 235px; width: 200px; background-color: white; position: relative; border-radius: 3%; overflow: hidden;">
                        <div style="height: 100%; width: 100%; margin: 0; background-color: #521717;" class="temp fas fa-whot">
                            <div style="position: relative; top: 28%;">
                                <p style="color:white" class="ones whot-letter">whot</p>
                                <p style="color: white" class="twos whot-letter">whot</p>
                            </div>
                        </div>
                        <div id="${cardShape + cardNum}" style="display: none;">
                            <p style="color:#521717; font-weight: bolder; font-size: xx-large;" class="num">${cardNum}</p><span
                                style="visibility: hidden;">${cardShape}</span>
                            <div style="position: absolute; top: 33px; left: 7px; "> <i class="${shapes}"
                                    style="font-size: 20px; color:#521717;"></i></div>
                            <div style="position: absolute; top: 70px; left: 50px; "> <i class="${shapes}"
                                    style="font-size: 100px; color:#521717;  "></i></div>
                            <div style="position: absolute; bottom: 32px; right: 12px; "> <i class="${shapes}"
                                    style="font-size: 20px; color:#521717; "></i></div>
                            <h3
                                style="color:#521717; font-weight: bolder; font-size: xx-large; transform: rotateY(180deg) rotateX(180deg); position: absolute; bottom: 0px; right: 5px; margin: 0;">
                                ${cardNum}</h3>
                        </div>
                    </div>`
        } else if (z == 1) {
            placer = '#player'
            playerCAS++
            div = `<div class="draggable my_draggable">
                <p style="color:#521717; font-weight: bolder; font-size: xx-large;" class="num">${cardNum}</p>
                <span style="visibility: hidden;">${cardShape}</span>
                <div style="position: absolute; top: 40px; left: 7px; " > <i class="${shapes}" style="font-size: 20px; color:#521717;"></i></div>
                <div  style="position: absolute; top: 70px; left: 50px; " > <i class="${shapes}" style="font-size: 100px; color:#521717;  "></i></div>
                <div style="position: absolute; bottom: 32px; right: 12px; " > <i class="${shapes}" style="font-size: 20px; color:#521717; "></i></div>
                <h3 style="color:#521717; font-weight: bolder; font-size: xx-large; transform: rotateY(180deg) rotateX(180deg); position: absolute; bottom: 0px; right: 5px; margin: 0;">${cardNum}</h3>
                </div>`
        } else {
            if (cardNum == 20) {
                dashCards(1)
                return
            }
            placer = '#middle'
            div = `<div id="droppable" style="height: 235px; width: 200px; background-color: white; position: relative; border-radius: 3%;">
            <p style="color:#521717; font-weight: bolder; font-size: xx-large;" class="num">${cardNum}</p><span style="visibility: hidden;">${cardShape}</span><div style="position: absolute; top: 33px; left: 7px; " > <i class="${shapes}" style="font-size: 20px; color:#521717;"></i></div><div  style="position: absolute; top: 70px; left: 50px; " > <i class="${shapes}" style="font-size: 100px; color:#521717;  "></i></div><div style="position: absolute; bottom: 32px; right: 12px; " > <i class="${shapes}" style="font-size: 20px; color:#521717; "></i></div><h3 style="color:#521717; font-weight: bolder; font-size: xx-large; transform: rotateY(180deg) rotateX(180deg); position: absolute; bottom: 0px; right: 5px; margin: 0;">${cardNum}</h3></div>`
        }

        if (z == 0) {
            var a = 'ndraggable'
        } else if (z == 1) {
            var a = 'draggable'
        }

        if (cardNum == 20 && z == 0) {
            div = `<div style="height: 235px; width: 200px; border: 0; position:relative; background-color: white; overflow: hidden;" class="card ${a} twe">
                        <div style="height: 100%; width: 100%; margin: 0; background-color: #521717;" class="temp fas fa-whot">
                            <div style="position: relative; top: 28%;">
                                <p style="color:white" class="ones whot-letter">whot</p>
                                <p style="color: white" class="twos whot-letter">whot</p>
                            </div>
                        </div>
                        <div id="${cardShape + cardNum}" style="display: none;">
                        <p></p>
                            <p style="color:#521717; font-weight: bolder; font-size: xx-large; margin-bottom: 0;" class="num">20</p>
                            <h4 style="margin-bottom: 0;">W <span style="color: white;">${cardShape}</span></h4>
                            <p id="one" class="whot-letter">whot</p><p class="whot-letter" id="two">whot</p>
                            <div style="position: absolute; bottom: 32px; right: 12px;"> <h4>W</h4></div>
                            <h3 style="color:#521717; font-weight: bolder; font-size: xx-large; transform: rotateY(180deg) rotateX(180deg); position: absolute; bottom: 0px; right: 5px; margin: 0;">20</h3>
                        </div>
                    </div>`
        } else if (cardNum == 20 && z == 1) {
            div = `<div class="card ${a} my_draggable twe">
                        <p style="color:#521717; font-weight: bolder; font-size: xx-large; margin-bottom: 0;" class="num">20</p>
                        <h4 style="margin-bottom: 0;">W <span style="color: white;">${cardShape}</span></h4>
                        <p id="one" class="whot-letter" >whot</p><p class="whot-letter" id="two" >whot</p>
                        <div style="position: absolute; bottom: 32px; right: 12px;"> <h4>W</h4></div>
                        <h3 style="color:#521717; font-weight: bolder; font-size: xx-large; transform: rotateY(180deg) rotateX(180deg); position: absolute; bottom: 0px; right: 5px; margin: 0;">20</h3>
                    </div>`
        }
        $(placer).append(div)

        $('.draggable').draggable({
            revert: true
        })

        availableCard.splice(re, 1)

        // Allow click and play for players on mobile
        if (placer == '#player') {
            let card = document.querySelectorAll('.draggable')
            card[card.length - 1].addEventListener('click', (e) => {
                const draggedNum = card[card.length - 1].querySelectorAll('.num')[0].innerHTML
                const draggedSha = card[card.length - 1].querySelector('span').innerHTML
                const v = dropCheck(draggedNum, draggedSha)
                if (playerHasPlayed) {
                    return
                } if (v == true) {
                    aud('play')
                    document.getElementById('droppable').innerHTML = card[card.length - 1].innerHTML
                    var obj = {
                        number: draggedNum,
                        shape: draggedSha
                    }
                    played.push(obj)
                    card[card.length - 1].remove()
                    playerTest(draggedNum)
                }
            })
        }

        if (playerCAS > 8) {
            let spacer = playerCAS - 6
            player.style.width = 100 + (spacer * 7) + "%";
           scroller.style.overflowX = "scroll"
        }
        else {
            document.querySelector("#player").style.width = "100%"
            scroller.style.overflowX = "hidden"
        }
    }
}

$('.draggable').draggable()


// monitors the card to be played by the current player
$('#droppable').droppable(
    {
        drop: function (event, ui) {
            var draggedNum = $(ui.draggable).find('p.num').text()
            var draggedSha = $(ui.draggable).find('span').text()
            var checker = dropCheck(draggedNum, draggedSha)
            if (playerHasPlayed) {
                return
            }
            if (checker == true) {
                aud('play')
                $(this).html($(ui.draggable.html()))

                var obj = {
                    number: draggedNum,
                    shape: draggedSha
                }
                played.push(obj)
                $(ui.draggable).css('display', 'none')

                playerTest(draggedNum)
            }
        }
    }
)

// controls the player actions with the card
let playerTest = (draggedNum) => {
    if (draggedNum == 2) {
        currentPlayer = 0
        dashCards(2, 0)
        $('h2').text(mes[6] + 2 + ' cards')
        playerCAS--
        if (playerCAS == 1) {
            $('h2').text(mes[9])
        }
        passTurn()
    } else if (draggedNum == 5) {
        playerHasPlayed = true
        playerCAS--
        if (playerCAS == 1) {
            $('h2').text(mes[9])
        }
        passTurn()
    } else if (draggedNum == 14) {
        fiveCount = false
        currentPlayer = 0
        aud('pick')
        dashCards(1, currentPlayer)
        $('h2').text(mes[10])
        playerHasPlayed = false
        playerCAS--
        if (playerCAS == 1) {
            $('h2').text(mes[9])
        }
        passTurn()
    } else if (draggedNum == 8) {
        fiveCount = false
        currentPlayer = 0
        playerHasPlayed = false
        playerCAS--
        if (playerCAS == 1) {
            $('h2').text(mes[9])
        }
        passTurn()
    } else if (draggedNum == 20) {
        fiveCount = false
        twenty()
    } else {
        fiveCount = false
        playerHasPlayed = true
        playerCAS--
        if (playerCAS == 1) {
            $('h2').text(mes[9])
        }
        passTurn()
    }
}

// Checks the card to be played with the one on ground
// Returns true if card can be succesfully played
// Retruns false if cards don't match
function dropCheck (p, span) {
    var dropNum = document.querySelector("#droppable").querySelectorAll(".num")[0].innerHTML
    var dropSha = $('#droppable').find('span').text()
        if (dropNum == 5 && fiveCount == true) {
        if (p == 5) {
            fiveCount = false
            return true
        } else {
            return false
        }
    } else if (dropNum == 20) {
        if (p == 20 || span == whotShape) {
                if (p == 5) {
                fiveCount = true
                return true
            } if (p == 20) {
                return true
            }
            return true
        } else {
            return false
        }
    } else if (p == dropNum || span == dropSha || p == 20) {
        if (p == 5) {
            fiveCount = true
        }
        return true
    } else {
        aud('error')
        return false
    }
}

// Varies the sound for each card action
function aud (key) {
    var song = document.createElement('audio')
    if (key == 'play') {
        song.setAttribute('src', 'sound/play.mp3')
    } else if (key == 'error') {
        song.setAttribute('src', 'sound/myerror.mp3')
    } else if ('pick') {
        song.setAttribute('src', 'sound/pick.mp3')
    }
    song.play()
}

// ON dropping a WHOT 20 card, the twenty panel is made visible for shape selection
function twenty () {
    $('#twenty').css('display', '')
    $('.top').css('display', 'none')
}

// Assigns the shape clicked by the player to whotShape
$('.twentyShape').on('click', function () {
    whotShape = $(this).attr('id')
    $('.top').css('display', '')
    $('#twenty').css('display', 'none')
    playerHasPlayed = true
    playerCAS--
    if (playerCAS == 1) {
        $('h2').text(mes[9])
    }
    passTurn()
})

//On click of the market card
$('#market').on('click', function () {
    if (currentPlayer == 1) {

            if (document.querySelector("#droppable").querySelectorAll(".num")[0].innerHTML == 5 && fiveCount == true) {
            aud('pick')
            dashCards(3, 1)
            $('h2').text(mes[4] + 3 + ' cards. You can play now')
            fiveCount = false
            playerHasPlayed = true
            passTurn()
        } else {
            aud('pick')
            dashCards(1, 1)
            $('h2').text(mes[2])
            playerHasPlayed = true
            passTurn()
        }
    }
})

// controls turn pass
function passTurn (whot) {
    if (playerCAS > 8) {
        let spacer = playerCAS - 6
        player.style.width = 100 + (spacer * 7) + "%";
        scroller.style.overflowX = "scroll"
    } else {
        document.querySelector("#player").style.width = "100%"
        scroller.style.overflowX = "hidden"
    }
    if (currentPlayer == 1) {
        currentPlayer = 0
        setTimeout(function () {
            control()
        }, 1000)
    } else {
        currentPlayer = 1
        control(whot)
    }
}

// Checks if there is a winner first else it continues the turn pass
function control (whot) {
    if (playerCAS == 0) {
        $('#staticBackdrop').modal('show')
        winner.hidden = false
        $('#winner').text("Player Won")
        Store.updateScore(playerName, playerName)
    } else if (computerCAS.length == 0) {
        $('#staticBackdrop').modal('show')
        $('#winner').text("Computer Won")
        winner.hidden = false
        Store.updateScore(playerName)
    } else {
        if (currentPlayer == 0) {
            $('h2').text(mes[1])
            setTimeout(function () {
                comp()
            }, 1000)
        } else {
            setTimeout(function () {
                if (whot == 'whot') {
                    $('h2').text('computer requests ' + whotShape)
                } else {
                    $('h2').text(mes[0])
                }
            }, 1000)
        }
    }
}

// Controls the computer's play operation
function comp () {
    // var p = $('#droppable').find('p').text()
    var p = document.querySelector("#droppable").querySelectorAll(".num")[0].innerHTML
    var span = $('#droppable').find('span').text()
    var seenCard = false

    for (let i = 0; i < computerCAS.length; i++) {
        var presentNum = computerCAS[i]['number']
        var presentSha = computerCAS[i]['shape']

        // If any card has the same shape, same number, or it's 20, allow the play of such card
        if (p == presentNum || span == presentSha || presentNum == 20 || (p == 20 && presentSha == whotShape)) {
            seenCard = true
            var possiblePlay = dropCheck(presentNum, presentSha)
            if (possiblePlay == true) {
                let ndraggable = document.querySelectorAll(".ndraggable")
                for (j = 0; j < ndraggable.length; j++) {
                    if (ndraggable[j].querySelectorAll(".num")[0].innerHTML == presentNum && ndraggable[j].querySelector("span").innerHTML == presentSha) {
                        compCard = ndraggable[j]

                        // Allow for the spinning of the card before playing
                        document.querySelector(`#${presentSha + presentNum}`).parentElement.classList.add('roll')
                        setTimeout(() => {
                            document.querySelector(`#${presentSha + presentNum}`).previousElementSibling.style.display = 'none'
                            document.querySelector(`#${presentSha + presentNum}`).style.display = ''
                        }, 500)

                        // Remove the card from the board
                        setTimeout(function () {
                            let twe
                            if (presentNum == 20) {
                                twe = document.querySelectorAll('.twe')
                                let tempo = twe[0]
                                for (let counter = 0; counter < tempo.children.length; counter++) {
                                    tempo.children[counter].style.visibility = 'visible'
                                }
                            }

                            setTimeout(function () {
                                $('#droppable').html(compCard.innerHTML)
                                aud('play')
                                var obj = {
                                    number: presentNum,
                                    shape: presentSha
                                }
                                played.push(obj)
                                if (presentNum == 20) {
                                    twe[0].remove()
                                } else {
                                    compCard.style.display = 'none'
                                }

                                if (presentNum == 2) {
                                    dashCards(2, 1)
                                    $('h2').text('Player picked 2 cards')
                                    currentPlayer = 1
                                    playerHasPlayed = true
                                    computerCAS.splice(i, 1)
                                    if (computerCAS.length == 1) {
                                        $('h2').text(mes[9])
                                    }
                                    passTurn()
                                } else if (presentNum == 5) {
                                    playerHasPlayed = false
                                    computerCAS.splice(i, 1)
                                    if (computerCAS.length == 1) {
                                        $('h2').text(mes[9])
                                    }
                                    passTurn()
                                } else if (presentNum == 14) {
                                    fiveCount = false
                                    currentPlayer = 1
                                    aud('pick')
                                    dashCards(1, 1)
                                    $('h2').text(mes[8])
                                    playerHasPlayed = false
                                    computerCAS.splice(i, 1)
                                    if (computerCAS.length == 1) {
                                        $('h2').text(mes[9])
                                    }
                                    passTurn()
                                } else if (presentNum == 8) {
                                    fiveCount = false
                                    currentPlayer = 1
                                    playerHasPlayed = false
                                    computerCAS.splice(i, 1)
                                    if (computerCAS.length == 1) {
                                        $('h2').text(mes[9])
                                    }
                                    passTurn()
                                } else if (presentNum == 20) {
                                    fiveCount = false
                                    computerCAS.splice(i, 1)
                                    if (computerCAS.length == 1) {
                                        $('h2').text(mes[9])
                                    }
                                    compTwenty()
                                } else {
                                    fiveCount = false
                                    playerHasPlayed = false
                                    computerCAS.splice(i, 1)
                                    if (computerCAS.length == 1) {
                                        $('h2').text(mes[9])
                                    }
                                    passTurn()
                                }
                            }, 1000)
                        }, 1000)
                        break
                    }
                }
                break
            } else {
                    if (p == 5 && fiveCount == true) {
                    setTimeout(function () {
                        aud('pick')
                        dashCards(3, currentPlayer)
                        $('h2').text(mes[7] + 3 + ' cards')
                        setTimeout(function () {
                            fiveCount = false
                            playerHasPlayed = false
                            passTurn()
                        }, 1000)
                    }, 1000)
                } else {
                    setTimeout(function () {
                        aud('pick')
                        dashCards(1, currentPlayer)
                        $('h2').text(mes[5])
                        setTimeout(function () {
                            playerHasPlayed = false
                            passTurn()
                        }, 1000)
                    }, 1000)
                }
            }
            break
        }
    }

    // If computer has no card to play then it picks 1, 2 or 3 cards accordingly
    if (!seenCard) {
            if (p == 5 && fiveCount == true) {
            aud('pick')
            dashCards(3, currentPlayer)
            $('h2').text(mes[7] + 3 + ' cards')
            setTimeout(function () {
                fiveCount = false
                playerHasPlayed = false
                passTurn()
            }, 1000)

        } else {
            setTimeout(function () {
                aud('pick')
                dashCards(1, currentPlayer)
                $('h2').text(mes[5])
                setTimeout(function () {
                    playerHasPlayed = false
                    passTurn()
                }, 1000)
            }, 1000)
        }
    }
}

// computer picks a random color ager playing a 20
function compTwenty () {
    var myShape = [];
    for (i = 0; i < computerCAS.length; i++){
        if (computerCAS[i].shape == 'whot') {
            continue
        }
        myShape.push(computerCAS[i].shape)
    }
    var random = Math.floor(Math.random() * myShape.length)
    whotShape = myShape[random]
    setTimeout(function () {
        $('h2').text('computer requests ' + whotShape)
        playerHasPlayed = false
        passTurn('whot')
    }, 2000)
}



function quit () {
    window.close()
}

// Fill in the datalist option, suggested names for previous players
let fillData = () => {
    historys = Store.getPlayer()
    if (historys == null) {
        return
    }
    for (player of historys) {
        let option = `<option value="${player.name}">${player.name}</option>`
        my_name.innerHTML += option
    }
}


// checks for new player and creates a record for the player
let scoreSetter = () => {
    const my_name = names.value
    playerName = my_name
    let historys = Store.getPlayer()
    if (historys == null) {
        historys = []
    }
    let index
    let player
    for ([index, player] of historys.entries()) {
        if (player.name == my_name || my_name == '') {
            return
        }
    }
    Store.setPlayer(my_name)
}

class Store {
    // Creates a new player object in the storage
    static setPlayer (player) {
        let historys = this.getPlayer()
        if (historys == null) {
            historys = []
        }
        if (player == '') {
            return
        }
        const new_player = {
            name: player,
            comp_score: 0,
            my_score: 0
        }
        historys.push(new_player)
        historys = JSON.stringify(historys)
        localStorage.setItem('historys', historys)
    }

    //Gets the array of objects containing all player's history
    static getPlayer () {
        let historys = localStorage.getItem('historys')
        historys = JSON.parse(historys)
        return historys
    }

    // Displays Each Score on the play board
    static setBoardHistory () {
        let historys = Store.getPlayer()
        if (historys == null) {
            return
        }
        let index
        let player
        for ([index, player] of historys.entries()) {
            let my_tr = document.createElement('tr')
            let my_td = document.createElement('td')
            let my_p = document.createElement('p')
            my_p.classList.add("text-white")
            let my_span = document.createElement('span')
            my_span.appendChild(document.createTextNode(`${player.name}`))
            my_p.appendChild(my_span)
            let my_text = document.createTextNode(` ${player.my_score} - ${player.comp_score} Computer `)
            my_p.appendChild(my_text)
            let my_btn = document.createElement('button')
            my_btn.classList.add("btn", "bg-danger", "del")
            let my_i = document.createElement('i')
            my_i.classList.add("far", "fa-trash-alt")
            my_btn.appendChild(my_i)
            my_p.appendChild(my_btn)
            my_td.appendChild(my_p)
            my_tr.appendChild(my_td)

            let body = document.querySelector('tbody')
            body.appendChild(my_tr)
        }
    }

    // removes a player's record from the localStorage
    static removePlayer (element) {
        let historys = Store.getPlayer()
        let index
        let player
        for ([index, player] of historys.entries()) {
            if (player.name == element) {
                historys.splice(index, 1)
            }
        }
        historys = JSON.stringify(historys)
        localStorage.setItem('historys', historys)
    }

    // Updates the new score for winning a game
    static updateScore (player, winner) {
        let historys = Store.getPlayer()
        let person;
        for (person of historys) {
            if (player == person.name) {
                if (winner == person.name) {
                    let x = person.my_score
                    person.my_score = x + 1
                } else {
                    let x = person.comp_score
                    person.comp_score = x + 1
                }
            }
        }
        historys = JSON.stringify(historys)
        localStorage.setItem('historys', historys)
    }
}

function musicControl() {
    if (document.querySelector("#songControl button i").classList.contains("fa-pause-circle")) {
        document.querySelector("#songControl button i").classList.remove("fa-pause-circle")
        document.querySelector("#songControl button i").classList.add("fa-play-circle")
        backgroundSound.pause()

    } else {
        backgroundSound.pause()
        backgroundSound.play()
        document.querySelector("#songControl button i").classList.add("fa-pause-circle")
        document.querySelector("#songControl button i").classList.remove("fa-play-circle")
    }
}

// Delete button to remove player's history from Table and localStorage
function setListener() {
    const del = document.querySelectorAll('.del')
    del.forEach((el) => {
        el.addEventListener("click", (e) => {
            Store.removePlayer(e.target.parentElement.parentElement.querySelector('span').innerHTML)
            e.target.parentElement.parentElement.querySelector('span').parentElement.parentElement.parentElement.remove()
        })
    })
}

function nnow () {
    backgroundSound.pause()
    document.querySelector("#songControl button i").classList.add("fa-pause-circle")
    document.querySelector("#songControl button i").classList.remove("fa-play-circle")
    document.querySelector('tbody').innerHTML = ''
    backgroundSound = document.createElement("audio")
    backgroundSound.src = "sound/back.mp3"
    backgroundSound.setAttribute("autoplay", true)
    backgroundSound.setAttribute("loop", true)
    scoreSetter()
    Store.setBoardHistory()
    setListener()
    playerHasPlayed = false
    played = []
    availableCard = [...myDeck]
    $('#computer').html('')
    $('#player').html('')
    $('#middle').html('')
    fiveCount = false
    computerCAS = []
    playerCAS = 0
    currentPlayer = 0
    dashCards(5, 0)
    dashCards(5, 1)
    dashCards(1)
    passTurn()
}
// nnow()

fillData()