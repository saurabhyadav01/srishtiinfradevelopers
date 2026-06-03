const REAL_ESTATE_PAGES = ['/', '/projects', '/about', '/about/contact', '/portfolio'];

const changeColor = (colorPath?: string | null, fontPath?: string | null) => {
  document.getElementById('custom-theme')?.remove();
  document.getElementById('custom-font')?.remove();

  if (colorPath) {
    const link = document.createElement('link');
    link.setAttribute('href', colorPath);
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('id', 'custom-theme');
    document.querySelector('head')?.appendChild(link);
  }

  if (fontPath) {
    const link = document.createElement('link');
    link.setAttribute('href', fontPath);
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('id', 'custom-font');
    document.querySelector('head')?.appendChild(link);
  }
};

const changeTheme = (pathname: string) => {
  if (REAL_ESTATE_PAGES.includes(pathname)) {
    changeColor('/css/colors/realestate.css', null);
    return;
  }

  switch (pathname) {
    case '/demo-1':
      changeColor('/css/colors/yellow.css', '/css/fonts/thicccboi.css');
      break;

    case '/demo-2':
      changeColor(null, '/css/fonts/dm.css');
      break;

    case '/demo-3':
      changeColor('/css/colors/aqua.css', '/css/fonts/thicccboi.css');
      break;

    case '/demo-4':
      changeColor('/css/colors/violet.css', '/css/fonts/dm.css');
      break;

    case '/demo-6':
      changeColor('/css/colors/aqua.css', '/css/fonts/thicccboi.css');
      break;

    case '/demo-7':
      changeColor('/css/colors/purple.css', '/css/fonts/thicccboi.css');
      break;

    case '/demo-8':
      changeColor('/css/colors/aqua.css', '/css/fonts/dm.css');
      break;

    case '/demo-9':
      changeColor(null, '/css/fonts/dm.css');
      break;

    case '/demo-10':
      changeColor('/css/colors/orange.css', '/css/fonts/thicccboi.css');
      break;

    case '/demo-11':
      changeColor('/css/colors/purple.css', null);
      break;

    case '/demo-12':
      changeColor('/css/colors/orange.css', null);
      break;

    case '/demo-13':
      changeColor('/css/colors/purple.css', null);
      break;

    case '/demo-14':
      changeColor('/css/colors/violet.css', '/css/fonts/thicccboi.css');
      break;

    case '/demo-16':
      changeColor('/css/colors/pink.css', null);
      break;

    case '/demo-17':
      changeColor('/css/colors/navy.css', null);
      break;

    case '/demo-18':
      changeColor('/css/colors/grape.css', '/css/fonts/urbanist.css');
      break;

    case '/demo-19':
      changeColor('/css/colors/violet.css', '/css/fonts/urbanist.css');
      break;

    case '/demo-20':
      changeColor('/css/colors/purple.css', '/css/fonts/urbanist.css');
      break;

    case '/demo-21':
      changeColor('/css/colors/sky.css', '/css/fonts/urbanist.css');
      break;

    case '/demo-22':
      changeColor('/css/colors/purple.css', '/css/fonts/urbanist.css');
      break;

    case '/demo-23':
      changeColor('/css/colors/leaf.css', '/css/fonts/urbanist.css');
      break;

    case '/demo-24':
      changeColor('/css/colors/yellow.css', '/css/fonts/urbanist.css');
      break;

    case '/demo-25':
      changeColor('/css/colors/pink.css', '/css/fonts/urbanist.css');
      break;

    case '/demo-26':
      changeColor('/css/colors/grape.css', '/css/fonts/urbanist.css');
      break;

    case '/demo-27':
      changeColor('/css/colors/navy.css', null);
      break;

    case '/demo-28':
      changeColor('/css/colors/purple.css', '/css/fonts/space.css');
      break;

    case '/demo-29':
      changeColor('/css/colors/grape.css', '/css/fonts/space.css');
      break;

    case '/demo-30':
      changeColor('/css/colors/grape.css', '/css/fonts/space.css');
      break;

    case '/demo-31':
      changeColor(null, '/css/fonts/space.css');
      break;

    case '/demo-32':
      changeColor(null, '/css/fonts/space.css');
      break;

    case '/demo-33':
      changeColor('/css/colors/navy.css', '/css/fonts/space.css');
      break;

    case '/demo-34':
      changeColor('/css/colors/purple.css', '/css/fonts/thicccboi.css');
      break;

    default:
      changeColor('/css/colors/realestate.css', null);
  }
};

export default changeTheme;
