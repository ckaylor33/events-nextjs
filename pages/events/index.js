import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'

import { getAllEvents } from '../../helpers/api-util'

const AllEventsPage = (props) => {
  const router = useRouter()
  const { events } = props

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name='description'
          content='Find a lot of great events in your area.'
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}
export default AllEventsPage

export async function getStaticProps() {
  const allEvents = await getAllEvents()

  return {
    props: {
      events: allEvents,
    },
    revalidate: 60,
  }
}
