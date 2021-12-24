const { UserInputError } = require("apollo-server");

const checkAuth = require("../../util/checkAuth");
const Post = require("../../Models/Post");

module.exports = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const { username } = checkAuth(context);
      if (body.trim() === "") {
        throw new UserInputError("Empty Comment!", {
          errors: {
            body: "Comment body must not be empty!",
          },
        });
      }

      const post = await Post.findById(postId);

      if (post) {
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString(),
        });

        await post.save();
        return post;
      } else throw new UserInputError("Post Not Found!");
    },
  },
};
