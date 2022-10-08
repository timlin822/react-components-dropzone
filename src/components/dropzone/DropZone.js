import {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

import Error from 'components/error/Error';

import './DropZone.css';

const DropZone=({error,setError,setImages,setPreviewImages,submitHandler})=>{
    const onDrop=useCallback(async(acceptedFiles)=>{
        setError("");
        const types=["image/jpg","image/jpeg","image/png"];

        if(acceptedFiles.every(file=>types.includes(file.type))){
            setImages(acceptedFiles);
            setPreviewImages(acceptedFiles.map(file=>URL.createObjectURL(file)));
        }
        else{
            setImages([]);
            setPreviewImages([]);
            return setError("請選擇正確圖片格式");
        }
    },[]);

    const {getRootProps,getInputProps,isDragActive}=useDropzone({
        onDrop,
        accepts: "image/*",
        multiple: true
    });

    return (
        <div className="image-input">
            <div {...getRootProps()} className={isDragActive?"dropzone dropzone-active":"dropzone"}>
                <input {...getInputProps()} />
                <p>上傳圖片</p>
            </div>
            {error && <Error error={error} setError={setError} />}
            <button type="submit" className="btn" onClick={submitHandler}>上傳</button>
        </div>
    );
}

export default DropZone;