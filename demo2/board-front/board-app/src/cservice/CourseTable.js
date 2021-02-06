import { useTable, useRowSelect } from "react-table";
import React from 'react';
import styled from "styled-components";

const Table = styled.table`
    position: relative;
    border-spacing: 10px;
    border: 1 px solid white;
    text-align:center;
   `;

const Thead = styled.thead`
    font-size: 25px;
    color:white;
    background-color: #00462A;
`;

const Tbody = styled.tbody`
    font-size:20px;
`;

const Th = styled.th`
    position:relative;
    width: 10%;
`;

export const Reacttable = () => {
    const columns = React.useMemo(
        () => [
        {
          Header: "학수번호",
          accessor: "id",
        },
        {
          Header: "영역",
          accessor: "field",
        },
        {
          Header: "과목명",
          accessor: "name",
        },
        {
          Header: "학점",
          accessor: "credit",
        },
      ]
      );
      const data = React.useMemo(
        () => [
        {
            id: "29304",
          field: '이화진선미',
          name:'우리말과김서영',
          credit:'3'
        },
        {
            id: "39492",
          field: '전공기초',
          name:'C프로그래밍및실습',
          credit:'3'
        },
        {
            id: "10238",
         field: '전공선택',
          name:'김서영김서영',
          credit:'4.5'
        },
        {
            id: "23939",
          field: '전공선택',
          name:'99가지의레시피',
          credit:'3'
        },
    ]
      );
      
const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
} = useTable({
  columns,
  data,
});

      return (
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
                ))}
              </tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
          </Tbody>
        </Table>
      );

}
// export default React.memo({Thead,Tbody});