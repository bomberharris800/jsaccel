// A comment 
basic.showIcon(IconNames.Asleep)
input.onGesture(Gesture.Shake, () => {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    basic.showIcon(IconNames.Asleep)
})