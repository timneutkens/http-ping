# HTTP ping

Small microservice to do a HTTP `GET` request to the specified url at an interval.

## Usage

```
now timneutkens/http-ping
```

you will be asked for an `INTERVAL` this can be any string compatible with [friendly-cron](https://www.npmjs.com/package/friendly-cron). For example: `every 10 minutes` or `every minute`.

Secondly you'll be asked for `URL` which is the url to send the `GET` request to.

After the deployment has completed you can scale it to 1 instances, to prevent it from going to sleep:

```
now scale <unique-url> 1
```

