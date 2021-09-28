const newFormHandler = async (event) => {
  event.preventDefault();
  var vidId = document.location.pathname
  vidId = vidId.split('/')
  vidId = vidId[2];

  const review_description = document.querySelector('#review-desc').value.trim();
  if (review_description) {
    const response = await fetch(`/api/reviews`, {
      method: 'POST',
      body: JSON.stringify({ videogame_id:vidId, review_description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create review');
    }
  }
};

document
  .querySelector('.new-review-form')
  .addEventListener('submit', newFormHandler);