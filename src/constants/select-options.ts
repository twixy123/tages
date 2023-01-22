import type SelecOption from '@/interfaces/input-fields/select/select-option'

export const priceOptions: SelecOption[] = [
  {
    text: 'Цена по возрастанию',
    value: {
      value: 'true',
      key: 'current_price',
    },
    key: 'current_price',
  },
  {
    text: 'Цена по убыванию',
    value: {
      value: 'false',
      key: 'current_price',
    },
    key: 'current_price',
  },
]

export const nameOptions: SelecOption[] = [
  {
    text: 'А-Я',
    value: {
      value: 'true',
      key: 'name',
    },
    key: 'name',
  },
  {
    text: 'Я-А',
    value: {
      value: 'false',
      key: 'name',
    },
    key: 'name',
  },
]