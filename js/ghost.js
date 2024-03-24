const url = "https://blog.realdealindividual.com/ghost/api/content/posts/?key=316fe13cdab156d407ae990a77&include=authors";

document.addEventListener("DOMContentLoaded", function(event) {
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        idx_of_blogs = Object.keys(data.posts).length - 1;

        blog_posts = document.getElementById('post-content');

        for (i = idx_of_blogs; i >= 0; i--) {
            let blog_id = data.posts[i].id;
            let blog_html = data.posts[i].html;
            let blog_slug = data.posts[i].slug;
            let blog_author = data.posts[i].authors[i].name;
            let blog_title = data.posts[i].title;
            let blog_image = data.posts[i].feature_image;
            let blog_excerpt = data.posts[i].custom_excerpt;
            let blog_link = data.posts[i].url;
            let reading_time = data.posts[i].reading_time;
            let blog_date = Date.parse(data.posts[i].published_at);

            let date = new Date(blog_date);

            let blog_year = date.getFullYear();
            let blog_month = (date.getMonth() + 1).toString().padStart(2, "0");
            let blog_day = date.getUTCDate();
            
            blog_posts.insertAdjacentHTML("afterbegin", 
                `<article class="entry-item">
                    <div class="entry-img">
                        <a href="${blog_link}" id="create-blog">
                        <img src="${blog_image}" alt="${blog_title}">
                        </a>
                    </div>
                    <div class="entry-wrap">
                        <div class="entry">  
                        <h2 class="entry-title">${blog_month}/${blog_day}/${blog_year}: ${blog_title}
                        </h2>
                        <ul class="entry-meta">
                            <li class="entry-author">
                                <i class="fa fa-user"></i>
                                ${blog_author}
                            </li> 
                            <li class="entry-date">
                                <i class="fa fa-book"></i>
                                ${reading_time} mins
                            </li>
                        </ul>
                        <div class="entry-content">
                            <p>${blog_excerpt}</p>
                            <a href="${blog_link}" class="btn btn-lg btn-stroke read-more-btn" id="create-blog"><span>Read More</span></a>
                        </div>
                        </div>
                    </div>
                </article>`
            );

            // document.getElementById("create-blog").addEventListener("click", function(event) {
            //     document.getElementById("create-blog").setAttribute('href', `${blog_link}`
            //     );
            // });
        }
    })
    .catch(error  => console.log(error));
  });