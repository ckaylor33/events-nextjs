import Head from 'next/head'

import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list'

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>Eventer</title>
        <meta
          name='description'
          content='Find a lot of great events in your area.'
        />
      </Head>
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
