/**
 * Created by Xarieyle on 02.02.14.
 */
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
};

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

function eraseCookie(name) {
    createCookie(name, "", -1);
};

$(document).ready(function () {
    "use strict";

    //Top Advert
    if (readCookie('hideSuggestionBox') === 'true') {
        $('.iklon').hide();
    } else {
        $('.iklon').show();
    };

    $('.closeit').click(function () {
        $('.iklon').slideUp();
        createCookie('hideSuggestionBox', 'true', 1);
    });
    // First Word Styling
    $('.fword').each(function () {
        var me = $(this),
            t = me.text().split(' ');
        me.html('<span class="fwstyle">' + t.shift() + '</span> ' + t.join(' '));
    });
});