class EmailValidator {
  isInvalid (email) {
    return true
  }
}

describe('Email Validator', () => {
  test('Should return true if validator returns true', () => {
    const sut = new EmailValidator()
    const isEmailInvalid = sut.isInvalid('valid_email@email.com')
    expect(isEmailInvalid).toBe(true)
  })
})
