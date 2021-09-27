function first(){
    Console.log('1')
}
function second(){
    Console.log('2')
}
function third(){
    Console.log('3')
}

class Console{
    static messages:Array<string> =[];

    static log(message:string){
        console.log(message)
        this.messages.push(message)
    }
}

describe('Promises', () => {
    test('a failing test', () => {
        first()
        second()
        third()

        expect(true).toEqual(false);
    });
});
