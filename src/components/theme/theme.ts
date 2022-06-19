export interface themeType {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  switchOnColor: string;
  switchOffColor: string;
  searchContainerBg: string;
  tabBg: string;
  cardBg: string;
  layoutBg: string;
  boder: string;
  textColor: string;
  tabIconUnfocused: string;
}

interface themesType {
  light: themeType;
  dark: themeType;
}

const themes: themesType = {
  light: {
    name: 'light',
    primaryColor: 'blue',
    secondaryColor: '#f5f5f5',
    switchOnColor: 'blue',
    switchOffColor: 'grey',
    searchContainerBg: '#dcdcdc',
    tabBg: '#f5f5f5',
    cardBg: '#ffffff',
    layoutBg: '#ffffff',
    boder: '#ffffff',
    textColor: 'black',
    tabIconUnfocused: 'grey',
  },
  dark: {
    name: 'dark',
    primaryColor: 'rgb(58, 58, 60)',
    secondaryColor: 'grey',
    switchOnColor: 'rgb(58, 58, 60)',
    switchOffColor: 'grey',
    searchContainerBg: '#dcdcdc',
    tabBg: 'grey',
    cardBg: '#dcdcdc',
    layoutBg: '#AEAEAE',
    boder: '#AEAEAE',
    textColor: 'white',
    tabIconUnfocused: '#AEAEAE',
  },
};

export {themes};
