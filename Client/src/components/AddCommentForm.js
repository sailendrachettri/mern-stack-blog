import React, { useState } from 'react';

function AddCommentForm({articleName, setArticleInfo}) {

    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comments`, {
            method: "post",
            body: JSON.stringify({username, text: commentText}),
            headers:{
                "Content-Type" : "application/json",
            },
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    };

    return (
        <>
            <form action="" className="shadow rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-xl font-bold mb-4 text-gray-900">Add a Comment</h1>
                <label className="block text-green-700 text-sm font-bold mb-2">Name:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none foucs:shadow-outline" />
                <label className="block text-green-700 text-sm font-bold mb-2">Comment: </label>
                <textarea cols="50" rows="4" value={commentText} onChange={(e) => setCommentText(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none foucs:shadow-outline"></textarea>
                <button onClick={() => addComment()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none foucs:shadow-outline ">Add Comment</button>

            </form>
        </>
    );
}

export default AddCommentForm;