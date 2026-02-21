const Header =() => {
    return <h1>Dugsiiye Blog</h1>
}

const Footer = () => {
    return <h4>Copyright Dugsiiye all rights Reserved.</h4>
}

const Post = () => {
    return (
        <>
        <h1>Blog Post</h1>
        <p>The Text Block is a block that you can add to your blog post that will allow you add text to your blog post. It acts the same as the other blocks inside Narrative in that all you need to do is drag it into the layout and then double click to edit. In the right-hand panel you will see a few options around formatting.</p>
        
        </>
    )
}

const Blog = () => {
    return(
        <div>
            <Header />
            <Post />
            <Footer /> 
        </div>
    )
}

export default Blog;