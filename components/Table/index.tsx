import { Table, Tbody, Tr, Th, Td } from './styled';

interface IDataTable {
  headings?: string[];
  data: object[];
}

const adapt = (data: object[]) => data.map(item => Object.values(item));

const DataTable = ({ headings, data }: IDataTable) => (
  <Table>
    <Tbody>
      {headings && (
        <Tr $isHeadingsRow>
          {headings.map(heading => (
            <Th key={heading}>{heading}</Th>
          ))}
        </Tr>
      )}
      {adapt(data).map((row, indexRow) => (
        <Tr key={indexRow} headings={headings}>
          {row.map((cell, indexCell) => (
            <Td key={indexCell}>{cell}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default DataTable;
