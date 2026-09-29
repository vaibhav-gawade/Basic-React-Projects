import {React,useEffect,useState} from "react";
import {useLoaderData} from "react-router-dom";

export default function Github() {
    const Data = useLoaderData();   // it fethces the data taken by the githubLoader function and returns it to the component

    // useEffect(() => {
    //     fetch("https://api.github.com/users/vaibhav-gawade")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setData(data);
    //     })
    // },[]);

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">GitHub User Info</h1>
                <p className="text-gray-700 mb-2"><strong>Username:</strong> {Data.login}</p>
                <p className="text-gray-700 mb-2"><strong>Public Repos:</strong> {Data.public_repos}</p>
                <p className="text-gray-700 mb-2"><strong>Followers:</strong> {Data.followers}</p>
                <p className="text-gray-700 mb-2"><strong>Following:</strong> {Data.following}</p>
                <a href={Data.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Profile
                </a>
            </div>
        </main>
    )
}

export const GithubLoader = async () => {
    const response = await fetch("https://api.github.com/users/vaibhav-gawade");

    return response.json();
}

// this gives the data to the component which is fetched from the api and we can use it in the component using useLoaderData hook.