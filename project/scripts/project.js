document.addEventListener("DOMContentLoaded", function() {
  const featuredContainer = document.getElementById("featured-posts");
  const recentContainer = document.getElementById("recent-posts");

  // Function to create a summary of the content
  function getSummary(content, length = 100) {
      return content.join(' ').substring(0, length) + '...';
  }

  // Function to create a card
  function createCard(post, index) {
      const card = document.createElement("div");
      card.className = "card";

      // Add image if available
      if (post.image) {
          const img = document.createElement("img");
          img.src = post.image;
          img.alt = post.title;
          card.appendChild(img);
      }

      const postSummary = document.createElement("div");
      postSummary.className = "summary";

      const header = document.createElement("header");
      const h3 = document.createElement("h3");
      h3.textContent = post.title;
      header.appendChild(h3);

      const section = document.createElement("section");

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
          const card = createCard(post, index);
          featuredContainer.appendChild(card);
      });

      // Filter out featured posts and sort recent posts by date, then select the most recent 4
      const recentPosts = posts
          .filter(post => post.status !== "featured")
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 4);

      recentPosts.forEach((post, index) => {
          const card = createCard(post, index);
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
