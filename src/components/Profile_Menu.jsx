import '../styles/Profile_Menu.scss'

const Profile_Menu = ({setisLogin , setprofMenuisOpen}) => {
  return (
    <div className="prof-menu">
        <button>Profile</button>
        <hr/>
        <button onClick={()=> {
          setisLogin(false)
          setprofMenuisOpen(false)
        }}>Sign Out</button>
    </div>
  )
}

export default Profile_Menu