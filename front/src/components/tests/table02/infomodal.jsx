import React,{useState, useEffect, useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Mui_table} from '../../mui_table';
import {variables} from '../../../api/variables';


const InfoModal = (props) => {
  const [modalInfoData, setModalInfoData] = useState([]);

  const fetchModalInfo = () => {
    return fetch(variables.API_URL+
                 variables.CUSTOMERS.POST_FULL_SLM.URL+
                 variables.CUSTOMERS.POST_FULL_SLM.OPTION01+
                 props.dataModal+variables.AND+
                 variables.CUSTOMERS.POST_FULL_SLM.OPTION02+
                 variables.ANY,
                 variables.POST)
           .then((response) => {
                return response.json();
                })
           .then((response) => {
                setModalInfoData(response);
                })
           .catch(function(error) {
                console.log(error);
               });
        }



  useEffect(() => {
        fetchModalInfo();
  }, []);

  return (
    <React.Fragment>
      <Modal
        show={props.setShowInfoModal}
        onHide={props.setShowInfoModal}
        keyboard={true}
        size="xl"
        aria-labelledby="example-modal-sizes-title-xl"        
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
                  A/A
                </Mui_table.Cell>
                <Mui_table.Cell>
                  BRANCH
                </Mui_table.Cell>
                <Mui_table.Cell>
                  DISCOUNT
                </Mui_table.Cell>
                <Mui_table.Cell>
                  ADDRESS
                </Mui_table.Cell>
                <Mui_table.Cell>
                  CITY
                </Mui_table.Cell>
                <Mui_table.Cell>
                  REGION/PREFECTURE
                </Mui_table.Cell>
                <Mui_table.Cell>
                  POSTAL CODE
                </Mui_table.Cell>
                <Mui_table.Cell>
                  AFM
                </Mui_table.Cell>
                <Mui_table.Cell>
                  PHONE
                </Mui_table.Cell>
                <Mui_table.Cell>
                  EMAIL
                </Mui_table.Cell>
                <Mui_table.Cell>
                  PAYMENT
                </Mui_table.Cell>
                <Mui_table.Cell>
                  SALESMAN
                </Mui_table.Cell>
              </Mui_table.Row>
            </Mui_table.Head>
            <Mui_table.Body>
              {modalInfoData.map((info, index) => (
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
                      <Mui_table.Cell>{info.TRBRNAME}</Mui_table.Cell>
                      <Mui_table.Cell>{info.HEDISCOUNT}</Mui_table.Cell>
                      <Mui_table.Cell>{info.ADDRESS} {info.number}</Mui_table.Cell>
                      <Mui_table.Cell>{info.TRBRCITY}</Mui_table.Cell>
                      <Mui_table.Cell>{info.TRBRREGION} {info.TRBRPREFECTURE}</Mui_table.Cell>
                      <Mui_table.Cell>{info.TRBRPOSTALCODE}</Mui_table.Cell>
                      <Mui_table.Cell>{info.AFM}</Mui_table.Cell>
                      <Mui_table.Cell>{info.TRBRPHONE1} {info.TRBRPHONE2} {info.TRBRPHONE3}</Mui_table.Cell>
                      <Mui_table.Cell>{info.TRBREMAIL}</Mui_table.Cell>
                      <Mui_table.Cell>{info.PAYMENTMETHODNAME}</Mui_table.Cell>
                      <Mui_table.Cell>{info.SALESMANCODE}</Mui_table.Cell>
                  </Mui_table.Row>
                )
               )
              }
            </Mui_table.Body>
          </Mui_table.Table>
        </Modal.Body>
        <Modal.Footer className='border-dark'>
          <Button variant="secondary" onClick={() => { props.setShowInfoModal(false); }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default InfoModal

