import React from "react";
import { getUser } from "../github.js";

describe("github api", () => {
  it("should load user data", () => {
    return getUser("merio901").then(data => {
      expect(data).toBeDefined();
      expect(data.data.name).toEqual("Michał Sobczak");
    });
  });
});
