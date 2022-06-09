class NavigationActions {
  navigation: any = {}

  setNavigation(navigation: any) {
    this.navigation = navigation
  }

  getNavigation() {
    return this.navigation
  }

  navigate(routeName: string, params: any = {}) {
    this.navigation(routeName, params)
  }
}

export default new NavigationActions()

// an alternate solution to history
