document.addEventListener('DOMContentLoaded', function() {
    // Search toggle functionality
    const searchToggle = document.querySelector('.search-toggle');
    const searchBox = document.querySelector('.search-box');
    
    searchToggle.addEventListener('click', function() {
        searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
    });
    
    // Close search when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-box') && !event.target.closest('.search-toggle')) {
            searchBox.style.display = 'none';
        }
    });
});