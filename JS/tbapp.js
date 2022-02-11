//  simple degin tab Js code
const tab_menu = document.querySelectorAll('.haq-tab .tab-menu ul a');
const tab_pane_all = document.querySelectorAll('.tab-pane')

tab_menu.forEach(item =>{
 
    item.addEventListener('click', function(e) {
        e.preventDefault();

        tab_menu.forEach(item => {
            item.classList.remove('active');
        });

        item.classList.add('active');

        const tab_pane = document.querySelector(this.getAttribute('href'));
        tab_pane_all.forEach(item => {
            item.classList.remove('active');
        });
        tab_pane.classList.add('active');
    });

});
 
// supper tab js code
const supper_menu = document.querySelectorAll('.haq-supper-tab .supper-tab-menu ul a');
const supper_tab_pane_all = document.querySelectorAll('.supper-tab-pane');

supper_menu.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        supper_menu.forEach(item =>{
            item.classList.remove('active');
        });

        item.classList.add('active');

        const supper_pane = document.querySelector(this.getAttribute('href'));
        supper_tab_pane_all.forEach(item => {
            item.classList.remove('active');
        });
        supper_pane.classList.add('active');
    });
});