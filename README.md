# Express.js JSON Parsing Bug

This repository demonstrates a common error in Express.js applications where JSON request bodies are not parsed correctly, resulting in an empty `req.body` object.  The issue typically stems from incorrect placement or usage of the `express.json()` middleware. The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected implementation. 

## Problem

The provided Express.js server attempts to handle POST requests to the `/users` endpoint, expecting a JSON payload.  However, due to a middleware error, the `req.body` remains empty, preventing proper data processing.

## Solution

The `bugSolution.js` file demonstrates the correct way to use `express.json()`.  The middleware must be placed *before* the route handler that expects a JSON body.  This ensures that Express correctly parses the incoming JSON data and makes it available in `req.body`. 