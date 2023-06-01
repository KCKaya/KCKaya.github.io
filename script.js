document.addEventListener('DOMContentLoaded', function() {
  const jsonData = `{
    "posts": [
      {
        "title": "The Future Of Medicine Is Tokens (2023 Article by Rapolas)",
        "slug": "the-token-article",
        "content": "Article about DeSci market and stack: https://zeeprime.capital/the-future-of-medicine-is-tokens"
      }
    ]
  }`;

  const data = JSON.parse(jsonData);
  const container = document.getElementById('content-container');

  data.posts.forEach(function(post) {
    const title = document.createElement('h2');
    title.innerText = post.title;
    container.appendChild(title);

    const content = document.createElement('p');
    content.innerText = post.content;
    container.appendChild(content);
  });
});
