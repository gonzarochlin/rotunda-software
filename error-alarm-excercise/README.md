
# Error Alarm Exercise


Suppose we have a web application running on a single server. Errors that occur
during normal operation of the application are logged to a text file that is stored
in the file system on the server by calling a function, for example:

``` javascript
function logError( error )
```

We are not concerned about errors when their frequency is low. However, when
lots of errors occur in a short period of time, there may be a problem with the
application and we want to be notified via email immediately.

How would you build on the existing error logging mechanism to implement
such an email alarm? Please provide pseudo code to illustrate your solution and
include comments to explain significant design decisions.

# Solution
To try the solution, run:
```
node errorLogger.js
```