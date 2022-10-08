import './Image.css';

const ImageCard=({image})=>{
    return (
		<div className="image-card">
			<img src={image} alt="image" />
		</div>
    );
}

export default ImageCard;