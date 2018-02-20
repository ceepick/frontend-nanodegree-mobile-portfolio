## Website Performance Optimization portfolio project

My optimization project for your review. This is my last project for this course! It's been fun and thanks for all your help!

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

_Note: Google PSI no longer displays the speed score for ngrok sites, but you will be able to see the optimization score and suggestions._

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
7. Reopen `gulpfile.js` and replace the `strategy` key with either `mobile` or `desktop` depending on which you ran first.

#### Optimizations

Please see the [commit log](https://github.com/ceepick/frontend-nanodegree-mobile-portfolio/commits/master) for line item changes.

- Added [gulp tasks](gulpfile.js) to perform the following:
	- uglify js
	- minify and inline css
	- minify html
	- reduce the size of the pizzeria image
- Updated the [index file](index.html)
	- mark scripts as async
	- comment hooks for gulp tasks (ex: smoosher)

#### Results

Please see the screenshots in the [results](results) directory of this repository.

- At a glance:
	- PSI Mobile
		- SPEED: 95
		- USABILITY: 100
	- PSI Desktop
		- SPEED: 95


### Part 2: Optimize Frames per Second in pizza.html

#### Validate Performance Setup

1. Repeat relevant steps from Setup to start the application from the dist build.
2. Open Chrome.
3. Navigate to the following url: [pizza view](http://localhost:8000/views/pizza.html).
4. Open developer tools (`CMD + OPTION + I`).
5. Select the `Performance` tab.

- Slider Jank

1. Find the slider under the 'Our Pizzas' section.
2. Slide it as many times as you want between the 3 options.
3. Reference the console log for performance metrics.

- Scrolling Jank

1. Press the record button (should appear as a black dot) in developer tools to begin the trace.
2. Scroll the page up and down as much as desired.
3. Press the `Stop` button in developer tools to stop the trace.
4. Reference the performance data displayed in the dev tools.

#### Optimizations

Please see the [commit log](https://github.com/ceepick/frontend-nanodegree-mobile-portfolio/commits/master) for line item changes.

- Use css to capitalize the names of the pizzas in place of the js function.
- Convert querySelector and querySelectorAll calls to more performant getElementById and getElementsByClassName functions.
- Move data setup and repetitive logic outside of loops.
- De-nest and remove unnecessary functions.
- Reduce the number of pizzas shown with consideration of the available screen width and height.
- Debounce the scroll listener function.

#### Results

Please see the screenshots in the [results](results) directory of this repository.

- At a glance
	- Consistant ~60fps when scrolling.
	- Time to resize pizzas is generally less than 5ms.
		- _Note: the initial movement of the slider performs greater than 5ms, but every subsequent movement registers at .5 or below._




