function first() {
    Console.log('1')
}

function second() {
    Console.log('2')
}

function async_second() {
    setTimeout(() => {
        Console.log('2')
    }, 0);
}

function third() {
    Console.log('3')
}

class Console {
    static messages: Array<string> = [];

    static log(message: string) {
        console.log(message)
        this.messages.push(message)
    }

    static clear() {
        this.messages =[]
    }
}

describe('Promises', () => {
    beforeEach(() => {
        Console.clear()
    });

    test('syncronous call', () => {
        first()
        second()
        third()

        expect(Console.messages).toEqual([]);
    });

    // Make this test pass without change async_second signature
    test('set timeout enque messages ', async () => {
        first()
        async_second()
        third()

        expect(Console.messages).toEqual(["1", "3", "2"]);
    });

    test('promised are executed instantly', () => {
        new Promise(() => Console.log(''));

        expect(Console.messages).toEqual(['executed'])
    });
});
