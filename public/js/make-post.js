async function addPost (event) {
    event.preventDefault();
  
    const title = document.querySelector(".ctitle").value;
    const content = document.querySelector(".content").value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
      }),
      
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
      console.log("is this working");
    } else {
      alert(response.statusText);
    }
    
  };
  
document.querySelector('.submit-post').addEventListener('submit', addPost); 
