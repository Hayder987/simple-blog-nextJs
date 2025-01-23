const { default: axios } = require("axios")

export const getPost = async()=>{
 const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
 return data
}