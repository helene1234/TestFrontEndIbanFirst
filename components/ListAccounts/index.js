import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import {euroConvert, totalAmount, compare} from '../../utils/accountOperation';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export function ListAccounts() {
  const [data, setData]=useState([]);
  const [rate, setRate]=useState([]);
  const [page, setPage]=useState(0);
  const [currency, setCurrency]=useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeCurrency= (event) => {
    setCurrency(event.target.value);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    paper: {
      width: '75%',
      marginBottom: theme.spacing(2),
      marginLeft:theme.spacing(15),
      marginRight:theme.spacing(10),
      marginTop:theme.spacing(5),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#00BFFF",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const classes = useStyles();
  
  const getData = async () => {
      console.log('Our data is fetched ');
      fetch('https://cors-anywhere.herokuapp.com/platform.ibanfirst.com/js/dataTestDevFront.json')
      .then((response) => response.json())
      .then((findresponse)=>{
        setData(compare(findresponse.accounts))
      })
  };

  useEffect(() => {
    getData();
    setRate(data.rates);
  }, []);

  return (<div>
  <Paper elevation={0} className={classes.paper}>
    <h4>Listes des Comptes:</h4>
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
        <meta http-equiv="refresh" content="15" />
          <TableRow >
            <StyledTableCell>Titulaire</StyledTableCell>
            <StyledTableCell>Code</StyledTableCell>
            <StyledTableCell>Bic</StyledTableCell>
            <StyledTableCell>Amount</StyledTableCell>
          </TableRow>
        </TableHead>
          <TableBody>
          {data.map(account =><StyledTableRow>
              <StyledTableCell>{account.holder.name}</StyledTableCell>
              <StyledTableCell>{account.accountNumber}</StyledTableCell>
              <StyledTableCell>{account.holderBank.bic}</StyledTableCell>
              <StyledTableCell>{euroConvert(account.amount, account.currency)} </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <FormControl className={classes.formControl}>
        <InputLabel>Currency</InputLabel>
        <Select
           id="currencyId"
           value={currency}
           onChange={handleChangeCurrency}
        >
          <MenuItem value={'EUR'}>EUR</MenuItem>
          <MenuItem value={'USD'}>USD</MenuItem>
          <MenuItem value={'GBP'}>GBP</MenuItem>
        </Select>
      </FormControl>
      <Table>
        <TableRow colSpan={8}></TableRow>
        <TableRow>
          <TableCell align="right"><h4>Solde consolidé: </h4></TableCell>
          <TableCell align="left">{totalAmount(data)} EUR</TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  </Paper>
  </div>)
}
export default ListAccounts;