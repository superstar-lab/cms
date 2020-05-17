import gql from 'graphql-tag'

export const GET_WORDS = gql`
  query words {
    words {
      _id
      name
      category {
        _id
        name
        color
        description
        __typename
      }
      __typename
    }
  }
`

export const GET_WORD = gql`
  query word($_id: GraphQLObjectId!) {
    word(_id: $_id) {
      _id
      name
      category {
        _id
        name
        color
        description
        __typename
      }
      __typename
    }
  }
`

export const GET_CATEGORIES = gql`
  query categories {
    categories {
      _id
      name
      color
      description
      __typename
    }
  }
`

export const GET_CATEGORY = gql`
  query category($_id: GraphQLObjectId!) {
    category(_id: $_id) {
      _id
      name
      color
      description
      __typename
    }
  }
`
export const ME = gql`
  query me {
    me {
      _id
      username
      firstName
      lastName
      phone
      address
      country {
        name
        flag
        alpha2Code
      }
      email
      avatar
      __typename
    }
  }
`

export const GET_COUNTRIES = gql`
  query countries {
    countries {
      name
      flag
      alpha2Code
    }
  }
`
