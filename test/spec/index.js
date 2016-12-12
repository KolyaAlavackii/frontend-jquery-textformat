'use strict';

describe('function "format"', function () {
    it("can delete blanks at the beginning of string", function () {
		expect(format("  testabletext")).toEqual("testabletext")
    });

    it("can delete blanks at the end of string", function () {
		expect(format("testabletext  ")).toEqual("testabletext")
    });

    it("can replace all plural blanks in text on one blank", function () {
		expect(format("testable    text")).toEqual("testable text")
    });

     it("can substitute the transfers of strings by blanks", function () {
		expect(format("testable\ntext")).toEqual("testable text")
    });

     it("can translate all letters in lowercase", function () {
		expect(format("TEstableText")).toEqual("testabletext")
    });

});

