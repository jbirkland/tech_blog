const logoutClick = async function() {
 try {
  const response = await fetch('/api/users/logout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  })
  console.log(response)
  if (response.ok) {
    
    window.location.replace('/');
  } 
} catch (err){
  console.log(err)
}
  
};


document.querySelector('#logout').addEventListener('click', logoutClick)