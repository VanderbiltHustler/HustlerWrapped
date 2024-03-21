'use strict';

document.addEventListener('DOMContentLoaded', function() {
    var dots = document.querySelectorAll('.dot');
    var panels = document.querySelectorAll('.rounded-rectangle-container');

    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            // Hide all panels
            panels.forEach(function(panel) {
                panel.style.display = 'none';
            });

            // Show the corresponding panel based on the dot clicked
            panels[index].style.display = 'block';
        });
    });
});

