const validator = require('validator')

class EmailValidator {
  isInvalid (email) {
    return validator.isEmail(email)
  }
}

const makeSut = () => {
  return new EmailValidator()
}

describe('Email Validator', () => {
  test('Should return true if validator returns true', () => {
    const sut = makeSut()
    const isEmailInvalid = sut.isInvalid('valid_email@email.com')
    expect(isEmailInvalid).toBe(false)
  })

  test('Should return false if validator returns false', () => {
    validator.isEmailInvalid = true
    const sut = makeSut()
    const isEmailInvalid = sut.isInvalid('invalid_email@email.com')
    expect(isEmailInvalid).toBe(true)
  })
})
