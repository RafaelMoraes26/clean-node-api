const EmailValidator = require('./email-validator')
const validator = require('validator')

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

  test('Should call validator with correct email', () => {
    const sut = makeSut()
    const anyEmail = 'any_email@email.com'
    sut.isInvalid(anyEmail)
    expect(validator.email).toBe(anyEmail)
  })
})
