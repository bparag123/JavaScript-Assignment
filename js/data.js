class Button {
    constructor(text, operation, type, formula) {
        this.text = text;
        this.operation = operation;
        this.type = type;
        this.formula = formula
    }
}

const firstRowBtns = [
    new Button("Rad", "rad", "key", false),
    new Button("F-E", "f-e", "key", false),
]

const btns = [
    new Button("MC", "clear", "memory", false),
    new Button("MR", "result", "memory", false),
    new Button("M+", "memoryPlus", "memory", false),
    new Button("M-", "memoryMinus", "memory", false),
    new Button("MS", "memoryStore", "memory", false),
    new Button("2<span class='inverseSecond'>nd</span>", "inverseSecond", "key", false),
    new Button("π", "Math.PI", "math", Math.PI),
    new Button("e", "Math.E", "math", Math.E),
    new Button("C", "clear", "key", false),
    new Button("⌫", "delete", "key", false),
    new Button("x²", "square", "math", "**2"),
    new Button("1/x", "inverse", "math", "**-1"),
    new Button("|x|", "abs", "math", "handleMath(Math.abs,"),
    new Button("exp", "exponent", "math", "handleMath(Math.exp,"),
    new Button("mod", "modulus", "operator", "%"),
    new Button("√x", "square-root", "math", "**0.5"),
    new Button("(", "(", "symbol", "("),
    new Button(")", ")", "symbol", ")"),
    new Button("n!", "factorial", "math", "factorial"),
    new Button("÷", "division", "operator", "/"),
    new Button("x<span class='power'>y</span>", "power", "math", "**"),
    new Button(7, 7, "number", 7),
    new Button(8, 8, "number", 8),
    new Button(9, 9, "number", 9),
    new Button("X", "multiplication", "operator", "*"),
    new Button("10<span class='10raiseto'>x</span>", "10raiseto", "math", "10**"),
    new Button(4, 4, "number", 4),
    new Button(5, 5, "number", 5),
    new Button(6, 6, "number", 6),
    new Button("-", "subtraction", "operator", "-"),
    new Button("log", "log10", "math", "handleMath(Math.log10,"),
    new Button(1, 1, "number", 1),
    new Button(2, 2, "number", 2),
    new Button(3, 3, "number", 3),
    new Button("+", "addition", "operator", "+"),
    new Button("ln", "natural-log", "math", "handleMath(Math.log,"),
    new Button("+/-", "sign", "math", false),
    new Button(0, 0, "number", 0),
    new Button(".", ".", "operator", "."),
    new Button("=", "calculate", "key", false),
]

let trigoBtns = [
    new Button("sin", "sin", "trigo", "handleTrigo(Math.sin,"),
    new Button("cos", "cos", "trigo", "handleTrigo(Math.cos,"),
    new Button("tan", "tan", "trigo", "handleTrigo(Math.tan,"),
]
export { btns, trigoBtns, firstRowBtns };