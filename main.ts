basic.showLeds(`
    # . # . .
    # # # . .
    # . # . #
    . . . # .
    . . # . .
    `)
basic.pause(1000)
basic.clearScreen()
let プレイヤー = game.createSprite(2, 2)
let 敵 = game.createSprite(randint(0, 4), randint(0, 4))
game.setScore(0)
let ゲームオーバー = false
basic.forever(function () {
    if (input.rotation(Rotation.Roll) >= 0) {
        プレイヤー.change(LedSpriteProperty.X, 1)
    } else {
        プレイヤー.change(LedSpriteProperty.X, -1)
        if (input.rotation(Rotation.Pitch) >= 0) {
            プレイヤー.change(LedSpriteProperty.Y, 1)
        } else {
            プレイヤー.change(LedSpriteProperty.Y, -1)
        }
    }
    basic.pause(100)
})
basic.forever(function () {
    敵.change(LedSpriteProperty.X, randint(-1, 1))
    敵.change(LedSpriteProperty.Y, randint(-1, 1))
    if (ゲームオーバー == false) {
        game.addScore(1)
    }
    basic.pause(1000)
})
basic.forever(function () {
    if (プレイヤー.isTouching(敵)) {
        ゲームオーバー = true
        basic.showNumber(game.score())
        game.gameOver()
        game.pause()
    }
})
