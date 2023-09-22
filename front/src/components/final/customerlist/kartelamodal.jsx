import React,{useState, useEffect, useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Mui_table} from '../../mui_table';
import {variables} from '../../../api/variables';
import numberFormat from '../../numberformat'
import '../../../styles/test.css'


const KartelaModal = (props) => {
  const [modalKartelaData, setModalKartelaData] = useState([]);

  const fetchModalKartela = () => {
    return fetch(variables.API_URL+
                 variables.CUSTOMERS.POST_KARTELA.URL+
                 variables.CUSTOMERS.POST_KARTELA.OPTION01+
                 props.dataModal,
                 variables.POST)
           .then((response) => {
                return response.json();
                })
           .then((response) => {
                setModalKartelaData(response);
                })
           .catch(function(error) {
                console.log(error);
               });
        }

  useEffect(() => {
        fetchModalKartela();
  }, []);

  return (
    <React.Fragment>
      <Modal
        show={props.setShowKartelaModal}
        onHide={props.setShowKartelaModal}
        size="xl"
        aria-labelledby="example-modal-sizes-title-xl"        
        keyboard={true}
        scrollable={true}
        centered
        className='custom_css_modal'
      >
        <Modal.Header className='border-dark border-bottom' closeButton>
          <Modal.Title >{props.dataModal} {props.dataModalName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Mui_table.Table>
            <Mui_table.Head>
              <Mui_table.Row>
                <Mui_table.Cell>
                  A/A
                </Mui_table.Cell>
                <Mui_table.Cell>
                  DATE
                </Mui_table.Cell>
                <Mui_table.Cell>
                  TYPE
                </Mui_table.Cell>
                <Mui_table.Cell>
                  SERIES
                </Mui_table.Cell>
                <Mui_table.Cell>
                  INVOICE No
                </Mui_table.Cell>
                <Mui_table.Cell>
                  NAME
                </Mui_table.Cell>
                <Mui_table.Cell>
                  STATUS
                </Mui_table.Cell>
                <Mui_table.Cell>
                  DEBIT
                </Mui_table.Cell>
                <Mui_table.Cell>
                  CREDIT
                </Mui_table.Cell>
                <Mui_table.Cell>
                  P. DEBIT
                </Mui_table.Cell>
                <Mui_table.Cell>
                  P. CREDIT
                </Mui_table.Cell>
                <Mui_table.Cell>
                  YPOLOIPO
                </Mui_table.Cell>
              </Mui_table.Row>
            </Mui_table.Head>
            <Mui_table.Body>
              {modalKartelaData.map((info, index) => (
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
                        <Mui_table.Cell align='left' >{info.TRANSDATE}</Mui_table.Cell>
                        <Mui_table.Cell align='left' >{info.DOCTYPECODE}</Mui_table.Cell>
                        <Mui_table.Cell align='left' >{info.DOCSERIESCODE}</Mui_table.Cell>
                        <Mui_table.Cell align='left' >{info.DOCENTRIESCODE}</Mui_table.Cell>
                        <Mui_table.Cell align='left' >{info.DOCSERIESNAME}</Mui_table.Cell>
                        <Mui_table.Cell align='left' >{info.DOCENTRIESSTATUS}</Mui_table.Cell>
                        <Mui_table.Cell align='right' >{numberFormat(info.TDEBIT)}</Mui_table.Cell>
                        <Mui_table.Cell align='right' >{numberFormat(info.TCREDIT)}</Mui_table.Cell>
                        <Mui_table.Cell align='right' >{numberFormat(info.CUMLTDEBIT)}</Mui_table.Cell>
                        <Mui_table.Cell align='right' >{numberFormat(info.CUMLTCREDIT)}</Mui_table.Cell>
                        <Mui_table.Cell align='right' >{numberFormat(info.YPOLOIPO)}</Mui_table.Cell>
                      </Mui_table.Row >
                    )
                  )
              }
            </Mui_table.Body>
          </Mui_table.Table>
        </Modal.Body>
        <Modal.Footer className='border-dark'>
          <Button variant="secondary" onClick={() => { props.setShowKartelaModal(false); }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default KartelaModal

