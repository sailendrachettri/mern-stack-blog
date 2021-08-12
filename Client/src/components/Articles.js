import React from 'react';
import { NavLink } from 'react-router-dom';

function Articles({articles}) {
    return (
        <>
            {articles.map((article, index) => (
                <div key={index} className="p-4 md:w-1/2">
                    <div className="h-full border-2 border-grey-200 border-opacity-60 rounded-lg overflow-hidden">

                        {/* Adding thumbnail */}
                        <NavLink to={`/article/${article.name}`}>
                            <img src={article.thumbnail} alt="blog img" className="lg:h-48 md:h-36 w-full object0-cover object-center" />
                        </NavLink>

                        {/* Adding title */}
                        <div className="p-6">
                            <NavLink key={index} to={`/article/${article.name}`}>
                                <h3 className="title text-lg font-medium text-gray-900 mb-3">
                                    {article.title}
                                </h3>
                            </NavLink>
                        </div>

                        {/* Description */}
                        <p className="leading-relaxed mb-3">
                            {article.content[0].substring(0, 110)}...</p>

                        {/* Learn more button */}
                        <NavLink className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" to={`/article/${article.name}`}>
                            Learn more...
                        </NavLink>


                    </div>
                </div>
            ))};
        </>
    );
}

export default Articles;