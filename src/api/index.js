import treo from 'treo'

const schema = treo.schema()
  .version(1)
  .addStore('books', {key: 'id', increment: true})
  .addIndex('byTitle', 'title', { unique: true })
  .addIndex('byDate', 'date')
  .version(2)
  .addStore('category', {key: 'id', increment: true})
  .addIndex('byTitle', 'title', { unique: true })
  .addIndex('byType', 'type')
  .addIndex('byBook', 'bookId')
  .version(3)
  .addStore('notes', {key: 'id', increment: true})
  .addIndex('byContent', 'content')
  .addIndex('byCate', 'catId')

const db = treo('library', schema)

export default db
