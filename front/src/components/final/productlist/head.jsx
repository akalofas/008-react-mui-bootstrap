import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { visuallyHidden } from '@mui/utils'
import { Mui_table } from '../../mui_table'

export default function Head(props) {
    const createSortHandler = (property) => (event) => {
        props.onRequestSort(event, property);
      };
  return (
    <Fragment>
        <Mui_table.Head >
            <Mui_table.Row >
            {props.headCells.map((headCell) => (
                    <Mui_table.Cell
                        className='fs-5 border px-1 border-1 border-black text-blod'
                        width={headCell.Width}
                        max-width={headCell.maxWidth}
                        key={headCell.id}
                        align={headCell.align}
                        
                        sortDirection={props.orderBy === headCell.id ? props.order : false}
                    >
                        <Mui_table.TableSort
                            active={props.orderBy === headCell.id}
                            direction={props.orderBy === headCell.id ? props.order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {props.orderBy === headCell.id ? (
                            <Mui_table.Box component="span" sx={visuallyHidden}>
                                {props.order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                            </Mui_table.Box>
                            ) : null}
                        </Mui_table.TableSort>
                    </Mui_table.Cell>
                ))}
            </Mui_table.Row>
        </Mui_table.Head>
    </Fragment>
  )
}

Head.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    headCells: PropTypes.array.isRequired,
};