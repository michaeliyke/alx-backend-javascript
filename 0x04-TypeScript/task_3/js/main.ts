/// <reference path="crud.d.ts" />
import {RowElement, RowID} from './interface';
import * as CRUD from './crud';
import { insertRow } from './crud';

const row: RowElement = {
	firstName: 'Guillaume',
	lastName: 'Salva',
};

const newRowID: RowID = insertRow(row);
