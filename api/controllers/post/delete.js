module.exports = async function(req, res) {
  console.log("Let's delete our post object!")

  const postId = req.param('postId')
  console.log("Deleting Post with ID: " + postId)
  try {
    await Post.destroy({id: postId, user: req.session.userId})
    res.end()
  } catch(err) {
    res.serverError(err.toString())
  }
}
