'use strict';
/*BUTTONS FOR ROUNDED PANELS*/
// Initial setup to show the first container and set the first dot as active
window.onload = function() {
    changeContent(1); // Default to showing the first container
}

function changeContent(selectedDot) {
    // First, hide all containers
    var allContainers = document.querySelectorAll('.rounded-rectangle-container1, .rounded-rectangle-container2, .rounded-rectangle-container3, .rounded-rectangle-container4');
    allContainers.forEach(function(container) {
        container.style.display = 'none';
    });
    
    // Then, based on the selected dot, show the corresponding container
    document.querySelector('.rounded-rectangle-container' + selectedDot).style.display = 'block';
    
    // Update the dot colors to reflect the active selection
    document.querySelectorAll('.dot').forEach(function(dot, index) {
        dot.style.backgroundColor = (index + 1) === selectedDot ? '#c3c3c3' : '#D6B464'; // Assuming gold is the default, and #8E6600 is the active color
    });
    
    // Change button colors to reflect the active state
    var allButtons = document.querySelectorAll('.button-class');
    allButtons.forEach(function(button, index) {
        button.style.backgroundColor = (index + 1) === selectedDot ? '#808080' : '#D6B464'; // Gray color for active button, gold for others
    });
}


/*BUTTON FOR TEXT */

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.toggle-btn');
    var contents = document.querySelectorAll('.content');

    // Show the first content on document load
    if (contents.length > 0) {
        contents[0].style.display = 'block';
    }

    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var targetId = this.getAttribute('data-target');
            var targetContent = document.getElementById(targetId);

            // Toggle the active class on buttons
            buttons.forEach(function(btn) {
                btn.classList.remove('active-btn');
            });
            this.classList.add('active-btn');

            // Hide all content paragraphs
            contents.forEach(function(content) {
                content.style.display = 'none';
            });

            // Show the selected content paragraph
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });
});



/*DATA SCROLL SPEED
*/
$.fn.moveIt = function() {
var $window = $(window);
var instances = [];

$(this).each(function() {
    instances.push(new moveItItem($(this)));
});

window.addEventListener('scroll', function() {
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
    inst.update(scrollTop);
    });
}, {passive: true});
}

var moveItItem = function(el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function() {
    $('[data-scroll-speed]').moveIt();
});
