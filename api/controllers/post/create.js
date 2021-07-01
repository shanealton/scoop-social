module.exports = async function(req, res) {
  const postBody = req.body.postBody
  sails.log.info("Create post object: " + postBody)

  //Waterline: create promise object for post body
  const userId = req.session.userId
  await Post.create({text: postBody, user: userId}).fetch()
  res.redirect('/post')
}
