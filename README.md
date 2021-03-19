Events based site for Developers to meet up (Covid appropriate) - goal to use nextjs best practices while building a potentially useful project. Also explore a number of supposed benefits from using nextjs; routing, server-side rendering<br>
Plan<br>
<br>

## Routing<br>

-Starting page showing featured events (/)<br>
-Events page showing all events; user clicks on event and finds out more info about that event, potentially sign up and book the event(/events); leads on to dynamic events detail page<br>
-Event detail page showing the selected event(/events/<some-id>)<br>
-Page showing filtered events by year and month(/events/...slug)<br>
<br>

## Styling<br>

-Will use module based CSS styling for this project, due to ease of use with nextjs, easy to find and track individual components styling<br>
<br>

## Server-side rendering/static generation and data-fetching<br>

-If working with a large amount of data on the backend, it might take a second or two to load for normal react applications. User experience would be improved by having that data already loaded on the server.<br>
-Search engine optimisation also improved if the content of the application matters; want search engines to see and index the content. Could be a blog or shop etc. <br>
-Homepage; static and revalidated. Should be understood by search engine crawlers, and visitors should be able to see something on the site instantly. Data not user specific or data behind log in screen etc. <br>
-All events page: <br>
-Event details: individual events page important for search engines<br>
-Filtered events: getServerSideProps or client-side rendering<br>
<br>

## Meta data

-Using next/head to inlcude meta data in the different app pages
-Set head in \_app.js to cover all pages and set individual page heads; nextjs merges this and resolves conflicts
-Adding \_document.js; allows you to customize the entire html document<br>
<br>

## Optimising Images<br>

-Have to set width and height on Image - the size you want the page to show so nextjs can optimise<br>
-Generated when they are needed and stored in cache so future requests from similar devices get the already generated image<br>
-Images lazy loaded, if not visible nextjs will not download them<br>
<br>

## API Routes<br>

-Set up input files to handle forms, emails, comments etc. Need to implement functionality that handles incoming email address; accepts the request and frontend sends request. Post requests.<br>
-Need to add another api route that allows users to submit comments, this needs to be dynamic as comments will be for specific events. Id of the event that the comment belongs to will be part of the url of the api route. Again need to handle incoming requests/extract incoming data and handle case that a request is sent to fetch the data. Get and post requests; post adds new comment, get request to fetch comments
