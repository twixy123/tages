import type InputValue from '@/interfaces/input-fields/input-value'

export interface SelectValue {
  value: InputValue
  key: string
}

type SmartSelectValue = InputValue | SelectValue

export default SmartSelectValue