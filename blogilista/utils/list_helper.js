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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}