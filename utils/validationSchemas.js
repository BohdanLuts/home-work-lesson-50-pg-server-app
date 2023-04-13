const yup = require('yup');

const NAME_VALIDATION_SCHEMA = yup
  .string()
  .trim()
  .min(2)
  .max(64)
  .required();

module.exports.USER_CREATION_VALIDATION_SCHEMA = yup.object({
  firstName: NAME_VALIDATION_SCHEMA.required(),
  lastName: NAME_VALIDATION_SCHEMA.required(),
  email: yup.string().email(),
  tel: yup
    .string()
    .length(13)
    .matches(/^\+380\d{9}$/),
});

module.exports.USER_UPDATE_VALIDATION_SCHEMA = yup.object({
  firstName: NAME_VALIDATION_SCHEMA,
  lastName: NAME_VALIDATION_SCHEMA,
  email: yup.string().email(),
  tel: yup
    .string()
    .length(13)
    .matches(/^\+380\d{9}$/),
});
