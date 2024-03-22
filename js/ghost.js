const url = "https://blog.realdealindividual.com/ghost/api/content/posts/?key=316fe13cdab156d407ae990a77";

document.addEventListener("DOMContentLoaded", function(event) {
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        num_of_blogs = Object.keys(data).length;

        blog_posts = document.getElementById('post-content');

        for (i = num_of_blogs - 1; i >= 0; i--) {
            let blog_title = data.posts[i].title;
            let blog_image = data.posts[i].feature_image;
            let blog_excerpt = data.posts[i].custom_excerpt;
            let blog_link = data.posts[i].url;
            let blog_date = Date.parse(data.posts[i].published_at);

            let date = new Date(blog_date);

            let blog_year = date.getFullYear();
            let blog_month = (date.getMonth() + 1).toString().padStart(2, "0");
            let blog_day = date.getUTCDate();

            blog_posts.insertAdjacentHTML("afterbegin", 
                `<article class="entry-item">
                    <div class="entry-img">
                        <a href="${blog_link}" target="_blank">
                        <img src="${blog_image}" alt="${blog_title}">
                        </a>
                    </div>
                    <div class="entry-wrap">
                        <div class="entry">  
                        <h2 class="entry-title">${blog_title}
                            <a href="${blog_link}" target="_blank"></a>
                        </h2>
                        <ul class="entry-meta">
                      <li class="entry-date">
                        <i class="fa fa-calendar-o"></i>
                        ${blog_month}/${blog_day}/${blog_year}
                      </li>
                        <div class="entry-content">
                            <p>${blog_excerpt}</p>
                            <a href="${blog_link}" target="_blank" class="btn btn-lg btn-stroke"><span>Read More</span></a>
                        </div>
                        </div>
                    </div>
                </article>`
            );
        }
    })
    .catch(error  => console.log(error));
  });