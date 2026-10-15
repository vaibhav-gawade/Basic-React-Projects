import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        appwriteService.getAllPost([]).then((response) => {
            if (response && response.documents) {
                setPosts(response.documents);
            }
        }).catch((err) => {
            console.log("Home error:", err);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="w-full py-20 text-center text-white">
                <p>Loading...</p>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <h1 className="text-2xl font-bold text-white">
                        YOUR ALL CAUGHT UP...
                    </h1>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;