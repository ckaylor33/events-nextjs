import { useRouter } from 'next/router'

const SpecificEvent = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h1>Specific Event Page</h1>
      <p>Event</p>
    </div>
  )
}
export default SpecificEvent
