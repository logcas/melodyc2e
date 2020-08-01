import { Tab, Tabs, List, Cell, Icon, NavBar, CellGroup, ActionSheet, Notify } from 'vant';

export function installVant(Vue) {
  const VantComponents = [
    Tab,
    Tabs,
    List,
    Cell,
    Icon,
    NavBar,
    CellGroup,
    ActionSheet,
    Notify
  ];
  VantComponents.forEach(Component => Vue.use(Component));
}
