import expect from 'countries-by-gdp-per-capita-cia/tests/expect';
import index from 'countries-by-gdp-per-capita-cia';

describe('index', () => {
  it('returns an object', () => {
    expect(index).to.be.an('object');
    const values = Object.values(index);
    expect(values).to.have.length.at.least(1);
    values.forEach((value) => {
      expect(value.countryName).to.be.a('string');
      expect(value.valueInUSD).to.be.a('number');
      expect(value.date).to.be.an.instanceOf(Date);
    });
  });
});
