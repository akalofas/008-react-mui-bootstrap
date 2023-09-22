import React,{useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Mui_table} from '../../mui_table';
import {variables} from '../../../api/variables';


const ProductModal = (props) => {
  const [modalData, setModalData] = useState([]);

  const fetchModalInfo = () => {
    return fetch(variables.API_URL+
                 variables.ITEMS.POST_CS_DETAIL.URL+
                 variables.ITEMS.POST_CS_DETAIL.OPTION01+
                 props.dataModal,
                 variables.POST)
           .then((response) => {
                return response.json();
                })
           .then((response) => {
                setModalData(response);
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
        show={props.setShowModal}
        onHide={props.setShowModal}
        keyboard={true}
      >
        <Modal.Header className='border-dark border-bottom' closeButton>
          <Modal.Title >{props.dataModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Mui_table.Table>
            <Mui_table.Head>
              <Mui_table.Row>
                <Mui_table.Cell>
                  Color
                </Mui_table.Cell>
                <Mui_table.Cell>
                  Size
                </Mui_table.Cell>
                <Mui_table.Cell>
                  Price
                </Mui_table.Cell>
                <Mui_table.Cell>
                  Season
                </Mui_table.Cell>
                <Mui_table.Cell>
                  Salable
                </Mui_table.Cell>
              </Mui_table.Row>
            </Mui_table.Head>
            <Mui_table.Body>
              {modalData.map((info, index) => (
                  <Mui_table.Row >
                      <Mui_table.Cell
                          key={info.ROWID} 
                          align='center'                       
                          component="th"
                          name={index}
                          scope="row"
                          padding='none'
                      >{info.ATTR01}
                      </Mui_table.Cell>
                      <Mui_table.Cell>{info.ATTR02}</Mui_table.Cell>
                      <Mui_table.Cell>{info.price}</Mui_table.Cell>
                      <Mui_table.Cell>{info.HESEASONNAME}</Mui_table.Cell>
                      <Mui_table.Cell>{info.FORSALE}</Mui_table.Cell>
                  </Mui_table.Row>
                )
               )
              }
            </Mui_table.Body>
          </Mui_table.Table>
        </Modal.Body>
        <Modal.Footer className='border-dark'>
          <Button variant="secondary" onClick={() => { props.setShowModal(false); }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default ProductModal

