// project.js
document.addEventListener("DOMContentLoaded", function() {
    const featuredContainer = document.getElementById("featured-link");
    const recentContainer = document.getElementById("recent-link");

    // Function to create a summary of the content
    function getSummary(content, length = 100) {
        return content.join(' ').substring(0, length) + '...';
    }

    // Function to create a responsive image element
    function createResponsiveImage(post) {
        const picture = document.createElement("picture");

        const sourceWebpLarge = document.createElement("source");
        sourceWebpLarge.srcset = post.images.largeMain;
        sourceWebpLarge.type = "image/webp";
        sourceWebpLarge.media = "(min-width: 1000px)";
        picture.appendChild(sourceWebpLarge);

        const sourceWebpMedium = document.createElement("source");
        sourceWebpMedium.srcset = post.images.mediumMain;
        sourceWebpMedium.type = "image/webp";
        sourceWebpMedium.media = "(min-width: 500px)";
        picture.appendChild(sourceWebpMedium);

        const sourceWebpSmall = document.createElement("source");
        sourceWebpSmall.srcset = post.images.smallMain;
        sourceWebpSmall.type = "image/webp";
        sourceWebpSmall.media = "(max-width: 499px)";
        picture.appendChild(sourceWebpSmall);

        const img = document.createElement("img");
        img.src = post.images.small;
        img.alt = post.title;
        img.width = 250;
        img.height = 500;
        picture.appendChild(img);

        return picture;
    }

    // Function to create a card
    function createCard(post, index, isFeatured) {
        const card = document.createElement("div");
        card.className = isFeatured ? "featured-card" : "recent-card";

        // Add responsive image
        if (post.images) {
            const responsiveImage = createResponsiveImage(post);
            card.appendChild(responsiveImage);
        }

        const postSummary = document.createElement("div");
        postSummary.className = isFeatured ? "featured-summary" : "recent-summary";

        const header = document.createElement("header");
        header.className = isFeatured ? "featured-header" : "recent-header";

        const section = document.createElement("section");
        section.className = isFeatured ? "featured-section" : "recent-section";

        const topicsP = document.createElement("p");
        topicsP.className = "article-topics";
        topicsP.textContent = post.topics.join(", ");
        header.appendChild(topicsP);

        const h3 = document.createElement("h4");
        h3.textContent = post.title;
        header.appendChild(h3);

        const pContent = document.createElement("p");
        pContent.textContent = getSummary(post.content);
        section.appendChild(pContent);

        postSummary.appendChild(header);
        postSummary.appendChild(section);

        card.appendChild(postSummary);

        return card;
    }

    // Function to display posts
    function displayPosts(posts) {
        featuredContainer.innerHTML = '';
        recentContainer.innerHTML = '';

        // Filter featured posts
        const featuredPosts = posts.filter(post => post.status === "featured");
        featuredPosts.forEach((post, index) => {
            const card = createCard(post, index, true);
            featuredContainer.appendChild(card);
        });

        // Filter out featured posts and sort recent posts by date, then select the most recent 4
        const recentPosts = posts
            .filter(post => post.status !== "featured")
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);

        recentPosts.forEach((post, index) => {
            const card = createCard(post, index, false);
            recentContainer.appendChild(card);
        });
    }

    // Fetch posts from JSON file
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            displayPosts(posts);
        })
        .catch(error => console.error('Error loading posts:', error));
});
