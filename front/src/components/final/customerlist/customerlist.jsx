import React, { Fragment, useEffect, useMemo, useState , useRef} from 'react';
import {Mui_table} from '../../mui_table';
import Toolbar from './toolbar';
import Head from './head';
import Row from './rows';
import StableSort from '../sort';
import {variables} from '../../../api/variables';


export default function CustomerList(props) {
    const[rowJson, setRowJson] = useState([])

    const [order, setOrder] = useState('asc')
    const [orderBy, setOrderBy] = useState('id')

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(15)

    const [dense, setDense] = useState(true)
    const [activeCustomer, setActiveCustomer] = useState(true)

    const [apiOptions01, setApiOption01] = useState('%')
    const [apiOptions02, setApiOption02] = useState('1')
    const [apiOptions03, setApiOption03] = useState('%')

 
    const fetchInfo = () => {
        return fetch(variables.API_URL+
                     variables.CUSTOMERS.POST_PRIMARY.URL+
                     variables.CUSTOMERS.POST_PRIMARY.OPTION01+
                     apiOptions01+variables.AND+
                     variables.CUSTOMERS.POST_PRIMARY.OPTION02+
                     apiOptions02+variables.AND+
                     variables.CUSTOMERS.POST_PRIMARY.OPTION03+
                     apiOptions03+variables.AND+
                     variables.CUSTOMERS.POST_PRIMARY.OPTION04+
                     (activeCustomer ? 1 : 0),
                     variables.POST)
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
        }, [activeCustomer]);

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
      [rowJson, order, orderBy, page, rowsPerPage],
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
                <Toolbar  stateDense={setDense}
                         dense={dense}
                         title='Customer List'
                         activeCustomer={activeCustomer}
                         stateActiveCustomer={setActiveCustomer}
                />
                <Mui_table.Container >
                    <Mui_table.Table sx={{ minWidth: 750 }}
                                     aria-labelledby="tableTitle"
                                     size={dense ? 'small' : 'medium'}                                
                    >
                        <Head order={order}
                              orderBy={orderBy}
                              onRequestSort={handleRequestSort}
                              headCells={props.headers2}
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
