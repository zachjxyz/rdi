const url = "https://blog.realdealindividual.com/ghost/api/content/posts/?key=f7f2fd774e39bca33f0611373b";

document.addEventListener("DOMContentLoaded", function(event) {
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {

        numOfBlogs = Object.keys(data).length;

        blogPosts = document.getElementById('post-content');

        for (i = numOfBlogs - 1; i >= 0; i--) {

            title = data.posts[i].title;
            image = data.posts[i].feature_image;
            excerpt = data.posts[i].custom_excerpt;
            link = data.posts[i].url;
            reading_time = data.posts[i].reading_time;

            blogPosts.insertAdjacentHTML("afterbegin", 
                `<article class="entry-item">
                    <div class="entry-img">
                        <a href="${link}" target="_blank">
                        <img src="${image}" alt="${title}">
                        </a>
                    </div>
                    <div class="entry-wrap">
                        <div class="entry">  
                        <h2 class="entry-title">${title}
                            <a href="${link}" target="_blank"></a>
                        </h2>
                        <div class="entry-content">
                            <p>${excerpt}</p>
                            <a href="${link}" target="_blank" class="btn btn-lg btn-stroke"><span>Read More</span></a>
                        </div>
                        </div>
                    </div>
                </article>`
            );
        }
    })
    .catch(error  => console.log(error));
  });