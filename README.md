# Cookies Driver for Unstorage

This project implements a cookies driver for [Unstorage](https://unstorage.unjs.io/), a universal storage abstraction layer for Node.js and browser environments.

## Overview

The cookies driver allows Unstorage to store and retrieve data using browser cookies as the storage backend. This enables persistent storage in browser environments where other storage options like localStorage or IndexedDB might not be ideal due to size limitations or specific use cases.

## Features

- **Browser Compatibility**: Works in all modern browsers that support cookies.
- **Simple Integration**: Easily integrates with Unstorage's API for a seamless storage experience.
- **Lightweight**: Minimal overhead for cookie-based storage.

## Installation

```bash
npm install cookies_driver
```

## Usage

```javascript
import { createStorage } from 'unstorage';
import cookiesDriver from 'cookies_driver';

const storage = createStorage({
  driver: cookiesDriver({})
});

// Store data
await storage.setItem('key', 'value');

// Retrieve data
const value = await storage.getItem('key');
console.log(value); // Outputs: 'value'
```

## Configuration Options

When initializing the cookies driver, you can pass an options object with the following properties:

- **`prefix`**: A string to prepend to all cookie keys (default: "unstorage_")
- **`maxAge`**: The maximum age of the cookie in seconds (default: 604800, which is 7 days)
- **`path`**: The path for which the cookie is valid (default: "/")
- **`domain`**: The domain for which the cookie is valid (default: "")
- **`secure`**: A boolean indicating if the cookie should only be sent over HTTPS (default: false)
- **`sameSite`**: The SameSite attribute of the cookie, can be "Strict", "Lax", or "None" (default: "Lax")

Example with custom options:

```javascript
import { createStorage } from 'unstorage';
import cookiesDriver from 'cookies-driver';

const storage = createStorage({
  driver: cookiesDriver({
    prefix: 'myapp_',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
    secure: true,
    sameSite: 'Strict'
  })
});
```

## License

MIT 