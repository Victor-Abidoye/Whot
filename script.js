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

let myDeck = [...availableCard]
var twoCount = false
var fiveCount = false
var whotShape;

// current player 1 for player, 0 for computer
var currentPlayer = 1

// Cards already played
var played = []

var computerCAS = []
var playerCAS = 0


// The dashCards functions calls on the pick function 'number' number of times to dash out cards to a particulay player
function dashCards (number, player) {
    for (i = 0; i < number; i++) {
        pick(player)
    }
}

dashCards(1)

// The pick function picks a random card from the availableCard array
function pick (n) {
    if (availableCard.length == 0) {
        availableCard = played
        played = []
    } else {
        var r = Math.floor(Math.random() * availableCard.length)
        render(r, n)
    }
}

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
    }
}
$('.draggable').draggable()

var playerHasPlayed = false

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
        }
    }
)



function dropCheck (p, span) {
    var dropNum = $('#droppable').find('p').text()
    var dropSha = $('#droppable').find('span').text()
    if (dropNum == 2 && twoCount == true) {
        if (p == 2) {
            twoCount = false
            console.log('pick 2 is cancelled')
            return true
        } else {
            return false
        }
    } else if (dropNum == 5 && fiveCount == true) {
        if (p == 5) {
            fiveCount = false
            console.log('pick 3 is cancelled')
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
        console.log('xxx')
        if (p == 2) {
            console.log('ddd')
            twoCount = true
            console.log("one")
        } else if (p == 5) {
            console.log('eee')
            fiveCount = true
            console.log("two")
        }
        return true
    } else {
        aud('error')
        return false
    }
}

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

function twenty () {
    $('#twenty').css('visibility', 'visible')

}

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

$('#market').on('click', function () {
    if (currentPlayer == 1) {
        if ($('#droppable').find('p').text() == 2 && twoCount == true) {
            aud('pick')
            dashCards(2, 1)
            // $('h2').text(mes[3] + 2 + ' cards. You can play now')
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

function passTurn () {
    console.log(computerCAS)
    if (currentPlayer == 1) {
        currentPlayer = 0
        setTimeout(function () {
            control()
        }, 1000)
    } else {
        // console.log(computerCAS)
        console.log(computerCAS.length)
        console.log(playerCAS)
        currentPlayer = 1
        control()
    }

}

var mes = ["Player 1's turn", "Computer is playing", "You picked a card", "You Picked ", "You picked ", "Computer picked a card", "computer picked ", "Computer picked ", "General market for you", "LAST CARD", "Computer picked a card"]

function control () {
    if (playerCAS == 0) {
        $('#staticBackdrop').modal('show')
        winner.hidden = false
        $('#winner').text("Player Won")
        // load(0)
    } else if (computerCAS.length == 0) {
        $('#staticBackdrop').modal('show')
        $('#winner').text("Computer Won")
        winner.hidden = false
        // load(1)
    } else {
        if (currentPlayer == 0) {
            $('h2').text(mes[1])
            setTimeout(function () {
                comp()
                // console.log(computerCAS.length)
            }, 1000)
        } else {
            // console.log(computerCAS.length)
            setTimeout(function () {
                $('h2').text(mes[0])
            }, 1000)
        }
    }

}


var scoreArray = []
var playerName = names.value

function load (x) {
    localStorage.setItem(playerName,)
}

var compcard;
function comp () {
    var p = $('#droppable').find('p').text()
    var span = $('#droppable').find('span').text()

    var x = false

    for (let i = 0; i < computerCAS.length; i++) {
        var presentNum = computerCAS[i]['number']
        var presentSha = computerCAS[i]['shape']


        if (p == presentNum || span == presentSha || presentNum == 20 || (p == 20 && presentSha == whotShape)) {
            x = true
            var y = dropCheck(presentNum, presentSha)
            if (y == true) {
                $('.ndraggable').each(function () {
                    // console.log('a')
                    if ($(this).find('p').text() == presentNum && $(this).find('span').text() == presentSha) {
                        console.log(presentSha, presentNum)
                        compCard = $(this)
                        document.querySelector(`#${presentSha + presentNum}`).parentElement.classList.add('roll')
                        setTimeout(() => {
                            document.querySelector(`#${presentSha + presentNum}`).previousElementSibling.style.display = 'none'
                            document.querySelector(`#${presentSha + presentNum}`).style.display = ''
                        }, 500)
                        // compcard.addClass('roll')
                        setTimeout(function () {
                            let twe
                            if (presentNum == 20) {
                                twe = document.querySelectorAll('.twe')
                                let tempo = twe[0]
                                for (let counter = 0; counter < tempo.children.length; counter++) {
                                    tempo.children[counter].style.visibility = 'visible'
                                }
                            }
                            // console.log(document.querySelector(`#${presentSha + presentNum}`).nextElementSibling)

                            setTimeout(function () {
                                $('#droppable').html(compCard.html())
                                aud('play')
                                var obj = {
                                    number: presentNum,
                                    shape: presentSha
                                }
                                played.push(obj)
                                console.log(compCard)
                                if (presentNum == 20) {
                                    // let twe = document.querySelectorAll('.twe')
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
            console.log('did computer pick a card')
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

function compTwenty () {
    var myShape = ['square', 'circle', 'cross', 'triangle', 'star']
    var random = Math.floor(Math.random() * 5)
    whotShape = myShape[random]
    setTimeout(function () {
        $('h2').text('computer requests ' + whotShape)
        playerHasPlayed = false
        passTurn()
        // return false
    }, 2000)
}

function nnow () {
    // scoreSetter()
    Store.setPlayer(names.value)
    Store.setBoardHistory()
    // backgroundSound.pause()
    var backgroundSound = document.createElement('audio')
    backgroundSound.src = 'sound/back.mp3'
    // backgroundSound.play()
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
    // dashCards(1)
    passTurn()
    // console.log(computerCAS)
}

function quit () {
    window.close()
}



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

let scoreSetter = () => {
    const my_name = names.value
    let historys = Store.getPlayer()
    if (historys == null) {
        historys = []
    }
    let index
    let player
    for ([index, player] of historys.entries()) {
        if (player.name == my_name && my_name != '') {
            return
        }
    }
    Store.setPlayer(my_name)
}

class Store {
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
        console.log(historys)
    }

    static getPlayer () {
        let historys = localStorage.getItem('historys')
        historys = JSON.parse(historys)
        return historys
    }

    static setBoardHistory () {
        let historys = Store.getPlayer()
        if (historys == null) {
            return
        }
        let index
        let player
        for ([index, player] of historys.entries()) {
            let tr = `
            <tr>
                <td class="text-white">
                    <span>${player.name}</span>
                    ${player.my_score} - ${player.comp_score} Computer
                    <button type="button" class="btn bg-danger del" id="dee">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
            `
            let body = document.querySelector('tbody')
            body.innerHTML += tr
        }
    }

    static removePlayer (element) {
        const my_name = element.document.querySelector('span').innerHTML
        let historys = Store.getPlayer()
        let index
        let player
        for ([index, player] of historys.entries()) {
            if (player.name == my_name) {
                historys = historys.splice(index, 1)
            }
        }
        historys = JSON.stringify(historys)
        localStorage.setItem(historys)
    }
}

function dee(event) {
    console.log(event)
}

document.querySelector('#dee').addEventListener('click', alert('ggg'))

fillData()