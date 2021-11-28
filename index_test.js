const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Define expected output
      const expected = 'cock-a-doodle-doo!';
      
      // Call Rooster.announceDawn and store result in variable
      let actual = Rooster.announceDawn();
      // Use an assert method to compare actual and expected result
      assert.strictEqual(actual, expected);
    })
  });

  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // Define expected output
      const checkString = Rooster.timeAtDawn(4);

      assert.strictEqual(checkString, '4');
    });

    it('throws an error if number less than 0', () => {
      // Define expected output
      const lowerBound = 0;
      const inputNumber = -2;

      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, RangeError);
    });

    it('throws error if number more than 23', () => {
      // Define expected output
      const upperBound = 23;
      const inputNumber = 30;

      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, RangeError);
    });
    
  });
});


