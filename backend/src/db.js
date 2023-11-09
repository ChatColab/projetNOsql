import { MongoClient } from 'mongodb'
import 'dotenv/config'
import { createClient } from 'redis'

const url = process.env.MONGO_URL
const clientMongo = new MongoClient(url)

const dbName = 'Stocks'
try {
  await clientMongo.connect()
  console.log('Mongo Client Connected')
} catch (err) {
  console.error('Mongo Client Error', err)
}
const db = clientMongo.db(dbName)

export const mongo = db.collection('Legumes')

// const clientRedis = createClient({
//   password: process.env.REDIS_PASSWORD,
//   socket: {
//     host: process.env.REDIS_HOST,
//     port: process.env.REDIS_PORT,
//   },
// })
//
// clientRedis.on('error', (err) => console.log('Redis Client Error', err))
//
// clientRedis.on('connect', () => console.log('Redis Client Connected'))
//
// await clientRedis.connect()
//
// export const redis = clientRedis
