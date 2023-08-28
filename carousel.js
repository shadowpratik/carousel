$(".owl-carousel").owlCarousel({
    items: 3,
    margin:20,
    loop:true,
    nav : true,
    // nav is the left right button we can manage it by custom css 
    responsive:{
              0:{
                 items:1,
              },
              768:{
                   items:2,
                },
                991:{
                   items:3,
               },
            },
})