namespace SpriteKind {
    export const Sign1 = SpriteKind.create()
    export const Sign2 = SpriteKind.create()
    export const Buzzer = SpriteKind.create()
    export const AOEattack = SpriteKind.create()
}
namespace StatusBarKind {
    export const Buzzerhealth = StatusBarKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Attacking = true
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . . f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c d . . . . . . 
            . . . . . . c c c 1 d . . . . . 
            . . . . . . . f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c d d d . . . . 
            . . . . . . c c c 1 1 1 . . . . 
            . . . . . . c c c 1 1 . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . . f . . . . . . . . 
            `],
        100,
        false
        )
    } else if (controller.left.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c f c . . . . . . 
            . . . . . . . c f c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . . d . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c f c . . . . . . 
            . . . . . . . d c c . . . . . . 
            . . . . . . d 1 1 c . . . . . . 
            . . . . . d 1 1 c c . . . . . . 
            . . . . . . 1 . f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . d d d f f c . . . . . . 
            . . . . 1 1 1 c c c . . . . . . 
            . . . . . 1 1 1 c c . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . . f . . . . . . . 
            `],
        100,
        false
        )
    } else if (controller.down.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c f f d d d . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . . f . f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c f . . . . . 
            . . . . . c c c c c . f . 1 . . 
            . . . . . c c c c c . . d 1 1 . 
            . . . . . c c c c c . . . d 1 1 
            . . . . . . f . f . . . . . d . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c f . . . . . 
            . . . . . c c c c c f . 1 . . . 
            . . . . . c c c c c d 1 1 . . . 
            . . . . . c c c c c d 1 1 . . . 
            . . . . . . f . f . d 1 . . . . 
            `],
        100,
        false
        )
    } else if (controller.up.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . . c c c c c . . . . . 
            . d d d f f c c c c c . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . . . f . f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . f c c c c c . . . . . 
            . . . 1 f . c c c c c . . . . . 
            . . 1 d . . c c c c c . . . . . 
            . 1 d . . . c c c c c . . . . . 
            . d . . . . . f . f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . f c c c c c . . . . . 
            . . . . . f c c c c c . . . . . 
            . . . . 1 d c c c c c . . . . . 
            . . . 1 1 d c c c c c . . . . . 
            . . . 1 1 d . f . f . . . . . . 
            `],
        100,
        false
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c f f d d d . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . . f . f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c f . . . . . 
            . . . . . c c c c c . f 1 . . . 
            . . . . . c c c c c . . d 1 . . 
            . . . . . c c c c c . . . d 1 . 
            . . . . . . f . f . . . . . d . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c f . . . . . 
            . . . . . c c c c c f . . . . . 
            . . . . . c c c c c d 1 . . . . 
            . . . . . c c c c c d 1 1 . . . 
            . . . . . . f . f . d 1 1 . . . 
            `],
        100,
        false
        )
    }
    timer.after(1000, function () {
        Attacking = false
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sign2, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        story.printDialog("Press \"A\" to interact with things, press \"B\" to attack, and \"menu\" to escape battles*", 90, 40, 60, 160)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sign1, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        story.printDialog("You are in the gloom lands, a place right next to hallownest, this place has the lushest greenery in the world!   -sign", 90, 40, 60, 160)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile17`) || (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile17`) || (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile17`) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile17`)))) {
        if (Math.percentChance(25)) {
            story.spriteSayText(mySprite, "A yummy apple!")
            statusbar.value += 50
            statusbar2.value += 50
        } else if (Math.percentChance(20)) {
            if (Math.percentChance(20)) {
                Gloom_husk_battle()
            } else {
                Buzzerbattle()
            }
        } else {
            story.spriteSayText(mySprite, "Just a tree")
        }
    }
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile5`) || (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile5`) || (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile5`) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile5`)))) {
        if (Math.percentChance(25)) {
            if (Math.percentChance(20)) {
                Gloom_husk_battle()
            } else {
                Buzzerbattle()
            }
        } else {
            story.spriteSayText(mySprite, "Just a berry bush")
        }
    }
})
function Gloom_husk_battle () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 1 1 1 1 . . . 
        . . . . . . . . 1 1 1 1 1 1 . . 
        . . . . . c c c 1 1 f f 1 1 . . 
        . . . . c c c c 1 1 f 4 1 1 . . 
        . . . c c c c c c 1 1 1 1 1 . . 
        . . . c c c c c c c 1 1 1 . . . 
        . . . c c c c c b b . . . . . . 
        . . . c c c c b d d b b b . . . 
        . . . c c b b d d b . . . . . . 
        . . . c b b d d b b . . . . . . 
        . . . b b d d b b d . . . . . . 
        . . . . . b b b d . . . . . . . 
        . . . . . . b . b . . . . . . . 
        `, SpriteKind.Enemy)
    Myenimy += 1
    mySprite2.setPosition(mySprite.x + randint(-10, 10), mySprite.y + randint(-10, 10))
    Is_in_battle = true
    characterAnimations.runFrames(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 1 1 1 1 . . . 
        . . . . . . . 1 1 1 1 1 1 1 . . 
        . . . . . . . 1 1 1 f f 1 1 . . 
        . . . c c c c 1 1 1 f 4 1 1 . . 
        . . c c c c c 1 1 1 1 1 1 1 . . 
        . c c c c c c c 1 1 1 1 1 1 . . 
        . c c c c c c c c 1 1 1 1 . . . 
        . c c c c c c c c c c 1 . . . . 
        . c c c c c c b b b b . . . . . 
        . c c c c b b b b b b b b . . . 
        . c c c b b b b d d d . . . . . 
        . c c c b b b d d b b . . . . . 
        . c c b b d d d b b . . . . . . 
        . . c b b d b b b . . . . . . . 
        . . . . . . . b . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 1 1 1 1 . . . 
        . . . . . . . 1 1 1 1 1 1 1 . . 
        . . . . . . . 1 1 1 f f 1 1 . . 
        . . . c c c c 1 1 1 f 4 1 1 . . 
        . . c c c c c 1 1 1 1 1 1 1 . . 
        . c c c c c c c 1 1 1 1 1 1 . . 
        . c c c c c c c c 1 1 1 1 . . . 
        . c c c c c c c c c c 1 . . . . 
        . c c c c c c b b b b . . . . . 
        . c c c c b b b b b b b b . . . 
        . c c c b b b b d d d . . . . . 
        . c c c b b b d d b b . . . . . 
        . c c b b d d d b b . . . . . . 
        . . c b b d b b b . . . . . . . 
        . . . . b . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.runFrames(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 . . . . . . . 
        . . 1 1 1 1 1 1 1 . . . . . . . 
        . . 1 1 f f 1 1 1 . . . . . . . 
        . . 1 1 4 f 1 1 1 c c c c . . . 
        . . 1 1 1 1 1 1 1 c c c c c . . 
        . . 1 1 1 1 1 1 c c c c c c c . 
        . . . 1 1 1 1 c c c c c c c c . 
        . . . . 1 c c c c c c c c c c . 
        . . . . . b b b b c c c c c c . 
        . . . b b b b b b b b c c c c . 
        . . . . . d d d b b b b c c c . 
        . . . . . b b d d b b b c c c . 
        . . . . . . b b d d d b b c c . 
        . . . . . . . b b b d b b c . . 
        . . . . . . . . . . . b . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 . . . . . . . 
        . . 1 1 1 1 1 1 1 . . . . . . . 
        . . 1 1 f f 1 1 1 . . . . . . . 
        . . 1 1 4 f 1 1 1 c c c c . . . 
        . . 1 1 1 1 1 1 1 c c c c c . . 
        . . 1 1 1 1 1 1 c c c c c c c . 
        . . . 1 1 1 1 c c c c c c c c . 
        . . . . 1 c c c c c c c c c c . 
        . . . . . b b b b c c c c c c . 
        . . . b b b b b b b b c c c c . 
        . . . . . d d d b b b b c c c . 
        . . . . . b b d d b b b c c c . 
        . . . . . . b b d d d b b c c . 
        . . . . . . . b b b d b b c . . 
        . . . . . . . . b . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    mySprite2.follow(mySprite, 25)
    statusbar3 = statusbars.create(20, 4, StatusBarKind.Buzzerhealth)
    statusbar3.max = 10
    statusbar3.attachToSprite(mySprite2)
    statusbar.setBarBorder(1, 15)
}
controller.combos.attachCombo("A B", function () {
    if (statusbar2.value > 0) {
        statusbar2.value += -1
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . . f 1 1 1 1 1 1 1 f . . 
            . . . . f 1 1 1 1 f f 1 f f . . 
            . . . . . f 1 1 1 f f 1 f f . . 
            . . . . f 1 1 1 1 1 1 1 1 f . . 
            . . . . . f 1 1 1 1 1 1 1 f . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 0)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f 1 1 f f 1 f . . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 1 1 f f 1 1 f . . . 
            . . . . f 1 1 1 f f 1 1 f . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 f 1 f 1 f 1 f . . . 
            . . . . . f . f . f . f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -50)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . f 1 1 1 1 1 1 1 f . . . . . 
            . . f f 1 f f 1 1 1 1 f . . . . 
            . . f f 1 f f 1 1 1 f . . . . . 
            . . f 1 1 1 1 1 1 1 1 f . . . . 
            . . f 1 1 1 1 1 1 1 f . . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -50, 0)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f . f . f . f . . . . . 
            . . . f 1 f 1 f 1 f 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 f f 1 1 1 f . . . . 
            . . . f 1 1 f f 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . . f 1 f f 1 1 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 50)
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Buzzer, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.halo, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Buzzer, function (sprite, otherSprite) {
    if (Attacking) {
        Buzzerbar.value += Total_attack
    } else {
        statusbar.value += -0.1
        mySprite.vx += randint(-2, 2)
        mySprite.vy += randint(-2, 2)
    }
})
info.onScore(3, function () {
    Level_up = true
    story.spriteSayText(mySprite, " Level up with...")
    if (randint(1, 4) == 4) {
        Defence += 1
        story.spriteSayText(mySprite, "Defence up!")
    } else if (randint(1, 3) == 3) {
        Max_magic += 1
        story.spriteSayText(mySprite, "Max magic up!")
    } else if (randint(1, 2) == 2) {
        Speed += 25
        story.spriteSayText(mySprite, "Speed up!")
    } else if (randint(1, 1) == 1) {
        Attack += -1
        story.spriteSayText(mySprite, "Attack up!")
    }
    info.changeScoreBy(-2)
    timer.after(2000, function () {
        Level_up = false
    })
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Is_in_battle) {
        Is_in_battle = false
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    }
})
function Buzzerbattle () {
    Buzzer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 f f 1 . . . . . 
        . . 1 1 1 1 1 1 f d 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Buzzer)
    Buzzercount += 1
    Buzzer.setPosition(mySprite.x + randint(-10, 10), mySprite.y + randint(-10, 10))
    Is_in_battle = true
    characterAnimations.runFrames(
    Buzzer,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 f f 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 f d 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 f f 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 f d 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 f f 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 f d 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 f f 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 f d 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 f f 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 f d 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.runFrames(
    Buzzer,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 f f 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 d f 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 f f 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 d f 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 d f 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 f f 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 d f 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 f f 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 d f 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    Buzzer.follow(mySprite, 10)
    Buzzerbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    Buzzerbar.max = 3
    Buzzerbar.attachToSprite(Buzzer)
    Buzzerbar.setBarBorder(1, 15)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar3.value += -5
    sprites.destroy(sprite)
})
controller.combos.attachCombo("B A", function () {
    if (statusbar2.value > 0) {
        statusbar2.value += -2
        mySprite3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 f 1 1 1 f 1 1 f 1 1 f . . 
            . f 1 f 1 1 f 1 f 1 f 1 1 f . . 
            . f 1 f 1 1 f 1 f 1 f 1 1 f . . 
            . f 1 1 f 1 1 f 1 1 1 f 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 0)
        mySprite3.sx += 5
        mySprite3.sy += 5
        animation.runImageAnimation(
        mySprite3,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 1 1 1 f 1 1 f . . 
            . . f 1 1 1 1 f 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 f 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 f 1 1 1 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 1 f 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 f 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 f 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 f 1 1 1 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 1 1 f 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 f 1 1 1 1 1 f 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 f 1 1 1 1 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 1 1 1 f 1 1 f . . 
            . . f 1 f 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 f 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 f 1 1 1 1 1 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 f 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 f 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 f 1 1 1 f 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 f 1 1 f 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f 1 f 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 f 1 1 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
        timer.after(20000, function () {
            sprites.destroy(mySprite3, effects.spray, 500)
        })
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Attacking) {
        statusbar3.value += Total_attack
    } else {
        statusbar.value += -1 + Total_def
        mySprite.vx += randint(-10, 10)
        mySprite.vy += randint(-10, 10)
    }
})
let Total_speed = 0
let Total_magic = 0
let Charactersonscreenfalse = false
let Battle_music = false
let Total_def = 0
let mySprite3: Sprite = null
let Buzzercount = 0
let Buzzer: Sprite = null
let Level_up = false
let Total_attack = 0
let Buzzerbar: StatusBarSprite = null
let projectile: Sprite = null
let statusbar3: StatusBarSprite = null
let Is_in_battle = false
let Myenimy = 0
let mySprite2: Sprite = null
let Attacking = false
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let Speed = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let Character_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . e e e e e e e e e e e e e e . 
    . e f f f f f f f f f f f f e . 
    . e e e e e e e e e e e e e e . 
    . e f f f f f f f f f f f f e . 
    . e e e e e e e e e e e e e e . 
    . e f f f f f f f f f f f f e . 
    . e e e e e e e e e e e e e e . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Sign1)
let Character_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . e e e e e e e e e e e e e e . 
    . e f f f f f f f f f f f f e . 
    . e e e e e e e e e e e e e e . 
    . e f f f f f f f f f f f f e . 
    . e e e e e e e e e e e e e e . 
    . e f f f f f f f f f f f f e . 
    . e e e e e e e e e e e e e e . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Sign2)
mySprite = sprites.create(img`
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 f f 1 f f 1 . . . . . 
    . . . . 1 f f 1 f f 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . c c c c c . . . . . . 
    . . . . . c c c c c . . . . . . 
    . . . . . c c c c c . . . . . . 
    . . . . . c c c c c . . . . . . 
    . . . . . c c c c c . . . . . . 
    . . . . . c c c c c . . . . . . 
    . . . . . c c c c c . . . . . . 
    . . . . . . f . f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 50 + Speed, 50 + Speed)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(Character_1, assets.tile`myTile23`)
tiles.placeOnRandomTile(Character_2, assets.tile`myTile24`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    tiles.setTileAt(value, assets.tile`myTile`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile23`)) {
    tiles.setTileAt(value, assets.tile`myTile`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile24`)) {
    tiles.setTileAt(value, assets.tile`myTile`)
}
info.setScore(0)
let Worldmap = tilemap`level1`
let Battlemap = tilemap`level2`
let Attack = 0
let Max_magic = 0
Speed = 0
let Defence = 0
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar2 = statusbars.create(20, 4, StatusBarKind.Magic)
statusbar.attachToSprite(mySprite, 10, 10)
statusbar2.attachToSprite(mySprite, 10, 30)
statusbar.setBarBorder(1, 15)
statusbar2.setBarBorder(1, 15)
statusbar.positionDirection(CollisionDirection.Top)
statusbar.max = 25
game.onUpdateInterval(750, function () {
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . . f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . . . f . . . . . . . 
            `],
        500,
        true
        )
    } else if (controller.up.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . . . . f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . . f . . . . . . . . . 
            `],
        500,
        true
        )
    } else if (controller.right.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . . f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . c c c . . . . . . . 
            . . . . . . . f . . . . . . . . 
            `],
        500,
        true
        )
    } else if (controller.down.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . . . . f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . . f . . . . . . . . . 
            `],
        500,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 f f 1 f f 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . . f . f . . . . . . . 
            `],
        500,
        true
        )
    }
})
game.onUpdateInterval(2500, function () {
    if (Buzzercount >= 1) {
        if (Buzzer.vx > 0) {
            animation.runImageAnimation(
            Buzzer,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 1 1 1 1 1 1 1 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . . 1 1 1 1 1 1 1 1 1 1 f f 1 . 
                . . 1 1 1 1 1 1 1 1 1 1 f d 1 . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . 1 1 1 1 1 1 1 1 1 1 1 f f 1 . 
                . 1 1 1 1 1 1 1 1 1 1 1 f d 1 . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                1 1 1 1 1 1 1 1 1 1 1 1 f f 1 . 
                1 1 1 1 1 1 1 1 1 1 1 1 f d 1 . 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . 1 1 1 1 1 1 1 1 1 1 1 f f 1 . 
                . 1 1 1 1 1 1 1 1 1 1 1 f d 1 . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 1 1 1 1 1 1 1 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . . 1 1 1 1 1 1 1 1 1 1 f f 1 . 
                . . 1 1 1 1 1 1 1 1 1 1 f d 1 . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            500,
            false
            )
        } else if (Buzzer.vx < 0) {
            animation.runImageAnimation(
            Buzzer,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 1 1 1 1 1 1 1 1 1 . . . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . 1 f f 1 1 1 1 1 1 1 1 1 1 . . 
                . 1 d f 1 1 1 1 1 1 1 1 1 1 . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . 1 f f 1 1 1 1 1 1 1 1 1 1 1 . 
                . 1 d f 1 1 1 1 1 1 1 1 1 1 1 . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                . 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 
                . 1 d f 1 1 1 1 1 1 1 1 1 1 1 1 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . 1 f f 1 1 1 1 1 1 1 1 1 1 1 . 
                . 1 d f 1 1 1 1 1 1 1 1 1 1 1 . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 1 1 1 1 1 1 1 1 1 . . . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . 1 f f 1 1 1 1 1 1 1 1 1 1 . . 
                . 1 d f 1 1 1 1 1 1 1 1 1 1 . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            500,
            false
            )
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (Myenimy >= 1) {
        if (mySprite2.vx > 0) {
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 1 1 1 1 . . . 
                . . . . . . . 1 1 1 1 1 1 1 . . 
                . . . . . . . 1 1 1 f f 1 1 . . 
                . . . c c c c 1 1 1 f 4 1 1 . . 
                . . c c c c c 1 1 1 1 1 1 1 . . 
                . c c c c c c c 1 1 1 1 1 1 . . 
                . c c c c c c c c 1 1 1 1 . . . 
                . c c c c c c c c c c 1 . . . . 
                . c c c c c c b b b b . . . . . 
                . c c c c b b b b b b b b . . . 
                . c c c b b b b d d d . . . . . 
                . c c c b b b d d b b . . . . . 
                . c c b b d d d b b . . . . . . 
                . . c b b d b b b . . . . . . . 
                . . . . . . . b . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 1 1 1 1 . . . 
                . . . . . . . 1 1 1 1 1 1 1 . . 
                . . . . . . . 1 1 1 f f 1 1 . . 
                . . . c c c c 1 1 1 f 4 1 1 . . 
                . . c c c c c 1 1 1 1 1 1 1 . . 
                . c c c c c c c 1 1 1 1 1 1 . . 
                . c c c c c c c c 1 1 1 1 . . . 
                . c c c c c c c c c c 1 . . . . 
                . c c c c c c b b b b . . . . . 
                . c c c c b b b b b b b b . . . 
                . c c c b b b b d d d . . . . . 
                . c c c b b b d d b b . . . . . 
                . c c b b d d d b b . . . . . . 
                . . c b b d b b b . . . . . . . 
                . . . . b . . . . . . . . . . . 
                `],
            500,
            false
            )
        } else if (mySprite2.vx < 0) {
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . 1 1 1 1 1 1 . . . . . . . 
                . . 1 1 1 1 1 1 1 . . . . . . . 
                . . 1 1 f f 1 1 1 . . . . . . . 
                . . 1 1 4 f 1 1 1 c c c c . . . 
                . . 1 1 1 1 1 1 1 c c c c c . . 
                . . 1 1 1 1 1 1 c c c c c c c . 
                . . . 1 1 1 1 c c c c c c c c . 
                . . . . 1 c c c c c c c c c c . 
                . . . . . b b b b c c c c c c . 
                . . . b b b b b b b b c c c c . 
                . . . . . d d d b b b b c c c . 
                . . . . . b b d d b b b c c c . 
                . . . . . . b b d d d b b c c . 
                . . . . . . . b b b d b b c . . 
                . . . . . . . . . . . b . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . 1 1 1 1 1 1 . . . . . . . 
                . . 1 1 1 1 1 1 1 . . . . . . . 
                . . 1 1 f f 1 1 1 . . . . . . . 
                . . 1 1 4 f 1 1 1 c c c c . . . 
                . . 1 1 1 1 1 1 1 c c c c c . . 
                . . 1 1 1 1 1 1 c c c c c c c . 
                . . . 1 1 1 1 c c c c c c c c . 
                . . . . 1 c c c c c c c c c c . 
                . . . . . b b b b c c c c c c . 
                . . . b b b b b b b b c c c c . 
                . . . . . d d d b b b b c c c . 
                . . . . . b b d d b b b c c c . 
                . . . . . . b b d d d b b c c . 
                . . . . . . . b b b d b b c . . 
                . . . . . . . . b . . . . . . . 
                `],
            500,
            false
            )
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (Buzzercount > 0) {
        if (Buzzerbar.value <= 0) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Buzzer)
            info.changeScoreBy(1)
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (Myenimy > 0) {
        if (statusbar3.value <= 0) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            info.changeScoreBy(5)
        }
    }
})
forever(function () {
    if (Battle_music) {
        music.stopAllSounds()
        for (let index = 0; index < 3; index++) {
            music.play(music.stringPlayable("E F F E F F E F ", 320), music.PlaybackMode.UntilDone)
        }
        music.play(music.stringPlayable("B A G F G A E F ", 320), music.PlaybackMode.UntilDone)
    } else if (Level_up) {
        music.stopAllSounds()
        music.play(music.stringPlayable("E D E D E D E A ", 320), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
        music.play(music.stringPlayable("F F F E E A A D ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("D D - C D A F E ", 120), music.PlaybackMode.UntilDone)
    }
})
game.onUpdateInterval(500, function () {
    if (Is_in_battle && Myenimy >= 1) {
        Battle_music = true
    } else {
        Battle_music = false
    }
    if (Is_in_battle && Myenimy >= 1) {
        tiles.setCurrentTilemap(Battlemap)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile25`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
        for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
            tiles.setTileAt(value, assets.tile`myTile`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile25`)) {
            tiles.setTileAt(value, assets.tile`myTile`)
        }
        Charactersonscreenfalse = true
        sprites.destroyAllSpritesOfKind(SpriteKind.Sign1, effects.spray, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.Sign2, effects.spray, 500)
    } else {
        if (Charactersonscreenfalse) {
            Charactersonscreenfalse = false
            Character_1 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . e e e e e e e e e e e e e e . 
                . e f f f f f f f f f f f f e . 
                . e e e e e e e e e e e e e e . 
                . e f f f f f f f f f f f f e . 
                . e e e e e e e e e e e e e e . 
                . e f f f f f f f f f f f f e . 
                . e e e e e e e e e e e e e e . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Sign1)
            Character_2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . e e e e e e e e e e e e e e . 
                . e f f f f f f f f f f f f e . 
                . e e e e e e e e e e e e e e . 
                . e f f f f f f f f f f f f e . 
                . e e e e e e e e e e e e e e . 
                . e f f f f f f f f f f f f e . 
                . e e e e e e e e e e e e e e . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Sign2)
        }
        timer.after(500, function () {
            tiles.setCurrentTilemap(Worldmap)
            tiles.placeOnRandomTile(Character_1, assets.tile`myTile23`)
            tiles.placeOnRandomTile(Character_2, assets.tile`myTile24`)
            for (let value of tiles.getTilesByType(assets.tile`myTile23`)) {
                tiles.setTileAt(value, assets.tile`myTile`)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile24`)) {
                tiles.setTileAt(value, assets.tile`myTile`)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
                tiles.setTileAt(value, assets.tile`myTile`)
            }
        })
    }
})
game.onUpdateInterval(500, function () {
    Total_def = 0 + Defence
    Total_attack = -1 - Attack
    Total_magic = 5 + Max_magic
    Total_speed = 50 + Speed
    controller.moveSprite(mySprite, Total_speed, Total_speed)
    statusbar2.max = Total_magic
})
game.onUpdateInterval(500, function () {
    if (0 >= statusbar.value) {
        game.gameOver(false)
    }
})
