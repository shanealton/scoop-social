module.exports = async function(req, res) {
  const postBody = req.body.postBody
  sails.log.info("Create post object: " + postBody)

  const file = req.file('imagefile')

  //Local ENV-var
  const key = process.env.AWS_KEY
  const secret = process.env.AWS_SECRET

  //Skipper-Better-S3
  const options =
  { // This is the usual stuff
    adapter: require('skipper-better-s3')
    , key: key
    , secret: secret
    , bucket: 'scoop-social'
    // Let's use the custom s3params to upload this file as publicly
    // readable by anyone
    , s3params:{ ACL: 'public-read' }
    // And while we are at it, let's monitor the progress of this upload
    , onProgress: progress => sails.log.verbose('Upload progress:', progress)
  }

  file.upload(options, async (err, files) => {
    if (err) { return res.serverError(err.toString())}
    //Success

    var fileUrl = ''
    try {
       fileUrl = files[0].extra.Location
     } catch (error) {
       fileUrl = ''
     }

    const userId = req.session.userId

    await Post.create({
      text: postBody,
      user: userId,
      imageUrl: fileUrl
    }).fetch()

    res.redirect('/post')
  })
}
