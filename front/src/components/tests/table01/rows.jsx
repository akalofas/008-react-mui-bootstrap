import React, { useState, Fragment } from 'react'
import {Mui_table} from '../../mui_table';
import ProductModal from './modal';

export default function Row(props) {
    const [showModal, setShowModal] = useState(false)
    const [dataModal, setDataModal] = useState()

    const handleClick = (e) => {
        setDataModal(e)
        setShowModal(true)
    }
  return (
    <Fragment>
        <Mui_table.Body>
            {props.visibleRows.map((data, index) => (
                <Mui_table.Row>
                    <Mui_table.Cell
                        key={data.id}                        
                        component="th"
                        name={index}
                        scope="row"
                        padding="normal"
                    >{data.id}</Mui_table.Cell>
                    <Mui_table.Cell align='right'>{data.HEACTIVE}</Mui_table.Cell>
                    <Mui_table.Cell align='right'>{data.HECODE}</Mui_table.Cell>
                    <Mui_table.Cell align='right'>{data.HENAME}</Mui_table.Cell>
                    <Mui_table.Cell align='right'>{data.HEWHOLESALESPRICE}</Mui_table.Cell>
                    <Mui_table.Cell align='right'>{data.HEMM}</Mui_table.Cell>
                    <Mui_table.Cell align='right'>{data.HEVAT}</Mui_table.Cell>
                    <Mui_table.Cell align='right'>
                        <button className='btn btn-success' id={data.HECODE} onClick={(e) => {
                                handleClick(e.target.id)
                            }}>Color/Size
                        </button>
                        {showModal &&  <ProductModal 
                            setShowModal={setShowModal}
                            dataModal={dataModal}
            />}
                    </Mui_table.Cell>
                </Mui_table.Row>
              ))
            }
            {props.emptyRows > 0 && (
                <Mui_table.Row
                    style={{ height: (props.dense ? 33 : 53) * props.emptyRows,}}
                >
                    <Mui_table.Cell colSpan={6}/>
                </Mui_table.Row>
              )
            }
        </Mui_table.Body>
    </Fragment>
  )
}
