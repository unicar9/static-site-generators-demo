import React from 'react'
import Link from 'gatsby-link'

const Template = ({data}) => {
    const post = data.markdownRemark

    return (
        <div>
            <Link to="/blog">Go Back</Link>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <h4>Posted by {post.frontmatter.author}</h4>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    )
} 

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter {
                path
                title
                author
            }
        }
    }
`

export default Template
