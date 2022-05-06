module.exports = {
  isEmailInvalid: false,
  email: '',

  isEmail (email) {
    this.email = email
    return this.isEmailInvalid
  }
}
