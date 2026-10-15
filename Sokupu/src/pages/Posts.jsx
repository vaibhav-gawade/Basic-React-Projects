import React,{useState,useEffect} from 'react';
import {Button,Container} from '../components';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import appwriteService from '../appwrite/config';
import { Link,useNavigate,useParams} from 'react-router-dom';

function Posts () {
    const [post,setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? userData.$id === post.userId : false;

    useEffect(() => {
        if(slug) {
            appwriteService.getPost(slug).then((post) => {
                if(post) {
                    setPost(post);
                }else {
                    navigate('/');
                }
            });
        } else {
            navigate('/');
        }
    },[navigate,slug]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if(status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate('/');
            } else {
                navigate('/');
            }
        });
    }

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full justify-center mb-4 rounded-xl relative border p-2">
                    <img 
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />
                    {console.log("Preview URL:", appwriteService.getFilePreview(post.featuredImage))}

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button 
                                bgColor ="bg-orange-500"
                                classname="mr-3">
                                    EDIT
                                </Button>
                            </Link>
                            <Button bgColor = "bg-red-500"
                                    onClick={deletePost}>
                                DELETE
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">
                        {post.title}
                    </h1>
                </div>

                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}

export default Posts;