import avatarImg from '../assets/images/propic.jpg'; // Adjust path based on your folder structure

export function ProfilePicture() {
  return (
    <img 
      src={avatarImg} 
      alt="Martina Tenani - profile pic" 
      style={{ 
            borderRadius: '50%', 
            width: '200px', 
            height: '200px', 
            objectFit: 'cover',
            objectPosition: 'center 60%',
        }}
    />
  );
}