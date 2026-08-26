import {
  validatePrediction,
} from "./lib/prediction-validator";

const input = {
  marketId: 2n,
  value: 4200n,
  account: "builder",
};

const result =
  validatePrediction(input);

if (result.valid) {
  console.log(
    "Prediction input looks good.",
  );
} else {
  console.log(
    "Prediction input rejected:",
    result.reason,
  );
}
