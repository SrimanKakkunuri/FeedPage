import './profile.css';
import profileImage from '../../../../assets/profile-photo.jpg';


export default function Profile({userInfo}){
    const {name,email,age,location,bio} = userInfo;
    return (
            <div className="profile-content">
                <h2>{name}</h2>
                <div className="profile-info">
                    <img src={profileImage} className="profile-img" alt="Profile-Image"></img>
                    <div className="details">
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Age:</strong> {age}</p>
                        <p><strong>Location:</strong> {location}</p>
                        <p><strong>Bio:</strong>{bio}</p>
                    </div>
                </div>
            </div>
    )
}
