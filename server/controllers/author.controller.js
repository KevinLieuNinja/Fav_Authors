const { Author } = require("../models/author.models")

module.exports.index = (req, res) => {
    res.json({
        message: "hello waldo "
    });
}
module.exports.getAllAuthor =(request, response) => {
    Author.find({})
        .then(Author => response.json(Author))
        .catch(err => response(err))
}
module.exports.createAuthor = (request, response) => {
    // const { firstName, lastName } = request.body;
    console.log(request.body)
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err))
}
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators: true, new:true})
        .then(updateAuthor => response.json(updateAuthor))
        .catch(err => response.status(400).json(err))
}
module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
};