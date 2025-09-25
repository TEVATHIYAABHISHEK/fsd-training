const rawUrl = 'https://raw.githubusercontent.com/username/repo/main/sample.txt'; // Replace with actual raw URL

fetch(rawUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
    console.log('File content:', data); // You can do anything with the file content here
  })
  .catch(error => {
    console.error('Error fetching the file:', error);
  });
