/// <reference path="crud.d.ts" />
import * as CRUD from './crud';
import {RowElement, RowID} from './interface';

const row: RowElement = {
	firstName: 'Guillaume',
	lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);

