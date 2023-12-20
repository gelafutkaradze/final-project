const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li'); // Use querySelectorAll to get all options
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked'); // Corrected class name
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open'); // Close the menu after selection

            options.forEach(opt => {
                opt.classList.remove('active');
            });

            option.classList.add('active'); // Add 'active' class to the selected option
        });
    });
});


