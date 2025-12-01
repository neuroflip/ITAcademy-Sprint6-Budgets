import './styles/App.css'

import Card from './components/Card/Card'

function App() {

  return (<>
    <Card title="Web" description='Programación de una web responsive completa' value={ 500 }></Card>
    <Card title="Seo" description='Análisis y optimizavión de Seo' value={ 300 }></Card>
    <Card title="Ads" description='Integración y desarrollo de proveedores de publicidad' value={ 400 }></Card>
  </>)
}

export default App
