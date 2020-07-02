/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMyType = /* GraphQL */ `
  mutation CreateMyType(
    $input: CreateMyTypeInput!
    $condition: ModelMyTypeConditionInput
  ) {
    createMyType(input: $input, condition: $condition) {
      id
      title
      content
      price
      rating
      createdAt
      updatedAt
    }
  }
`;
export const updateMyType = /* GraphQL */ `
  mutation UpdateMyType(
    $input: UpdateMyTypeInput!
    $condition: ModelMyTypeConditionInput
  ) {
    updateMyType(input: $input, condition: $condition) {
      id
      title
      content
      price
      rating
      createdAt
      updatedAt
    }
  }
`;
export const deleteMyType = /* GraphQL */ `
  mutation DeleteMyType(
    $input: DeleteMyTypeInput!
    $condition: ModelMyTypeConditionInput
  ) {
    deleteMyType(input: $input, condition: $condition) {
      id
      title
      content
      price
      rating
      createdAt
      updatedAt
    }
  }
`;
