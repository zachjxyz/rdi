const api = new GhostContentAPI({
    url: 'https://blog.realdealindividual.com',
    key: '316fe13cdab156d407ae990a77',
    version: 'v5.0'
});

api.posts.browse({
    filter: 'tag:rdi-nights',
    include: 'authors'
})
.then((obj) => {
    let posts = obj.reverse();

    blog_posts = document.getElementById('post-content');

    obj.forEach((post) => {
        let blog_date = new Date(Date(post.published_at));

        let blog_month = blog_date.getUTCMonth();
        let blog_day = blog_date.getUTCDate();
        let blog_year = blog_date.getUTCFullYear();

        blog_posts.insertAdjacentHTML("afterbegin", 
        `<article class="entry-item">
                <div class="entry-img">
                    <a href="${post.url}" target="_blank" id="create-blog">
                    <img src="${post.feature_image}" alt="${post.title}">
                    </a>
                </div>
                <div class="entry-wrap">
                    <div class="entry">  
                    <h2 class="entry-title">${post.title}
                    </h2>
                    <ul class="entry-meta">
                        <li class="entry-author">
                            <i class="fa fa-user"></i>
                            ${post.primary_author.name}
                        </li> 
                        <li class="entry-date">
                            <i class="fa fa-book"></i>
                            ${post.reading_time} mins
                        </li>
                    </ul>
                    <div class="entry-content">
                        <p>${post.custom_excerpt}</p>
                        <a href="${post.url}" target="_blank" class="btn btn-lg btn-stroke read-more-btn" id="create-blog"><span>Read More</span></a>
                    </div>
                    </div>
                </div>
            </article>`
        )
    })
})
.catch((error)  => { 
    console.log(error);
});