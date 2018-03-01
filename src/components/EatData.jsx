import React, {Component} from 'react'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableBody, TableRowColumn} from 'material-ui/Table'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconButton from 'material-ui/IconButton'
import IconDelete from 'material-ui/svg-icons/action/delete'
import AddIcon from 'material-ui/svg-icons/content/add-box'
import EditeIcon from 'material-ui/svg-icons/content/create'
import comidas from '../data/comidas'


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
    
    select = (index) => this.setState({selectedIndex: index});

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
                        <TableHeaderColumn> 
                            <BottomNavigation>
                                <BottomNavigationItem
                                    label="Agregar"
                                    icon={<AddIcon />}
                                    onClick={() => this.select(0)}
                                />
                            </BottomNavigation>
                        </ TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={this.state.showCheckboxes}
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                    stripedRows={this.state.stripedRows}
                >
                    {comidas.map((eat, index) => (
                        <TableRow 
                            key={index}
                            selectable={this.state.selectable}
                        >
                            <TableRowColumn style={{textAlign: 'center'}}>{eat.title}</TableRowColumn>
                            <TableRowColumn style={{textAlign: 'center'}}>{eat.price}</TableRowColumn>
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