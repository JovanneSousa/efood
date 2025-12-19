import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { GlobalStyle } from './GlobalStyle'
import { store } from './store'
import Rotas from './Rotas'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
