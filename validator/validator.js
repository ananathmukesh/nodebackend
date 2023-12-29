// validator.js
const Joi = require('joi');

const signupSchema = Joi.object({
  firstname: Joi.string().alphanum().min(3).max(30).required(),
  lastname: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

const validateSignup = (data) => {
  return signupSchema.validate(data, { abortEarly: false });
};

module.exports = {
  validateSignup,
};
