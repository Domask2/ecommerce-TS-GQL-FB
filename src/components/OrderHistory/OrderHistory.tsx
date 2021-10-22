import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

interface IProps {
  orders: [];
}

const columns = [
  {
    id: 'orderCreateDate',
    lable: 'Order Date',
  },
  {
    id: 'documentID',
    lable: 'Order ID',
  },
  {
    id: 'orderTotal',
    lable: 'Amount',
  },
];

const styles = {
  fontSize: '16px',
  cursor: 'pointer',
  width: '10%',
};

const formatText = (columnName: string, columnValue: string) => {
  switch (columnName) {
    case 'orderTotal':
      return `$${columnValue}`;
    case 'orderCreateDate':
      return moment(columnValue).format('DD/MM/YYYY');
    default:
      return columnValue;
  }
};

const OrderHistory: React.FC<IProps> = ({ orders }) => {
  const history = useHistory();
  return (
    <TableContainer style={{ width: '100%' }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, pos) => {
              const { lable } = column;
              return (
                <TableCell key={pos} style={styles}>
                  {lable}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {Array.isArray(orders) &&
            orders.length > 0 &&
            orders.map((row, pos) => {
              const { documentID } = row;

              return (
                <TableRow key={pos} onClick={() => history.push(`/orders/${documentID}`)}>
                  {columns.map((column, pos) => {
                    const columnName = column.id;
                    const columnValue = row[columnName];
                    const formattedText = formatText(columnName, columnValue);

                    return (
                      <TableCell key={pos} style={styles}>
                        {formattedText}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderHistory;
