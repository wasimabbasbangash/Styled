export const MODEL_QUERY = `query{
    models{
      data{
        attributes{
          Name,Fee,Age,Country,Slug,Photo{
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