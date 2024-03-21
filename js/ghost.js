const url = "https://blog.realdealindividual.com/ghost/api/content/posts/?key=f7f2fd774e39bca33f0611373b";

document.addEventListener("DOMContentLoaded", function(event) {
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {

        let numOfBlogs = Object.keys(data).length;

        let blogPosts = document.getElementById('post-content');

        for (i = numOfBlogs; i >= 0; i--) {

            let title = data.posts[i].title;
            let image = data.posts[i].feature_image;
            let excerpt = data.posts[i].custom_excerpt;
            let link = data.posts[i].url;
            let published_date = Date.parse(data.posts[i].published_at);

            var date = new Date(published_date);

            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, "0");
            let day = date.getUTCDate();

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
                        <ul class="entry-meta">
                      <li class="entry-date">
                        <i class="fa fa-calendar-o"></i>
                        ${month}/${day}/${year}
                      </li>
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