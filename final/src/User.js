import React, { Component } from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Avatar from '@mui/material/Avatar';
import LinkIcon from '@mui/icons-material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

class User extends Component{
    constructor(props){
        super(props);
        this.state={
            name: null,
            login:null,
            location:null,
            id:null,
            url:null,
            public_repos:null,
            updated_at:null
        }
    }
    
    componentDidMount(){
        fetch("https://api.github.com/users/b0929060",{method:"GET"})
        .then(res =>res.json())
        .then(data =>{
            this.setState({name:data.name})
            this.setState({login:data.login})
            this.setState({location:data.location})
            this.setState({id:data.id})
            this.setState({url:data.url})
            this.setState({public_repos:data.public_repos})
            this.setState({updated_at:data.updated_at})
        })
        .catch(e =>{
            console.log("error")
        })
    }

    render(){
        return(
            <div style={{textAlign:'unset', display:'flex'}} >
                <br/>
                <Avatar
                    src="https://avatars.githubusercontent.com/u/91367399?v=4"
                    alt="Remy Sharp"
                    sx={{ width: 100, height: 100 }}
                    style={{display:'flex'}}
                /> <Stack spacing={2} direction="row">
                <h1 style={{display:'flex'}}>{this.state.name}</h1>
                <p>&emsp;<b>{this.state.login}</b>&emsp;&emsp;<PersonOutlineIcon />
                id: {this.state.id}&emsp;<LinkIcon />{this.state.url}&emsp;
                <Button variant="outlined">登出</Button></p>
                </Stack>
            </div>
        )
    }
}

export default User