import React, {Component} from 'react'
import { Link } from 'react-router';
import {Table, TableRow, TableHeaderColumn, TableHeader, TableBody, TableRowColumn} from 'material-ui/Table'
import AddIcon from 'material-ui/svg-icons/content/add-box'
import EditeIcon from 'material-ui/svg-icons/content/create'
import IconButton from 'material-ui/IconButton'
import IconDelete from 'material-ui/svg-icons/action/delete'
import bebidas from '../data/bebidas'

export default class EatData extends Component {

    state = {
        stripedRows: false,
        showRowHover: false,
        selectable: false,
        selected: false,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: false,
        showCheckboxes: false,
        selectedIndex: 0,
        height: '300px',
    }

    render(){
        return(
            <Table
                height={this.state.height}
            >
                <TableHeader
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}
                    enableSelectAll={this.state.enableSelectAll}
                >
                    <TableRow>
                        <TableHeaderColumn style={{textAlign: 'center'}}>Nombre</ TableHeaderColumn>
                        <TableHeaderColumn style={{textAlign: 'center'}}>Precio</ TableHeaderColumn>
                        <TableHeaderColumn style={{textAlign: 'center'}}> 
                            <Link to = '/addDrink'>
                                <IconButton 
                                    tooltip="Agregar"
                                >
                                    <AddIcon />
                                </IconButton>
                            </Link>
                        </ TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={this.state.showCheckboxes}
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                    stripedRows={this.state.stripedRows}
                >
                    {bebidas.map((drink, index) => (
                        <TableRow 
                            key={index}
                            selectable={this.state.selectable}
                        >
                            <TableRowColumn style={{textAlign: 'center'}}>{drink.title}</TableRowColumn>
                            <TableRowColumn style={{textAlign: 'center'}}>{drink.price}</TableRowColumn>
                            <TableHeaderColumn style={{textAlign: 'center'}}> 
                                <div>
                                    <IconButton 
                                        tooltip="Editar"
                                    >
                                        <EditeIcon />
                                    </IconButton>
                                    <IconButton 
                                        tooltip="Eliminar"
                                    >
                                        <IconDelete />
                                    </IconButton>
                                </div>
                            </ TableHeaderColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </ Table>
        )
    }
}