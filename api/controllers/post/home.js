module.exports = async function(req, res) {
  sails.log.info("Show the post creation form")

  const userId = req.session.userId
  const allPosts = await Post.find({user: userId}).populate('user').sort('createdAt DESC')

  if (req.wantsJSON) {
    return res.send(allPosts)
  }

  res.view('pages/post/home', {
    allPosts
  })
}
