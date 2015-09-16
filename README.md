# Wagaroo JS Scraper

Generate an HTML file of a phantomjs scraped web page. Meant for web pages with asynchronously loaded data that can't be properly scraped with Wagaroo's R scripts.

## Installation

* First, install [node](https://nodejs.org).
* Within the project directory, install dependencies by running `npm install`.

## Usage

* The scraper can be run on it's own by running `npm run scraper` within the project directory.
* If you wish to run it directly from an `R` script, you can use the `R` `system` command - `system("npm run scraper")`. It's important to note that the `R` script file MUST be in the same directory as the JS scraper for this to work. See `example.R`.
