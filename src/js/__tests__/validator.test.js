import Validator from '../validator';

describe('Начинаем тестирование метода validateUsername', () => {
  test('Должен выбросить исключение на вызов без аргументов', () => {
    expect(() => Validator.validateUsername()).toThrow('Никнейм не передан!');
  });

  test.each([
    ['nick@name', false],
    ['nick.name', false],
    [' ', false],
    ['nick!name', false],
    ['nick1234name', false],
    ['12name', false],
    ['name12', false],
    ['_name', false],
    ['name_', false],
    ['-name', false],
    ['name-', false],
    ['nick123name', true],
    ['nick_123name', true],
    ['nick-123name', true],
    /* ['nick_name', true], */
  ])(
    ('Для значения <%s> должны получить <%s>'),
    (nickname, expected) => {
      const isValid = Validator.validateUsername(nickname);

      expect(isValid).toBe(expected);
    },
  );
});
