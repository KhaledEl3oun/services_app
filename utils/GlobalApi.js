import { request, gql } from 'graphql-request'

const MASTER_URL = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clv5783g60dex08w7zl9ca35t/master';

const getSlider = async()=> {
    const Query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
    `
    const result = await request(MASTER_URL, Query)
    return result;
}
const getBusniessList = async()=> {
    const Query = gql`
    query busniessList {
      busniessLists {
        id
        name
        email
        contactPerson
        address
        about
        image {
          url
        }
      }
    }
    `
    const result = await request(MASTER_URL, Query)
    return result;
}


const getCategory = async () =>{
  const Query = gql`
  query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  `
  const result = await request(MASTER_URL,Query)
  return result;
}
export default {
    getSlider,
    getCategory,
    getBusniessList
}