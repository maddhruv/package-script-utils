import { describe, it, expect } from "vitest";

import { getScript, addScript, deleteScript } from "../src";

describe("getScript", () => {
  it("Should return script", () => {
    expect(getScript("test")).toBe("vitest run");
  });
  it("Should not return script", () => {
    expect(getScript("test2")).toBe(undefined);
  });
});

describe("addScript", () => {
  it("Should not add script", () => {
    expect(addScript("test", "vitest run")).toBe(false);
  });
  it("Should add a new script", () => {
    expect(addScript("test2", "vitest run")).toBe(true);
  });
});

describe("deleteScript", () => {
  it("Should delete", () => {
    expect(deleteScript("test2")).toBe(true);
  });
  it("Should not delete", () => {
    expect(deleteScript("test2")).toBe(false);
  });
});
