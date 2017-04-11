/**
 * PostsController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAllPosts: function(req,res){
		Posts.find().exec(function(err,data){
			if(err){
				return res.json(err);
			};

			return res.json(data);
		})
	},
	addPost: function(req, res){
		Posts.create(req.body).exec(function(err,created){
			if(err){
				return res.json(err);
			};
			res.json('success');
		})
	}
};
