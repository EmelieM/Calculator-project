

function setActive (sectionNumber){
    
    $('.left-nav .active').removeClass('active');
    $('.content .active').removeClass('active');

    const dataSectionSelector = "[data-section=" + sectionNumber + "]";
    const dataLinkToSelector = "[data-link-to=" + sectionNumber + "]";

    console.log(dataSectionSelector)

    $(dataLinkToSelector).addClass('active')
    $(dataSectionSelector).addClass('active')


    
}

$('.left-nav a').click(function (){
    const sectionNum = $(this).attr('data-link-to')
    sectionNum.addClass('active')
    setActive(sectionNum)
})