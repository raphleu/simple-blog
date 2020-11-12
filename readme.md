# Simple blog app

## How to run this

### With docker

With docker installed, build your image: 
```
docker build . -t node-app
```
from the root directory of this project. Then run with: 
```
docker run -p 8080:8080 node-app
```
Now check out the WebApp in a browser at http://localhost:8080/ or start hitting the API!

### Pure node

From the root directory, with npm installed run: 
```
npm start
```

## How to run the tests

To run the tests, simply run 
```
npm test
```