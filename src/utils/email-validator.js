const validator = require('validator')

module.exports = class EmailValidator {
  isInvalid (email) {
    return validator.isEmail(email)
  }
}
