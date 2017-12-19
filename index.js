const friendlyCron = require('friendly-cron')
const {CronJob} = require('cron')
const fetch = require('node-fetch')

const {INTERVAL: interval, URL: url} = process.env

if(!interval || !url) {
  throw new Error('INTERVAL or URL are not provided')
}

const pattern = friendlyCron(interval)

let last

new CronJob(pattern, async () => {
  console.log('PING RUNNING')
  await fetch(url)
  last = new Date()
}, null, true);

module.exports = () => {
  if(last) {
    return last
  }

  return 'No pings ran'
}