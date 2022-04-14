fetch("https://www.reddit.com/r/aww/.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let array = data.data.children;
    for (let i = 1; i < 10; i++) {
      let eachPost = document.createElement("div");
      let eachTitle = document.createElement("h2");
      let eachImage = document.createElement("img");
      let eachLink = document.createElement("a");
      document.body.append(eachPost);
      eachPost.classList.add("center");
      eachTitle.innerText = array[i].data.title;
      eachPost.append(eachTitle);
      eachImage.setAttribute("src", array[i].data.thumbnail);
      eachPost.append(eachImage);
      eachLink.setAttribute("href", array[i].data.url);
      eachLink.innerText = "Hey! Check It Out!";
      eachPost.append(eachLink);
    }
  });
