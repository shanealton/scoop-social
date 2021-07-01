module.exports = async function(req, res){
  sails.log.info("Listing all users")

  //Fetch all users using Waterline ORM
  const users = await User.find({})
  res.send(users)
}
