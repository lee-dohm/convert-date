'use babel'

import moment from 'moment'

import {convertDate} from '../lib/converter'

describe('converter functions', function () {
  let year

  beforeEach(function () {
    year = moment().format('YYYY')
  })

  describe('convertDate', function () {
    it('converts a spelled out American-style date', function () {
      expect(convertDate('July 4, 2016')).to.eq('2016-07-04')
    })

    it('converts a spelled out American-style date with ordinal letters', function () {
      expect(convertDate('July 4th, 2016')).to.eq('2016-07-04')
    })

    it('converts a date without a year', function () {
      expect(convertDate('July 4')).to.eq(`${year}-07-04`)
    })

    it('converts a US military-style date', function () {
      expect(convertDate('4 July 2016')).to.eq('2016-07-04')
    })

    it('converts a military-style date without a year', function () {
      expect(convertDate('4 July')).to.eq('2016-07-04')
    })

    it('throws an error when given null', function () {
      expect(function () {
        convertDate(null)
      }).to.throw(Error)
    })

    it('throws an error when given undefined', function () {
      expect(function () {
        convertDate(undefined)
      }).to.throw(Error)
    })

    it('throws an error when given something that is not a date', function () {
      expect(function () {
        convertDate('foo')
      }).to.throw(Error)
    })
  })
})
