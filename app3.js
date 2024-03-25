document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        const query = document.getElementById('search').value;
        if (query.trim() !== '') {
           window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
           window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        }
    });
});
