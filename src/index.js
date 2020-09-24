$('#initialisator').click(function() {
    $('#initialisator').toggleClass('hiden');
    $(document).ready(function () {
        const slides = $('.item');
        const rightButton = $('<button class="right_button"></button>');
        const leftButton = $('<button class="left_button"></button>');
        const tabsWrapper = $('<div class="tabs_wrapper"></div>')
    
        $('.slider').append(rightButton)
        $('.slider').prepend(leftButton)
        $('#down_btn_wrapper').append(tabsWrapper)

        for (let index = 0; index < slides.length; index++) {
            const sliderTabs = $(`<div class="tabs" tabs-id="${index}"></div>`);
    
            if(index === 0) {
                $(sliderTabs).addClass('active')
            }

            $('.tabs_wrapper').append(sliderTabs)
        };

        let currentIndex = 0;

        $(rightButton).click(function () {
            currentIndex++;

            if(currentIndex >= 0 && currentIndex <=3) {
                $('.tabs').removeClass('active');
                $(`[tabs-id = ${currentIndex}]`).addClass('active');
                $('.item').hide();
                $(`[item-id = ${currentIndex}]`).show();

            } else {
                currentIndex = 0;

                $('.tabs').removeClass('active');
                $(`[tabs-id = ${currentIndex}]`).addClass('active');
                $('.item').hide();
                $(`[item-id = ${currentIndex}]`).show();
            };
        });

        $(leftButton).click(function () {
            currentIndex--;

            if(currentIndex <= 3  && currentIndex >= 0) {
                $('.tabs').removeClass('active');
                $(`[tabs-id = ${currentIndex}]`).addClass('active');
                $('.item').hide();
                $(`[item-id = ${currentIndex}]`).show();

            } else {
                currentIndex = 3;

                $('.tabs').removeClass('active');
                $(`[tabs-id = ${currentIndex}]`).addClass('active');
                $('.item').hide();
                $(`[item-id = ${currentIndex}]`).show();
            };
        });

        $(tabsWrapper).click(function (e) {
            const tabsTarget = e.target;
            const targetIndex = $(tabsTarget).attr('tabs-id');

            if (!$(tabsTarget).hasClass('tabs_wrapper')) {

                $('.tabs').removeClass('active');
                $(tabsTarget).addClass('active');
                $('.item').hide();
            };

            $(`[item-id = ${targetIndex}]`).show();
        });
    });
});