import Link from 'next/link'

const AllEventsPage = () => {
  const events = [
    {
      id: 'golf1',
      name: 'Golf Somerset',
    },
    {
      id: 'code1',
      name: 'Code Plymouth',
    },
  ]
  return (
    <div>
      <h1>All Events Page</h1>
      <ul>
        {events.map((event) => {
          return (
            <li key={event.id}>
              <Link href={`/events/${event.id}`}>{event.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default AllEventsPage
