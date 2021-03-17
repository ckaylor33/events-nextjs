Events based site for Developers to meet up (Covid appropriate) - goal to use nextjs best practices while building a potentially useful project. Also explore a number of supposed benefits from using nextjs; routing, server-side rendering<br>
Plan<br>
<br>

Routing<br>
-Starting page showing featured events (/)<br>
-Events page showing all events; user clicks on event and finds out more info about that event, potentially sign up and book the event(/events); leads on to dynamic events detail page<br>
-Event detail page showing the selected event(/events/<some-id>)<br>
-Page showing filtered events by year and month(/events/...slug)<br>
<br>

Styling<br>
-Will use module based CSS styling for this project, due to ease of use with nextjs, easy to find and track individual components styling<br>
<br>

Server-side rendering/static generation and data-fetching<br>
-If working with a large amount of data on the backend, it might take a second or two to load for normal react applications. User experience would be improved by having that data already loaded on the server.<br>
-Search engine optimisation also improved if the content of the application matters; want search engines to see and index the content. Could be a blog or shop etc. <br>
-Homepage; static and revalidated. Should be understood by search engine crawlers, and visitors should be able to see something on the site instantly. Data not user specific or data behind log in screen etc. <br>
-All events page: <br>
-Event details: individual events page important for search engines<br>
-Filtered events: getServerSideProps or client-side rendering
