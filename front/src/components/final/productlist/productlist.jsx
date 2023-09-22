import React, { Fragment, useEffect, useMemo, useState } from 'react';
import {Mui_table} from '../../mui_table';
import Toolbar from './toolbar';
import Head from './head';
import Row from './rows';
import StableSort from '../sort';
import {variables} from '../../../api/variables';


export default function ProductList(props) {
    const[rowJson, setRowJson] = useState([])

    const [order, setOrder] = useState('asc')
    const [orderBy, setOrderBy] = useState('id')

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(15)

    const [dense, setDense] = useState(true)
    const [activeProduct, setActiveProduct] = useState(true)

    const fetchInfo = () => {
        return fetch(variables.API_URL+
                      variables.ITEMS.GET_PRIMARY.URL+
                      variables.ITEMS.GET_PRIMARY.OPTION01+
                      (activeProduct ? 1 : 0),
                      variables.GET)
               .then((response) => {
                    return response.json();
                    })
               .then((response) => {
                    setRowJson(response);
                    })
               .catch(function(error) {
                    console.log(error);
                   });
            }
    
      useEffect(() => {
        fetchInfo();
      }, [activeProduct]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    
    const visibleRows = useMemo(() => 
        StableSort(rowJson, order, orderBy).slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage,
        ),
      [rowJson , order, orderBy, page, rowsPerPage],
    )

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowJson.length) : 0
    
    

  return (
    <Fragment>
        <Mui_table.Box  sx={{ width: '100%', 
                              height: '68vh',
                              minHeight: '80vh',
                              border: '2px solid black', 
                              overflow: 'scroll' }}>
            <Mui_table.Paper sx={{ width: '100%', 
                                  mb: 2 , 
                                  overflow: 'hidden'}}>
                <Toolbar stateDense={setDense}
                         dense={dense}
                         title='Product List'
                         activeProduct={activeProduct}
                         stateActiveProduct={setActiveProduct}
                />
                <Mui_table.Container >
                    <Mui_table.Table sx={{ minWidth: 750 }}
                                     aria-labelledby="tableTitle"
                                     size={dense ? 'small' : 'medium'}                                
                    >
                        <Head order={order}
                              orderBy={orderBy}
                              onRequestSort={handleRequestSort}
                              headCells={props.headers1}
                        />
                        <Row visibleRows={visibleRows}
                             emptyRows={emptyRows}
                             dense={dense}
                        />
                    </Mui_table.Table>
                </Mui_table.Container>
                <Mui_table.Pagination
                    rowsPerPageOptions={[5, 10, 15, 25, 50, { value: -1, label: 'All' }]}
                    component="div"
                    count={rowJson.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    sx={{ bgcolor: 'grey' }}
                />
            </Mui_table.Paper>
        </Mui_table.Box>
    </Fragment>
  )
}
