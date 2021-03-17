import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list'

const HomePage = (props) => {
  return (
    <div>
      <h1>Featured Events</h1>
      <EventList items={props.featuredEvents} />
    </div>
  )
}
export default HomePage

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  }
}
