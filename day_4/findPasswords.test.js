const { doesPasswordMeetCriteria } = require("./findPasswords");

describe("doesPasswordMeetCriteria", () => {
  it("returns false for case 111111", () => {
    expect(doesPasswordMeetCriteria("111111")).toBeFalsy();
  });

  it("returns false for case 123333", () => {
    expect(doesPasswordMeetCriteria("123333")).toBeFalsy();
  });

  it("returns true for case 112233", () => {
    expect(doesPasswordMeetCriteria("112233")).toBeTruthy();
  });

  it("returns true for case 111122", () => {
    expect(doesPasswordMeetCriteria("111122")).toBeTruthy();
  });

  it("returns false for case 123444", () => {
    expect(doesPasswordMeetCriteria("123444")).toBeFalsy();
  });

  it("returns true for case 113444", () => {
    expect(doesPasswordMeetCriteria("113444")).toBeTruthy();
  });

  it("returns false for case 1233345", () => {
    expect(doesPasswordMeetCriteria("1233345")).toBeFalsy();
  });

  it("returns false for case 444123", () => {
    expect(doesPasswordMeetCriteria("444123")).toBeFalsy();
  });

  it("returns false for case 223450", () => {
    expect(doesPasswordMeetCriteria("223450")).toBeFalsy();
  });

  it("returns false for case 123789", () => {
    expect(doesPasswordMeetCriteria("123789")).toBeFalsy();
  });
});
