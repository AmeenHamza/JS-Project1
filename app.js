let rect = document.querySelector("#center");

rect.addEventListener("mousemove", (dets) => {
    let rectPosition = rect.getBoundingClientRect();
    let rectInsideValue = dets.clientX - rectPosition.left;

    if (rectInsideValue < rectPosition.width / 2) {
        let redColor = gsap.utils.mapRange(0, rectPosition.width / 2, 255, 0, rectInsideValue);

        gsap.to(rect, {
            backgroundColor: `rgba(${redColor},0,0)`,
            ease: Power4
        })

    }
    else {
        let blueColor = gsap.utils.mapRange(rectPosition.width / 2, rectPosition.width, 0, 255, rectInsideValue);

        gsap.to(rect, {
            backgroundColor: `rgba(0,0,${blueColor})`,
            ease: Power4
        })
    }
})

rect.addEventListener("mouseleave", function() {
    gsap.to(rect, {
        backgroundColor : "#fff",
        ease : Power2
    })
})