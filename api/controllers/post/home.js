module.exports = async function(req, res) {
  sails.log.info("Show the post creation form")

  const allPosts = await Post.find().sort('createdAt DESC')
  res.view('pages/post/home', {
    allPosts
  })
}
