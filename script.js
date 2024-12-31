const filterButtons = document.querySelectorAll('.btn');
const itenss = document.querySelectorAll('.itens');
let activeFilters = ['all'];

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');

        if (filterValue === 'all') {
            // If 'all' is clicked, clear other filters
            activeFilters = ['all'];
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-filter') === 'all') {
                    btn.classList.add('active');
                }
            });
        } else {
            // Remove 'all' if another category is selected
            activeFilters = activeFilters.filter(f => f !== 'all');
            document.querySelector('[data-filter="all"]').classList.remove('active');

            // Toggle the clicked filter
            if (activeFilters.includes(filterValue)) {
                activeFilters = activeFilters.filter(f => f !== filterValue);
                button.classList.remove('active');

                // If no filters selected, activate 'all'
                if (activeFilters.length === 0) {
                    activeFilters = ['all'];
                    document.querySelector('[data-filter="all"]').classList.add('active');
                }
            } else {
                activeFilters.push(filterValue);
                button.classList.add('active');
            }
        }

        // Show/hide itenss based on active filters
        itenss.forEach(itens => {
            itens.style.display = 'none';
            if (activeFilters.includes('all') ||
                activeFilters.some(filter => itens.classList.contains(filter))) {
                itens.style.display = 'block';
            }
        });
    });
});