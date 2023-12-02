function ArticleList({ posts }) {
    return (
        <>
            <main>
                <article>
                    {posts.map((post) => {
                        const { title, date = "January 1, 1970", preview } = post;
                        return (
                            <>
                                <h3>{title}</h3>
                                <small>{date}</small>
                                <p>{preview}</p>
                            </>
                        )
                    })}
                </article>
            </main>
        </>
    )
}

export default ArticleList;