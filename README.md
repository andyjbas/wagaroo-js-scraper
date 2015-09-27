# Wagaroo JS Scraper

Generate an HTML file of a phantomjs scraped web page. Meant for web pages with asynchronously loaded data that can't be properly scraped with Wagaroo's R scripts.

## Installation

* First, install [node](https://nodejs.org).
* Within the project directory, install dependencies by running `npm install`.
* Install the CLI tool on your system by running `npm link`.

## Usage

* `wagaroo-js-scraper --url=http://google.com`
* See `example.R`.

### Options

* **--url** - Required. The url of the web page to scrape.
* **--name** - Optional. The name of the file that will be saved to the `./output` folder. E.g. `--name=wagaroo` will create `./output/wagaroo.html`. Useful if you are needing to scrape and save many pages within a script.
* **--wait-for** - Optional. A comma separated list of css selectors that you want to be present on the page before scraping the html. Useful when scraping pages that have content loaded some time after initial page load. E.g. `--wait-for=.someclass`, or `--wait-for=.someclass,#someId,someElement`
