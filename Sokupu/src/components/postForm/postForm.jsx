import React,{useCallback,useEffect} from 'react';
import {Button,Input,Select,RTE} from '../index.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import appwriteService from '../../appwrite/config.js';
import { useForm } from 'react-hook-form';

export default function PostForm ({post}) {
    const {register,handleSubmit,watch,setValue,control,getValues} = useForm({
        // here we see if the post is already there then we default keep the same value i.e in this case we are updating but if the post is not given it means that the user is creating the new post and hence in that case what we do is keep the default all the values as the blank in the form so that the user can fill them all
        defaultValues: {
            title : post?.title || '',
            slug : post?.slug || '',
            content : post?.content || '',
            status : post?.status || 'active',
        },
    })

    const navigate = useNavigate();
    // when we login the reducer has the session which it store in the store so there the reducers are named as the auth so by the state.auth.userData we get the userData of the current logged in user.
    const userData = useSelector(state => state.auth.userData);

    const submit = async (data) => {
        if(post) {          // for updating the old post
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null;
            if(file) {
                // we remove teh old photo not the post we have so that the space over there is cleaned up
                appwriteService.deleteFile(post.featuredImage);
            }
            const dbPost = await appwriteService.updatePost(
                post.$id, {
                    ...data,
                    featuredImage : file ? file.$sid : undefined
                }
            )

            if(dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {        // in case we have to create the new post
            const file = await appwriteService.uploadFile(data.image[0]);

            if(file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id,
                })

                if(dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if(value && typeof(value) === 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/^[a-zA-Z\d]+/g,'-');
        }

        return '';
    },[]);
    
    useEffect(() => {
        const subscription = watch((value,{name}) => {
            if(name === 'title') {
                setValue('slug',slugTransform(value.title, 
                    {shouldValidate:true}
                ))
            }

            return () => {
                subscription.unsubscribe();
            }
        })
    }, [watch,slugTransform,setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input 
                    label = "Title"
                    placeholder = "Title"
                    className = "mb-4"
                    {...register('title',{required:true})}
                />

                {/* it updates on its own but if we want like or if the user want to have the own url then we also give the facility for the user to do so by this it is automatically updating when we write the title but if we want then we can change it also */}
                <Input 
                    label = "Slug"
                    placeholder = "slug"
                    className = "mb-4"
                    {...register('slug',{required:true})}
                    onInput={(e) => {
                        setValue('slug',slugTransform(e.currentTarget.value),{
                            shouldValidate:true
                        });
                    }}
                />

                <RTE 
                    label="Content"
                    name="Content" 
                    control={control} 
                    defaultValue={getValues('content')}
                />
            </div>

            <div className="w-1/3 px-2">
                <Input 
                    label="Image"
                    type="file"
                    className="mb-4"
                    accept="image/jpg, image/png, image/jpeg, image/gif"
                    {...register("image",
                    {required: !post})}
                />

                {post && (
                    <div className="w-full mb-4">
                        <img 
                            src={appwriteService
                                .getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}

                {/* It allows user to keep the post public or private */}
                <Select 
                    options={['Active','Inactive']}
                    label="Status"
                    className="mb-4"
                    {...register("status",{required:true})}
                />
                
                {/* check about the background color of the button when the post is there or not there */}
                <Button 
                    type="submit"
                    className="w-full"
                >
                    {post ? "Update" : "Post"}
                </Button>
            </div>
        </form>
    )
}