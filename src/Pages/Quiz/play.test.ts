import { secondsToTime } from './helper'

test('tests seconds to display time conversion', () => {
  expect(secondsToTime(0)).toEqual('00m:00s')
  expect(secondsToTime(90)).toEqual('01m:30s')
  expect(secondsToTime(300)).toEqual('05m:00s')
})
