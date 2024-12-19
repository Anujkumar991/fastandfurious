document.addEventListener("DOMContentLoaded", () => {
    const postButton = document.querySelector("button");

    postButton.addEventListener("click", () => {
        const textarea = document.querySelector("textarea");
        const forumContainer = document.querySelector(".forum-container");

        if (textarea.value.trim() !== "") {
            const post = document.createElement("div");
            post.classList.add("post", "my-3", "p-3", "rounded", "bg-light", "text-dark");
            post.textContent = textarea.value;
            forumContainer.appendChild(post);

            textarea.value = "";
        } else {
            alert("Please write something before posting!");
        }
    });
});