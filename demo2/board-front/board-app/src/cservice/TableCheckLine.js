/*
TableCheckLine
*/

import React from "react";
import {Link, Route} from "react-router-dom";
import styled from "styled-components";

const TableInput = styled.input`
    width: 40px;
    height: 40px; 
    margin-right:0px;
    float: left;
`;

const TableCheckLine = () => {
    return(
        <div>
            <TableInput type="checkbox" name = "time_out[]" value="17"/>
            <TableInput type="checkbox" name = "time_out[]" value="17"/>
            <TableInput type="checkbox" name = "time_out[]" value="17"/>
            <TableInput type="checkbox" name = "time_out[]" value="17"/>
            <TableInput type="checkbox" name = "time_out[]" value="17"/>
        </div>
    );
};

export default TableCheckLine;