module.exports = {
    query: `
    query ListTodos(
      $filter: ModelTodoFilterInput
      $limit: Int
      $nextToken: String
    ) {
      listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
          id
          name
          description
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  `
}