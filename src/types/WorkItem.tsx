type WorkItem = {
  id: number,
  name: string,
  type: number,
  description: string,
  targetTimeStamp: number,
  state: number,
  removable?: boolean,
  shiftable?: boolean,
  startable?: boolean,
}

export default WorkItem;
