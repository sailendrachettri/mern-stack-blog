import React, { useState, useEffect } from 'react';
import AddCommentForm from '../components/AddCommentForm';
import Articles from '../components/Articles';
import CommentsLists from '../components/CommentsLists';
import articlecontent from './ArticleContent';
import NotFound from './NotFound';

function Article({ match }) {

    const name = match.params.name;
    const article = articlecontent.find((article) => article.name === name)

    const [articleInfo, setArticleInfo] = useState({ comments: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();

            console.log(body);

            setArticleInfo(body);
        };
        fetchData();
    }, [name]); 

    if (!article) return <NotFound />;

    // Filtering the article. Don't show the article in related post which is current open here.
    const otherArticles = articlecontent.filter(article => article.name !== name);

    return (
        <>
            {/* Article heading in the page */}
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-grey-900">
                {article.title}
            </h1>

            {/* Article contend of body */}
            {article.content.map((paragraph, index) => (
                <p className="mx-auto leading-relaxed  text-base mb-4" key={index}>
                    {paragraph}
                </p>
            ))};

            {/* Displaying comments */}
            <CommentsLists comments={articleInfo.comments} />
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />

            {/* Other related articles heading */}
            <h1 className="sm:text-2x text-xl font-bold mt-4 text-grey-900">
                Related Articles
            </h1>

            {/* Other related article posts or preview*/}
            <div className="flex flex-wrap -m-4">
                <Articles articles={otherArticles} />
            </div>
        </>
    );
}

export default Article;