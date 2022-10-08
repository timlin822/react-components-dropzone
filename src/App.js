import {useState,useEffect} from 'react';
import {ToastContainer} from 'react-toastify';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DropZone from 'components/dropzone/DropZone';
import ImagesList from 'components/image/ImagesList';

import './App.css';

function App() {
  const [images,setImages]=useState([]);
  const [previewImages,setPreviewImages]=useState([]);
  const [error,setError]=useState("");

  useEffect(()=>{
    setError("");
  },[]);

  const submitHandler=async(e)=>{
    e.preventDefault();

    if(images.length===0){
      return setError("請選擇圖片");
    }

    toast.success("call api",{position: toast.POSITION.TOP_CENTER,autoClose: 3000});
    
    setTimeout(()=>{
      setImages([]);
      setPreviewImages([]);
    },3000);
  };

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <DropZone error={error} setError={setError} setImages={setImages} setPreviewImages={setPreviewImages} submitHandler={submitHandler} />
        <ImagesList previewImages={previewImages} />
        <ToastContainer />
      </div>
    </section>
  );
}

export default App;