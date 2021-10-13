import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardBasic } from '../../views/main/cardCreateActions/CardBasic';

export default {
  title: 'CardBasic',
  component: CardBasic,
} as ComponentMeta<typeof CardBasic>;

const Template: ComponentStory<typeof CardBasic> = (args) => <CardBasic {...args} />;

export const CardCampaña = Template.bind({});
CardCampaña.args = {
  text1: 'Atajo para crear campaña',
  title: 'Crear campaña',
  description: 'Desde esta opcion podras crear nuevas campañas para tu negocio',
  buttonName: 'Crear campaña'
};

export const CardContacto = Template.bind({});
CardContacto.args = {
  text1: 'Atajo para crear contacto',
  title: 'Crear contacto',
  description: 'Desde esta opcion podra crear contactos nuevos para tus campañas',
  buttonName: 'Crear contacto'
};