export const MODEL_QUERY = `query{
  models{
    data{
      attributes{
        Title,Country,Fee,Description,Slug,Image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}`;

  //$slug means that it will take slug as paramter and ! means that it is required.
  //eq means that it will match the slug with the slug value and filter out only the matched slug.
  export const GET_PRODUCT_QUERY = `
    query getProduct($slug:String!){
      models(filters:{Slug: {eq: $slug}}){  
        data{ 
        attributes{
          Title,Country,Fee,Description,Slug,Image{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
      }
    }
  `
