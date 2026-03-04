import profile from './assets/profile.jpg'
import Button from './Button';
function Card(){
    return(
    <div className="container">
     <img className='profile' src={profile} alt="profile picture"/>
     <h2 className='title'>Nancy digital skills company</h2>
     <p className='content'>hello I am Nancy a software engineer.<br></br> working on product development and cybersecurity.</p>
     <Button/>
    </div>   
    );

}
export default Card