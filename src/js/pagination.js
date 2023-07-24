import Pagination from 'tui-pagination';

//FT-08 Creează sau conectează numerele paginilor (paginare) pe pagina principală
//FT-09 La accesarea fiecărei pagini, afișează partea corespunzătoare pentru filme
//FT-10 Realizează căutarea și afișarea filmelor după cuvinte cheie
// comada in terminal: npm i tui-pagination (pt install)

const API_KEY = '4f9e0ec41e08da372f31f33f2c08989f';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
var page = 1;

async function getData(url) {
  var x = await fetch(url, {
    method: 'GET',
    withCredentials: true,
  });
  return x;
}

async function getResults(query) {
  query = query.split(' ').join('+');
  var URL = `${BASE_URL}?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`;
  const res = await getData(URL);
  const data = await res.json();
  return data;
}

document.querySelector('.header__search').addEventListener('submit', event => {
  event.preventDefault();
  var search = document.getElementsByName('searchQuery')[0].value;
  if (search != '') {
    getResults(search).then(value => {
      //value.results.length retine nr.filmelor
      const options = {
        totalItems: value.results.length,
        itemsPerPage: 12,
        visiblePages: 5,
        page: 1,
        centerAlign: false,
        firstItemClassName: 'tui-first-child',
        lastItemClassName: 'tui-last-child',
        template: {
          page: '<a href="#" class="tui-page-btn">{{page}}</a>',
          currentPage:
            '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
          moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}}">' +
            '<span class="tui-ico-{{type}}"></span>' +
            '</a>',
          disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<span class="tui-ico-{{type}}"></span>' +
            '</span>',
          moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
            '<span class="tui-ico-ellip">...</span>' +
            '</a>',
        },
      };

      const pagination = new Pagination('pagination', options);

      pagination.on('afterMove', event => {
        const currentPage = event.page;
        document.getElementsByClassName('tui-ico-first')[0].innerText = '<<';
        document.getElementsByClassName('tui-ico-prev')[0].innerText = '<';
        document.getElementsByClassName('tui-ico-next')[0].innerText = '>';
        document.getElementsByClassName('tui-ico-last')[0].innerText = '>>';
      });

      document.getElementsByClassName('tui-ico-first')[0].innerText = '<<';
      document.getElementsByClassName('tui-ico-prev')[0].innerText = '<';
      document.getElementsByClassName('tui-ico-next')[0].innerText = '>';
      document.getElementsByClassName('tui-ico-last')[0].innerText = '>>';

      var nr = options.totalItems / options.itemsPerPage;
      var nrOfPages;
      if (Math.trunc(nr) == nr) {
        nrOfPages = nr;
      } else {
        nrOfPages = Math.trunc(nr) + 1;
      }

      if (nrOfPages > 5) {
        document.getElementById('pagination').style.width = 11 * 30 + 'px';
      } else if (nrOfPages == 0) {
        document.getElementById('pagination').style.width = 5 * 30 + 'px';
      } else {
        document.getElementById('pagination').style.width =
          (nrOfPages + 4) * 30 + 'px';
      }

      document.getElementById('pagination').style.marginTop = '100px';
    });
  }
});
