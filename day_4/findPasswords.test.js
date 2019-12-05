const { doesPasswordMeetCriteria } = require("./findPasswords");

describe("doesPasswordMeetCriteria", () => {
  it("returns true for case 111111", () => {
    expect(doesPasswordMeetCriteria("111111")).toBeTruthy();
  });

  it("returns false for case 223450", () => {
    expect(doesPasswordMeetCriteria("223450")).toBeFalsy();
  });

  it("returns false for case 123789", () => {
    expect(doesPasswordMeetCriteria("123789")).toBeFalsy();
  });
});
