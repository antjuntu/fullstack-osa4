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

describe('favorite blog', () => {
  const listWithOneBlog = []
  listWithOneBlog[0] = blogs[0]

  test('of empty list is undefined', () => {
    const result = listHelper.favoriteBlog([])

    expect(result).toBeUndefined()
  })

  test('when there is only one blog is calculated right', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog)

    expect(result).toEqual({
      title: 'React patterns',
      author: 'Michael Chan',
      likes: 7
    })
  })

  test('when there is many blogs is calculated right', () => {
    const result = listHelper.favoriteBlog(blogs)

    expect(result).toEqual({
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12
    })
  })
})

describe('most blogs', () => {
  const listWithOneBlog = []
  listWithOneBlog[0] = blogs[0]

  test('of empty list is undefined', () => {
    const result = listHelper.mostBlogs([])

    expect(result).toBeUndefined()
  })

  test('when there is only one blog is calculated right', () => {
    const result = listHelper.mostBlogs(listWithOneBlog)

    expect(result).toEqual({
      author: 'Michael Chan',
      blogs: 1
    })
  })

  test('when there is many blogs is calculated right', () => {
    const result = listHelper.mostBlogs(blogs)

    expect(result).toEqual({
      author: 'Robert C. Martin',
      blogs: 3
    })
  })
})