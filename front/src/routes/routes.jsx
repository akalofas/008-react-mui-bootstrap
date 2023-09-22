import Home from '../pages/home'
import Page404 from '../pages/page404'
import ProductList from '../components/final/productlist/productlist'
import CustomerList from '../components/final/customerlist/customerlist'

import {data} from '../api/data'


import Table02 from '../components/tests/table02/main2'
import Table01 from '../components/tests/table01/main';

export const Allroutes = [
    { 
    id: 0,
    url: '*',
    text: 'Page404',
    component: <Page404/>
    },
    { 
    id: 1,
    url: '/',
    text: 'Home',
    component: <Home/>
    },
    { 
    id: 2,
    url: '/Products',
    text: 'Products',
    component: <ProductList headers1={data.products}/>
    },
    { 
    id: 3,
    url: '/Customers',
    text: 'CustomerList',
    component: <CustomerList headers2={data.customers}/>
    },
    { 
    id: 4,
    url: '/table01',
    text: 'TABLE FAKE DATA',
    component: <Table01 headers3={data.fake} rowdata={data.rowdata}/>
    },
];
