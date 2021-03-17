import React from 'react'
import Layout from '../components/Layout'
import blog3_info from '../../site/blog3/blog_3.json'

const Blog3test = () => (
  <Layout>
    <div>
      <h1>Blog3</h1>
    <h2>{blog3_info.title}</h2>
    <span>{blog3_info.date}</span>
    <p>{blog3_info.description}</p>
    <p>{blog3_info.body}</p>
    </div>
  </Layout>
)

export default Blog3test
