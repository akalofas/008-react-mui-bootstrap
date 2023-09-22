import React, { Fragment, useMemo, useState } from 'react';
import {Mui_table} from '../../mui_table';
import Toolbar from './toolbar';
import Head from './head';
import Row from './rows';
import StableSort from '../sort';

export default function Table01(props) {
    const [order, setOrder] = useState('asc')
    const [orderBy, setOrderBy] = useState('id')

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(15)

    const [dense, setDense] = useState(true)

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

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.rowdata.length) : 0

    const visibleRows = useMemo(() =>
        StableSort(props.rowdata, order, orderBy).slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage,
        ),
      [order, orderBy, page, rowsPerPage],
    )

  return (
    <Fragment>
        <Mui_table.Box  sx={{ width: '98%', 
                              height: '75vh',
                              margin: '0 0 0 1%',
                              border: '2px solid black', 
                              overflow: 'scroll',
                              }}>
            <Mui_table.Paper sx={{ width: '100%', 
                                   mb: 2 , 
                                   }}>
                <Toolbar stateDense={setDense}
                         dense={dense}
                         title='Table 01'
                />
                <Mui_table.Container >
                    <Mui_table.Table sx={{ minWidth: 750}}
                                     aria-labelledby="tableTitle"
                                     size={dense ? 'small' : 'medium'}
                                     
                                    
                    >
                        <Head order={order}
                              orderBy={orderBy}
                              onRequestSort={handleRequestSort}
                              headCells={props.headers3}
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
                    count={props.rowdata.length}
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
