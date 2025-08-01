import { describe, beforeEach, test, expect } from "vitest";

describe("The attendees finder should return", () => {
  let attendees = [];

  beforeEach(() => {
    attendees = [
      {
        firstName: "Marc",
      },
      {
        firstName: "Christelle",
      },
      {
        firstName: "Christophe",
      },
    ];
  });

  test("an empty result when no attendee first name matches the query string", () => {
    const result = findByInfixOfFirstName("Paul", attendees);

    expect(result).toStrictEqual([]);
  });
  
  test("one result when only one attendee first name matches the query string", () => {
    const result = findByInfixOfFirstName("Marc", attendees);

    expect(result).toStrictEqual([{ firstName : "Marc"}]);
  });

  test("all the results when many attendees first names match the query string", () => {
    const result = findByInfixOfFirstName("Chri", attendees);

    expect(result).toStrictEqual([{ firstName : "Christelle"}, { firstName: "Christophe"}]);
  });
});
