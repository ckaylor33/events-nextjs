import { Fragment } from 'react'

import { getEventById, getFeaturedEvents } from '../../helpers/api-util'
import Button from '../../components/ui/button'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/ui/error-alert'

const SpecificEvent = (props) => {
  const event = props.selectedEvent

  if (props.selectedEvent === null) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No event listed!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  if (!event) {
    return (
      <div className='center'>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}
export default SpecificEvent

export async function getStaticProps(context) {
  const { params } = context
  const eventId = params.eventId
  const event = await getEventById(eventId)

  return {
    props: {
      selectedEvent: event || null,
    },
    revalidate: 30,
  }
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents()
  const paths = events.map((event) => ({ params: { eventId: event.id } }))
  return {
    paths: paths,
    fallback: 'blocking',
  }
}
