/*jshint esversion: 6 */

window.addEventListener('DOMContentLoaded', () => {

  // change theme

  const toggleCheckbox = document.querySelector('.toggle');

  function toggleTheme() {    
    if (toggleCheckbox.checked) {
      localStorage.setItem( 'dark', true);
    } else {
      localStorage.setItem( 'dark', false);
    }
  }
  function theme() {
    let darkMode = document.querySelector('#dark-mode');
    if (localStorage.dark === 'true') {
      document.body.classList.add('dark'); 
      darkMode.checked = true;
    } else {
      document.body.classList.remove('dark');
    }
  }

  theme();
  

  toggleCheckbox.addEventListener('click', toggleTheme);
  toggleCheckbox.addEventListener('click', theme);

  // modal

  const modal = document.querySelector('.modal'),
        modalOpen = document.querySelector('[data-modal]'),
        modalClose = document.querySelector('[data-close]');

    function toggleModal() {
        modal.classList.toggle('show');      
    }
    
    modalOpen.addEventListener('click', toggleModal);

    modalClose.addEventListener('click', toggleModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            toggleModal();
        }
    });

  const modalNews = document.querySelector('.modal_news'),
        modalOpenNews = document.querySelectorAll('[data-modal-news]'),
        modalCloseNews = document.querySelector('[data-close-news]');

    function toggleModalNews() {
        modalNews.classList.toggle('show');      
    }
    
    modalOpenNews.forEach(btn => {
        btn.addEventListener('click', toggleModalNews);
    });

    modalCloseNews.addEventListener('click', toggleModalNews);

    modalNews.addEventListener('click', (e) => {
        if (e.target === modalNews) {
            toggleModalNews();
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

  //rait tabs

  const tabsParentRait = document.querySelector('.tabheader_raiting__items'),
        tabsRait = document.querySelectorAll('.tabheader_raiting__item'),
        tabsContentRait = document.querySelectorAll('.tabcontent_raiting');

  function hideTabRait() {
    tabsContentRait.forEach(item => {
        item.classList.remove('tabshow_raiting');
    });
    tabsRait.forEach(item => {
        item.classList.remove('tabheader_raiting__item_active');
    });
  }

  function showTabRait(i) {
    tabsContentRait[i].classList.add('tabshow_raiting');
    tabsRait[i].classList.add('tabheader_raiting__item_active');
  }

  tabsParentRait.addEventListener('click', (e) => {
  const target = e.target;

  if (target && target.classList.contains('tabheader_raiting__item')) {
      tabsRait.forEach((item, i) => {
          if (target == item) {
              hideTabRait();
              showTabRait(i);
          }
      });
  }
  });    

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
  
  closeMenu.addEventListener('click', mobiMenu);


  // filter

  const filterList = document.querySelector('.page_main_list_news_filter'),
        filterItems = document.querySelectorAll('.news_block'),
        listItems = document.querySelectorAll('.filter_item');

  if (filterList !==null) {
    function filter() {
      filterList.addEventListener('click', e => {
        const targetId = e.target.dataset.id;
        const target = e.target;
  
        if (target.classList.contains('filter_item')) {
          listItems.forEach(listItem => listItem.classList.remove('filter_active'));
          target.classList.add('filter_active');
        }
  
        switch(targetId) {
          case 'all':
            getItems('news_block');
            break;
          case 'popular':
            getItems(targetId);
            break;
          case 'newest':
            getItems(targetId);
            break;
        }
      });
    }
  }
  
  if (filterList !==null) {
    filter();
  }
  

  function getItems(className) {
    filterItems.forEach(item =>{
      if (item.classList.contains(className)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // tourneys filter

  const filterTurnirsCs = document.querySelector('.tourneys_tabcontent_filter_cs'),
        filterBloksTurnirCs = document.querySelectorAll('.turnir_bloks_cs'),
        listTurnirItemsCs = document.querySelectorAll('.turnir_item_cs');

  if (filterTurnirsCs !==null) {
    function filter() {
      filterTurnirsCs.addEventListener('click', e => {
        const targetId = e.target.dataset.id;
        const target = e.target;
  
        if (target.classList.contains('turnir_item_cs')) {
          listTurnirItemsCs.forEach(listItem => listItem.classList.remove('turnir_active_cs'));
          target.classList.add('turnir_active_cs');
        }
  
        switch(targetId) {
          case 'active':
            getItems(targetId);
            break;
          case 'completing':
            getItems(targetId);
            break;
          case 'forthcoming':
            getItems(targetId);
            break;
        }
      });
    }
  
    filter();
  

    function getItems(className) {
      filterBloksTurnirCs.forEach(item =>{
        if (item.classList.contains(className)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }
  }

  const filterTurnirsDt = document.querySelector('.tourneys_tabcontent_filter_dt'),
        filterBloksTurnirDt = document.querySelectorAll('.turnir_bloks_dt'),
        listTurnirItemsDt = document.querySelectorAll('.turnir_item_dt');

  if (filterTurnirsDt !==null) {
    function filter() {
      filterTurnirsDt.addEventListener('click', e => {
        const targetId = e.target.dataset.id;
        const target = e.target;
  
        if (target.classList.contains('turnir_item_dt')) {
          listTurnirItemsDt.forEach(listItem => listItem.classList.remove('turnir_active_dt'));
          target.classList.add('turnir_active_dt');
        }
  
        switch(targetId) {
          case 'active':
            getItems(targetId);
            break;
          case 'completing':
            getItems(targetId);
            break;
          case 'forthcoming':
            getItems(targetId);
            break;
        }
      });
    }
  
    filter();
  

    function getItems(className) {
      filterBloksTurnirDt.forEach(item =>{
        if (item.classList.contains(className)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }
  }

  const filterTurnirsFf = document.querySelector('.tourneys_tabcontent_filter_ff'),
        filterBloksTurnirFf = document.querySelectorAll('.turnir_bloks_ff'),
        listTurnirItemsFf = document.querySelectorAll('.turnir_item_ff');

  if (filterTurnirsFf !==null) {
    function filter() {
      filterTurnirsFf.addEventListener('click', e => {
        const targetId = e.target.dataset.id;
        const target = e.target;
  
        if (target.classList.contains('turnir_item_ff')) {
          listTurnirItemsFf.forEach(listItem => listItem.classList.remove('turnir_active_ff'));
          target.classList.add('turnir_active_ff');
        }
  
        switch(targetId) {
          case 'active':
            getItems(targetId);
            break;
          case 'completing':
            getItems(targetId);
            break;
          case 'forthcoming':
            getItems(targetId);
            break;
        }
      });
    }
  
    filter();
  

    function getItems(className) {
      filterBloksTurnirFf.forEach(item =>{
        if (item.classList.contains(className)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }
  }


  //_________

  const filterLeaguesCs = document.querySelector('.leagues_tabcontent_filter_cs'),
        filterBloksLeagueCs = document.querySelectorAll('.league_bloks_cs'),
        listLeagueItemsCs = document.querySelectorAll('.league_item_cs');

  if (filterLeaguesCs !==null) {
    function filter() {
      filterLeaguesCs.addEventListener('click', e => {
        const targetId = e.target.dataset.id;
        const target = e.target;
  
        if (target.classList.contains('league_item_cs')) {
          listLeagueItemsCs.forEach(listItem => listItem.classList.remove('league_active_cs'));
          target.classList.add('league_active_cs');
        }
  
        switch(targetId) {
          case 'fxf':
            getItems(targetId);
            break;
          case 'txt':
            getItems(targetId);
            break;
          case 'oxo':
            getItems(targetId);
            break;
        }
      });
    }
  
    filter();
  

    function getItems(className) {
      filterBloksLeagueCs.forEach(item =>{
        if (item.classList.contains(className)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }
  }

  const filterLeaguesDt = document.querySelector('.leagues_tabcontent_filter_dt'),
        filterBloksLeagueDt = document.querySelectorAll('.league_bloks_dt'),
        listLeagueItemsDt = document.querySelectorAll('.league_item_dt');

  if (filterLeaguesDt !==null) {
    function filter() {
      filterLeaguesDt.addEventListener('click', e => {
        const targetId = e.target.dataset.id;
        const target = e.target;
  
        if (target.classList.contains('league_item_dt')) {
          listLeagueItemsDt.forEach(listItem => listItem.classList.remove('league_active_dt'));
          target.classList.add('league_active_dt');
        }
  
        switch(targetId) {
          case 'fxf':
            getItems(targetId);
            break;
          case 'txt':
            getItems(targetId);
            break;
          case 'oxo':
            getItems(targetId);
            break;
        }
      });
    }
  
    filter();
  

    function getItems(className) {
      filterBloksLeagueDt.forEach(item =>{
        if (item.classList.contains(className)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }
  }

  const filterLeaguesFf = document.querySelector('.leagues_tabcontent_filter_ff'),
        filterBloksLeagueFf = document.querySelectorAll('.league_bloks_ff'),
        listLeagueItemsFf = document.querySelectorAll('.league_item_ff');

  if (filterLeaguesFf !==null) {
    function filter() {
      filterLeaguesFf.addEventListener('click', e => {
        const targetId = e.target.dataset.id;
        const target = e.target;
  
        if (target.classList.contains('league_item_ff')) {
          listLeagueItemsFf.forEach(listItem => listItem.classList.remove('league_active_ff'));
          target.classList.add('league_active_ff');
        }
  
        switch(targetId) {
          case 'fxf':
            getItems(targetId);
            break;
          case 'txt':
            getItems(targetId);
            break;
          case 'oxo':
            getItems(targetId);
            break;
        }
      });
    }
  
    filter();
  

    function getItems(className) {
      filterBloksLeagueFf.forEach(item =>{
        if (item.classList.contains(className)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }
  }

  

  // game tabs

  const tabsParentGame = document.querySelector('.tabheader_game__items'),
        tabsGame = document.querySelectorAll('.tabheader_game__item'),
        tabsContentGame = document.querySelectorAll('.tabcontent_game');

  if (tabsParentGame !==null) {
    function hideTabGame() {
      tabsContentGame.forEach(item => {
          item.classList.remove('tabshow_game');
      });
      tabsGame.forEach(item => {
          item.classList.remove('tabheader_game__item_active');
      });
    }
  
    function showTabGame(i) {
      tabsContentGame[i].classList.add('tabshow_game');
      tabsGame[i].classList.add('tabheader_game__item_active');
    }
  
    tabsParentGame.addEventListener('click', (e) => {
    const target = e.target;
  
    if (target && target.classList.contains('tabheader_game__item')) {
        tabsGame.forEach((item, i) => {
            if (target == item) {
                hideTabGame();
                showTabGame(i);
            }
        });
    }
    });
  }

  

});