import ImageCard from './ImageCard';

import './Image.css';

const ImagesList=({previewImages})=>{
    return (
        <div className="image-grid">
            {previewImages.map((image,index)=>(
                <ImageCard key={index} image={image} />
            ))}
        </div>
    );
}

export default ImagesList;