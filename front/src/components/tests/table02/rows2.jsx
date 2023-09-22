import React, { useState, Fragment } from 'react'
import {Mui_table} from '../../mui_table';
import InfoModal from './infomodal'
import BranchesModal from './branchesmodal'
import numberFormat from '../../numberformat'


export default function Row(props) {
    const [showInfoModal, setShowInfoModal] = useState(false)
    const [showBranchesModal, setShowBranchesModal] = useState(false)
    const [dataModal, setDataModal] = useState()
    const [dataModalName, setDataModalName] = useState()

    const handleClickInfo = (e) => {
        const information = e.split('-')
        setDataModal(information[0])
        setDataModalName(information[1])
        setShowInfoModal(true)
    }

    const handleClickBranches = (e) => {
        const information = e.split('-')
        setDataModal(information[0])
        setDataModalName(information[1])
        setShowBranchesModal(true)
    }

  return (
    <Fragment>
        <Mui_table.Body>
            {props.visibleRows.map((data, index) => (
                <Mui_table.Row >
                    <Mui_table.Cell
                        key={data.ROWID} 
                        align='center'                       
                        component="th"
                        name={index}
                        scope="row"
                        padding='none'
                        className='border border-1 px-0 border-black fs-5'
                    >{data.ROWID}</Mui_table.Cell>
                    <Mui_table.Cell align='center' className='border border-1 border-black  px-1 fs-5'>{data.CSTMACTIVE}</Mui_table.Cell>
                    <Mui_table.Cell align='center' className='border border-1 border-black  px-1 fs-5'>{data.CSTMCODE}</Mui_table.Cell>
                    <Mui_table.Cell align='left' className='border border-1 border-black px-1 fs-5'>{data.CSTMNAME}</Mui_table.Cell>
                    <Mui_table.Cell align='left' className='border border-1 border-black px-1 fs-5'>{data.CSTMDISTINCTIVETITLE}</Mui_table.Cell>
                    <Mui_table.Cell align='right' className='border border-1 border-black px-1 fs-5'>{data.SALESMANCODE}</Mui_table.Cell>
                    <Mui_table.Cell align='right' className='border border-1 border-black px-1 fs-5'>{data.AFM}</Mui_table.Cell>
                    <Mui_table.Cell align='right' className='border border-1 border-black px-1 fs-5'>{numberFormat(data.DEBIT)}</Mui_table.Cell>
                    <Mui_table.Cell align='right' className='border border-1 border-black px-1 fs-5'>{numberFormat(data.CREDIT)}</Mui_table.Cell>
                    <Mui_table.Cell align='right' className='border border-1 border-black px-1 fs-5'>{numberFormat(data.YPOLOIPO)}</Mui_table.Cell>
                    <Mui_table.Cell align='right' className='border border-1 border-black px-1 fs-5'>{numberFormat(data.TZIROS)}</Mui_table.Cell>
                    <Mui_table.Cell align='center' className='border border-1 border-black px-0 fs-5'>
                        <button className='btn btn-success' id={`${data.CSTMCODE}`+'-'+`${data.CSTMNAME}`} onClick={(e) => {
                                handleClickInfo(e.target.id)
                            }}>Info
                        </button>
                        {showInfoModal &&  <InfoModal 
                            setShowInfoModal={setShowInfoModal}
                            dataModal={dataModal}
                            dataModalName={dataModalName}
                        />}
                    </Mui_table.Cell>
                    <Mui_table.Cell align='center' className='border border-1 border-black px-0 fs-5'>
                        <button className='btn btn-success' id={`${data.CSTMCODE}`+'-'+`${data.CSTMNAME}`} onClick={(e) => {
                                handleClickBranches(e.target.id)
                            }}>Branches
                        </button>
                        {showBranchesModal &&  <BranchesModal 
                            setShowBranchesModal={setShowBranchesModal}
                            dataModal={dataModal}
                            dataModalName={dataModalName}
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
