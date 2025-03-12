import './postHeader.css';
import postProfilePhoto from '../../../../../../assets/post-profile.webp';

export default function PostHeader({userName,location}){
    return (
        <div className="post-header">
            <div className="post-details">
                <div className="profile-image-container">
                    <img src={postProfilePhoto} alt={userName} className="profile-image"/>
                </div>
                <div className="user-details">
                    <div className="username">{userName}</div>
                    <div className="location">{location}</div>
                </div>  
            </div>    
        </div>
    )
}