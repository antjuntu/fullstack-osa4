// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((acc, current) => acc + current.likes, 0)
}

const favoriteBlog = (blogs) => {

  if (!blogs || blogs.length === 0) {
    return undefined
  }

  const indexOfMostLikes = blogs.reduce((maxIndex, current, index) => {
    //console.log('maxIndex', maxIndex, 'index', index)
    if (blogs[index].likes > blogs[maxIndex].likes) {
      maxIndex = index
    }
    return maxIndex
  }, 0)

  const { title, author, likes } = blogs[indexOfMostLikes]

  return {
    title,
    author,
    likes
  }
}

const mostBlogs = (blogs) => {
  if (!blogs || blogs.length === 0) {
    return undefined
  }

  const blogsAtAuthor = blogs.reduce((acc, current) => {
    if (current.author in acc) {
      acc[current.author]++
    } else {
      acc[current.author] = 1
    }
    return acc
  }, {})

  //console.log(blogsAtAuthor)

  let max = -1
  let maxAuthor = ''
  for (let name in blogsAtAuthor) {
    if (blogsAtAuthor[name] > max) {
      max = blogsAtAuthor[name]
      maxAuthor = name
    }
  }

  return {
    author: maxAuthor,
    blogs: max
  }
}

const mostLikes = (blogs) => {
  if (!blogs || blogs.length === 0) {
    return undefined
  }

  let maxLikes = -1
  let maxAuthor = ''

  blogs.reduce((acc, current) => {
    if (current.author in acc) {
      acc[current.author] += current.likes
    } else {
      acc[current.author] = current.likes
    }

    if (acc[current.author] > maxLikes) {
      maxLikes = acc[current.author]
      maxAuthor = current.author
    }

    return acc
  }, {})

  return {
    author: maxAuthor,
    likes: maxLikes
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}