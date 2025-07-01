
const images = [
    {
        "img" : document.querySelector('#image_1'),
        "bw": document.querySelector('#bw1'),
        "c": document.querySelector('#c1')
    },
    {
        "img" : document.querySelector('#image_2'),
        "bw": document.querySelector('#bw2'),
        "c": document.querySelector('#c2')
    },
    {
        "img" : document.querySelector('#image_3'),
        "bw": document.querySelector('#bw3'),
        "c": document.querySelector('#c3')
    },
    {
        "img" : document.querySelector('#image_4'),
        "bw": document.querySelector('#bw4'),
        "c": document.querySelector('#c4')
    },
    {
        "img" : document.querySelector('#image_5'),
        "bw": document.querySelector('#bw5'),
        "c": document.querySelector('#c5')
    },
    {
        "img" : document.querySelector('#image_6'),
        "bw": document.querySelector('#bw6'),
        "c": document.querySelector('#c6')
    },
    {
        "img" : document.querySelector('#image_7'),
        "bw": document.querySelector('#bw7'),
        "c": document.querySelector('#c7')
    },
    {
        "img" : document.querySelector('#image_8'),
        "bw": document.querySelector('#bw8'),
        "c": document.querySelector('#c8')
    },
    // { image 9
    //     "img" : document.querySelector('#image_1'),
    //     "bw": document.querySelector('#bw1'),
    //     "c": document.querySelector('#c1')
    // }
]

images.forEach(image => {
    // Add transition and positioning styles directly
    image["img"].style.transition = "all 0.9s ease-in-out";
    image["img"].style.position = "relative"; // Needed for z-index to work
    image["img"].style.zIndex = "10"; // Default layer
    image["img"].style.boxShadow = "none"; 
    image["img"].style.transform = "scale(1) translateY(0)"

    image["img"].addEventListener('mouseenter', (e) => {
        image["img"].style.width = "120%";
        image["img"].style.height = "110%";
        image["img"].style.zIndex = "30";
        image["img"].style.transform = "scale(1.1) translateY(-10px)";
        image["img"].style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.3)";
        image["bw"].style.display = "none";
        image['c'].style.display = "flex";
    })

    image["img"].addEventListener('mouseleave', (e) => {
        image["img"].style.width = "100%";
        image["img"].style.height = "100%";
        image["img"].style.zIndex = "10";
        image["img"].style.boxShadow = "none";
        image["img"].style.transform = "scale(1) translateY(0)"
        image["c"].style.display = "none";
        image["bw"].style.display = "flex";
    })
});
