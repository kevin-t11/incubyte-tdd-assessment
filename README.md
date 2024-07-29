# String Calculator

## Overview

This project implements a simple string calculator using Test-Driven Development (TDD) principles. The calculator can handle different delimiters, including commas and new lines, and can be configured to use custom delimiters. It also throws exceptions for negative numbers.

## Features

- **Empty String**: Returns `0`.
- **Single Number**: Returns the number itself.
- **Two Numbers**: Returns the sum of two numbers.
- **Multiple Numbers**: Returns the sum of multiple numbers.
- **New Lines**: Supports new lines as delimiters.
- **Custom Delimiters**: Supports custom delimiters specified at the start of the input string.
- **Negative Numbers**: Throws an exception with a list of negative numbers.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/kevin-t11/incubyte-tdd-assessment.git
   cd incubyte-tdd-assessment

2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Run the Tests**
   ```bash
   npx jest
   ```
## Testing with Jest
Jest is a JavaScript testing framework that simplifies testing with its easy setup and powerful features.
- Zero Configuration: Minimal setup needed.
- Snapshot Testing: Captures and compares snapshots to detect changes.
- Mocking: Built-in tools for mocking functions, modules, and timers.
- Code Coverage: Generates reports to identify untested code.