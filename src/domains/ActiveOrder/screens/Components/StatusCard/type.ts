export type IListItemProps = {
  StepName: IStepName;
  status: IStatus;
  disabled?: boolean;
};

export type IStepName = 'pending' | 'in-process' | 'delivery' | 'delivered';
export type IStatus = 'Done' | 'Not-Done';
