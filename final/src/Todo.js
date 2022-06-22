import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

class Todo extends React.Component { 
    constructor(props) { 
      super(props); 
      this.state = { 
        value: '', 
        itemList: [],
        itemDone: [], 
      }; 
      this.handleChange = this.handleChange.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this); 
    } 
    handleChange(event) { 
      this.setState({value: event.target.value}); 
    } 
    handleSubmit(event) { 
      this.state.itemList.push(this.state.value);
      this.state.itemDone.push(false); 
      this.setState({value: '', itemList: this.state.itemList,itemDone:this.state.itemDone}); 
      event.preventDefault(); 
    }
    handleDelete(index){
        const temp=this.state.itemList.filter((item,i)=>{
            return index!==i
        })
        const temp2=this.state.itemDone.filter((item,i)=>{
            return index!==i
        })
        this.setState({value:'',itemList:temp,itemDone:temp2});
    }
    handleDone(index){
        const temp=this.state.itemDone;
        if(temp[index]===true){
            temp[index]=false;
        }else{
            temp[index]=true;
        }
        this.setState({itemDone:temp});
    }
    render() { 
      return ( 
        <div className="todolist_wrapper"> 
        <form onSubmit={this.handleSubmit} className="todolist_addform"> 
          <h1 className="todolist_title">Timeline</h1><br></br>
          <input type="text" value={this.state.value} onChange={this.handleChange} className="todolist_input"placeholder="want to say something?"/> 
          <Button variant="contained"endIcon={<SendIcon />} type="submit" className="todolist_addbtn"/>
        </form> 
        <div className="todolist_list-wrapper"> 
            {this.state.itemList.map((item, index) => 
            <div key={`item_${index}`}>
                {this.state.itemDone[index] ? <label for={index} style={{textDecoration:'line-through'}} className="todolist_itemlist">{item}</label>: <label for={index} className="todolist_itemlist">{item}</label>}
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>this.handleDelete(index)} className="todolist_rmbtn"></Button>
            </div>
          ) } 
        </div> 
        </div> 
      ); 
    } 
  } 

export default Todo;