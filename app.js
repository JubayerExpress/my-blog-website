// Step 4: JavaScript for Interactivity

// Example Blog Post Data
const posts = [
    {
        title: "Exploring New Technologies",
        date: "January 5, 2025",
        preview: "Technology is evolving rapidly. In this post, we explore some of the latest innovations and how they are changing the world...",
        imageUrl: "assets/images/blog1.jpg"
    },
    {
        title: "The Future of Artificial Intelligence",
        date: "January 10, 2025",
        preview: "AI is changing the world in various industries. Let’s dive into how it’s reshaping the future of business, healthcare, and more...",
        imageUrl: "assets/images/blog2.jpg"
    }
];

// Function to inject posts dynamically
function renderPosts() {
    const postsContainer = document.querySelector('.posts');
    postsContainer.innerHTML = ""; // Clear any existing posts
    
    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <img src="${post.imageUrl}" alt="${post.title}">
            <div class="post-content">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-date">${post.date}</p>
                <p class="post-preview">${post.preview}</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Initial call to render posts
renderPosts();

// Step 5: Image Uploading

// Function to handle image upload
document.querySelector('#imageUploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.querySelector('#imageInput');
    const newImage = fileInput.files[0];

    if (newImage) {
        const reader = new FileReader();

        reader.onloadend = function() {
            const newPost = {
                title: "New Dynamic Post",
                date: new Date().toLocaleDateString(),
                preview: "This is a new post with an uploaded image!",
                imageUrl: reader.result
            };
            posts.push(newPost); // Add the new post to the posts array
            renderPosts(); // Re-render the posts with the new image
        }

        reader.readAsDataURL(newImage); // Read the file as base64 string
    } else {
        alert("Please select an image to upload.");
    }
});
