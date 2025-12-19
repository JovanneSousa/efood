const Profile = () => {
  return (
    <div>
      <p>Seção de profile</p>
      <p>{localStorage.getItem('nome')}</p>
    </div>
  )
}

export default Profile
