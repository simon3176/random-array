input.onButtonPressed(Button.A, function () {
    Choices = randint(0, Options.length - 1)
    basic.showString("" + (Options[Choices]))
    Options.removeAt(Choices)
})
let Choices = 0
let Options: string[] = []
Options = [
"Joker",
"G. Goblin",
"Loki",
"Thanos",
"Zoom",
"Beyonder"
]
basic.forever(function () {
	
})
