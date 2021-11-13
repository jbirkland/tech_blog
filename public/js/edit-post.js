async function editFormHandler(event) {
  event.preventDefault();
  const postTitle = document.querySelector('#post_title').value;
  const postContent= document.querySelector('#post_content').value;
  const postComment = document.querySelector('#user_comment').value;
  
 
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      postTitle,
      postContent,
      postComment,
  
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace(`/posts/${id}`);
  } else {
    alert('Failed to edit post');
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);