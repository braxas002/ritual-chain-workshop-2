# Input Validation

I added this small validation layer before the prediction call.

It checks three simple things:

- market id
- prediction value
- account text

I kept it outside the contract because this is mainly a user-side
convenience check.

The contract should still remain the final authority.

The helper just gives a quicker error before sending anything.
