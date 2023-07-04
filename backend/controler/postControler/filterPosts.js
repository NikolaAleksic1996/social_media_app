const PostModel = require('../../models/postModel');
const { joinPostUser, joinLikesPost } = require('../../stages/joins');

const filterPosts = (req, res) => {
	const { tags } = req.query;
	let query = [];
	if (typeof tags === 'string') {
		query = [{ $match: { 'tags.name': tags } }];
	} else {
		tags.forEach((tag) => {
			// query.push({$match: {$expr: {$in: [tag, "$tags.name"]}}})
			query.push({ $match: { 'tags.name': tag } });
		});
	}
	PostModel.aggregate([...query, ...joinPostUser, ...joinLikesPost])
		.then((post) => {
			res.send(post);
		})
		.catch((error) => {
			console.log(error);
		});
};

module.exports = filterPosts;
