import { Table, Tr, Td } from './styled';

interface IDataTable {
  headings?: string[];
  data: object[];
}

const adapt = (data: object[]) => data.map(item => Object.values(item));

const DataTable = ({ headings, data }: IDataTable) => (
  <Table>
    <tbody>
      <Tr>{headings?.map(heading => <th key={heading}>{heading}</th>)}</Tr>
      {adapt(data).map((row, indexRow) => (
        <Tr key={indexRow}>
          {row.map((cell, indexCell) => (
            <Td key={indexCell}>{cell}</Td>
          ))}
        </Tr>
      ))}
    </tbody>
  </Table>
);

export default DataTable;
