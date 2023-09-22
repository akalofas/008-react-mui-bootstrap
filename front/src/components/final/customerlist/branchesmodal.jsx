import React,{useState, useEffect, useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Mui_table} from '../../mui_table';
import {variables} from '../../../api/variables';
import numberFormat from '../../numberformat'

const BranchesModal = (props) => {
  const [modalBranchesData, setModalBranchesData] = useState([]);
  const [modalAXData, setModalAXData] = useState([])

  const fetchModalBranches = () => {
    return fetch(variables.API_URL+
                 variables.CUSTOMERS.POST_BR_TZIROS_SLM.URL+
                 variables.CUSTOMERS.POST_BR_TZIROS_SLM.OPTION01+
                 props.dataModal+variables.AND+
                 variables.CUSTOMERS.POST_BR_TZIROS_SLM.OPTION02+
                 variables.ANY,
                 variables.POST)
           .then((response) => {
                return response.json();
                })
           .then((response) => {
                setModalBranchesData(response);
                })
           .catch(function(error) {
                console.log(error);
               });
        }

        const fetchModalAXInfo = () => {
          return fetch(variables.API_URL+
                       variables.CUSTOMERS.POST_AX.URL+
                       variables.CUSTOMERS.POST_AX.OPTION01+
                       props.dataModal,
                       variables.POST)
                 .then((response) => {
                      return response.json();
                      })
                 .then((response) => {
                      setModalAXData(response);
                      })
                 .catch(function(error) {
                      console.log(error);
                     });
              }

  useEffect(() => {
        fetchModalBranches();
        fetchModalAXInfo(); 
  }, []);

  function aXtotal(items) {
    return items.map(({ TXBALANCE }) => TXBALANCE).reduce((sum, i) => sum + i, 0);
  }

  function bRTzirostotal2(items) {
    return items.map(({ TZIROS_YTD }) => TZIROS_YTD).reduce((sum, i) => sum + i, 0);
  }
  
  function bRBalancetotal2(items) {
    return items.map(({ BALANCE_YTD }) => BALANCE_YTD).reduce((sum, i) => sum + i, 0);
  }
  

  const rowtotal = aXtotal(modalAXData).toFixed(2);
  const brtzirostotal = bRTzirostotal2(modalBranchesData).toFixed(2);
  const brbalancetotal = bRBalancetotal2(modalBranchesData).toFixed(2);




  return (
    <React.Fragment>
      <Modal
        show={props.setShowBranchesModal}
        onHide={props.setShowBranchesModal}
        size="xl"
        aria-labelledby="example-modal-sizes-title-xl"        
        keyboard={true}
        scrollable={true}
        centered
      >
        <Modal.Header className='border-dark border-bottom' closeButton>
          <Modal.Title >{props.dataModal} {props.dataModalName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Mui_table.Table>
            <Mui_table.Head>
              <Mui_table.Row>
                <Mui_table.Cell>
                  Period
                </Mui_table.Cell>
                <Mui_table.Cell>
                  DEBIT
                </Mui_table.Cell>
                <Mui_table.Cell>
                  CREDIT
                </Mui_table.Cell>
                <Mui_table.Cell>
                  BALANCE
                </Mui_table.Cell>
              </Mui_table.Row>
            </Mui_table.Head>
            <Mui_table.Body>
              {modalAXData.map((info, index) => (
                    <Mui_table.Row >
                        <Mui_table.Cell
                            key={info.TXORDER} 
                            align='center'                       
                            component="th"
                            name={index}
                            scope="row"
                            padding='none'
                        >{info.TXDESCR}
                        </Mui_table.Cell>
                        <Mui_table.Cell align='right' >{numberFormat(info.TXDEBIT)}</Mui_table.Cell>
                        <Mui_table.Cell align='right' >{numberFormat(info.TXCREDIT)}</Mui_table.Cell>
                        <Mui_table.Cell align='right' >{numberFormat(info.TXBALANCE)}</Mui_table.Cell>
                      </Mui_table.Row >
                    )
                  )
              }
                        <Mui_table.Row>
                          <Mui_table.Cell rowSpan={3} />
                          <Mui_table.Cell colSpan={2}>Total</Mui_table.Cell>
                          <Mui_table.Cell  align='right' left="right">{numberFormat(rowtotal)}</Mui_table.Cell>
                        </Mui_table.Row>
            </Mui_table.Body>
          </Mui_table.Table>
          <Mui_table.Table>
            <Mui_table.Head>
              <Mui_table.Row>
                <Mui_table.Cell>
                A/A
                </Mui_table.Cell>
                <Mui_table.Cell>
                ACTIVE
                </Mui_table.Cell>
                <Mui_table.Cell>
                NAME
                </Mui_table.Cell>
                <Mui_table.Cell>
                DISCOUNT
                </Mui_table.Cell>
                <Mui_table.Cell>
                TZIROS_YTD
                </Mui_table.Cell>
                <Mui_table.Cell>
                BALANCE_YTD
                </Mui_table.Cell>
                <Mui_table.Cell>
                LAST_DATE_PUR
                </Mui_table.Cell>
              </Mui_table.Row>
            </Mui_table.Head>
            <Mui_table.Body>
              {modalBranchesData.map((info, index) => (
                  <Mui_table.Row >
                      <Mui_table.Cell
                          key={info.ROWID} 
                          align='center'                       
                          component="th"
                          name={index}
                          scope="row"
                          padding='none'
                      >{info.ROWID}
                      </Mui_table.Cell>
                      <Mui_table.Cell>{info.BR_ACTIVE}</Mui_table.Cell>
                      <Mui_table.Cell>{info.BRANCH_NAME}</Mui_table.Cell>
                      <Mui_table.Cell>{info.HEDISCOUNT}</Mui_table.Cell>
                      <Mui_table.Cell align='right' >{numberFormat(info.TZIROS_YTD)}</Mui_table.Cell>
                      <Mui_table.Cell align='right'>{numberFormat(info.BALANCE_YTD)}</Mui_table.Cell>
                      <Mui_table.Cell align='right'>{info.LAST_DATE_PUR}</Mui_table.Cell>
                  </Mui_table.Row>
                )
               )
              }
                        <Mui_table.Row>
                          <Mui_table.Cell > </Mui_table.Cell>
                          <Mui_table.Cell > </Mui_table.Cell>
                          <Mui_table.Cell > </Mui_table.Cell>
                          <Mui_table.Cell >Total</Mui_table.Cell>
                          <Mui_table.Cell align="right">  {numberFormat(brtzirostotal)}</Mui_table.Cell>
                          <Mui_table.Cell align="right">  {numberFormat(brbalancetotal)}</Mui_table.Cell>
                          <Mui_table.Cell left="right"/>
                          
                        </Mui_table.Row>
            </Mui_table.Body>
          </Mui_table.Table>
        </Modal.Body>
        <Modal.Footer className='border-dark'>
          <Button variant="secondary" onClick={() => { props.setShowBranchesModal(false); }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default BranchesModal

