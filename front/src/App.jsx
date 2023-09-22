import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Allroutes } from './routes/routes'
import NavBar from './pages/navbar';
import PageHeader from './pages/header';
import PageFooter from './pages/footer';


const switchRoutes = (
  <Routes>
    {Allroutes.map((prop, key) => {
      return (
        <Route
          path={prop.url}
          element={prop.component}
          key={key}
        />
      );
    })}
    {/* <Route path='*' element = {<Page404 />} key='0'/> */}
  </Routes>
);


export default function WebApp() {
  return (
    <Fragment>
      <BrowserRouter>
        <PageHeader />
        <NavBar />     
        {switchRoutes}
        <PageFooter />
      </BrowserRouter>
    </Fragment>
  )
}
