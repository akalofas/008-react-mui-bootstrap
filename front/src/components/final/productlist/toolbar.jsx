import React, { Fragment } from 'react'
import {Mui_table} from '../../mui_table';

export default function Toolbar(props) {
    const handleChangeDense = (event) => {
        props.stateDense(event.target.checked)
    }
    const handleChangeActive = (event) => {
        props.stateActiveProduct(event.target.checked);
    }

  return (
    <Fragment>
        <Mui_table.Toolbar 
            sx={{ pl: { sm: 2 }, 
                  pr: { xs: 1, sm: 1 },
                  bgcolor: 'grey',
               }}
        >
            <Mui_table.Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                {props.title}
            </Mui_table.Typography>
            <Mui_table.FormLabel
                control={<Mui_table.Switch checked={props.activeProduct} onChange={handleChangeActive} />}
               label= {props.activeProduct ? 'Active Products' : 'Deactive Products'} 
            /> 
            <Mui_table.FormLabel
                control={<Mui_table.Switch checked={props.dense} onChange={handleChangeDense} />}
                label="Dense padding"
            /> 
        </Mui_table.Toolbar>
    </Fragment>
  )
}
