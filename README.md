## Website Performance Optimization portfolio project

### Setup

1. Download or clone this project onto your computer.
2. In Terminal, cd into the root directory of the downloaded project.
3. Enter the command `npm install` and wait for the process to finish.
4. Enter the command `gulp build` to create the distribution build.
5. Open a new Terminal instance and navigate to the root directory of the downloaded project.
6. Enter the command `gulp dist` to start the local server using the dist build.

### Part 1: Optimize PageSpeed Insights score for index.html

#### Run PSI

- Option 1:
_Note: Google PSI no longer displays the speed score for ngrok sites, but you will be able to see the optimization score and suggestions.

1. Open a new Terminal instance and navigate to the dist directory of the downloaded project.
2. Enter the command `ngrok http 8000`.
3. Open Chrome or your desired browser.
4. Navigate to the following url: [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
5. Copy and paste the http or https value for the 'forwarding' keys into the required input field and press the Analyze button.

- Option 2:
1. Open a new Terminal instance and navigate to the dist directory of the downloaded project.
2. Enter the command `ngrok http 8000`.
3. Copy the http or https value for the 'forwarding' keys.
4. Open `gulpfile.js` and replace the url passed to the psi function in the psi gulp task.
5. Open a new Terminal instance and navigate to the root directory of the downloaded project.
6. Enter the commmand `gulp psi` and wait for the report to be generated.
7. Reopen `gulpfile.js` and replace the `strategy` key with either `mobile` or `desktop` depending on which your an first.

#### Results

Please see the screenshots in the [results](./results) directory of this repository.

- At a glance:
	- PSI Mobile
		- SPEED: 95
		- USABILITY: 100
	- PSI Desktop
		- SPEED: 95


####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
