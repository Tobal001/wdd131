<script>
document.addEventListener("DOMContentLoaded", function() {
    // Example: Dynamically insert content
    const featuredContent = {
        title: "Featured Post",
        image: "featured.jpg",
        tags: ["Tag1", "Tag2", "Tag3"],
        date: "Tue Jul 2024",
        heading: "Heading",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, fuga."
    };

    const recentContent = [
        {
            image: "recent1.jpg",
            tags: ["Tag1"],
            heading: "Heading",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, fuga."
        },
        // Add more recent content objects as needed
    ];

    const featuredSection = document.querySelector(".featured");
    featuredSection.querySelector("h2").innerText = featuredContent.title;
    featuredSection.querySelector("img").src = featuredContent.image;
    featuredSection.querySelector(".tags").innerHTML = featuredContent.tags.map(tag => `<span>${tag}</span>`).join("");
    featuredSection.querySelector("p").innerText = featuredContent.date;
    featuredSection.querySelector("h3").innerText = featuredContent.heading;
    featuredSection.querySelector("p:last-of-type").innerText = featuredContent.description;

    const recentSection = document.querySelector(".recent");
    recentSection.innerHTML = recentContent.map(content => `
        <div class="card">
            <img src="${content.image}" alt="${content.heading}">
            <div class="tags">${content.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
            <h3>${content.heading}</h3>
            <p>${content.description}</p>
        </div>
    `).join("");
});
</script>
