const runSequence = require("./runSequence");

describe("runSequence", () => {
  it("case 1", () => {
    const input = "1,0,0,0,99";
    expect(runSequence(input)).toEqual("2,0,0,0,99");
  });

  it("case 2", () => {
    const input = "2,3,0,3,99";
    expect(runSequence(input)).toEqual("2,3,0,6,99");
  });

  it("case 3", () => {
    const input = "2,4,4,5,99,0";
    expect(runSequence(input)).toEqual("2,4,4,5,99,9801");
  });

  it("case 4", () => {
    const input = "1,1,1,4,99,5,6,0,99";
    expect(runSequence(input)).toEqual("30,1,1,4,2,5,6,0,99");
  });

  it("case 5", () => {
    const input = "1,9,10,3,2,3,11,0,99,30,40,50";
    expect(runSequence(input)).toEqual("3500,9,10,70,2,3,11,0,99,30,40,50");
  });
});
