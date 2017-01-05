'use strict';

var test = "testable text:";
var text = "hello world";

describe('function "format"', function () {

    it(`can delete blanks at the beginning of string`, function () {
		expect(format(`    ${test} ${text}`)).toEqual(`${test} ${text}`)
    });

    it(`can delete blanks at the end of string`, function () {
		expect(format(`${test} ${text}    `)).toEqual(`${test} ${text}`)
    });

    it(`can replace all plural blanks in text on one blank`, function () {
		expect(format(`${test}    ${text}`)).toEqual(`${test} ${text}`)
    });

     it(`can substitute the transfers of strings by blanks`, function () {
		expect(format(`${test}\n${text}`)).toEqual(`${test} ${text}`)
    });

     it(`can translate all letters in lowercase`, function () {
		expect(format(`${test} ${text}`.toUpperCase())).toEqual(`${test} ${text}`)
    });

     it(`can delete blanks at the beginning of line, at the end of line,
        plural blanks on a middle, to replace translations of lines blanks
        and translate letters in lowercase`, function () {
        expect(format(`    ${test}    ${text}\n${test}    ${text}   `.toUpperCase()))
        .toEqual(`${test} ${text} ${test} ${text}`)
    });
});


 describe('function "format"', function () {

     it(`does not delete and does not replace symbols`, function () {
        expect(format(`?${test},${text}!`)).toEqual(`?${test},${text}!`)
    });


     it(`does not delete and does not replace a number`, function () {
        expect(format(`${test} ${text} 3 + 5`)).toEqual(`${test} ${text} 3 + 5`)
    });

     it(`does not change content if one word is passed wholly`, function () {
        expect(format(`hello`)).toEqual(`hello`)
    });
});

describe('function "format"', function () {

     it(`aborts exceptions at impermissible arguments`, function(){
        expect(function(){ format(!"string") }).toThrowError(TypeError)
    });
});