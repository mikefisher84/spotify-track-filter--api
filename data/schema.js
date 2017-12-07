let {buildSchema} = require('graphql')

const schemaString = `
# The root of all queries:
type Query {
  # Just returns "Hello world!"
  hi(message: String = "Hi"): String
  queryArtists(byName: String = "Red Hot Chili Peppers"): [Artist]
  queryTracks(byId: String = "1234"): [Track]
}
type Artist {
  name: String!
  id: ID
  image: String
  albums(limit: Int = 10): [Album]
}
type Album {
  name: String
  id: ID
  image: String
  tracks: [Track]
}
type Track {
  name: String!
  artists: [Artist]
  preview_url: String
  id: ID
}
`
const schema = buildSchema(schemaString)

module.exports = schema
