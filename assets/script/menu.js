$(document).ready(function() {
    let subMenuItem;
    let sub_subCategory_link;
    let sub_sub_subCategory_link;

    // open-close menu
    $('.menu-btn').click(function() {
        $('.menu-section').addClass('show-menu');               
    });

    $('#closeMenu').click(function() {
        $('.menu-section').removeClass('show-menu');               
    });

    // open sub-menu
    $('.category-woman').click(function() {
        $('.global-menu').addClass('hide-global-menu');
        $('.woman-category-menu').addClass('show-category-menu');
    });

    $('.category-man').click(function() {
        $('.global-menu').addClass('hide-global-menu');
        $('.man-category-menu').addClass('show-category-menu');
    });

    $('.category-child').click(function() {
        $('.global-menu').addClass('hide-global-menu');
        $('.child-category-menu').addClass('show-category-menu');
    });

    $('.category-beauty').click(function() {
        $('.global-menu').addClass('hide-global-menu');
        $('.beauty-category-menu').addClass('show-category-menu');
    });


    // close sub-menu
    $('.back-global-menu').click(function() {
        $('.global-menu').removeClass('hide-global-menu');
        $(this).parent().parent().removeClass('show-category-menu');
    });
    
    
    $('.sub-menu-item').click(function() {
        subMenuItem = this;
        $(this).parent().parent().addClass('hide-category-menu');
        $('.sub-category-menu').addClass('show-sub-category-menu');
    });

    // back category-menu
    $('.back-category-menu').click(function() {

        $(this).parent().parent().removeClass('show-sub-category-menu');
        subMenuItem.parentNode.parentNode.classList.remove('hide-category-menu');
    });

    // open sub-subCategory-menu
    $('.sub-subCategory-link').click(function() {
        sub_subCategory_link = this;
        $(this).parent().parent().addClass('hide-category-menu');
        $('.sub-subCategory-menu').addClass('show-sub-subCategory-menu');
    });

    
    // back subCategory-menu
    $('.back-subcategory-menu').click(function() {
        $(this).parent().parent().removeClass('show-sub-subCategory-menu');
        sub_subCategory_link.parentNode.parentNode.classList.remove('hide-category-menu');
    });


    // open sub-sub-subCategory-menu
    $('.sub-subCategory-menu-item').click(function() {
        sub_sub_subCategory_link = this;
        $(this).parent().parent().addClass('hide-category-menu');
        $('.sub-sub-subCategory-menu').addClass('show-sub-sub-subCategory-menu');
    });


    // back sub-subCategory-menu
    $('.back-sub-subcategory-menu').click(function() {
        $(this).parent().parent().removeClass('show-sub-sub-subCategory-menu');
        sub_sub_subCategory_link.parentNode.parentNode.classList.remove('hide-category-menu');
    });
    
});