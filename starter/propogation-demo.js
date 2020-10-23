document.querySelectorAll("*").forEach(function (element) {
  
  // add an event listener to every element in the document
  element.addEventListener("click", function (e) {
    console.log(element)

    element.classList.add("bubbling")

    // this is here so we can do the animation
    e.stopPropagation()

    // wait half a second, then run some code
    setTimeout(function () {
      element.classList.remove("bubbling")

      // simulate bubbling by triggering a click on the parent
      if (element.parentElement) {
        // "resume" propogation
        element.parentElement.dispatchEvent(e)
      }
    }, 1000)
  })

})