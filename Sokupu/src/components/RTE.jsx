import React from 'react';
import {Controller} from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';

export default function RTE({name,control,label,defaultValue=""}) {

    return (
        <div className="w-full">
            {label && <label className="ml-1 pl-1">
            {label}</label>}

            <Controller 
                name={name || 'content'}
                control={control}
                render={({field:{onChange}}) => (
                    <Editor
                        apiKey="rgdhuy7nf9tji5eklz1g6sx9xx0fm8cnx1dqoz0exu37pzld"
                        initialValue={defaultValue}
                        init={{
                            height:500,
                            menubar:false,
                            placeholder:"Discribe you post here...",
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount',
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                    'bold italic forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}