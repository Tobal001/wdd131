// articles.js
document.addEventListener("DOMContentLoaded", function() {
    const topicNames = document.querySelectorAll('.topic-name');
    let allPosts = [];

    topicNames.forEach(topic => {
        topic.addEventListener('click', function() {
            topicNames.forEach(t => t.classList.remove('active')); // Remove active class from all topics
            topic.classList.add('active'); // Add active class to the clicked topic

            const selectedTopic = topic.textContent.trim();
            const filteredPosts = selectedTopic === "All" ? allPosts : allPosts.filter(post => post.topics.includes(selectedTopic));
            displayPage(filteredPosts, 1, 6);
            createPaginationControls(filteredPosts, 6);
        });
    });

    // Function to create a summary of the content
    function getSummary(content, length = 100) {
        return content.join(' ').substring(0, length) + '...';
    }

    // Function to create a responsive image element
    function createResponsiveImage(post) {
        const picture = document.createElement("picture");

        if (post.images) {
            const sourceWebpLarge = document.createElement("source");
            sourceWebpLarge.srcset = post.images.largeArticles;
            sourceWebpLarge.type = "image/webp";
            sourceWebpLarge.media = "(min-width: 1000px)";
            picture.appendChild(sourceWebpLarge);

            const sourceWebpMedium = document.createElement("source");
            sourceWebpMedium.srcset = post.images.mediumArticles;
            sourceWebpMedium.type = "image/webp";
            sourceWebpMedium.media = "(min-width: 500px)";
            picture.appendChild(sourceWebpMedium);

            const sourceWebpSmall = document.createElement("source");
            sourceWebpSmall.srcset = post.images.smallArticles;
            sourceWebpSmall.type = "image/webp";
            sourceWebpSmall.media = "(max-width: 499px)";
            picture.appendChild(sourceWebpSmall);

            const img = document.createElement("img");
            img.src = post.images.small;
            img.alt = post.title;
            picture.appendChild(img);
        } else {
            const img = document.createElement("img");
            img.src = "default-image.webp"; // Default image in case images are missing
            img.alt = post.title;
            picture.appendChild(img);
        }

        return picture;
    }

    // Function to create a single article element
    function createArticleCard(post, index) {
        if (index === undefined) {
            console.error('Article index is undefined');
            return null;
        }

        const articleLink = document.createElement("a");
        articleLink.href = `article.html?post=${index}`;
        
        const articleDiv = document.createElement("div");
        articleDiv.className = "article-summary";

        // Image container
        const imageDiv = document.createElement("div");
        imageDiv.className = "article-image";
        const responsiveImage = createResponsiveImage(post);
        imageDiv.appendChild(responsiveImage);
        articleDiv.appendChild(imageDiv);

        // Content container (wrap topics, header, and summary)
        const contentDiv = document.createElement("div");
        contentDiv.className = "article-content";

        // Topics container
        const topicsDiv = document.createElement("div");
        topicsDiv.className = "article-topics";
        const topicsP = document.createElement("p");
        topicsP.textContent = post.topics.join(", ");
        topicsDiv.appendChild(topicsP);
        contentDiv.appendChild(topicsDiv);

        // Header container
        const headerDiv = document.createElement("div");
        headerDiv.className = "article-header";
        const headerH3 = document.createElement("h4");
        headerH3.textContent = post.title;
        headerDiv.appendChild(headerH3);
        contentDiv.appendChild(headerDiv);

        // Summary container
        const summaryDiv = document.createElement("div");
        summaryDiv.className = "summary-txt";
        const summaryP = document.createElement("p");
        summaryP.textContent = getSummary(post.content);
        summaryDiv.appendChild(summaryP);
        contentDiv.appendChild(summaryDiv);

        articleDiv.appendChild(contentDiv);
        articleLink.appendChild(articleDiv);

        return articleLink;
    }

    // Function to display a page of articles
    function displayPage(articles, pageNumber, articlesPerPage) {
        const articlesContainer = document.getElementById("articles");
        articlesContainer.innerHTML = "";

        const start = (pageNumber - 1) * articlesPerPage;
        const end = start + articlesPerPage;
        const articlesToShow = articles.slice(start, end);

        articlesToShow.forEach((article, index) => {
            const articleElement = createArticleCard(article, start + index);
            if (articleElement) {
                articlesContainer.appendChild(articleElement);
            }
        });
    }

    // Function to create pagination controls
    function createPaginationControls(articles, articlesPerPage) {
        const pagesContainer = document.getElementById("pages");
        pagesContainer.innerHTML = "";

        const totalPages = Math.ceil(articles.length / articlesPerPage);
        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement("a");
            pageLink.href = "#";
            pageLink.textContent = i;
            pageLink.addEventListener("click", (event) => {
                event.preventDefault();
                displayPage(articles, i, articlesPerPage);
            });
            pagesContainer.appendChild(pageLink);
        }
    }

    // Initial load: Fetch posts from JSON file and display them
    fetch('posts.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(posts => {
            allPosts = posts;
            if (!Array.isArray(posts)) {
                throw new Error('Expected an array of posts');
            }
            const articlesPerPage = 6;
            createPaginationControls(posts, articlesPerPage);
            displayPage(posts, 1, articlesPerPage);
        })
        .catch(error => console.error('Error loading posts:', error));
});
