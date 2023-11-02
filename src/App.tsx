import useRouteElements from './useRouteElements'

function App() {
  const routerElement = useRouteElements()
  return <div>{routerElement}</div>
}

export default App
