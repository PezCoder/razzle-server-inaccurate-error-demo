# razzle-server-inaccurate-error-demo
Razzle `server` build doesn't inform if a loader is missing for a file type.

## How the environment is setup
1. App created using `npx create-razzle-app razzle-swallow-error`
2. razzle.config.js uses `null-loader` for `.scss` files, while the loader is not installed in `package.json`

### Steps to reproduce
## Current Behaviour
1. `npm install && npm start`
2. You should see an error `Can't find module: ./Home.scss` which is inaccurate & not something webpack throws when a loader is not found.

## Expected Behaviour
3. Keep the shell open & open `src/App.css` in an editor & save the file to trigger hot reloading.
4. You'll see an very accurate error
```
Error in ./src/Home.js
Module not found: Error: Can't resolve 'null-loader'
```

which is very accurate & exactly what any project with same webpack configuration without razzle would throw.
