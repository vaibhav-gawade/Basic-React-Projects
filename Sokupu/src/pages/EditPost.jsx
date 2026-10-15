import React,{useState,useEffect} from 'react';
import {Container,PostForm} from '../components';
import appwriteService from '../appwrite/config';
import { useParams,useNavigate } from 'react-router-dom';

function EditPost () {
    const [posts,setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(slug) {
            appwriteService.getPost(slug).then((posts) => {
                if(posts) {
                    setPosts(posts);
                } else {
                    navigate("/");
                }
            }).finally(() => {
                setLoading(false);
            })
        }else {
            navigate("/");
        }
    },[slug,navigate]);

    if (loading) {
        return (
            <div className="w-full py-20 text-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                <p className="mt-4 text-gray-600 font-medium">Loading post...</p>
            </div>
        );
    }

    return (
        <div className="w-full p">
            <Container>
                <div className="flex flex-wrap">
                    <PostForm post={posts}/>
                </div>
            </Container>
        </div>
    )
}

export default EditPost;