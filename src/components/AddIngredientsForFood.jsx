import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
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
            value:0,
            searchText: '',        }
    }
    
    handleChange = (e, i, value) =>{
        this.setState({
            value
        })
    }

    handleUpdateInput = (searchText) =>{
        this.setState({
            searchText: searchText,
        })
    }

    handleNewRequest = () => {
        this.setState({
            searchText: '',
        })
    }

    render(){
        return (
            <Paper zDepth={5} style={style}>
                <Toolbar style={style}>
                <ToolbarGroup>
                        <AutoComplete
                            hintText="Ingredientes"
                            searchText={this.state.searchText}
                            onUpdateInput={this.handleUpdateInput}
                            onNewRequest={this.handleNewRequest}
                            dataSource={nameIngredients}
                            filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                            openOnFocus={true}  
                            menuProps={menuProps}
                        />
                </ToolbarGroup>
                <ToolbarGroup>
                    <TextField
                        hintText="Cantidad"
                        type="number"
                    />
                </ToolbarGroup>
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={0} primaryText="Unidad" />
                        <MenuItem value={1} primaryText="Unidades" />
                        <MenuItem value={2} primaryText="Kgrs" />
                        <MenuItem value={3} primaryText="Grs" />
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <FloatingActionButton mini={true} disabled={false} style={style}>
                        <ContentAdd />
                    </FloatingActionButton>
                </ToolbarGroup> 
                </Toolbar>
            </Paper>
        )
    }
} 
