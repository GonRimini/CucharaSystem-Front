import React, {Component} from 'react'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table'
import tableData from '../data/inventoryData'


  const style = {
      margin: 12,
  }

  const nameIngredients = tableData.map((name) => {
      return name.name
  })

  const menuProps = {
    desktop: true,
    disableAutoFocus: true,
  };

export default class AddIngredientsForFood extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            ingredient: '',
            quantity: '' ,
            ingredientsFood : [],
            showCheckboxes: false,
            deselectOnClickaway: false,
            showRowHover: false,
            stripedRows: false,
            height: '100px',        
        }
    }
    
    handleChange = (e, i, value) =>{
        this.setState({
            value
        })
    }

    handleUpdateInput = (searchText) => {
        this.setState({
          ingredient: searchText,
        });
      };

    onChange = (e) => {
       this.setState({
           quantity : e.target.value,
       })
   }
    
    onSubmit = (e) => {
        e.preventDefault()
        this.setState({
            ingredient : '',
            quantity : '',
            value : 0,
            ingredientsFood: [this.state.ingredient, this.state.quantity, this.state.value]
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <Toolbar style={style}>
                        <ToolbarGroup>
                                <AutoComplete
                                    hintText="Ingredientes"
                                    onChange = {this.onChange}
                                    searchText={this.state.ingredient}
                                    onUpdateInput={this.handleUpdateInput}
                                    dataSource={nameIngredients}
                                    filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                                    openOnFocus={true}  
                                    menuProps={menuProps}
                                />
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <TextField
                                value = {this.state.quantity}
                                onChange={this.onChange}
                                hintText="Cantidad"
                                type="number"
                            />
                        </ToolbarGroup>
                        <ToolbarGroup firstChild={true}>
                            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                                <MenuItem value="" primaryText="Unidad" />
                                <MenuItem value="Unidades" primaryText="Unidades" />
                                <MenuItem value="Kgrs" primaryText="Kgrs" />
                                <MenuItem value="Grs" primaryText="Grs" />
                            </DropDownMenu>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <FloatingActionButton 
                                mini={true} 
                                disabled={false} 
                                style={style}
                                type="submit"
                            >
                                <ContentAdd />
                            </FloatingActionButton>
                        </ToolbarGroup> 
                    </Toolbar>
                </form>
                <div style={{margin:'20px'}}>
                    <Table
                        height={this.state.height}
                    >
                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}
                        >
                            {
                                this.state.ingredientsFood.map((data, index)=>(
                                    <TableRow
                                        key={index}
                                    >
                                        <TableRowColumn>{data}</TableRowColumn>
                                    </TableRow>
                                ))
                            }
                        </TableBody>                        
                    </Table>
                    
                    
                    {/*
                    <List>
                            {
                                console.log(this.state.ingredientsFood)
                            }{
                                this.state.ingredientsFood.map((data, index) => (
                                    <ListItem/>
                                ))  
                            }
                             
                    </List>
                    */}
                </div>
           
           </div>
        )
    }
} 
