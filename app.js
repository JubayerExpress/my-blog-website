document.addEventListener("DOMContentLoaded", function () {
    // Example dynamic functionality can be added here for posts or interactive elements.
    
    // Search functionality (if you add a search bar later)
    const searchInput = document.querySelector("#searchInput");
    searchInput.addEventListener("input", function () {
        let posts = document.querySelectorAll(".post");
        let searchText = searchInput.value.toLowerCase();

        posts.forEach(post => {
            let title = post.querySelector(".post-title").textContent.toLowerCase();
            if (title.includes(searchText)) {
                post.style.display = "block";
            } else {
                post.style.display = "none";
            }
        });
    });
});
