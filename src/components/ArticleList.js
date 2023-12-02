function ArticleList({ posts }) {
    return (
        <>
            <main>
                <article>
                    {posts.map((post) => {
                        return (
                            <>
                                <h3>{post.title}</h3>
                                <small>{post.date}</small>
                                <p>{post.preview}</p>
                            </>
                        )
                    })}
                </article>
            </main>
        </>
    )
}

export default ArticleList;