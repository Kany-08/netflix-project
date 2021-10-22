# The Netflix Clone project


Please find below the project description and a guide on how to develop the project.


## Project description


Please build a baby Netflix!

We want to be able to view some series, seasons and episodes.

We will develop it fullstack, so we will build a frontend for browsing series and episodes & and a backend with a database of series, seasons and episodes to watch + an express app to serve these to a frontend.


## Project structure


We will realize our Netflix clone in three progressing versions.


### Basic version


The basic version should be our first prototype, where we are able to navigate through our Series UI, select a season, view the episode titles and display the detailed description of an episode.

The basic version is REQUIRED as project outcome.


### Medium Version


In this advanced version we want to include media. So we will include now some image for each series, serve them via the backend and load them in the frontend.

The advanced version is DESIRED as project outcome.


### Premium Version


In the premium version we will add now video streaming as icing-on-the-cake.

We will be able to view episode videos in our frontend using the HTML video tag. The episode videos will be streamed by the backend using a NodeJS filestream.

The premium version is the OPTIONAL but outstanding project outcome :-)



## Pages & Features to build



### Getting started


The following tasks can either be separated between team members or be done together. But it is highly recommended to at least dicuss these things together before starting off.


- Plan & sketch the UI pages (see page functionality description in the coming section "Basic Version")
  
- Prepare the datamodel
  _ Identify data entities
  _ Identifiy relationships between entities
  
- Sketch a Data Model using either...
  _ Pen & Paper
  _ Figma \* or even the famous old-style Microsoft Paint - in Javascript: [https://jspaint.app/](https://jspaint.app/))
  
  

### Basic Version



- Frontend:
  
  _ Create a branch in the main project folder, e.g. `git checkout -b frontend-basic-version`
  
  _ Create an react app within the project folder "ui"
  _ Cd into the folder ui
  _ Type `npx create-react-app .`
      * Setup three pages / components
          * A series overview page showing all series in our database
              * Each series should have a seasons dropdown
              * When selecting a season we want to get forwarded to the episodes overview
          * An episodes overview page showing all episodes of a season with the episode titles
          * An episode detail page which shows the episode title & episode description

      * Implement React-Router to switch between the pages
  
  _ Display Series & Episodes data
  _ use localStorage instead of connecting to a backend (as long backend has not delivered an API for you yet)
  
  Example: Series overview (from Netflix):
  
  (Yours - of course - can be much simpler and for beginning probably just be a list)
  
  ![Video playlist Netflix](https://miro.medium.com/max/1980/0*dg93Y74EKQD50dC-)
  
  
  
- Backend:
  _ Create a branch in the main project folder, e.g. `git checkout -b backend-basic-version`
  _ Cd into the folder "api" of your project
  _ Install express and mongoose
  _ Setup a basic express app
  _ Create the mongoose models
  _ Seed in some series, seasons and episodes
  _ Either use a /seed route or
  _ Test if the data is visible in Compass
  _ Create routes to fetch
  _ Commit your changes and push your branch
  
  
- Frontend-Backend integration
  
  _ Frontend
  _ commits all work
  _ opens a second terminal in vscode (by the + sign in the menu bar of the terminal)
  _ fetches the changes from backend using git fetch
  _ merges the backend branch into frontend branch
  _ now code of frontend and backend should both be available in project folder
  _ steps into "api" folder and runs backend using "node server.js"
  _ now replace all calls to localStorage (or whatever prototype data source) by fetch calls to the real API
  _ Working?
  _ Finalize the frontend branch, commit all changes and merge the frontend branch into master
  _ Push the master branch
  
  _ Backend
  _ Commit any last changes that you made on your backend branch
  _ Checkout and pull the master
  _ Start the backend react app. Then - on another vscode terminal - frontend
  _ Test in the browser if the page works for you too \* If not: troubleshoot together
  
  

### Advanced / Medium Version



- All (Frontend & Backend):
  
  _ Pick & download some images from a free image service, e.g. pixabay
  _ Each image will represent a series (do not fetch images for every season and every episode for now) \* Download .jpg files only
  
- Frontend
  
  _ Show an image per series in your series overview page
  _ Use placeholder images in the beginning
  _ Note: The images later will get be served by the backend
  _ Bonus: Implement a carousel in your series overview to slide through the series collection, e.g. with bootstrap: \* [Bootstrap Carousel](https://www.w3schools.com/bootstrap/bootstrap_carousel.asp)
  
  
- Backend
  
  _ Create a folder "public" within your API project directory (=> /api)
  _ Create a subfolder "img"
  _ Store all download jpg images in the "img" folder
  _ Make sure all have the extension jpg (and not some jpeg, if so: rename them to jpg)
  _ Name the images
  _ Each image should have the ID of the series as name
  _ Example: Series "The Witcher" has the Id "abcdef" in your database:
  _ Name the corresponding image "abcdef.jpg"
  _ Read about: [Static Files serving in ExpressJS](https://expressjs.com/en/starter/static-files.html)
  _ Following the guide: Setup serving of images in your express app \* Test if you can access your images over the browser
  
  
- Frontend-Backend Integration:
  
  _ Exchange the backend code again
  _ Frontend will now start the backend on their PC to test it
  _ Replace your frontend image urls by the urls of the backend:
  _ e.g. `<img src="http://localhost:3000/img/abcdef.jpg" />` \* Test the display of the images in your frontend
  
  

### Premium Version



#### Episode video playing

We now - additionally to title, series image & episode description - also want to display the episode video.


- All (Frontend & Backend)
  _ Research & download some dummy video files (="fake episodes")
  _ download some videos e.g. here: [Pexels](https://www.pexels.com/videos/)
  _ Prefered: One for each episode you provide. But at least 5 episode videos.
  _ Prefered: Collect videos with the same video extension, e.g. mp4, mov or avi (will make your life much simpler)
  
- Frontend
  _ Implement an HTML5 video player in the episode detail page
  _ Research the HTML5 video tag \* Finalize your page layouts or help the backend with the research on the streaming task (see below)
  
- Backend
  _ Create a new folder in "public" and name it "vid"
  _ Store the downloaded videos in this folder
  _ Name each video by the ID of the episode
  _ E.g. the file "hello.mp4" belonging to the episode "xyz" will get renamed to xyz.mp4
  _ Provide a route "/episode/video/:id to stream a video
  _ It should be callable by the ID of the episode
  _ e.g an call to /episode/video/xyz will look
  _ Make the video "jumpable" so you can move to any spot in time \* do that by allowing so called "range requests" => search for the corresponding code snippets in the "lessons" Slack channel
  
- Frontend Backend integration
  _ Exchange backend code
  _ Frontend starts and tests backend video routes
  _ Frontend makes the URL in the episode video player dynamic:
  _ Use the backend URL and append the episode-id,
  _ e.g. src="http://localhost:3000/episode/video/xyz.mp4"
  _ the last part "xyz.mp4" you append dynamically depending on the episode page you are currently watching
  
  GOOD LUCK!