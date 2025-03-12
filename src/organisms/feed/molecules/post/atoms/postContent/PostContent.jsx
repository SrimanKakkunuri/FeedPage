import './postContent.css';

export default function PostContent({imageUrl}){
    return (
        <div className="post-content">
            <div className="image-container">
                <img src={imageUrl} alt={"Post-Image"} className="post-image" />
            </div>
        </div>
    )
}