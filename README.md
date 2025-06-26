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
npm install cookies-driver
```

## Usage

```javascript
import { createStorage } from 'unstorage';
import cookiesDriver from 'cookies-driver';

const storage = createStorage({
  driver: cookiesDriver()
});

// Store data
await storage.setItem('key', 'value');

// Retrieve data
const value = await storage.getItem('key');
console.log(value); // Outputs: 'value'
```

## License

MIT 