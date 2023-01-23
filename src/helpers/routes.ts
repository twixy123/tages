type Route = string | Function

interface Routes {
  main: Route
  storageSystems: Route
  rackSystems: Route
  rackSystemItem: Route
}

type RouteName = keyof Routes
type Args = (string | number)[]

function createCurrentRoutePath (str: string, paramsOrder: string[], args?: Args): string {
  let _route = str

  if (args?.length) {
    args.forEach(arg => _route += `/${arg}`)
  } else {
    paramsOrder.forEach(arg => _route += `/:${arg}`)
  }

  return _route
}

const routes: Routes = {
  main: '/',
  storageSystems: '/storage-systems',
  rackSystems: '/storage-systems/rack-systems',
  rackSystemItem: (...args: Args): string => {
    return createCurrentRoutePath('/storage-systems/rack-systems', ['id'], args)
  }
}

export default function getRoutePath (routeName: RouteName, additionArgs?: Args): string {
  const route = routes[routeName]

  if (typeof route === 'function') {
    return additionArgs ? route.apply(null, [...additionArgs]) : route()
  }

  return route
}