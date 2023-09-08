import WorkItem from '../types/WorkItem';

export const WorkItemActions = {
  CREATE: 'CREATE',
  DELETE: 'DELETE',
  ARCHIVE: 'ARCHIVE',
  UPDATE: 'UPDATE',
};

type WorkItemReducerAction = {
  type: string,
  payload: WorkItem
};

/**
 *
 * @param workItems
 * @param action
 */
export function workItemReducer(workItems: WorkItem[], action: WorkItemReducerAction): WorkItem[] {
  switch (action.type) {
    case WorkItemActions.CREATE:
      return [...workItems, action.payload];
      break;
    default:
      return workItems;
      break;
  }
}
