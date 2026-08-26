import { expect } from "chai";

import {
  validateMarketId,
  validateValue,
  validateAccount,
  validatePrediction,
} from "../scripts/lib/prediction-validator";

describe("prediction validator", function () {
  it("accepts a normal market id", function () {
    expect(
      validateMarketId(2n).valid,
    ).to.equal(true);
  });

  it("rejects a negative market id", function () {
    expect(
      validateMarketId(-1n).valid,
    ).to.equal(false);
  });

  it("accepts a positive value", function () {
    expect(
      validateValue(100n).valid,
    ).to.equal(true);
  });

  it("rejects zero", function () {
    expect(
      validateValue(0n).valid,
    ).to.equal(false);
  });

  it("rejects an empty account", function () {
    expect(
      validateAccount("").valid,
    ).to.equal(false);
  });

  it("accepts an account string", function () {
    expect(
      validateAccount(
        "0x123",
      ).valid,
    ).to.equal(true);
  });

  it("validates a complete input", function () {
    const result =
      validatePrediction({
        marketId: 2n,
        value: 4200n,
        account: "alice",
      });

    expect(
      result.valid,
    ).to.equal(true);
  });

  it("returns the first invalid field", function () {
    const result =
      validatePrediction({
        marketId: -1n,
        value: 0n,
        account: "",
      });

    expect(
      result.reason,
    ).to.equal(
      "market id is negative",
    );
  });
});
