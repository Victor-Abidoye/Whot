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
// twoCount and fiveCount are set to false to show that a 2 or 5 card is not active
var twoCount = false
var fiveCount = false
// Holds the required whot shape by the computer of player
var whotShape;
// Holds the player's name
let playerName;
// card intended to be played by the computer
var compcard;
// storage for the game somg
var backgroundSound;
// holds the game song to be played
var playerHasPlayed = false
// an array of messages to be displayed
var mes = ["Player 1's turn", "Computer is playing", "You picked a card", "You Picked ", "You picked ", "Computer picked a card", "computer picked ", "Computer picked ", "General market for you", "LAST CARD", "Computer picked a card"]

// The dashCards functions calls on the pick function 'number' number of times to dash out cards to a particulay player
function dashCards (number, player) {
    for (i = 0; i < number; i++) {
        pick(player)
    }
    // document.querySelectorAll('.draggable').forEach(element => {
    //     element.addEventListener('click', () => {
    //         // let draggedNum = element.querySelector('p').innerHTML
    //         // let draggedSha = element.querySelector('span').innerHTML
    //         // alert(draggedNum)
    //         // alert(draggedSha)
    //         console.log(element)
    //         alert()
    //     })
    // })
}
// allocates a card to the center
dashCards(1)

// The pick function picks a random card from the availableCard array
function pick (n) {
    if (availableCard.length == 0) {
        availableCard = played
        played = []
    }
        var r = Math.floor(Math.random() * availableCard.length)
        render(r, n)
}

function lock (orientation) {
    // Go into full screen first
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }

    // Then lock orientation
    screen.orientation.lock(orientation);
}

if (screen.width < 800) {
    lock('landscape')
}

// console.log(document.documentElement.requestFullscreen())

// The render function takes in the index number of the random generated number and the currentPlayer and display cards for each player
function render (re, z) {
    if (availableCard[re] == undefined) {
        pick(n)
    } else {
        let cardNum = availableCard[re]['number']
        let cardShape = availableCard[re]['shape']
        var div;
        var x;
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
            x = '#computer'
            computerCAS.push(availableCard[re])
            div = `<div class="ndraggable" style="height: 235px; width: 200px; background-color: white; position: relative; border-radius: 3%;">
                        <div style="height: 100%; width: 100%; margin: 0; background-color: #521717;" class="temp fas fa-whot">
                            <div style="position: relative; top: 28%;">
                                <h1 style="color:white" class="ones">whot</h1>
                                <h1 style="color: white" class="twos">whot</h1>
                            </div>
                        </div>
                        <div id="${cardShape + cardNum}" style="display: none;">
                            <p style="color:#521717; font-weight: bolder; font-size: xx-large;">${cardNum}</p><span
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
            x = '#player'
            playerCAS++
            div = `<div class="draggable" style="height: 235px; width: 200px; background-color: white; position: relative; border-radius: 3%;">
                <p style="color:#521717; font-weight: bolder; font-size: xx-large;">${cardNum}</p><span style="visibility: hidden;">${cardShape}</span>
                <div style="position: absolute; top: 33px; left: 7px; " > <i class="${shapes}" style="font-size: 20px; color:#521717;"></i></div>
                <div  style="position: absolute; top: 70px; left: 50px; " > <i class="${shapes}" style="font-size: 100px; color:#521717;  "></i></div>
                <div style="position: absolute; bottom: 32px; right: 12px; " > <i class="${shapes}" style="font-size: 20px; color:#521717; "></i></div>
                <h3 style="color:#521717; font-weight: bolder; font-size: xx-large; transform: rotateY(180deg) rotateX(180deg); position: absolute; bottom: 0px; right: 5px; margin: 0;">${cardNum}</h3>
                </div>`
        } else {
            if (cardNum == 20) {
                dashCards(1)
                return
            }
            x = '#middle'
            div = `<div id="droppable" style="height: 235px; width: 200px; background-color: white; position: relative; border-radius: 3%;"><p style="color:#521717; font-weight: bolder; font-size: xx-large;">${cardNum}</p><span style="visibility: hidden;">${cardShape}</span><div style="position: absolute; top: 33px; left: 7px; " > <i class="${shapes}" style="font-size: 20px; color:#521717;"></i></div><div  style="position: absolute; top: 70px; left: 50px; " > <i class="${shapes}" style="font-size: 100px; color:#521717;  "></i></div><div style="position: absolute; bottom: 32px; right: 12px; " > <i class="${shapes}" style="font-size: 20px; color:#521717; "></i></div><h3 style="color:#521717; font-weight: bolder; font-size: xx-large; transform: rotateY(180deg) rotateX(180deg); position: absolute; bottom: 0px; right: 5px; margin: 0;">${cardNum}</h3></div>`
        }

        if (z == 0) {
            var a = 'ndraggable'
        } else if (z == 1) {
            var a = 'draggable'
        }

        if (cardNum == 20 && z == 0) {
            div = `<div style="height: 235px; width: 200px; border: 0; position:relative; background-color: white;" class="card ${a} twe">
                        <div style="height: 100%; width: 100%; margin: 0; background-color: #521717;" class="temp fas fa-whot">
                            <div style="position: relative; top: 28%;">
                                <h1 style="color:white" class="ones">whot</h1>
                                <h1 style="color: white" class="twos">whot</h1>
                            </div>
                        </div>
                        <div id="${cardShape + cardNum}" style="display: none;">
                            <p style="color:#521717; font-weight: bolder; font-size: xx-large; margin-bottom: 0;">20</p>
                            <h4 style="margin-bottom: 0;">W <span style="color: white;">${cardShape}</span></h4>
                            <h1 id="one">whot</h1><h1 id="two">whot</h1>
                            <div style="position: absolute; bottom: 32px; right: 12px;"> <h4>W</h4></div>
                            <h3 style="color:#521717; font-weight: bolder; font-size: xx-large; transform: rotateY(180deg) rotateX(180deg); position: absolute; bottom: 0px; right: 5px; margin: 0;">20</h3>
                        </div>
                    </div>`
        } else if (cardNum == 20 && z == 1) {
            div = `<div style="height: 235px; width: 200px; background-color: white;" class="card ${a} twe">
                        <p style="color:#521717; font-weight: bolder; font-size: xx-large; margin-bottom: 0;">20</p>
                        <h4 style="margin-bottom: 0;">W <span style="color: white;">${cardShape}</span></h4>
                        <h1 id="one">whot</h1><h1 id="two">whot</h1>
                        <div style="position: absolute; bottom: 32px; right: 12px;"> <h4>W</h4></div>
                        <h3 style="color:#521717; font-weight: bolder; font-size: xx-large; transform: rotateY(180deg) rotateX(180deg); position: absolute; bottom: 0px; right: 5px; margin: 0;">20</h3>
                    </div>`
        }
        $(x).append(div)

        $('.draggable').draggable({
            revert: true
        })

        availableCard.splice(re, 1)

        // Allow click and play for players on mobile
        if (x == '#player') {
            let card = document.querySelectorAll('.draggable')
            card[card.length - 1].addEventListener('click', (e) => {
                const draggedNum = card[card.length - 1].querySelector('p').innerHTML
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
    }
}

$('.draggable').draggable()


// monitors the card to be played by the current player
$('#droppable').droppable(
    {
        drop: function (event, ui) {
            var draggedNum = $(ui.draggable).find('p').text()
            var draggedSha = $(ui.draggable).find('span').text()
            var v = dropCheck(draggedNum, draggedSha)
            if (playerHasPlayed) {
                return
            }
            if (v == true) {
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
        playerHasPlayed = true
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
        twoCount = false
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
        twoCount = false
        fiveCount = false
        currentPlayer = 0
        playerHasPlayed = false
        playerCAS--
        if (playerCAS == 1) {
            $('h2').text(mes[9])
        }
        passTurn()
    } else if (draggedNum == 20) {
        twoCount = false
        fiveCount = false
        twenty()
    } else {
        twoCount = false
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
    var dropNum = $('#droppable').find('p').text()
    var dropSha = $('#droppable').find('span').text()
    if (dropNum == 2 && twoCount == true) {
        if (p == 2) {
            twoCount = false
            return true
        } else {
            return false
        }
    } else if (dropNum == 5 && fiveCount == true) {
        if (p == 5) {
            fiveCount = false
            return true
        } else {
            return false
        }
    } else if (dropNum == 8) {
        return true
    } else if (dropNum == 20) {
        if (p == 20 || span == whotShape) {
            // whotShape = ''
            if (p == 2) {
                twoCount = true
                return true
            } else if (p == 5) {
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
        if (p == 2) {
            twoCount = true
        } else if (p == 5) {
            fiveCount = true
        }
        return true
    } else {
        aud('error')
        return false
    }
}

// Varies the sound for each card action
function aud (x) {
    var song = document.createElement('audio')
    if (x == 'play') {
        song.setAttribute('src', 'sound/play.mp3')
    } else if (x == 'error') {
        song.setAttribute('src', 'sound/myerror.mp3')
    } else if ('pick') {
        song.setAttribute('src', 'sound/pick.mp3')
    }
    song.play()
}

// ON dropping a WHOT 20 card, the twenty panel is made visible for shape selection
function twenty () {
    $('#twenty').css('visibility', 'visible')
}

// Assigns the shape clicked by the player to whotShape
$('.a').on('click', function () {
    whotShape = $(this).attr('id')
    $('#twenty').css('visibility', 'hidden')
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
        if ($('#droppable').find('p').text() == 2 && twoCount == true) {
            aud('pick')
            dashCards(2, 1)
            twoCount = false
            playerHasPlayed = true
            passTurn()
        } else if ($('#droppable').find('p').text() == 5 && fiveCount == true) {
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
function passTurn () {
    if (currentPlayer == 1) {
        currentPlayer = 0
        setTimeout(function () {
            control()
        }, 1000)
    } else {
        currentPlayer = 1
        control()
    }
}

// Checks if there is a winner first else it continues the turn pass
function control () {
    if (playerCAS == 0) {
        $('#staticBackdrop').modal('show')
        winner.hidden = false
        backgroundSound.pause()
        $('#winner').text("Player Won")
        Store.updateScore(playerName, playerName)
    } else if (computerCAS.length == 0) {
        $('#staticBackdrop').modal('show')
        $('#winner').text("Computer Won")
        backgroundSound.pause()
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
                $('h2').text(mes[0])
            }, 1000)
        }
    }
}

// Controls the computer's play operation
function comp () {
    var p = $('#droppable').find('p').text()
    var span = $('#droppable').find('span').text()

    var x = false

    for (let i = 0; i < computerCAS.length; i++) {
        var presentNum = computerCAS[i]['number']
        var presentSha = computerCAS[i]['shape']

        // If any card has the same shape, same number, or it's 20, allow the play of such card
        if (p == presentNum || span == presentSha || presentNum == 20 || (p == 20 && presentSha == whotShape)) {
            x = true
            var y = dropCheck(presentNum, presentSha)
            if (y == true) {
                $('.ndraggable').each(function () {
                    if ($(this).find('p').text() == presentNum && $(this).find('span').text() == presentSha) {
                        compCard = $(this)
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
                                $('#droppable').html(compCard.html())
                                aud('play')
                                var obj = {
                                    number: presentNum,
                                    shape: presentSha
                                }
                                played.push(obj)
                                if (presentNum == 20) {
                                    twe[0].remove()
                                } else {
                                    compCard.css('display', 'none')
                                }
                                if (presentNum == 2) {
                                    playerHasPlayed = false
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
                                    twoCount = false
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
                                    twoCount = false
                                    fiveCount = false
                                    currentPlayer = 1
                                    playerHasPlayed = false
                                    computerCAS.splice(i, 1)
                                    if (computerCAS.length == 1) {
                                        $('h2').text(mes[9])
                                    }
                                    passTurn()
                                } else if (presentNum == 20) {
                                    twoCount = false
                                    fiveCount = false
                                    computerCAS.splice(i, 1)
                                    if (computerCAS.length == 1) {
                                        $('h2').text(mes[9])
                                    }
                                    compTwenty()
                                } else {
                                    twoCount = false
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
                        return false
                    }
                })
            } else {
                // If the computer can play this card but there is an active pic 2 or pick 3 card
                if (p == 2 && twoCount == true) {
                    setTimeout(function () {
                        aud('pick')
                        dashCards(2, currentPlayer)
                        $('h2').text(mes[6] + 2 + ' cards')
                        setTimeout(function () {
                            twoCount = false
                            playerHasPlayed = false
                            passTurn()
                        }, 1000)
                    }, 1000)
                } else if (p == 5 && fiveCount == true) {
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
    if (!x) {
        if (p == 2 && twoCount == true) {
            aud('pick')
            dashCards(2, currentPlayer)
            $('h2').text(mes[6] + 2 + ' cards')
            setTimeout(function () {
                twoCount = false
                playerHasPlayed = false
                passTurn()
            }, 1000)

        } else if (p == 5 && fiveCount == true) {
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
    var myShape = ['square', 'circle', 'cross', 'triangle', 'star']
    var random = Math.floor(Math.random() * 5)
    whotShape = myShape[random]
    setTimeout(function () {
        $('h2').text('computer requests ' + whotShape)
        playerHasPlayed = false
        passTurn()
    }, 2000)
}

function nnow () {
    document.querySelector('tbody').innerHTML = ''
    scoreSetter()
    Store.setBoardHistory()
    setListener()
    backgroundSound = document.createElement('audio')
    backgroundSound.src = 'sound/back.mp3'
    backgroundSound.play()
    playerHasPlayed = false
    played = []
    availableCard = [...myDeck]
    $('#computer').html('')
    $('#player').html('')
    twoCount = false
    fiveCount = false
    computerCAS = []
    playerCAS = 0
    currentPlayer = 0
    dashCards(5, 0)
    dashCards(5, 1)
    passTurn()
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

fillData()