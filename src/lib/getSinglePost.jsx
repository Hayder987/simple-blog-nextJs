const { default: axios } = require("axios")

export const getSinglePost = async (id)=>{
  const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return data
}