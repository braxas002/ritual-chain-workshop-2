export type PredictionInput = {
  marketId: bigint;
  value: bigint;
  account: string;
};

export type ValidationResult = {
  valid: boolean;
  reason?: string;
};

export function validateMarketId(
  marketId: bigint,
): ValidationResult {
  if (marketId < 0n) {
    return {
      valid: false,
      reason: "market id is negative",
    };
  }

  return {
    valid: true,
  };
}

export function validateValue(
  value: bigint,
): ValidationResult {
  if (value <= 0n) {
    return {
      valid: false,
      reason: "value must be positive",
    };
  }

  return {
    valid: true,
  };
}

export function validateAccount(
  account: string,
): ValidationResult {
  if (account.trim().length === 0) {
    return {
      valid: false,
      reason: "account is empty",
    };
  }

  return {
    valid: true,
  };
}

export function validatePrediction(
  input: PredictionInput,
): ValidationResult {
  const market =
    validateMarketId(
      input.marketId,
    );

  if (!market.valid) {
    return market;
  }

  const value =
    validateValue(
      input.value,
    );

  if (!value.valid) {
    return value;
  }

  return validateAccount(
    input.account,
  );
}
