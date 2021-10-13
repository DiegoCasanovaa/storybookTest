import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableGrid } from '../../views/main/cardCreateActions/Table';
import { columns, dataSource } from '../../views/main/cardCreateActions/table.config';

export default {
  title: 'TableGrid',
  component: TableGrid,
} as ComponentMeta<typeof TableGrid>;

const Template: ComponentStory<typeof TableGrid> = () => <TableGrid columns={columns} dataSource={dataSource} />;

export const Reportes = Template.bind({});