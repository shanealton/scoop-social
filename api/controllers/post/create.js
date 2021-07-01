module.exports = async function(req, res) {
  const postBody = req.body.postBody
  sails.log.info("Create post object: " + postBody)

  //Waterline: create promise object for post body
  await Post.create({text: postBody}).fetch()
  res.redirect('/post')
}
