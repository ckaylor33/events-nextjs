function handler(req, res) {
  const eventId = req.query.eventId
  if (req.method === 'POST') {
    const { email, name, text } = req.body
    // add server-side validation - improve
    if (
      !email.includes('@') ||
      !name ||
      !name.trim() === '' ||
      !text ||
      !text.trim() === ''
    ) {
      res.status(422).message({ message: 'Invalid input.' })
      return
    }
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    }
    console.log(newComment)
    res.status(201).json({ message: 'Added comment.', comment: newComment })
  } else if (req.method === 'GET') {
    const dummyList = [
      {
        id: 'c1',
        name: 'Charlie',
        text: 'Message to mars!',
      },
      {
        id: 'c2',
        name: 'Agne',
        text: 'Message to venus!',
      },
    ]
    res.status(200).json({ comments: dummyList })
  }
}
export default handler
