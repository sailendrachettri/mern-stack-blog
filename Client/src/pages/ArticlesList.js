import React from 'react';
import articleContent from './ArticleContent';
import Articles from '../components/Articles';

function ArticlesList() {
    return (
        <>
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-grey-900">ArticlesList</h1>

            <div className="container mx-auto py-4">
                <div className="flex flex-wrap -m-4">
                    <Articles articles={articleContent} />
                </div>
            </div>
        </>
    );
}

export default ArticlesList;