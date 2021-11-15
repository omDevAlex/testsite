window.addEventListener('DOMContentLoaded', () => {

  // modal

  const modal = document.querySelector('.modal'),
          modalOpen = document.querySelectorAll('[data-modal]'),
          modalClose = document.querySelector('[data-close]');

    function toggleModal() {
        modal.classList.toggle('show');      
    }
    
    modalOpen.forEach(btn => {
        btn.addEventListener('click', toggleModal);
    });

    modalClose.addEventListener('click', toggleModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            toggleModal();
        }
    });

  // tabs

  const tabsParent = document.querySelector('.tabheader__items'),
  tabs = document.querySelectorAll('.tabheader__item'),
  tabsContent = document.querySelectorAll('.tabcontent');

  function hideTab() {
  tabsContent.forEach(item => {
      item.classList.remove('tabshow');
  });
  tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
  });
  }

  function showTab(i) {
  tabsContent[i].classList.add('tabshow');
  tabs[i].classList.add('tabheader__item_active');
  }

  tabsParent.addEventListener('click', (e) => {
  const target = e.target;

  if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
          if (target == item) {
              hideTab();
              showTab(i);
          }
      });
  }
  });

  // change theme

  const toggleCheckbox = document.querySelector('.toggle');

  function toggleTheme() {
    document.body.classList.toggle('dark');
  }

  toggleCheckbox.addEventListener('click', toggleTheme);

  // lang list

	const langList = document.querySelector('.lang_openlist'),
        lengSubList = document.querySelector('.lang_sublist');

  function toggleSubList() {
      lengSubList.classList.toggle('show_list');
  }
    
  langList.addEventListener('click', toggleSubList);

  document.addEventListener('click', (e) => {
      if ( e.target.className != 'lang_sublist' && e.target.className != 'lang_openlist' && lengSubList.classList.contains('show_list') ) {
        toggleSubList();
      }
  });

  const chatBtn = document.querySelector('.chat_icon'),
        openChat = document.querySelector('.chat_masseges');

  function toggleChat() {
    openChat.classList.toggle('show_masseges');
  }
    
  chatBtn.addEventListener('click', toggleChat);

  document.addEventListener('click', (e) => {
      if ( e.target.className != 'chat_masseges' && e.target.className != 'chat_icon' && openChat.classList.contains('show_masseges') ) {
        toggleChat();
      }
  });

  const notifBtn = document.querySelector('.notif_icon'),
        openNotif = document.querySelector('.notif_masseges');

  function toggleNotif() {
    openNotif.classList.toggle('show_masseges');
  }
    
  notifBtn.addEventListener('click', toggleNotif);

  document.addEventListener('click', (e) => {
      if ( e.target.className != 'notif_masseges' && e.target.className != 'notif_icon' && openNotif.classList.contains('show_masseges') ) {
        toggleNotif();
      }
  });

  const openMenu = document.querySelector('.menu_open'),
        mobileMenu = document.querySelector('.menu_mobile'),
        tools = document.querySelector('.tools'),
        closeMenu = document.querySelector('.menu_close');
  
  function mobiMenu() {
    mobileMenu.classList.toggle('show_menu');
    tools.classList.toggle('show_tools');
  }

  openMenu.addEventListener('click', mobiMenu);
  openMenu.addEventListener('click', tools);
  
  closeMenu.addEventListener('click', mobiMenu);
  closeMenu.addEventListener('click', tools);

  document.addEventListener('click', (e) => {
    if ( e.target.className != 'menu_open' && e.target.className != 'menu_close' && e.target.className != 'menu_mobile' && openNotif.classList.contains('show_menu') ) {
      mobiMenu();
    }
});

});