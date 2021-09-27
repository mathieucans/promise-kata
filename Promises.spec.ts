function first(){
    console.log('1')
}
function second(){
    console.log('2')
}
function third(){
    console.log('3')
}


describe('Promises', () => {
    test('a failing test', () => {
        first()
        second()
        third()

        expect(true).toEqual(false);
    });
});
