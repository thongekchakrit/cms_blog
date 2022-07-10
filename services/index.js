import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async ( ) => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
      
    `

  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges;
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last:3
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
      
    }
  `
  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges;
}