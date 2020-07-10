export default class Validator {
  static validateUsername(name) {
    if (arguments.length === 0) {
      throw new Error('Никнейм не передан!');
    }

    if (/[^a-z\d_-]+/i.test(name)) {
      return false;
    } if (/\d{4,}/gi.test(name)) {
      return false;
    } if (!/^[a-z]+(.)*[a-z]+$/i.test(name)) {
      return false;
    }
    return true;
  }
}
