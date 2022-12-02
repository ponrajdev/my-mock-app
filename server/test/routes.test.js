const request = require('supertest')
const app = require('../app')
describe('Get Endpoints', () => {
  test('should get the all post', async () => {
    const res = await request(app)
      .get('/api/post/')
      .send({
        data: 1
        
      })
    expect(res.statusCode).toEqual(200)
  })

  test('should get the error if empty response', async () => {
    const res = await request(app)
      .get('/api/post/')
      .send({
        error: 'Error'
        
      })
    expect(res.statusCode).toEqual(400)
  })

})