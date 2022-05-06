const validator = require('validator')

class EmailValidator {
  isInvalid (email) {
    return validator.isEmail(email)
  }
}

describe('Email Validator', () => {
  test('Should return true if validator returns true', () => {
    const sut = new EmailValidator()
    const isEmailInvalid = sut.isInvalid('valid_email@email.com')
    expect(isEmailInvalid).toBe(true)
  })

  test('Should return false if validator returns false', () => {
    validator.isEmailInvalid = false
    const sut = new EmailValidator()
    const isEmailInvalid = sut.isInvalid('invalid_email@email.com')
    expect(isEmailInvalid).toBe(false)
  })
})
