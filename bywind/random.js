var posts=["posts/7f1ae6d2/","posts/f00f6d65/","posts/30b33380/","posts/69e7170f/","posts/65682cd8/","posts/30b33380/","posts/f5b2a257/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};