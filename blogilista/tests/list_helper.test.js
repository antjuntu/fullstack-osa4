const listHelper = require('../utils/list_helper')
const blogs = require('./blogs')

describe('total likes', () => {
  const listWithOneBlog = []
  listWithOneBlog[0] = blogs[0]

  test('of empty list is 0', () => {
    const result = listHelper.totalLikes([])

    expect(result).toBe(0)
  })

  test('of list with only one blog is calculated right', () => {
    const result = listHelper.totalLikes(listWithOneBlog)

    expect(result).toBe(7)
  })

  test('of list with many blogs is calculated right', () => {
    const result = listHelper.totalLikes(blogs)

    expect(result).toBe(7 + 5 + 12 + 10 + 0 + 2)
  })
})