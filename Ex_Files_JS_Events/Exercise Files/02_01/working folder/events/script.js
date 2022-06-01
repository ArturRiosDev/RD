document.querySelector(".grid").addEventListener(
  "click",
  function (e) {
    console.dir(e.target);
    if (e.target.tagName === "IMG") {
      console.log(this);
      let howmany = this.querySelectorAll("li").length;
      if (howmany > 1) {
        let removeTarget = e.target.parentNode;
        removeTarget.parentNode.removeChild(removeTarget);
      }else{
          let photoTitle = e.target.alt
          document.querySelector( '#art p').innerHTML= `<p> you've picked: ${photoTitle} </p>` 
      }
    }
  },
  false
);
