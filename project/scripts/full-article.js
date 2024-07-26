document.addEventListener("DOMContentLoaded", function() {
    const pContainer = document.getElementById("p-container");
    const articleTitle = document.getElementById("article-title");
    const articleDate = document.getElementById("article-date");
    const articleImg = document.getElementById("article-img");

    // Function to get the article index from the URL
    function getArticleIndex() {
        const params = new URLSearchParams(window.location.search);
        return params.get('post');
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
            img.width = 250;
            img.height = 500;
            picture.appendChild(img);
        } else {
            const img = document.createElement("img");
            img.src = "default-image.webp"; 
            img.alt = post.title;
            picture.appendChild(img);
        }

        return picture;
    }

    // Function to display the full article
    function displayArticle(post) {
        const h1Title = document.createElement("h1");
        h1Title.textContent = post.title;
        articleTitle.appendChild(h1Title);
        articleDate.textContent = new Date(post.date).toDateString();

        if (post.images) {
            const responsiveImage = createResponsiveImage(post);
            articleImg.appendChild(responsiveImage);
        }

        post.content.forEach(paragraph => {
            const p = document.createElement("p");
            p.textContent = paragraph;
            pContainer.appendChild(p);
        });
    }

    // Fetch posts from JSON file
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const index = getArticleIndex();
            if (index !== null && posts[index]) {
                displayArticle(posts[index]);
            } else {
                pContainer.textContent = "Article not found.";
            }
        })
        .catch(error => console.error('Error loading article:', error));
});
